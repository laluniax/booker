import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 가져오기
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import defaultImage from '../../../assets/profile/defaultprofileimage.webp';

import { markChatAsRead } from '../../../api/Chat.api';
import { supabase } from '../../../api/Supabase.api';
import { MessagePayload } from '../../../state/atom/Chat.type';
import {
  ChatId,
  UnreadCounts,
  chatRoomsState,
  mainChatModalOpen,
  otherUserDetail,
  person,
  productDetail,
  productState,
  updateMesaages,
} from '../../../state/atom/chatAtom';
import * as St from '../market/ChatRoomList.styled';

const ChatRoomList = () => {
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [productId, setProductId] = useRecoilState(productState);
  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(mainChatModalOpen);
  const [otherUserDetails, setOtherUserDetails] = useRecoilState(otherUserDetail);
  const [productDetails, setProductDetails] = useRecoilState(productDetail);
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const [unreadCounts, setUnreadCounts] = useRecoilState(UnreadCounts); //프롭스가 위로는 못가는데?
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);


  
  useEffect(() => {
    RenderChatRoomsList();
  }, [chatId, updateMesaage]);

  useEffect(() => {
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
          setUpdateMesaage(payload as MessagePayload);
        },
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, []);
  

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

  // 채팅리스트 보여주기
  const RenderChatRoomsList = () => {
    const filteredChatRooms = chatRooms.filter((chatRoom) => chatRoom.user_id === LoginPersonal);

    // 채팅 내역이 없을 경우 표시할 메시지
    if (filteredChatRooms.length === 0) {
      return <St.NoChatMessage>채팅 내역이 없습니다.</St.NoChatMessage>;
    }

    // 채팅 내역이 있을 경우, 리스트를 렌더링
    return filteredChatRooms.map((chatRoom) => {
      // 해당 채팅방에 대한 읽지 않은 메시지 수를 찾음
      const unreadInfo = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id);
      const lastMessageTimeAgo = chatRoom.created_at ? getTimeDifference(chatRoom.created_at) : 'No messages yet.';
      return (
        <St.UserItem
          key={chatRoom.chat_id}
          onClick={() => DmClickhandler(chatRoom.item_id, chatRoom.chat_id, chatRoom.author_id)}>
          <St.AlarmUserWrapper>
            {unreadInfo && unreadInfo.unread_count > 0 && <St.AlarmDetail>{unreadInfo.unread_count}</St.AlarmDetail>}
            <St.UserImage
              src={chatRoom?.user_img ? chatRoom.user_img : defaultImage}
              onError={(e) => (e.currentTarget.src = defaultImage)}
            />
          </St.AlarmUserWrapper>

          <St.UserInfo>
            <St.NicknameMessageTimeWrapper>
              <St.ChatListUserNickname>{chatRoom.sendNickname}</St.ChatListUserNickname>
              <St.MessageTime>{lastMessageTimeAgo}</St.MessageTime>
            </St.NicknameMessageTimeWrapper>
            {/* 해당 채팅방의 읽지 않은 메시지 수가 있으면 알림 배지 표시 */}

            <St.UserLastMessage>{chatRoom.lastMessage || 'No messages yet.'}</St.UserLastMessage>
          </St.UserInfo>
          <St.ProductImage
            src={chatRoom.product_img || defaultImage}
            onError={(e) => (e.currentTarget.src = defaultImage)}
          />
        </St.UserItem>
      );
    });
  };

  const DmClickhandler = async (item_id: number, chat_id: string, author_id: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user && user.email) {
      try {
        markChatAsRead(chat_id, user.id);
        setChatId(chat_id);
        setLoginPersonal(user.id);
        setProductId(item_id);

        // 현재 채팅방의 사용자들을 조회합니다.
        const { data: chatUsers, error: chatUsersError } = await supabase
          .from('chats_users')
          .select('user_id')
          .eq('chat_id', chat_id);

        if (chatUsersError) {
          console.error('Chat users fetching error:', chatUsersError);
          return;
        }

        // 현재 로그인한 사용자가 아닌 다른 사용자의 ID를 찾습니다.
        const otherUserId = chatUsers.find((chatUser) => chatUser.user_id !== user.id)?.user_id;

        if (!otherUserId) {
          console.error('No other user found in this chat');
          return;
        }

        // 찾은 다른 사용자의 ID로 사용자 정보를 조회합니다.
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select('nickname, user_img')
          .eq('id', otherUserId)
          .single();

        if (userError) {
          console.error('Error fetching other user data:', userError);
          return;
        }

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
  };

  return (
    <>
      <St.ChatContentWrapper>
        <St.ChatContentTitle>중고거래 전용 채팅 리스트</St.ChatContentTitle>
        <St.ChatContent>(중고거래에서 채팅을 시작하세요!)</St.ChatContent>
      </St.ChatContentWrapper>
      <St.ChatListWrapper>{RenderChatRoomsList()}</St.ChatListWrapper>
    </>
  );
};

export default ChatRoomList;
