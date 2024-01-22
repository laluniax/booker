import { useMutation, useQueryClient } from 'react-query';
import { supabase } from './supabase.api';

import { useRecoilState } from 'recoil';
import { ChatId } from '../atom/product.atom';
import { ChatData } from '../components/qna/ChatModal';

// 챗방 생성 또는 가져오기 로직을 커스텀 훅으로 분리
export function useCreateOrGetChat() {
  const queryClient = useQueryClient();
  const [chatId, setChatId] = useRecoilState(ChatId);

  const createOrGetChat = async ({
    userId,
    otherUserId,
    productId,
  }: {
    userId: string;
    otherUserId: string;
    productId: number;
  }) => {
    // userId와 productId에 대한 챗방 존재 여부 확인
    const { data: chatUser } = await supabase
      .from('chats_users')
      .select('chat_id')
      .eq('user_id', userId)
      .eq('others_id', otherUserId)
      .eq('item_id', productId)
      .maybeSingle();

    // // 두 결과가 같은 chat_id를 가지고 있는지 확인
    if (chatUser && chatUser.chat_id) {
      setChatId(chatUser.chat_id);
      // console.log('같은챗방아이디',chatUser.chat_id)
    } else {
      // 기존 챗방이 없으므로 새 챗방 생성
      const { data: newChatData, error: newChatError } = (await supabase
        .from('chats')
        .insert({}) //id: ChatId
        .select() //데이터가져오기.
        .single()) as { data: ChatData; error: any }; // 타입 단언 사용
      // 챗방을 생성하고 바로 그 데이터를 반환하는 것을 가정

      if (newChatError) {
        console.error('새 챗방 생성 중 오류 발생:', newChatError);
        return;
      }

      // 새 챗방에 두 사용자를 chats_users에 추가
      if (newChatData) {
        const { error } = await supabase.from('chats_users').insert([
          { chat_id: newChatData.id, user_id: userId, others_id: otherUserId, item_id: productId },
          // { chat_id: newChatData.id, others_id: userId, user_id: otherUserId, item_id: productId },
        ]);

        if (error) {
          console.error('새 챗방에 사용자 추가 중 오류 발생:', error);
          return;
        }

        // ChatId를 새 챗방의 id로 설정
        setChatId(newChatData.id);
      }
    }
  };

  return useMutation(createOrGetChat, {
    onSuccess: () => {
      // 챗방 관련 쿼리를 무효화하거나 업데이트
      queryClient.invalidateQueries('chats');
    },
  });
}

// 메시지 전송 로직을 커스텀 훅으로 분리
export function useSendMessage() {
  const queryClient = useQueryClient();
  const sendDirectMessage = async ({
    content,
    author_id,
    chat_id,
    item_id,
    others_id,
  }: {
    content: string;
    author_id: string;
    chat_id: string;
    item_id: number;
    others_id: string;
  }) => {
    const { error } = await supabase
      .from('messages')
      .insert([{ content, author_id, chat_id, item_id, others_id }]);

    if (error) {
      throw new Error('메시지 삽입 중 오류가 발생했습니다');
    }
  };

  return useMutation(sendDirectMessage, {
    onSuccess: () => {
      // 메시지 전송 성공 시 취할 행동, 예: 쿼리 무효화나 업데이트
      queryClient.invalidateQueries('messages');
    },
  });
}


