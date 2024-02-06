// getCommentsInfoHandler 함수의 types
type CommentTypes = {
  comments: Comments[];
  content: string | null;
  created_at: string;
  genre_id: string | null;
  id: number;
  post_img: string[] | null;
  tags: string | null;
  title: string | null;
  user_id: string | null;
};
type Comments = {
  content: string | null;
  created_at: string;
  id: number;
  post_id: number | null;
  user_id: string | null;
  users: Tables<'users'>;
};

// getSubCommentsInfoHandler 함수의 types
type SubCommentTypes = {
  content: string | null;
  created_at: string;
  id: number;
  post_id: number | null;
  user_id: string | null;
  subcomments: SubComments[];
};
type SubComments = {
  comment_id: number | null;
  content: string | null;
  created_at: string;
  id: number;
  user_id: string | null;
  users: Tables<'users'>;
};

type FollowsTypes = {
  created_at: string;
  follow_from: string | null;
  follow_id: string | null;
  follow_to: string | null;
  id: number;
  users: Tables<'users'>;
};

type PostsLikesTypes = {
  created_at: string | null;
  id: number;
  post_id: number;
  user_id: string;
  posts: Tables<'posts'>;
};

type ProductsLikesTypes = {
  created_at: string;
  id: number;
  post_id: number;
  user_id: string;
  products: Tables<'products'>;
};

export type ProductsTypes = {
  category: string | null;
  content: string | null;
  created_at: string;
  id: number;
  onsale: boolean | null;
  price: string | null;
  product_grade: string | null;
  product_img: string[] | null;
  title: string | null;
  user_id: string | null;
  users: Tables<'users'>;
};

export type Message = {
  created_at: string;
  content: string;
  sender_id: string;
  message_type: string;
  id: number;
};

export type MessageTypes = {
  created_at: string;
  content: string;
  sender_id: string;
  message_type: string;
  id: number;

  author_id: string;
  chat_id: string;
  item_id: number;
  others_id: string;
  users?: UserTypes; // 사용자 닉네임을 포함할 수 있는 옵셔널 프로퍼티
};
