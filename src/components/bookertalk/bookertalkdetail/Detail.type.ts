import { Tables } from '../../../types/types';

export type PostsTypes = {
  content: string | null;
  created_at: string;
  genre_id: string | null;
  id: number;
  post_img: string[] | null;
  tags: string | null;
  title: string | null;
  user_id: string | null;
  users: Tables<'users'>;
};
