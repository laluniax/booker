import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSendMessage } from '../../api/Chat.api';



import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 가져오기
import relativeTime from 'dayjs/plugin/relativeTime.js';
import { useAuth } from '../../contexts/auth.context';
import { MessageTypes } from '../../types/types';
import * as St from './ChatModal.styled';
import ChatHeaderMessaegs from './market/ChatHeaderMessaegs';
import ChatInpuValuSendHandler from './market/ChatInpuValuSendHandler';
import ChatMessages from './market/ChatMessages';
import ChatRoomList from './market/ChatRoomList';
import TotalChatUnreadCounts from './market/TotalChatUnreadCounts';
import { MessageListTypes, OtherUserDetailTypes, ProductDetailTypes } from './ChatModal.type';
import AdminChat from './qna/chatadmin/AdminChatRoom';
import ChatLog from './qna/chatuser/UserChatRoom';
import { UnreadCounts, firstChatModalOpenState, globalModalSwitch, mainChatModalOpen, person, sendMessages } from '../../atom/product.atom';
import { supabase } from '../../api/Supabase.api';

dayjs.extend(relativeTime); // relativeTime 플러그인 활성화
dayjs.locale('ko'); // 한국어 로케일 설정

const Chat = () => {
  const [isOpen, setIsOpen] = useRecoilState(globalModalSwitch);
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');
  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(mainChatModalOpen);
  const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(firstChatModalOpenState);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);

  const [messages, setMessages] = useRecoilState(sendMessages);
  const [unreadCounts, setUnreadCounts] = useRecoilState(UnreadCounts);

  const [Usermessages, setUserMessages] = useState<MessageListTypes[]>([]);

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
  }, [unreadCounts]);

  const auth = useAuth();
  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  useEffect(() => {
    if (!auth.session) return;
    getQnaLog(auth.session.user.id);
  }, []);

  useEffect(() => {}, [messages]);
  //qna table 가져오는 함수
  const getQnaLog = async (roomId: string) => {
    if (!auth.session) return;
    const response = await supabase.from('qna').select('*').eq('room_id', roomId);
    const result = response.data;
    if (result) {
      setUserMessages(result);
    } else {
      setUserMessages([]);
    }
  };

  //문의하기 메세지보내는 함수
  const sendMessage = async () => {
    if (!auth.session) return;
    if (!askMessage.trim()) return; // 메시지가 비어있지 않은지 확인
    await supabase.from('qna').insert({
      room_id: auth.session.user.id,
      sender_id: auth.session.user.id,
      content: askMessage,
      message_type: 'question',
    });
    setAskMessage(''); // 메시지 전송 후 입력 필드 초기화
    getQnaLog(auth.session.user.id);
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

  //토글 열닫
  const toggleChatModal = () => {
    setChatBtnOpen((prevState) => !prevState);
  };

  return (
    <>
      {auth.session.profile.isAdmin ? (
        isOpen && <AdminChat />
      ) : (
        <St.Container>
          {isChatModalOpen && (
            <St.ChatModalWrapper>
              <St.ChatModalHeader>

                <ChatHeaderMessaegs />
              </St.ChatModalHeader>
      
                <ChatMessages />
         
              <St.ChatModalFooter>
                <ChatInpuValuSendHandler />
              </St.ChatModalFooter>
            </St.ChatModalWrapper>
          )}

          {/* 채팅 UI가 모달 UI 위에 올라가지 않도록 조건부 렌더링을 적용합니다. */}
          {isSwitch && !isChatModalOpen && (
            <St.ChatWrapper>
              {isAsk ? (
                <St.LogoWrapper>
                  <St.PrevBtn onClick={prevHandler}>
                    <St.PrevIcon />
                  </St.PrevBtn>
                  <St.ChatHeader></St.ChatHeader>
                </St.LogoWrapper>
              ) : (
                <St.ChatHeader></St.ChatHeader>
              )}
              <St.ChatTopBox>
                <St.MainMessage>안녕하세요 ! 책에 대한 모든 것을 담는 북커입니다 ⸜๑•⌔•๑ ⸝</St.MainMessage>
                <St.MainMessage>궁금한 점이 있으신가요?</St.MainMessage>
                <St.AskButton style={isAsk ? { display: 'none' } : { display: 'block' }} onClick={() => setIsAsk(true)}>
                  문의하기
                </St.AskButton>
              </St.ChatTopBox>
              <St.Contour />
              {isAsk ? (
                <>
                  <ChatLog messages={Usermessages} />
                  <St.ChatInputWrapper>
                    <St.Input
                      placeholder="메세지를 입력해주세요"
                      value={askMessage}
                      onChange={onChangeMessageHandler}
                      onKeyDown={onKeyDownHandler}
                    />
                    <St.QnaSendButton onClick={sendMessage}>전송</St.QnaSendButton>
                  </St.ChatInputWrapper>
                </>
              ) : (
                <>
                  <ChatRoomList />
                </>
              )}
            </St.ChatWrapper>
          )}
        </St.Container>
      )}
      <St.TalkButtonWrapper>
        <St.BookerChattingIcon
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSwitch(!isSwitch);
            toggleChatModal();
          }}
        />
        <TotalChatUnreadCounts />
      </St.TalkButtonWrapper>
    </>
  );
};
export default Chat;
