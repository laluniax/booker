import React, { useEffect, useState } from 'react';
import { supabase } from '../../api/supabase.api';

type MessageType = {
  id: number;
  content: string;
  author_id: string;
  chat_id: number;
};

type UserType = {
  id: string; // UUID 타입을 가정
  email: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loggedInUserId, setLoggedInUserId] = useState<string | null>(null);


  useEffect(() => {
    // 로그인한 사용자 정보 가져오기
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setLoggedInUserId(data.user.id);
      }
    });

    // 모든 사용자 가져오기
    const fetchUsers = async () => {
      let { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setUsers(data as UserType[]);
      }
    };
    // 선택된 사용자의 메시지 가져오기
    const fetchMessages = async () => {
      if (selectedUserId) {
        let { data, error } = await supabase.from('messages').select('*').eq('chat_id', selectedUserId);
        if (error) {
          console.error('Error fetching messages:', error);
        } else {
          setMessages(data ?? []);
        }
      }
    };

    fetchUsers();
    fetchMessages();

    // 메시지 변경사항을 감지할 채널 구독
    const messagesSubscription = supabase
      .channel('custom-all-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, async (payload: any) => {
        console.log('Changes received!', payload);
        fetchMessages(); // 데이터베이스에 변화가 있을 때 메시지 다시 가져오기
        setSelectedUserId(payload.new.chat_id);//메시지 창 열기
      })
      .subscribe();

    // 채팅방 변경사항을 감지할 채널 구독
    const chatChannel = supabase
      .channel('chat-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
        console.log('New chat!', payload);
        // 새 채팅방이 생성되었을 때 필요한 동작을 수행합니다.
      })
      .subscribe();

    // Clean up function
    return () => {
      messagesSubscription?.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, [selectedUserId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 메시지 전송 핸들러
  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // Supabase로 메시지 보내기
      if (user && selectedUserId) {
        supabase
          .from('messages')
          .insert([{ content: inputValue, author_id: user.id, chat_id: selectedUserId }])
          .then(({ error }) => {
            if (error) {
              console.error('메시지 삽입 중 오류가 발생했습니다:', error);
            }
          });
      }
      setInputValue('');
    }
  };

// 문자열 해시 함수
function hashCode(str:any) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var character = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

  // DM 클릭 핸들러
  const handleDmClick = async (userId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user && user.email) {
      // userEmail이 존재하는지 확인합니다.

      const otherUser = users.find((u) => u.email === userId); // userId를 사용하여 다른 사용자를 찾습니다.
      // const { data: otherUserData } = await supabase
      //   .from('users')
      //   .select('id')
      //   .eq('email', otherUser?.email)
      //   .single();

      if (otherUser) {
        // 사용자 이메일을 해시하여 숫자 ID 생성
const userHash = hashCode(user.email);
const otherUserHash = hashCode(otherUser.email);

// 두 해시 값을 합쳐서 채팅방 ID 생성
const chatId = userHash + otherUserHash;
        // const chatid = (await parseInt(user.email )) + parseInt(otherUser?.email);
        console.log('chat_id생성',chatId)
        setSelectedUserId(chatId);
        createOrGetChatWithUser(user.email, otherUser.email);
      }
    }
  };

  //챗방 만들기 //여기에 기존에 있는 챗방인지 아닌지 파악 하고 있으면 기존 거 쓰고 없으면 새로 //구현 되면 상대방이 챗을 받으면 챗창 오픈 되도록
  async function createOrGetChatWithUser(userEmail: string, otherUserEmail: string) {
    // 이메일을 기반으로 프로필에서 두 사용자의 ID 가져오기
    const { data: userData } = await supabase.from('users').select('id').eq('email', userEmail).single();
    const { data: otherUserData } = await supabase.from('users').select('id').eq('email', otherUserEmail).single();

    if (userData && otherUserData) {
      // 각 사용자가 속한 챗방의 ID 목록 얻기
      const { data: userChats, error: userChatsError } = await supabase
        .from('chats_users')
        .select('chat_id')
        .eq('user_id', userData.id);
    
      const { data: otherUserChats, error: otherUserChatsError } = await supabase
        .from('chats_users')
        .select('chat_id')
        .eq('user_id', otherUserData.id);
    
      if (userChatsError || otherUserChatsError) {
        console.error('챗방 목록을 가져오는 동안 오류 발생', userChatsError || otherUserChatsError);
        return;
      }
    
      // 두 목록의 교집합 찾기
      const commonChats = userChats.filter(uc => otherUserChats.some(ouc => ouc.chat_id === uc.chat_id));
    
      if (commonChats.length > 0) {
        // 기존 챗방이 발견되었으므로 selectedUserId를 발견된 chat_id로 설정
        setSelectedUserId(commonChats[0].chat_id);
        console.log('기존챗방이세요');
      } else {
        // 기존 챗방이 없으므로 새 챗방 생성
        const { data: newChatData, error: newChatError } = await supabase
          .from('chats')
          .insert({ id: selectedUserId })
          .single(); // 챗방을 생성하고 바로 그 데이터를 반환하는 것을 가정

        if (newChatError) {
          console.error('새 챗방 생성 중 오류 발생:', newChatError);
          return;
        }

        // 새 챗방에 두 사용자를 chats_users에 추가
        // if (newChatData) {
          const { error } = await supabase.from('chats_users').insert([
            { chat_id: selectedUserId, user_id: userData.id },
            { chat_id: selectedUserId, user_id: otherUserData.id },
          ]);

          if (error) {
            console.error('새 챗방에 사용자 추가 중 오류 발생:', error);
            return;
          }

          // selectedUserId를 새 챗방의 id로 설정
          setSelectedUserId(selectedUserId);
        // }
      }
    }
  }

  // 로그인한 사용자를 제외한 사용자 목록 렌더링
  const renderUserList = () => {
    return users
      .filter((user) => user.id !== loggedInUserId)
      .map((user) => (
        <div key={user.id}>
          <li>{user.email}</li>
          <button onClick={() => handleDmClick(user.email)}>DM</button>
        </div>
      ));
  };
  // 선택한 사용자와의 메시지 목록 렌더링
  const renderMessages = () => {
    return messages
      .filter((message) => message.chat_id === selectedUserId)
      .map((message) => <div key={message.id}>{message.content}</div>);
  };

  return (
    <>
      <div>{renderUserList()}</div>
      {selectedUserId && (
        <div>
          <div>{renderMessages()}</div>
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;