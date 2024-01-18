
import { useRef, useState,useEffect } from 'react';
import { supabase } from '../../api/supabase.api';
import Logo from '../../assets/Logo.png';
import prev from '../../assets/prev.png';
import { useAuth } from '../../contexts/auth.context';

import { useRecoilState, useSetRecoilState } from 'recoil';


import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatStyle';
import { ChatId, chatFunctionsState, otherPerson, person, sendMessages } from '../../atom/product.atom';
import { useCreateOrGetChat, useSendMessage } from '../../api/chatApi';
import { supabase } from '../../api/supabase.api';
import { useAuth } from '../../contexts/auth.context';

export type MessageType = {
  id: number;
  content: string;
  author_id: string;
  chat_id: number;
};
export type UserType = {
  id: string;
  email: string;
  lastMessage?: string; // lastMessage 속성 추가 (옵셔널로 처리)
  nickname: string;
};

export type ChatData = {
  id: string;
};

const Chat = () => {
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');

  const messageEndRef = useRef<HTMLDivElement | null>(null);


  const [users, setUsers] = useState<UserType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  //흐름  첫랜더링시 useEffect 실행 : 로그인 아이디+모든 사용자/메시지 => DmClickhandler (상대방정보가져옴)
  //=> 이메일 챗방만들기함수 넘겨줌 => createOrGetChatWithUser 이메일 기반 데이터 조회 및 비교 해서 기존 챗방 있는지 확인
  //=> 있으면 setChatId(chat방id값임) || 없으면 새로생성 => KeyPresshandler함수에 값을 입력하면 상대방에게 메시지가는 구조
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [otherLoginPersonal, setOtherLoginPersonal] = useRecoilState(otherPerson);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const setChatFunctions = useSetRecoilState(chatFunctionsState);
  const { mutate: sendDirectMessage } = useSendMessage();
  const { mutate: createOrGetChat } = useCreateOrGetChat();
  // const productId = useRecoilValue(productState); // Recoil에서 제품 ID 가져오기

  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // DM 클릭 핸들러
  const DmClickhandler = async (otherUserId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user && user.email) {
      // const userId = user.id;

      if (user) {
        //         console.log("DMuser",user?.id)
        // console.log("DMotherUserId",otherUserId)
        await checkChatWithUser(user.id, otherUserId);
        setIsChatModalOpen(true);
        setOtherLoginPersonal(otherUserId);
      }
    }
  };

  // 메시지 전송 핸들러
  const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      sendDirectMessage({ content: inputValue, authorId: otherLoginPersonal, chatId: chatId });
      setInputValue('');
    }
  };
  const sendDmMessage = async () => {
    if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인

    sendDirectMessage({ content: inputValue, authorId: otherLoginPersonal, chatId: chatId });

    setInputValue('');
  };

  // 메시지 컴포넌트를 렌더링하는 함수
  const renderMessages = () => {
    return messages
      .filter((message: MessageType) => String(message.chat_id) === chatId)
      .map((message: MessageType) => (
        <St.MessageComponent key={message.id} isOutgoing={message.author_id === LoginPersonal}>
          {message.content}
        </St.MessageComponent>
      ));
  };
  //Todo recoil 전역상태 관리 함수 만들기//
  // // Using useEffect to update Recoil state
  // useEffect(() => {
  //   setChatFunctions((prevFunctions) => ({
  //     ...prevFunctions,

  //     KeyPresshandler,
  //     sendDmMessage,
  //   }));
  // }, []);

  useEffect(() => {
    // 로그인한 사용자 정보 가져오기
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setLoginPersonal(data.user.id);
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
      if (chatId) {
        let { data, error } = await supabase.from('messages').select('*').eq('chat_id', chatId);

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
        
        // setChatId(payload.new.chat_id); //메시지 창 열기
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

    // 구독 해지
    return () => {
      messagesSubscription?.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, [chatId]);

  const auth = useAuth();

  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  //메세지보내는 함수
  const sendMessage = async () => {
    if (!auth.session) return;
    if (!askMessage.trim()) return; // 메시지가 비어있지 않은지 확인

    await supabase.from('qna').insert({
      sender_id: auth.session.user.id,
      content: askMessage,
    });

    setAskMessage(''); // 메시지 전송 후 입력 필드 초기화
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      sendMessage();
    }
  };

  if (!auth.session) return null;


  const prevHandler = () => {
    setIsAsk(false);
  };


  //챗방 만들기 //여기에 기존에 있는 챗방인지 아닌지 파악 하고 있으면 기존 거 쓰고 없으면 새로 //구현 되면 상대방이 챗을 받으면 챗창 오픈 되도록
  async function checkChatWithUser(userId: string, otherUserId: string) {
    console.log('checkChatWithUser', userId);
    console.log('checkChatWithUserother', otherUserId);

    // userId에 해당하는 챗방의 chat_id와 item_id를 가져옴
//.eq('others_id', userId);  .eq('user_id', otherUserId); 거꾸로 되어있네?
//왜냐? 모달은 a->b 한테 신청 상점은 b->a 한테 신청인데. 상점에서 신청을 해야 되는거라 주체가 달라
    // otherUserId에 해당하는 챗방의 chat_id와 item_id를 가져옴
    const { data: existingChatUser } = await supabase
      .from('chats_users')
      .select('chat_id, item_id,others_id')
      .eq('user_id',userId );

    console.log('existingChatUser', existingChatUser);
    

    const { data: existingChatOther } = await supabase
      .from('chats_users')
      .select('chat_id, item_id,user_id')
      .eq('others_id', otherUserId);

    console.log('existingChatOther', existingChatOther);


    if (existingChatUser && existingChatOther) {
      let commonChatId = null;

      // Check for a common chat_id and item_id
      for (let chatUser of existingChatUser) {
          for (let chatOther of existingChatOther) {
              if (chatUser.chat_id === chatOther.chat_id && chatUser.item_id === chatOther.item_id) {
                  commonChatId = chatUser.chat_id;
                  break;
              }
          }
          if (commonChatId) break;
      }

      if (commonChatId) {
          // A common chat_id is found
          setChatId(commonChatId);
      }
  }
  }

  // // 사용자 정보와 그들의 마지막 메시지를 불러오는 함수//이거 잘못 되었다, 상대방이랑 나 모두 비교해서 가져와야 되는데 //일단보류
  // const fetchUsersWithLastMessage = async () => {
  //   // 모든 사용자 데이터를 가져옵니다.
  //   const { data: usersData, error: usersError } = await supabase.from('users').select('*');

  //   if (usersError) {
  //     console.error('사용자 데이터를 가져오는 중 오류 발생:', usersError);
  //     return;
  //   }

  //   // 각 사용자에 대한 마지막 메시지를 가져옵니다.
  //   const usersWithMessages = await Promise.all(
  //     usersData.map(async (user) => {
  //       const { data: messagesData, error: messagesError } = await supabase
  //         .from('messages')
  //         .select('content')
  //         .eq('author_id', user.id)
  //         .order('created_at', { ascending: false })
  //         .limit(1);

  //       if (messagesError) {
  //         console.error('메시지 데이터를 가져오는 중 오류 발생:', messagesError);
  //         return user; // 메시지가 없는 경우 현재 사용자 데이터를 반환합니다.
  //       }
  //       // 마지막 메시지 내용을 사용자 객체에 추가합니다.
  //       const lastMessage = messagesData && messagesData.length > 0 ? messagesData[0].content : null;

  //       return {
  //         ...user,
  //         lastMessage: lastMessage,
  //       };
  //     }),
  //   );
  //   // 상태 업데이트
  //   setUsers(usersWithMessages);
  // };

  

  // 사용자 목록을 렌더링하는 함수
  const renderUserList = () => {
    return users
      .filter((user) => user.id !== LoginPersonal)
      .map((user) => (
        <St.UserItem key={user.id}>
          <St.UserEmail>{user.nickname}</St.UserEmail>
          <St.UserLastMessage>{user.lastMessage || '메시지가 없습니다.'}</St.UserLastMessage>
          <St.DMButton onClick={() => DmClickhandler(user.id)}>DM</St.DMButton>
        </St.UserItem>
      ));
  };

  // // 채팅 모달을 열고 선택된 사용자와의 채팅을 로드하는 함수
  // const handleOpenChatModal = async (userId: string) => {
  //   const user = users.find((u) => u.id === userId);
  //   if (user) {
  //     setOtherLoginPersonal(userId);
  //     setIsChatModalOpen(true);
  //   }
  // };



  return (
    <>
      {auth.session.profile.isAdmin ? (
        isSwitch && <AdminChat />
      ) : (
        <St.Container>

          {isSwitch ? (
            <St.ChatWrapper isSwitch={isSwitch}>
              {isAsk ? (
                <St.Header>
                  <St.PrevBtn onClick={prevHandler}>
                    <img src={prev} alt="prev" width={30} height={30} />
                  </St.PrevBtn>
                  <St.ChatHeader>
                    <img src={Logo} alt="Logo" />
                  </St.ChatHeader>
                </St.Header>
              ) : (
                <St.ChatHeader>
                  <img src={Logo} alt="Logo" />
                </St.ChatHeader>
              )}


          {/* 여기에 채팅 모달을 조건부 렌더링합니다. */}
          {isChatModalOpen && (
            <St.ChatModalWrapper>
              {/* 채팅 모달 내용 */}
              <St.ChatModalHeader>
                <div>채팅</div>
                <button onClick={() => setIsChatModalOpen(false)}>닫기</button>
              </St.ChatModalHeader>
              <St.ChatModalBody>{renderMessages()}</St.ChatModalBody>
              <St.ChatModalFooter>
                <St.InputField
                  value={inputValue}
                  onChange={InputChanger}
                  onKeyDown={KeyPresshandler}
                  placeholder="메시지를 입력해주세요"
                />
                <St.SendButton onClick={sendDmMessage}>전송</St.SendButton>
              </St.ChatModalFooter>
            </St.ChatModalWrapper>
          )}
          {/* 채팅 UI가 모달 UI 위에 올라가지 않도록 조건부 렌더링을 적용합니다. */}
          {isSwitch && !isChatModalOpen && (
            <St.ChatWrapper>
              <St.ChatHeader>BOOKER(로고)</St.ChatHeader>

              <St.ChatBody>
                <St.MainMessage>
                  안녕하세요 🙌 <br />
                  새로운 지식으로 시작되는 어쩌구저쩌구, 북커입니다📚
                  <br />​ 무엇을 도와드릴까요?
                </St.MainMessage>
              </St.ChatBody>
              <St.AskWrapper>
                <St.AskButton style={isAsk ? { display: 'none' } : { display: 'block' }} onClick={() => setIsAsk(true)}>
                  문의하기 💨
                </St.AskButton>
              </St.AskWrapper>

              {isAsk ? (
                <>

                  {/* 유저 시점에서 채팅을 출력해주는 chatLog 컴포넌트 */}
                  <ChatLog messageEndRef={messageEndRef} />


                  <ChatLog />

                  <St.ChatInputWrapper>
                    <St.Input
                      placeholder="메시지를 입력해주세요"
                      value={askMessage}
                      onChange={onChangeMessageHandler}
                      onKeyDown={onKeyDownHandler}
                    />
                  </St.ChatInputWrapper>
                </>
              ) : (
                <>
                  {/* Chats 컴포넌트의 UI 추가 */}
                  <div>{renderUserList()}</div>
                </>
              )}
            </St.ChatWrapper>
          )}
          {/* 채팅이 닫혀 있을 때 표시되는 'open' 버튼 */}
          {!isSwitch && (
            <St.TalkButtonWrapper>
              <St.TalkButton onClick={() => setIsSwitch(true)}>open</St.TalkButton>
            </St.TalkButtonWrapper>
          )}
        </St.Container>
      )}
    </>
  );
};

export default Chat;
