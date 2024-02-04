import { atom } from 'recoil';
import { ChatRoomTypes } from './Product.type';

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


export const sendMessages = atom<MessageType[]>({
  key: 'sendMessagesState',
  default: [], // 초기값은 빈 배열
});

export const chatRoomsState = atom<ChatRoomTypes[]>({
  key: 'chatRoomsState',
  default: [], // 초기값은 빈 배열
});

export type ChatRoom = {
  author_id: string;
  chat_id: string;
  user_id: string;
  item_id: number;
  lastMessage: string;
  sendNickname: string;
  product_img: string;
  unread_count: UnreadCount;
  created_at: string;
  user_img: string;
};
export type UnreadCount = {
  chat_id: string;
  unread_count: number;
};


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
  default:{
    commit_timestamp: '',
    errors: null , // Replace 'any' with a more specific type if possible
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
  }
   
});
export type MessagePayload = {
  commit_timestamp: string;
  errors: null | any; // Replace 'any' with a more specific type if possible
  eventType: string;
  new: {
    author_id: string;
    chat_id: string;
    content: string;
    created_at: string;
    id: number;
    item_id: number;
    others_id: string | null;
  };
  
  old?: any; // Replace 'any' with a more specific type if possible
  schema: string;
  table: string;
};



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
