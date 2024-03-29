import { Tables } from '../../api/Supabase.type';

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

export type BestsellerTypes = {
  bestRank: number;
  title: string;
  author: string;
  cover: string;
  pubDate: string;
  description: string;
  categoryName: string;
  priceStandard: number;
  publisher: string;
  isbn: string;
};

export type BooksInfoTypes = {
  author: string;
  categoryName: string;
  cover: string;
  publisher: string;
  title: string;
  bestRank: number;
  isbn13: string;
};
