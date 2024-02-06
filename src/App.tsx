
import { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from './contexts/auth.context';
import Router from './shared/Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { useEffect } from 'react';
import { fetchAllChatRooms } from './api/Chat.api';
import { useRecoilState } from 'recoil';
import { ChatId, chatRoomsState, person, updateMesaages } from './state/atom/chatAtom';
import { ChatRoom } from './state/atom/Chat.type';
import { supabase } from './api/Supabase.api';

const App = () => {
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);
  //로그인 유저 가져오기
  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user?.id) {
          setLoginPersonal(user.id);
        } else {
          setLoginPersonal('');
        }
      } catch (error) {
        console.error('Error fetching logged in user:', error);
      }
    }

    fetchLoggedInUser();
  }, [chatId,updateMesaage]);

  useEffect(() => {
    const fetchAndSetChatRooms = async () => {
      if (!LoginPersonal) {
        console.error('No user ID provided, cannot fetch chat rooms.');
        return;
      }
     
      const chatRoomsData = await fetchAllChatRooms(LoginPersonal); // 채팅방 정보 가져오기
      setChatRooms(chatRoomsData as ChatRoom[]); // 상태 업데이트
    };
  
    if (LoginPersonal) {
      fetchAndSetChatRooms();
    }
  }, [LoginPersonal, chatId, updateMesaage]); // Add LoginPersonal to dependency array
  

  
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AuthContextProvider>
  );
};

export default App;
