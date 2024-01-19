import { useMutation, useQueryClient } from 'react-query';
import { supabase } from './supabase.api';

import { useRecoilState } from 'recoil';
import { ChatId } from '../atom/product.atom';
import { ChatData } from '../components/qna/ChatModal';

// 공통으로 뺐어요(물론 .env를 쓰는게 더 바람직해요)

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
    console.log('챗확인1', userId);
    console.log('챗확인2', otherUserId);
    console.log('챗확인3', productId);
    // userId와 productId에 대한 챗방 존재 여부 확인
    const { data: chatUser } = await supabase
      .from('chats_users')
      .select('chat_id')
      .eq('user_id', userId)
      .eq('others_id', otherUserId)
      .eq('item_id', productId)
      .maybeSingle();

    // // otherUserId와 productId에 대한 챗방 존재 여부 확인
    // const { data: chatOther } = await supabase
    //     .from('chats_users')
    //     .select('chat_id')
    //     .eq('others_id', otherUserId)
    //     .eq('item_id', productId)
    //     .maybeSingle();

    //     console.log('챗방확인1',chatUser)
    //     console.log('챗방확인2',chatOther)
    // // 두 결과가 같은 chat_id를 가지고 있는지 확인
    if (chatUser && chatUser.chat_id) {
      setChatId(chatUser.chat_id);
      console.log('4챗방확인4');
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
        console.log('1', newChatData.id);

        const { error } = await supabase.from('chats_users').insert([
          { chat_id: newChatData.id, user_id: userId, others_id: otherUserId, item_id: productId },
          { chat_id: newChatData.id, others_id: userId, user_id: otherUserId,  item_id: productId },
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
    authorId,
    chatId,
  }: {
    content: string;
    authorId: string;
    chatId: string;
  }) => {
    console.log('1', content);
    console.log('1', authorId);
    console.log('1', chatId);

    const { error } = await supabase
      .from('messages')
      .insert([{ content: content, author_id: authorId, chat_id: chatId }]);

    if (error) {
      throw new Error('메시지 삽입 중 오류가 발생했습니다');
    }
  };
  console.log('메시지 성공');
  return useMutation(sendDirectMessage, {
    onSuccess: () => {
      // 메시지 전송 성공 시 취할 행동, 예: 쿼리 무효화나 업데이트
      queryClient.invalidateQueries('messages');
    },
  });
}

// // 컴포넌트에서 사용 예
//   function ChatComponent({ userId, otherUserId, productId }) {
//     const { mutate: createOrGetChat } = useCreateOrGetChat();

//     const handleCreateChat = () => {
//       createOrGetChat({ userId, otherUserId, productId });
//     };

//     // ...
//   }

// 메시지 전송 핸들러
//   const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       sendMessage({ content: inputValue, authorId: otherLoginPersonal, chatId });
//       setInputValue('');
//     }
//   };

//   // ... 나머지 컴포넌트 코드
// };

export {};

// const addTodo = async (newTodo) => {
//   await axios.post(`${SERVER_URI}/todos`, newTodo);
// };

// 쿼리 invalidation 사용 예시

// import { addTodo } from "../../../api/todos";
// import { QueryClient, useMutation } from "react-query";
// ...

// function Input() {
// ...
//     const queryClient = new QueryClient();

//     const mutation = useMutation(addTodo, {
//       onSuccess: () => {
//         // Invalidate and refresh
//         // 이렇게 하면, todos라는 이름으로 만들었던 query를
//         // invalidate 할 수 있어요.
//         queryClient.invalidateQueries("todos");
//       },
//   });

// Mutation.mutate()

// 쿼리 컴포넌트 사용 예시

// const { isLoading, isError, data } = useQuery("todos", getTodos);

// if (isLoading) {
//   return <p>로딩중입니다....!</p>;
// }

// if (isError) {
//   return <p>오류가 발생하였습니다...!</p>;
