


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