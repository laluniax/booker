import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { supabase } from './api/supabase.api';
import { ChatId, chatRoomsState, sendMessages } from './atom/product.atom';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';

const queryClient = new QueryClient();

const App = () => {
  const setChatRooms = useSetRecoilState(chatRoomsState);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [messages, setMessages] = useRecoilState(sendMessages);
  // console.log('app=chat', chatId);
  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        // 채팅방 ID 가져오기
        const { data: chatRoomsData, error: chatRoomsError } = await supabase.from('chats').select('*');

        if (chatRoomsError) throw chatRoomsError;

        // 각 채팅방에 대해 사용자의 닉네임과 마지막 메시지를 가져오기
        const updatedChatRooms = await Promise.all(
          chatRoomsData.map(async (chatRoom) => {
            // 'chats_users' 테이블에서 채팅방에 대한 '받는 사람'의 user_id 가져오기
            const { data: chatUser, error: chatUserError } = await supabase
              .from('chats_users')
              .select('user_id,item_id') //others_id=>user_id로 바꿈 상점에서 a->b  받는 사람 b // 메인에서 b->a 받는사람 a 근데 b가 로직이 꼬여서 받는사람이자 보내는사람이 되버림.
              .eq('chat_id', chatRoom.id)
              // .single(); // 채팅방에 속한 '받는 사람'은 한 명만 있다고 가정


              console.log('chatUser',chatUser)
            if (chatUserError) throw chatUserError;
      
              // 여기에서 chatUsers 배열의 각 요소에 대해 처리 필요
    if (chatUser.length === 0) {
      // 적절한 처리 로직
      return {
        chat_id: chatRoom.id,
        user_id: '알 수 없음',
        item_id: '알 수 없음',
        receiverNickname: '알 수 없음',
        lastMessage: '메시지가 없습니다.',
      };
    }

    const firstChatUser = chatUser[0]; // 배열의 첫 번째 요소 사용

            // 'users' 테이블에서 '받는 사람'의 닉네임 가져오기
            const { data: user, error: userError } = await supabase
              .from('users')
              .select('nickname')
              .eq('id', firstChatUser.user_id)
              .single();
      // console.log(user)
            if (userError) throw userError;

            //챗방 마지막 메시지 
            const { data: lastMessageData, error: lastMessageError } = await supabase
              .from('messages')
              .select(`content, users (nickname)`)
              .eq('chat_id', chatRoom.id)
              .order('created_at', { ascending: false })
              .limit(1)
              .single();

  

            if (lastMessageError) throw lastMessageError;

            return {
              chat_id: chatRoom.id,
              // others_id: chatUser?.others_id || '알 수 없음',
              user_id: chatUser[0]?.user_id || '알 수 없음',
              item_id: chatUser[0]?.item_id || '알 수 없음',
              receiverNickname: user.nickname, // '받는 사람'의 닉네임
              lastMessage: lastMessageData.content || '메시지가 없습니다.',
            };
          }),
        );

        // 전역 상태 업데이트
        setChatRooms(updatedChatRooms);
      } catch (error) {
        console.error('채팅방 가져오기 오류:', error);
      }
    };
    fetchChatRooms();

    const fetchMessages = async () => {
      if (ChatId) {
        // console.log('appchatid',chatId)
        let { data, error } = await supabase.from('messages').select('*')
        // console.log("fetchMessages",data)
        if (error) {
          console.error('Error fetching messages:', error);
        } else {
          setMessages(data ?? []);
        }
      }
    };

    // fetchUsers();
    fetchMessages();

    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          console.log('app전역관리', payload);
          fetchMessages();
          fetchChatRooms()
        },
      )
      .subscribe();

    // 채팅방 변경사항을 감지할 채널 구독
    const chatChannel = supabase
      .channel('chat-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
        console.log('New chat!', payload);
        
        fetchChatRooms();
      })
      .subscribe();

    return () => {
      changes.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <GlobalStyle />
        <Router />
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
