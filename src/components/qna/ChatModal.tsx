import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSendMessage } from '../../api/chatApi';
import { supabase } from '../../api/supabase.api';
import {
  ChatId,
  UnreadCounts,
  chatRoomsState,
  globalModalSwitch,
  isChatModalOpenState,
  newMessagesCountState,
  otherPerson,
  person,
  productState,
  sendMessages,
} from '../../atom/product.atom';

import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 가져오기
import relativeTime from 'dayjs/plugin/relativeTime.js';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/auth.context';
import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatModal.styled';
dayjs.extend(relativeTime); // relativeTime 플러그인 활성화
dayjs.locale('ko'); // 한국어 로케일 설정

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

type productDetails = {
  image: string;
  title: string;
  price: number;
  id: number;
};
type otherUserDetails = {
  nickname: string;
  user_img: string;
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
  // const [totalUnreadCount, setTotalUnreadCount] = useState<number>(0);
  const [unreadCounts, setUnreadCounts] = useRecoilState(UnreadCounts);
  // 상대방 사용자의 상세 정보와 제품 상세 정보를 위한 상태(state)를 가정합니다
  const [otherUserDetails, setOtherUserDetails] = useState<otherUserDetails>();

  const [productDetails, setProductDetails] = useState<productDetails>();

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

  //입력값 가져오기
  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // DM 클릭 핸들러
  const DmClickhandler = async (item_id: number, chat_id: string, author_id: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user && user.email) {
      if (user) {
        markChatAsRead(chat_id, user.id);
        setChatId(chat_id);
        setLoginPersonal(user.id);
        // setOtherLoginPersonal(otherUserId);
        setProductId(item_id);

        try {
          markChatAsRead(chat_id, user.id);
          setChatId(chat_id);
          setLoginPersonal(user.id);
          setProductId(item_id);

          // 'users' 테이블에서 'author_id'를 사용하여 다른 사용자의 정보를 가져옵니다.
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('nickname, user_img')
            .eq('id', author_id)
            .single();

          // products 테이블에서 제품 정보를 가져옵니다.
          const { data: productData } = await supabase
            .from('products')
            .select('title, price, product_img,id')
            .eq('id', item_id)
            .single();

          if (userData) {
            setOtherUserDetails({
              nickname: userData.nickname,
              user_img: userData.user_img,
            });
          }

          if (productData) {
            setProductDetails({
              image: productData.product_img,
              title: productData.title,
              price: productData.price,
              id: productData.id,
            });
          }

          setIsChatModalOpen(true);
        } catch (error) {
          console.error('Error fetching user or product details:', error);
        }
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

  //알람 읽음처리
  async function markChatAsRead(chatId: string, userId: string) {
    const p_chat_id = chatId;
    const p_user_id = userId;
    const { data, error } = await supabase.rpc('mark_messages_as_read', { p_chat_id, p_user_id });

    console.log('null이면 읽기완료', error);
    if (error) {
      console.error('Error marking messages as read:', error);
    }
  }
  const navigate = useNavigate();
  // // 채팅 헤더를 렌더링하는 함수입니다
  const renderChatHeader = () => {
    // useNavigate 훅으로부터 navigate 함수를 얻음

    // 제품 상세 페이지로 이동하는 함수
    const navigateToProductPage = () => {
      const productId = productDetails?.id; // productDetails로부터 제품의 ID를 얻음
      if (productId) {
        navigate(`/product/${productId}`); // 제품 ID를 사용하여 경로를 생성하고, 해당 경로로 이동
      }
    };
    // console.log('productId',productId)
    return (
      <St.ChatModalHeader>
        <St.UserInfoSection>
          <St.CloseButton onClick={() => setIsChatModalOpen(false)}>←</St.CloseButton>
          <St.UserImage src={otherUserDetails?.user_img} alt="user" />
          <St.UserNickname>{otherUserDetails?.nickname}</St.UserNickname>
        </St.UserInfoSection>
        <St.ProductInfoSection>
          <St.ProductImage onClick={navigateToProductPage} src={productDetails?.image} alt="product" />
          <div>
            <St.ProductTitle>제목:{productDetails?.title}</St.ProductTitle>
            <St.ProductPrice>가격:{productDetails?.price}</St.ProductPrice>
          </div>
        </St.ProductInfoSection>
      </St.ChatModalHeader>
    );
  };

  //채팅창 메시지 보여주기
  const renderMessages = () => {
    let lastDate: dayjs.Dayjs | null = null;

    return (
      <>
        {messages
          .filter((message: MessageType) => message.chat_id === chatId)
          .sort((a: MessageType, b: MessageType) => a.id - b.id) // 오름차순 정렬
          .map((message: MessageType) => {
            const currentDate = dayjs(message.created_at);
            const formattedTime = currentDate.format('hh:mm A'); // Format time with AM/PM
            const formattedDate = currentDate.format('YYYY-MM-DD dddd'); // Format date with day of the week
            let dateLabel = null;

            // Check if the date has changed
            if (lastDate === null || !currentDate.isSame(lastDate, 'day')) {
              dateLabel = <St.DateLabel>{formattedDate}</St.DateLabel>; // Use DateLabel
              lastDate = currentDate;
            }

            return (
              <>
                {dateLabel} {/* Display the date label if the date has changed */}
                {message.author_id !== LoginPersonal && <St.NicknameLabel>{message.users?.nickname}</St.NicknameLabel>}
                <St.MessageComponent key={message.id} isOutgoing={message.author_id === LoginPersonal}>
                  {message.content} {formattedTime}
                </St.MessageComponent>
              </>
            );
          })}
      </>
    );
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

  //지금을 기점으로 초분시일달년
  const getTimeDifference = (date: string) => {
    const now = dayjs();
    const messageDate = dayjs(date);

    const minutesDiff = now.diff(messageDate, 'minute');
    const hoursDiff = now.diff(messageDate, 'hour');
    const daysDiff = now.diff(messageDate, 'day');
    const monthsDiff = now.diff(messageDate, 'month');

    if (monthsDiff > 0) {
      return `${monthsDiff}달 전`;
    } else if (daysDiff > 0) {
      return `${daysDiff}일 전`;
    } else if (hoursDiff > 0) {
      return `${hoursDiff}시간 전`;
    } else if (minutesDiff > 0) {
      return `${minutesDiff}분 전`;
    } else {
      return '방금 전';
    }
  };

  //채팅리스트 보여주기
  const renderChatRoomsList = () => {
    return chatRooms
      .filter((chatRoom) => chatRoom.user_id === LoginPersonal)
      .map((chatRoom) => {
        // 해당 채팅방에 대한 읽지 않은 메시지 수를 찾음
        const unreadInfo = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id);

        const lastMessageTimeAgo = chatRoom.created_at ? getTimeDifference(chatRoom.created_at) : 'No messages yet.';
        return (
          <St.UserItem
            key={chatRoom.chat_id}
            onClick={() => DmClickhandler(chatRoom.item_id, chatRoom.chat_id, chatRoom.author_id)}>
            <St.UserImage src={chatRoom.user_img || '기본 이미지 경로'} alt="user image" />

            <St.UserInfo>
              <St.UserNickname>
                {chatRoom.sendNickname}
                {/* 해당 채팅방의 읽지 않은 메시지 수가 있으면 알림 배지 표시 */}
                {unreadInfo && unreadInfo.unread_count > 0 && (
                  <St.NotificationBadge>{unreadInfo.unread_count}</St.NotificationBadge>
                )}
              </St.UserNickname>
              <St.UserLastMessage>
                {chatRoom.lastMessage || 'No messages yet.'} {lastMessageTimeAgo}{' '}
              </St.UserLastMessage>
            </St.UserInfo>
            <St.ProductImage src={chatRoom.product_img || '기본 물품 이미지 경로'} alt="product image" />
          </St.UserItem>
        );
      });
  };

  //총 안읽은 메시지
  const totalUnreadCount = chatRooms
    .filter((chatRoom) => chatRoom.user_id === LoginPersonal) // 현재 사용자가 포함된 채팅방만 필터링
    .reduce((total, chatRoom) => {
      const unreadInfo = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id);
      return total + (unreadInfo ? unreadInfo.unread_count : 0);
    }, 0);

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
              {renderChatHeader()}
              {/* 채팅 모달 내용 */}
              {/* <St.ChatModalHeader>
                <St.CloseButton onClick={() => setIsChatModalOpen(false)}>←</St.CloseButton>
                <St.HeaderChattingModalTitle>채팅</St.HeaderChattingModalTitle>
                <div>
                  <St.HeaderPurchaseConfirmationButton>구매확정</St.HeaderPurchaseConfirmationButton>
                </div>
              </St.ChatModalHeader> */}
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
                  <St.ChatListWrapper>
                    중고거래 전용 채팅 리스트, 중고거래에서 채팅을 시작하세요.{renderChatRoomsList()}
                  </St.ChatListWrapper>
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
        {!ChatBtnOpen && totalUnreadCount > 0 && (
          <St.NotificationBadge>
            {totalUnreadCount}
            {/* {newMessagesCount} */}
          </St.NotificationBadge>
        )}
      </St.TalkButtonWrapper>
    </>
  );
};
export default Chat;
