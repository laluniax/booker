import { UnreadCount } from "./product.atom";



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
