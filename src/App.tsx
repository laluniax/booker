import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { supabase } from './api/supabase.api';
import {
  ChatId,
  ChatRoom,
  MessagePayload,
  UnreadCounts,
  chatRoomsState,
  isChatModalOpenState,
  newMessagesCountState,
  person,
  sendMessages,
  updateMesaages,
} from './atom/product.atom';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
// type Message =
// // Define a type for the payload

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
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);


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
          console.log('payload', payload);
          fetchMessages();
          setUpdateMesaage(payload as MessagePayload);
        },
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
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
