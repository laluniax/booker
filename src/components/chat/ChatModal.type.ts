export type MessageListTypes = {
  created_at: string;
  content: string;
  sender_id: string;
  message_type: string;
  id: number;
};

export type ChatDataType = {
  id: string;
};

export type ProductDetailTypes = {
  image: string;
  title: string;
  price: number;
  id: number;
};

export type OtherUserDetailTypes = {
  nickname: string;
  user_img: string;
};

export type QnaMessageType = {
  id: number;
  message: string;
  room_id: string;
};

export type AdminChatInputProps = {
  messageTable: () => Promise<void>;
  currentQnaRoomId: string;
};

export type adminCHatMessages = {
  content: string;
  created_at: string;
  id: number;
  message_type: string;
  nickname: string;
  room_id: string;
  sender_id: string;
};

export type AdminChatBodyProps = {
  messages: adminCHatMessages[];
  messageTable: () => Promise<void>;
};
export type QnaTableRow = {
  nickname: string;
  room_id: string;
};
