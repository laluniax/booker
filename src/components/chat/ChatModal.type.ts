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

// export type MessageTypes = {
//   id: number;
//   content: string;
//   author_id: string;
//   chat_id: string;
//   item_id: number;
//   others_id: string;
//   users?: UserTypes; // 사용자 닉네임을 포함할 수 있는 옵셔널 프로퍼티
//   created_at: number;
// };

// export type UserTypes = {
//   id: string;
//   email: string;
//   lastMessage?: string; // lastMessage 속성 추가 (옵셔널로 처리)
//   nickname: string;
// };
