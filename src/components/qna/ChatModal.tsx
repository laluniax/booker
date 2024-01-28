import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSendMessage } from '../../api/chatApi';
import { supabase } from '../../api/supabase.api';
import {
  ChatId,
  chatRoomsState,
  globalModalSwitch,
  isChatModalOpenState,
  newMessagesCountState,
  otherPerson,
  person,
  productState,
  sendMessages,
} from '../../atom/product.atom';

import { UnreadCount } from '../../App';
import { useAuth } from '../../contexts/auth.context';
import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatModal.styled';

export type MessageType = {
  id: number;
  content: string;
  author_id: string;
  chat_id: string;
  item_id: number;
  others_id: string;
  users?: UserType; // 사용자 닉네임을 포함할 수 있는 옵셔널 프로퍼티
  created_at: number;
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
  const [isOpen, setIsOpen] = useRecoilState(globalModalSwitch);
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [otherLoginPersonal, setOtherLoginPersonal] = useRecoilState(otherPerson);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const { mutate: sendDirectMessage } = useSendMessage();

  const [productId, setProductId] = useRecoilState(productState);
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const [newMessagesCount, setNewMessagesCount] = useRecoilState(newMessagesCountState);
  const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(isChatModalOpenState);
  const [totalUnreadCount, setTotalUnreadCount] = useState<number>(0);
  const [unreadCounts, setUnreadCounts] = useState<UnreadCount[]>([]);

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

    const total = calculateTotalUnread(unreadCounts);


    setTotalUnreadCount(total);
  }, [unreadCounts]);
  // console.log('totaltotal',unreadCounts)
  //입력값 가져오기
  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 읽지 않은 메시지의 총합을 계산하는 함수
  const calculateTotalUnread = (unreadCounts: UnreadCount[]) => {
    return unreadCounts.reduce((acc, count) => acc + count.unread_count, 0);
  };

  // DM 클릭 핸들러
  const DmClickhandler = async (item_id: number, chat_id: string, author_id: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log('dm',chat_id)
    // console.log('dm',author_id)
    if (user && user.email) {
      if (user) {
        markChatAsRead(chat_id, user.id);
        setChatId(chat_id);
        setLoginPersonal(user.id);
        // setOtherLoginPersonal(otherUserId);
        setProductId(item_id);

        setIsChatModalOpen(true);

        setChatRooms((prevChatRooms) =>
          prevChatRooms.map((chatRoom) =>
            chatRoom.chat_id === chat_id ? { ...chatRoom, hasNewMessage: false } : chatRoom,
          ),
        );
      }
    }
  };

  //모달 창 뜨고 메시지 보내는 핸들러들
  // 메시지 전송 핸들러
  const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      event.preventDefault(); // 폼 제출 방지
      sendDirectMessage({
        content: inputValue,
        author_id: LoginPersonal,
        chat_id: chatId,
        item_id: productId,
        // others_id: otherLoginPersonal,
      });
      setInputValue('');
    }
  };

  //dm메시지 전송
  const sendDmMessage = async () => {
    if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인

    sendDirectMessage({
      content: inputValue,
      author_id: LoginPersonal,
      chat_id: chatId,
      item_id: productId,
      // others_id: otherLoginPersonal,
    });

    setInputValue('');
  };

  //읽음처리
  async function markChatAsRead(chatId: string, userId: string) {
    const p_chat_id = chatId;
    const p_user_id = userId;
    const { data, error } = await supabase.rpc('mark_messages_as_read', { p_chat_id, p_user_id });
    console.log('카운팅초기화', data);
    console.log('문제없음', error);
    if (error) {
      console.error('Error marking messages as read:', error);
    }
  }



  //채팅창 메시지 보여주는 것
  const renderMessages = () => {
    return messages
    
      .filter((message: MessageType) => message.chat_id === chatId)
      .sort((a: MessageType, b: MessageType) => a.id - b.id) // 오름차순 정렬
      .map((message: MessageType) => (
        <>
          {/* {console.log('messages',messages)} */}
          {message.author_id !== LoginPersonal && <St.NicknameLabel>{message.users?.nickname}</St.NicknameLabel>}
          <St.MessageComponent key={message.id} isOutgoing={message.author_id === LoginPersonal}>
            {message.content}
          </St.MessageComponent>
        </>
      ));
  };

  const auth = useAuth();
  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };
  //메세지보내는 함수
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

  // const renderChatRoomsList = () => {

  //   return chatRooms
  //     .filter((chatRoom) => chatRoom.user_id === LoginPersonal)
  //     .map((chatRoom) => (
  //       <St.UserItem key={chatRoom.chat_id}>
  //         <St.UserEmail>
  //           {chatRoom.sendNickname}
  //           {chatRoom.hasNewMessage ? (
  //             <>
  //               {console.log('chatRoom:', chatRoom.chat_id)}
  //               <St.NotificationBadge>New!</St.NotificationBadge>
  //             </>
  //           ) : null}
  //         </St.UserEmail>

  //         <St.UserLastMessage>{chatRoom.lastMessage || 'No messages yet.'}</St.UserLastMessage>
  //         <St.DMButton onClick={() => DmClickhandler(chatRoom.item_id, chatRoom.chat_id)}>Open Chat</St.DMButton>
  //       </St.UserItem>
  //     ));
  // };

  // console.log('chatroom_unread',chatRooms) 쓰던거
  // const renderChatRoomsList = () => {
  //   return chatRooms
  //     .filter((chatRoom) => chatRoom.user_id === LoginPersonal)
  //     .map((chatRoom) => (
  //       <St.UserItem key={chatRoom.chat_id}>
  //         <St.UserEmail>

  //           {chatRoom.sendNickname}
  //           {chatRoom.unread_count > 0 && (
  //             <>
  //               {console.log('chatRoom:', chatRoom.unread_count)}
  //               <St.NotificationBadge>{chatRoom.unread_count}</St.NotificationBadge>
  //             </>
  //           )}
  //         </St.UserEmail>
  //         <St.UserLastMessage>{chatRoom.lastMessage || 'No messages yet.'}</St.UserLastMessage>
  //         <St.DMButton onClick={() => DmClickhandler(chatRoom.item_id, chatRoom.chat_id, chatRoom.author_id)}>Open Chat</St.DMButton>
  //       </St.UserItem>
  //     ));
  // };

  const renderChatRoomsList = () => {
    return chatRooms
      .filter((chatRoom) => chatRoom.user_id === LoginPersonal)
      .map((chatRoom) => (
        <St.UserItem
          key={chatRoom.chat_id}
          onClick={() => DmClickhandler(chatRoom.item_id, chatRoom.chat_id, chatRoom.author_id)} // 클릭 이벤트 추가
        >
          <St.UserImage src={chatRoom.user_img || '기본 이미지 경로'} alt="user image" />
          <St.UserInfo>
            <St.UserNickname>
              <>{console.log('chatRoom.unread_count',chatRoom.unread_count)}</>
              {chatRoom.sendNickname}
              {chatRoom.unread_count > 0 && <St.NotificationBadge>{chatRoom.unread_count}</St.NotificationBadge>}
            </St.UserNickname>
            <St.UserLastMessage>{chatRoom.lastMessage || 'No messages yet.'}</St.UserLastMessage>
          </St.UserInfo>
          <St.ProductImage src={chatRoom.product_img || '기본 물품 이미지 경로'} alt="product image" />
        </St.UserItem>
      ));
  };

  const toggleChatModal = () => {
    setChatBtnOpen((prevState) => !prevState);
    setNewMessagesCount(0);
  };

  return (
    <>
      {auth.session.profile.isAdmin ? (
        isOpen && <AdminChat />
      ) : (
        <St.Container>
          {isChatModalOpen && (
            <St.ChatModalWrapper>
              {/* 채팅 모달 내용 */}
              <St.ChatModalHeader>
                <St.HeaderChattingModalTitle>채팅</St.HeaderChattingModalTitle>
                <div>
                  <St.HeaderPurchaseConfirmationButton>구매확정</St.HeaderPurchaseConfirmationButton>
                  <St.CloseButton onClick={() => setIsChatModalOpen(false)}>X</St.CloseButton>
                </div>
              </St.ChatModalHeader>
              <St.ChatModalBody>{renderMessages()}</St.ChatModalBody>
              <St.ChatModalFooter>
                <St.InputField
                  value={inputValue}
                  onChange={InputChanger}
                  onKeyDown={KeyPresshandler}
                  placeholder="메세지를 입력해주세요"
                />
                <St.SendButton onClick={sendDmMessage}>전송</St.SendButton>
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
                <St.MainMessage>
                  안녕하세요 !
                  <br />
                  책에 대한 모든 것을 담는 북커입니다 ⸜๑•⌔•๑ ⸝ <br />
                  궁금한 점이 있으신가요?{' '}
                  <St.AskButtonWrapper>
                    <St.AskButton
                      style={isAsk ? { display: 'none' } : { display: 'block' }}
                      onClick={() => setIsAsk(true)}>
                      문의하기
                    </St.AskButton>
                  </St.AskButtonWrapper>
                  <St.Contour />
                </St.MainMessage>
              </St.ChatTopBox>

              {isAsk ? (
                <>
                  <ChatLog />
                  <St.ChatInputWrapper>
                    <St.Input
                      placeholder="메세지를 입력해주세요"
                      value={askMessage}
                      onChange={onChangeMessageHandler}
                      onKeyDown={onKeyDownHandler}
                    />
                  </St.ChatInputWrapper>
                </>
              ) : (
                <>
                  {/* Chats 컴포넌트의 UI 추가 */}
                  <St.ChatListWrapper>{renderChatRoomsList()}</St.ChatListWrapper>
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
        {!ChatBtnOpen && newMessagesCount > 0 && (
          <St.NotificationBadge>
            {totalUnreadCount}
            {newMessagesCount}
          </St.NotificationBadge>
        )}
      </St.TalkButtonWrapper>
    </>
  );
};
export default Chat;
