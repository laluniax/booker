import { atom } from 'recoil';
import { MessageType } from '../components/qna/ChatModal';

// import { selector } from 'recoil';

export const productState = atom({
  key: 'productState', // 고유한 키
  default: 0, // 기본값
});
export const person = atom({
  key: 'person', // 고유한 키
  default: '', // 기본값
});
export const otherPerson = atom({
  key: 'otherPerson', // 고유한 키
  default: '', // 기본값
});
export const ChatId = atom({
  key: 'ChatId', // 고유한 키
  default: '', // 기본값
});

export const sendMessages = atom<MessageType[]>({
  key: 'sendMessagesState',
  default: [], // 초기값은 빈 배열
});

export const chatRoomsState = atom<ChatRoom[]>({
  key: 'chatRoomsState',
  default: [], // 초기값은 빈 배열
});

export type ChatRoom = {
  chat_id: string;
  sendNickname?: string; // 추가됨
  lastMessage?: string;
  others_id: string;
  item_id: number;
  user_id: string;
};

export const showChatModal = atom({
  key: 'showChatModal',
  default: false,
});

export const globalModalSwitch = atom({
  key: 'globalModalSwitch',
  default: false,
});

// // ======================================
// // 사용법
// export const textState = atom({
//   key: 'textState', // 고유한 키
//   default: '', // 기본값
// });

// export const charCountState = selector({
//   key: 'charCountState', // 고유한 키
//   get: ({get}) => {
//     const text = get(textState);
//     return text.length;
//   },
// });

// 쓰는 법
// const [productId, setProductId] = useRecoilState(productState);
// const productId = useRecoilValue(productState);
