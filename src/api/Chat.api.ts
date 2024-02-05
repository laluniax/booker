
import { supabase } from './Supabase.api';
import { CreateOrGetChatTypes, SendDirectMessageTypes } from './Api.type';

// SupabaseService.js


const createOrGetChat = async ({ userId, otherUserId, productId }:CreateOrGetChatTypes) => {
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
  const { data: newChat, error: createError } = await supabase
    .from('chats')
    .insert([{}])
    .select() 
    .single();

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
}};

const sendMessage = async ({ content, author_id, chat_id, item_id }:SendDirectMessageTypes) => {
  const { error } = await supabase
    .from('messages')
    .insert([{ content, author_id, chat_id, item_id }]);

  if (error) throw new Error('메시지 삽입 중 오류가 발생했습니다');
};

export { createOrGetChat, sendMessage };


