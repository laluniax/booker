//ChatApi
export type SendDirectMessageTypes = {
  content: string;
  author_id: string;
  chat_id: string;
  item_id: number;
};

export type CreateOrGetChatTypes = {
  userId: string;
  otherUserId: string;
  productId: number;
};

//Supabase
// Market
export type ProductTypes = {
  userId: string;
  title: string;
  content: string;
  price: string;
  category: string;
  productGrade: string;
  onSale: boolean;
};

export type PostTypes = {
  title: string;
  content: string | undefined;
  tags: string[];
  userId: string;
  genreUuid: string;
  postImg: string[];
};
