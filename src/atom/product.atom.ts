import { atom } from 'recoil';
import { UnreadCount } from '../App';
import { MessageTypes } from '../types/types';
import { ChatRoomTypes } from './Product.type';

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

export const sendMessages = atom<MessageTypes[]>({
  key: 'sendMessagesState',
  default: [], // 초기값은 빈 배열
});

export const chatRoomsState = atom<ChatRoomTypes[]>({
  key: 'chatRoomsState',
  default: [], // 초기값은 빈 배열
});

export const isChatModalOpenState = atom({
  key: 'isChatModalOpenState',
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

export const UnreadCounts = atom<UnreadCount[]>({
  key: 'UnreadCounts',
  default: [],
});
