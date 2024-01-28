import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState } from 'recoil';
import { supabase } from './api/supabase.api';
import {
  ChatId,
  ChatRoom,
  chatRoomsState,
  isChatModalOpenState,
  newMessagesCountState,
  person,
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
  const [unreadCounts, setUnreadCounts] = useState<UnreadCount[]>([]);

  useEffect(() => {
    const fetchChatRooms = async () => { 
      console.log('123')
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
              .select(`content, users(nickname), author_id,item_id`)
              .eq('chat_id', chatRoom.id)
              .order('created_at', { ascending: false })
              .limit(1)
              .maybeSingle();

              let sendNickname = '알 수 없음';
              let user_img = '알 수 없음';
              let product_img = '알 수 없음';
              let unread_count = 0;
              const author_id = lastMessageData ? lastMessageData.author_id : '알 수 없음';

              if (lastMessageData) {
                // lastMessageData가 있는 경우에만 sendNickname과 user_img 설정
                if (lastMessageData.author_id) {
                  const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', lastMessageData.author_id)
                    .single();
                    
                  // console.log('lastMessageData',lastMessageData)
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
          
                // lastMessageData가 있는 경우에만 unread_count 설정
                const { data, error } = await supabase.rpc('count_unread_messages', { user_id: lastMessageData.author_id });
               
              //  console.log('unreaddata',data)
                if (error) {
                  console.error('읽지 않은 수 업데이트 오류:', error);
                } else {
                  unread_count = data?.unread_count || 0;
                }
              }
          
              return chatUser.map((chatUser) => ({
                author_id:author_id,
                chat_id: chatRoom.id,
                user_id: chatUser.user_id || '알 수 없음',
                item_id: chatUser.item_id || '알 수 없음',
                lastMessage: lastMessageData ? lastMessageData.content : '메시지가 없습니다.',
                sendNickname: sendNickname,
                user_img: user_img,
                unread_count: unread_count,
                created_at: chatUser.created_at,
                product_img: product_img,
              }));
            }),
          );
        // Flatten the array of arrays
        const flatChatRooms = updatedChatRooms.flat();
// console.log('updatedChatRooms',updatedChatRooms)
        // Make sure flatChatRooms is of type ChatRoom[]
        setChatRooms(flatChatRooms as ChatRoom[]);
      } catch (error) {
        console.error('채팅방 가져오기 오류:', error);
      }
    };
    // console.log('chatroom', chatRooms);
    fetchChatRooms();

    //챗방 메시지 가져오기
    const fetchMessages = async () => {
      if (chatId) {
        // Fetch all messages for the chatId
        let { data: messagesData, error: messagesError } = await supabase
          .from('messages')
          .select('*,users(*)')
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

    fetchMessages();

    // 기존에 있던 chatRoom 값에 구독한 payload 업데이트
    const handleNewMessage = (payload: MessagePayload) => {
      setChatRooms((prevChatRooms) =>
        prevChatRooms.map((chatRoom) => {
          if (chatRoom.chat_id === payload.new.chat_id) {
            const unreadCount = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id)?.unread_count || 0;
            // 새 메시지가 도착한 채팅방에 대한 처리
            return {
              ...chatRoom,
              lastMessage: payload.new.content, // 마지막 메시지를 새 메시지로 업데이트
              unread_count: unreadCount, // 새 메시지 표시 업데이트
            };
          } else {
            // 다른 채팅방에 대한 처리는 그대로 유지
            return chatRoom;
          }
        }),
      );
    };

    const handleNewMessageCount = (payload: MessagePayload) => {
      // 채팅 모달이 열려 있지 않을 때만 새 메시지 수를 증가
      if (!ChatBtnOpen) {
        // fetchChatRooms();
        setNewMessagesCount((prevCount) => prevCount + 1);
      }
    };

    //읽지않음 카운팅
    async function updateUnreadCount() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      // console.log(user);
      if (!user?.id) {
        console.log('user not found');
      }
      const { data, error } = await supabase.rpc('count_unread_messages', { user_id: user?.id });
// console.log('unreaddata',data);
      // console.log('카운팅함수데이터', data);
      if (error) {
        console.log('읽지 않은 수 업데이트 오류:', error);
      } else {
        setUnreadCounts(data);
      }
    }

    updateUnreadCount();
    // //채링리스트에 표시
    // const updateChatRoomsUnreadCount = (unreadCounts: UnreadCount[]) => {
    //   setChatRooms((prevChatRooms) =>
    //     prevChatRooms.map((chatRoom) => {
    //       const unreadCount = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id)?.unread_count || 0;
    //       return { ...chatRoom, unread_count: unreadCount };
    //     }),
    //   );
    // };

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
          console.log('payload', payload);
          fetchMessages();
          handleNewMessageCount(payload as MessagePayload);
          updateUnreadCount();
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
