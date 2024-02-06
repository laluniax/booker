import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 가져오기
import relativeTime from 'dayjs/plugin/relativeTime.js';
import qnaIcon from '../../assets/qna/qnaicon.webp';
import { useAuth } from '../../contexts/auth.context';
import * as St from './ChatModal.styled';
import { MessageListTypes } from './ChatModal.type';
import ChatHeaderMessaegs from './market/ChatHeaderMessaegs';
import ChatInpuValuSendHandler from './market/ChatInpuValuSendHandler';
import ChatMessages from './market/ChatMessages';
import ChatRoomList from './market/ChatRoomList';
import TotalChatUnreadCounts from './market/TotalChatUnreadCounts';
import AdminChat from './qna/chatadmin/AdminChatRoom';
import ChatLog from './qna/chatuser/UserChatRoom';

import { supabase } from '../../api/Supabase.api';
import { firstChatModalOpenState, globalModalSwitch, mainChatModalOpen, sendMessages } from '../../state/atom/chatAtom';

dayjs.extend(relativeTime); // relativeTime 플러그인 활성화
dayjs.locale('ko'); // 한국어 로케일 설정

const Chat = () => {
  const [isOpen, setIsOpen] = useRecoilState(globalModalSwitch);

  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState(false);
  const [isAsk, setIsAsk] = useState(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');
  const [nickname, setNickname] = useState('');
  const [ischatRoomModalOpen, setIschatRoomModalOpen] = useRecoilState(mainChatModalOpen);
  const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(firstChatModalOpenState);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const [Usermessages, setUserMessages] = useState<MessageListTypes[]>([]);
  const auth = useAuth();

  const getUserNickname = () => {
    if (auth.session) {
      setNickname(auth.session.profile.nickname);
    } else {
      // `auth.session`이 `null`일 때의 처리
      console.error('세션이 존재하지 않습니다.');
      setNickname('기본값');
    }
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const current = chatBodyRef.current;
    if (current) {
      const isAtBottom = current.scrollHeight - current.scrollTop === current.clientHeight;
      setIsAtBottom(isAtBottom);
    }
  };

  // 최하단으로 스크롤하는 함수
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  // 채팅 모달이 열리거나 메시지 목록이 변경될 때 스크롤
  useEffect(() => {
    if (ischatRoomModalOpen && isAtBottom) {
      // 비동기적으로 스크롤 함수 실행하여 모든 DOM 업데이트 후 스크롤되도록 함
      setTimeout(scrollToBottom, 0);
    }
  }, [messages, ischatRoomModalOpen, isAtBottom]);

  // 채팅 컨테이너에 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const chatBody = chatBodyRef.current;
    if (chatBody) {
      chatBody.addEventListener('scroll', handleScroll);
      return () => {
        chatBody.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // 채팅 몸체에 스크롤 이벤트 리스너를 추가
  useEffect(() => {
    const chatBody = chatBodyRef.current;
    if (chatBody) {
      chatBody.addEventListener('scroll', handleScroll);
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        chatBody.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);



  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  useEffect(() => {
    getUserNickname();
  }, []);
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
      nickname: nickname,
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
          {/* 채팅모달부분 */}
          {ischatRoomModalOpen && (
            <St.ChatModalWrapper>
              <St.ChatModalHeader>
                <ChatHeaderMessaegs />
              </St.ChatModalHeader>
              <St.ChatModalBody ref={chatBodyRef}>
                <ChatMessages />
                <div ref={messagesEndRef} />
              </St.ChatModalBody>
              <St.ChatModalFooter>
                <ChatInpuValuSendHandler />
              </St.ChatModalFooter>
            </St.ChatModalWrapper>
          )}

          {/* 채팅 UI가 모달 UI 위에 올라가지 않도록 조건부 렌더링을 적용합니다. */}
          {isSwitch && !ischatRoomModalOpen && (
            <St.ChatWrapper>
              {isAsk ? (
                <St.LogoWrapper>
                  <St.PrevBtn onClick={prevHandler}>
                    <St.PrevIcon />
                  </St.PrevBtn>
                  <St.QnaIcon src={qnaIcon} />
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
        <TotalChatUnreadCounts />
        <St.BookerChattingIcon
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSwitch(!isSwitch);
            toggleChatModal();
          }}
        />
      </St.TalkButtonWrapper>
    </>
  );
};
export default Chat;
