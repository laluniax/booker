import { atom } from 'recoil';
import { ChatRoomTypes, MessagePayload, MessageType, UnreadCount } from './Chat.type';

export const productState = atom({
  key: 'productState', // 고유한 키
  default: 0, // 기본값
});

export const person = atom({
  key: 'person', // 고유한 키
  default: '', // 기본값
});

export const ChatId = atom({
  key: 'ChatId', // 고유한 키
  default: '', // 기본값
});

export const mainChatModalOpen = atom({
  key: 'mainChatModalOpen', // 고유한 키
  default: false, // 기본값
});
export type productDetails = {
  image: string;
  title: string;
  price: number;
  id: number;
};
export type otherUserDetails = {
  nickname: string;
  user_img: string;
};

export const otherUserDetail = atom<otherUserDetails | null>({
  key: 'otherUserDetail',
  default: null, // Now null is a valid default value
});

export const productDetail = atom<productDetails | null>({
  key: 'productDetail',
  default: null, // Now null is a valid default value
});

export const sendMessages = atom<MessageType[]>({
  key: 'sendMessagesState',
  default: [], // 초기값은 빈 배열
});

export const chatRoomsState = atom<ChatRoomTypes[]>({
  key: 'chatRoomsState',
  default: [], // 초기값은 빈 배열
});

export const firstChatModalOpenState = atom({
  key: 'firstChatModalOpenState',
  default: false,
});

export const globalModalSwitch = atom({
  key: 'globalModalSwitch',
  default: false,
});

export const newMessagesCountState = atom({
  key: 'newMessagesCountState',
  default: 0,
});

export const shouldCountMessagesState = atom({
  key: 'shouldCountMessagesState',
  default: true,
});

export const loginUserState = atom({
  key: 'loginUserState',
  default: '',
});

export const selectedUserImages = atom({
  key: 'selectedUserImages',
  default: '',
});

export const UnreadCounts = atom<UnreadCount[]>({
  key: 'UnreadCounts',
  default: [],
});

export const updateMesaages = atom<MessagePayload>({
  key: 'updateMesaages',
  default: {
    commit_timestamp: '',
    errors: null, // Replace 'any' with a more specific type if possible
    eventType: '',
    new: {
      author_id: '',
      chat_id: '',
      content: '',
      created_at: '',
      id: 0,
      item_id: 0,
      others_id: '',
    },

    old: '', // Replace 'any' with a more specific type if possible
    schema: '',
    table: '',
  },
});
