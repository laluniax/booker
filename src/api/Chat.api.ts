import { CreateOrGetChatTypes, SendDirectMessageTypes } from './Api.type';
import { supabase } from './Supabase.api';

//채팅방 확인 및 생성
const createOrGetChat = async ({ userId, otherUserId, productId }: CreateOrGetChatTypes) => {
  // userId와 otherUserId에 대한 챗방 존재 여부 확인
  let { data: chatUser, error } = await supabase
    .from('chats_users')
    .select('chat_id')
    .or(`user_id.eq.${userId},others_id.eq.${otherUserId}`)
    .eq('item_id', productId)
    .maybeSingle();

  if (error) throw new Error(error.message);

  if (chatUser) return { chat_id: chatUser.chat_id }; // 존재하는 챗방 ID 반환

  // 새 챗방 생성 로직
  const { data: newChat, error: createError } = await supabase.from('chats').insert([{}]).select().single();

  if (createError) throw new Error(createError.message);

  // 새 챗방에 사용자 추가 로직 (생략 가능)
  if (newChat) {
    const { error } = await supabase.from('chats_users').insert([
      { chat_id: newChat.id, user_id: userId, item_id: productId },
      { chat_id: newChat.id, user_id: otherUserId, item_id: productId },
    ]);

    if (error) {
      console.error('새 챗방에 사용자 추가 중 오류 발생:', error);
      return;
    }

    return { chat_id: newChat.id }; // 새 챗방 ID 반환
  }
};

//메시지 보내기
const sendMessage = async ({ content, author_id, chat_id, item_id }: SendDirectMessageTypes) => {
  const { error } = await supabase.from('messages').insert([{ content, author_id, chat_id, item_id }]);

  if (error) throw new Error('메시지 삽입 중 오류가 발생했습니다');
};

//해당 유저의 모든 채팅방과 상세 정보 가져오기
const fetchAllChatRooms = async (userId: string) => {
  try {
    // 사용자 ID로 채팅방 ID 조회
    const { data: userChatRooms, error: userChatRoomsError } = await supabase
      .from('chats_users')
      .select('chat_id')
      .eq('user_id', userId);

    if (userChatRoomsError) throw userChatRoomsError;

    // 해당 채팅방 ID에 대한 상세 정보 조회
    const updatedChatRooms = await Promise.all(
      userChatRooms.map(async ({ chat_id }) => {
        // 각 채팅방에 대한 상세 정보 가져오기
        return fetchLastMessageAndUserInfo(chat_id);
      }),
    );

    // 결과 배열을 평탄화하고 반환
    return updatedChatRooms.flat();
  } catch (error) {
    console.error('Error fetching chat rooms for user:', userId, error);
    throw error;
  }
};

//채팅리스트 정보
const fetchLastMessageAndUserInfo = async (chatRoomId: string) => {
  try {
    // 마지막 메시지 조회
    const { data: lastMessageData, error: lastMessageError } = await supabase
      .from('messages')
      .select('content, author_id, item_id, created_at')
      .eq('chat_id', chatRoomId)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (lastMessageError) throw lastMessageError;

    // 채팅방에 속한 사용자 정보 조회
    const { data: chatUsersData, error: chatUsersError } = await supabase
      .from('chats_users')
      .select('user_id, item_id')
      .eq('chat_id', chatRoomId);

    if (chatUsersError) throw chatUsersError;

    // 비동기적으로 각 사용자 및 제품 정보 조회
    const updatedChatUsersData = await Promise.all(
      chatUsersData.map(async (chatUser) => {
        let sendNickname = 'Unknown';
        let user_img = 'Unknown';
        let product_img = 'Unknown';

        // 사용자 정보 조회
        if (lastMessageData && lastMessageData.author_id) {
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select('nickname, user_img')
            .eq('id', lastMessageData.author_id)
            .maybeSingle();

          if (!userError && userData) {
            sendNickname = userData.nickname;
            user_img = userData.user_img;
          }
        }

        // 제품 정보 조회
        if (lastMessageData && lastMessageData.item_id) {
          const { data: productData, error: productError } = await supabase
            .from('products')
            .select('product_img')
            .eq('id', lastMessageData.item_id)
            .maybeSingle();

          if (!productError && productData) {
            product_img = productData.product_img;
          }
        }

        return {
          chat_id: chatRoomId,
          user_id: chatUser.user_id || 'Unknown',
          item_id: chatUser.item_id || 'Unknown',
          lastMessage: lastMessageData ? lastMessageData.content : 'No message',
          sendNickname,
          user_img,
          product_img,
          author_id: lastMessageData ? lastMessageData.author_id : 'Unknown',
          created_at: lastMessageData ? lastMessageData.created_at : 'No message',
        };
      }),
    );

    return updatedChatUsersData;
  } catch (error) {
    console.error('Error fetching last message and user info for chat room:', chatRoomId, error);
    throw error;
  }
};

//알람 읽음처리
const markChatAsRead = async (chatId: string, userId: string) => {
  const p_chat_id = chatId;
  const p_user_id = userId;
  const { data, error } = await supabase.rpc('mark_messages_as_read', { p_chat_id, p_user_id });

  if (error) {
    console.error('Error marking messages as read:', error);
  }
};

// 채팅방 메시지 가져오기 함수 수정
const fetchMessages = async (chatId: string) => {
  if (!chatId) {
    throw new Error('Chat ID is required');
  }
  let { data: messagesData, error } = await supabase.from('messages').select('*, users(*)').eq('chat_id', chatId);

  if (error) {
    console.error('메시지를 가져오는 중 오류가 발생했습니다:', error);
    throw error;
  }

  return messagesData;
};

export { createOrGetChat, fetchAllChatRooms, fetchLastMessageAndUserInfo, fetchMessages, markChatAsRead, sendMessage };
