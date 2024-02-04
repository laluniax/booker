import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { supabase } from './api/Supabase.api';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import { ChatRoomTypes } from './state/atom/Chat.type';
import {
  ChatId,
  UnreadCounts,
  chatRoomsState,
  isChatModalOpenState,
  newMessagesCountState,
  person,
  sendMessages,
} from './state/atom/chatAtom';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
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

export type UnreadCount = {
  chat_id: string;
  unread_count: number;
};

const queryClient = new QueryClient();

const App = () => {
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [newMessagesCount, setNewMessagesCount] = useRecoilState(newMessagesCountState);
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(isChatModalOpenState);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [unreadCounts, setUnreadCounts] = useRecoilState(UnreadCounts);
  const [updateMesaage, setUpdateMesaage] = useState<MessagePayload>();
  //챗룸 리스트
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
              .select('*')
              .eq('chat_id', chatRoom.id);

            if (chatUserError) throw chatUserError;

            //챗방 마지막 메시지
            const { data: lastMessageData, error: lastMessageError } = await supabase
              .from('messages')
              .select(`content, users(nickname), author_id,item_id,created_at`)
              .eq('chat_id', chatRoom.id)
              .order('created_at', { ascending: false })
              .limit(1)
              .maybeSingle();

            let sendNickname = '알 수 없음';
            let user_img = '알 수 없음';
            let product_img = '알 수 없음';
            // let unread_count = 0;
            const author_id = lastMessageData ? lastMessageData.author_id : '알 수 없음';

            if (lastMessageData) {
              // lastMessageData가 있는 경우에만 sendNickname과 user_img 설정
              if (lastMessageData.author_id) {
                const { data: userData, error: userError } = await supabase
                  .from('users')
                  .select('*')
                  .eq('id', lastMessageData.author_id)
                  .single();

                if (userError) throw userError;
                if (userData) {
                  sendNickname = userData.nickname;
                  user_img = userData.user_img;
                }
              }

              // lastMessageData가 있는 경우에만 product_img 설정
              if (lastMessageData.item_id) {
                const { data: productData, error: productError } = await supabase
                  .from('products')
                  .select('product_img')
                  .eq('id', lastMessageData.item_id)
                  .maybeSingle();

                if (productError) throw productError;
                if (productData) {
                  product_img = productData.product_img;
                }
              }
            }

            return chatUser.map((chatUser) => ({
              author_id: author_id,
              chat_id: chatRoom.id,
              user_id: chatUser.user_id || '알 수 없음',
              item_id: chatUser.item_id || '알 수 없음',
              lastMessage: lastMessageData ? lastMessageData.content : '메시지가 없습니다.',
              sendNickname: sendNickname,
              user_img: user_img,
              created_at: lastMessageData ? lastMessageData.created_at : '메시지가 없습니다.',
              product_img: product_img,
            }));
          }),
        );
        // Flatten the array of arrays
        const flatChatRooms = updatedChatRooms.flat();

        setChatRooms(flatChatRooms as ChatRoomTypes[]);
      } catch (error) {
        console.error('채팅방 가져오기 오류:', error);
      }
    };

    fetchChatRooms();

    //새 메시지 생성시 감지할 채널 구독
    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        async (payload) => {
          setUpdateMesaage(payload as MessagePayload);
          fetchChatRooms();
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
  }, [chatId]);

  //챗메시지 가져오기
  useEffect(() => {
    //챗방 메시지 가져오기
    const fetchMessages = async () => {
      if (chatId) {
        // Fetch all messages for the chatId
        let { data: messagesData, error: messagesError } = await supabase
          .from('messages')
          .select('*,users(*)')
          .eq('chat_id', chatId);

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

    fetchMessages();
    //새 메시지 생성시 감지할 채널 구독
    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        async (payload) => {
          fetchMessages();
          setUpdateMesaage(payload as MessagePayload);
        },
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, [chatId, updateMesaage]);

  //메시지 카운팅
  useEffect(() => {
    //메시지 생길때마다, 덧씌워주기
    const handleNewMessage = (payload: MessagePayload) => {
      setChatRooms((prevChatRooms) =>
        prevChatRooms.map((chatRoom) => {
          if (chatRoom.chat_id === payload.new.chat_id) {
            // 예시: unread_count 업데이트

            return {
              ...chatRoom,
              lastMessage: payload.new.content,
              created_at: payload.new.created_at,
            };
          } else {
            return chatRoom;
          }
        }),
      );
    };

    const handleNewMessageCount = (payload: MessagePayload) => {
      // 채팅 모달이 열려 있지 않을 때만 새 메시지 수를 증가
      if (!ChatBtnOpen) {
        setNewMessagesCount((prevCount) => prevCount + 1);
      }
    };

    //읽지않음 카운팅
    async function updateUnreadCount() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user?.id) {
        console.log('user not found');
      }
      const user_id = user?.id;
      const { data, error } = await supabase.rpc('count_unread_messages', { user_id });

      if (error) {
        console.log('읽지 않은 수 업데이트 오류:', error);
      } else {
        setUnreadCounts(data);
      }
    }

    updateUnreadCount();

    //새 메시지 생성시 감지할 채널 구독
    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        async (payload) => {
          handleNewMessageCount(payload as MessagePayload);
          // 새 메시지 카운트를 증가시킬지 결정하는 함수 호출
          handleNewMessage(payload as MessagePayload);
          setUpdateMesaage(payload as MessagePayload);
        },
      )
      .subscribe();

    // 채팅방 변경사항을 감지할 채널 구독
    const chatChannel = supabase
      .channel('chat-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
        // fetchChatRooms();
      })
      .subscribe();

    return () => {
      changes.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, [chatId, updateMesaage]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
