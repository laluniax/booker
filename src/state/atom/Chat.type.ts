


export type ProductImageType = string | null;

export type ChatRoomTypes = {
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

export type MessageProps = {
  isoutgoing: boolean;
};

export type Message = {
  id: number;
  content: string;
  author_id: string;
  chat_id: string;
  created_at: string;
};

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
