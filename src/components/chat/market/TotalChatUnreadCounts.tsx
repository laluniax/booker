import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { supabase } from '../../../api/Supabase.api';
import { MessagePayload } from '../../../state/atom/Chat.type';
import {
  ChatId,
  UnreadCounts,
  chatRoomsState,
  firstChatModalOpenState,
  newMessagesCountState,
  person,
  updateMesaages,
} from '../../../state/atom/chatAtom';
import * as St from '../market/TotalChatUnreadCounts.styled';

const TotalChatUnreadCounts = () => {
  const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
  const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(firstChatModalOpenState);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [unreadCounts, setUnreadCounts] = useRecoilState(UnreadCounts);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);
  const [newMessagesCount, setNewMessagesCount] = useRecoilState(newMessagesCountState);

  //총 안읽은 메시지
  const totalUnreadCount = chatRooms
    ?.filter((chatRoom) => chatRoom.user_id === LoginPersonal) // 현재 사용자가 포함된 채팅방만 필터링
    .reduce((total, chatRoom) => {
      const unreadInfo = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id);
      return total + (unreadInfo ? unreadInfo.unread_count : 0);
    }, 0);
  //메시지 카운팅

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
      console.error('읽지 않은 수 업데이트 오류:', error);
    } else {
      setUnreadCounts(data);
    }
  }

  useEffect(() => {
    updateUnreadCount();
  }, [chatId, newMessagesCount, updateMesaage]);

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
          setNewMessagesCount((prev) => prev + 1);

          // 새 메시지 카운트를 증가시킬지 결정하는 함수 호출
          handleNewMessage(payload as MessagePayload);
        },
      )
      .subscribe();

    // 채팅방 변경사항을 감지할 채널 구독
    const chatChannel = supabase
      .channel('chat-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {})
      .subscribe();

    return () => {
      changes.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, []);

  return <>{!ChatBtnOpen && totalUnreadCount > 0 && <St.NotificationBadge>{totalUnreadCount}</St.NotificationBadge>}</>;
};

export default TotalChatUnreadCounts;
