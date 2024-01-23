import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { supabase } from './api/supabase.api';
import { ChatId, ChatRoom, chatRoomsState, sendMessages } from './atom/product.atom';
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
            const { data: chatUser, error: chatUserError } = await supabase
              .from('chats_users')
              .select('user_id,item_id')
              .eq('chat_id', chatRoom.id);

            // console.log('chatUser',chatUser);
            if (chatUserError) throw chatUserError;

            //챗방 마지막 메시지
            const { data: lastMessageData, error: lastMessageError } = await supabase
              .from('messages')
              .select(`content, users (nickname),author_id`)
              .eq('chat_id', chatRoom.id)
              .order('created_at', { ascending: false })
              .limit(1)
              .single();

            if (lastMessageError) throw lastMessageError;
            console.log('lastMessageData', lastMessageData);

            let sendNickname = '알 수 없음'; // Default to unknown
            if (lastMessageData && lastMessageData.author_id) {
              const { data: userData, error: userError } = await supabase
                .from('users')
                .select('nickname')
                .eq('id', lastMessageData.author_id)
                .single();
        
              // Handle userError if any...
              if (userData) {
                sendNickname = userData.nickname; // Assign the fetched nickname
                console.log('sendNickname',userData)
              }
            }

            return chatUser.map((chatUser) => ({
              chat_id: chatRoom.id,
              user_id: chatUser.user_id || '알 수 없음',
              item_id: chatUser.item_id || '알 수 없음',
              lastMessage: lastMessageData ? lastMessageData.content : '메시지가 없습니다.',
              sendNickname: sendNickname,
            }));
          }),
        );
        // Flatten the array of arrays
        const flatChatRooms = updatedChatRooms.flat();

        console.log('flatChatRooms', flatChatRooms);
        // Make sure flatChatRooms is of type ChatRoom[]
        setChatRooms(flatChatRooms as ChatRoom[]);
      } catch (error) {
        console.error('채팅방 가져오기 오류:', error);
      }
    };
    fetchChatRooms();

    const fetchMessages = async () => {
      if (ChatId) {
        // console.log('appchatid',chatId)
        let { data, error } = await supabase.from('messages').select('*');
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
          fetchChatRooms();
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
