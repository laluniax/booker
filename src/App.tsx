import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState } from 'recoil';
import { supabase } from './api/supabase.api';
import {
  ChatId,
  ChatRoom,
  chatRoomsState,
  isChatModalOpenState,
  newMessagesCountState,
  sendMessages,
} from './atom/product.atom';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';

type Message = {
  author_id: string;
  chat_id: string;
  content: string;
  created_at: string;
  id: number;
  item_id: number;
  others_id: string | null;
};

// Define a type for the payload
type MessagePayload = {
  commit_timestamp: string;
  errors: null | any; // Replace 'any' with a more specific type if possible
  eventType: string;
  new: Message;
  old?: any; // Replace 'any' with a more specific type if possible
  schema: string;
  table: string;
};

const queryClient = new QueryClient();

const App = () => {
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [newMessagesCount, setNewMessagesCount] = useRecoilState(newMessagesCountState);
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(isChatModalOpenState);

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
              .select('user_id,item_id,created_at')
              .eq('chat_id', chatRoom.id);

            console.log('chatUser', chatUser);
            if (chatUserError) throw chatUserError;

            //챗방 마지막 메시지
            const { data: lastMessageData, error: lastMessageError } = await supabase
              .from('messages')
              .select(`content, users(nickname), author_id`)
              .eq('chat_id', chatRoom.id)
              .order('created_at', { ascending: false })
              .limit(1)
              .single();

            console.log('lastMessageData', lastMessageData);
            if (lastMessageError) throw lastMessageError;

            let sendNickname = '알 수 없음';
            if (lastMessageData && lastMessageData.author_id) {
              const { data: userData, error: userError } = await supabase
                .from('users')
                .select('nickname')
                .eq('id', lastMessageData.author_id)
                .single();
              console.log('app85');
              // Handle userError if any...
              if (userData) {
                sendNickname = userData.nickname; // Assign the fetched nickname
                console.log('sendNickname', userData);
              }
            }

            return chatUser.map((chatUser) => ({
              chat_id: chatRoom.id,
              user_id: chatUser.user_id || '알 수 없음',
              item_id: chatUser.item_id || '알 수 없음',
              lastMessage: lastMessageData ? lastMessageData.content : '메시지가 없습니다.',
              sendNickname: sendNickname,
              hasNewMessage: false, // Initialize the hasNewMessage property
              created_at: chatUser.created_at,
            }));
          }),
        );
        // Flatten the array of arrays
        const flatChatRooms = updatedChatRooms.flat();

        console.log('챗방 마지막 결과물', flatChatRooms);
        // Make sure flatChatRooms is of type ChatRoom[]
        setChatRooms(flatChatRooms as ChatRoom[]);
      } catch (error) {
        // console.error('채팅방 가져오기 오류:', error);
      }
    };
    console.log('app114');
    fetchChatRooms();
    console.log(`app116`);
    const fetchMessages = async () => {
      console.log(`app118`);
      if (chatId) {
        // Fetch all messages for the chatId
        let { data: messagesData, error: messagesError } = await supabase
          .from('messages')
          .select('*,users(id,nickname)')
          .eq('chat_id', chatId);

        // console.log('messagesData', messagesData);
        if (messagesError) {
          console.error('메시지를 가져오는 중 오류가 발생했습니다:', messagesError);
          return;
        }

        if (!messagesData) {
          setMessages([]);
          return;
        }

        setMessages(messagesData);
      }
    };

    console.log('app139');
    fetchMessages();

    // 새 메시지가 아니라 기존에 있던 값을 처리하는 함수?
    const handleNewMessage = (payload: MessagePayload) => {
      setChatRooms((prevChatRooms) =>
        prevChatRooms.map((chatRoom) => {
          if (chatRoom.chat_id === payload.new.chat_id) {
            // 새 메시지가 도착한 채팅방에 대한 처리
            return {
              ...chatRoom,
              lastMessage: payload.new.content, // 마지막 메시지를 새 메시지로 업데이트
              hasNewMessage: chatRoom.user_id !== payload.new.author_id, // 새 메시지 표시 업데이트
            };
          } else {
            // 다른 채팅방에 대한 처리는 그대로 유지
            return chatRoom;
          }
        }),
      );
    };
    const handleNewMessageCount = (payload: MessagePayload) => {
      // 채팅 모달이 열려 있지 않을 때만 새 메시지 수를 증가시키세요.
      if (!ChatBtnOpen) {
        console.log(ChatBtnOpen);
        fetchChatRooms();
        setNewMessagesCount((prevCount) => prevCount + 1);
      }
    };

    console.log('chatRooms', chatRooms);

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
          fetchMessages();
          handleNewMessageCount(payload as MessagePayload);

          // 새 메시지 카운트를 증가시킬지 결정하는 함수 호출
          handleNewMessage(payload as MessagePayload);
          //이거 열면 안됨
          // fetchChatRooms();
        },
      )
      .subscribe();

    // 채팅방 변경사항을 감지할 채널 구독
    const chatChannel = supabase
      .channel('chat-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
        fetchChatRooms();
      })
      .subscribe();

    return () => {
      changes.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, [chatId, ChatBtnOpen]);

  useEffect(() => {}, []);

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
