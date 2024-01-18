export type Bestseller = {
  bestRank: number;
  title: string;
  author: string;
  cover: string;
  pubDate: string;
  description: string;
  categoryName: string;
  priceStandard: number;
};
// getCommentsInfoHandler 함수의 types
type CommentTypes = {
  comments: Comments[];
  content: string | null;
  created_at: string;
  genre_id: string | null;
  id: number;
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

type ProductsTypes = {
  category: string | null;
  content: string | null;
  created_at: string;
  id: number;
  price: string | null;
  product_grade: string | null;
  product_img: string[] | null;
  title: string | null;
  user_id: string | null;
  users: Tables<'users'>;
};

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          category_name: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          category_name?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          category_name?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      chats: {
        Row: {
          created_at: string;
          id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
        };
        Update: {
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      chats_users: {
        Row: {
          chat_id: number | null;
          created_at: string;
          id: number;
          user_id: string | null;
        };
        Insert: {
          chat_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          chat_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'chats_users_chat_id_fkey';
            columns: ['chat_id'];
            isOneToOne: false;
            referencedRelation: 'chats';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'chats_users_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      comments: {
        Row: {
          content: string | null;
          created_at: string;
          id: number;
          post_id: number | null;
          user_id: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          id?: number;
          post_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          id?: number;
          post_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      followers: {
        Row: {
          created_at: string;
          follower_id: string | null;
          id: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          follower_id?: string | null;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          follower_id?: string | null;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [];
      };
      genres: {
        Row: {
          category_id: number | null;
          created_at: string;
          genre_name: string | null;
          genre_uuid: string;
          id: number;
        };
        Insert: {
          category_id?: number | null;
          created_at?: string;
          genre_name?: string | null;
          genre_uuid?: string;
          id?: number;
        };
        Update: {
          category_id?: number | null;
          created_at?: string;
          genre_name?: string | null;
          genre_uuid?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'genres_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
        ];
      };
      independentBookStores: {
        Row: {
          address: string;
          adit_dc: string | null;
          category1: string;
          category2: string;
          closedDay_close_at: string | null;
          closedDay_guide: string | null;
          closedDay_open_at: string | null;
          gov_id: string;
          id: number;
          latitude: number;
          longitude: number;
          name: string;
          optn_dc: string | null;
          postal_code: number | null;
          saturday_close_at: string | null;
          saturday_open_at: string | null;
          sunday_close_at: string | null;
          sunday_open_at: string | null;
          tel_number: number | null;
          weekdays_close_at: string | null;
          weekdays_open_at: string | null;
        };
        Insert: {
          address: string;
          adit_dc?: string | null;
          category1: string;
          category2: string;
          closedDay_close_at?: string | null;
          closedDay_guide?: string | null;
          closedDay_open_at?: string | null;
          gov_id: string;
          id?: number;
          latitude: number;
          longitude: number;
          name: string;
          optn_dc?: string | null;
          postal_code?: number | null;
          saturday_close_at?: string | null;
          saturday_open_at?: string | null;
          sunday_close_at?: string | null;
          sunday_open_at?: string | null;
          tel_number?: number | null;
          weekdays_close_at?: string | null;
          weekdays_open_at?: string | null;
        };
        Update: {
          address?: string;
          adit_dc?: string | null;
          category1?: string;
          category2?: string;
          closedDay_close_at?: string | null;
          closedDay_guide?: string | null;
          closedDay_open_at?: string | null;
          gov_id?: string;
          id?: number;
          latitude?: number;
          longitude?: number;
          name?: string;
          optn_dc?: string | null;
          postal_code?: number | null;
          saturday_close_at?: string | null;
          saturday_open_at?: string | null;
          sunday_close_at?: string | null;
          sunday_open_at?: string | null;
          tel_number?: number | null;
          weekdays_close_at?: string | null;
          weekdays_open_at?: string | null;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          author_id: string | null;
          chat_id: number | null;
          content: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          author_id?: string | null;
          chat_id?: number | null;
          content?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          author_id?: string | null;
          chat_id?: number | null;
          content?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'messages_author_id_fkey';
            columns: ['author_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'messages_chat_id_fkey';
            columns: ['chat_id'];
            isOneToOne: false;
            referencedRelation: 'chats';
            referencedColumns: ['id'];
          },
        ];
      };
      posts: {
        Row: {
          content: string | null;
          created_at: string;
          genre_id: string | null;
          id: number;
          tags: string | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          genre_id?: string | null;
          id?: number;
          tags?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          genre_id?: string | null;
          id?: number;
          tags?: string | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'posts_genre_id_fkey';
            columns: ['genre_id'];
            isOneToOne: false;
            referencedRelation: 'genres';
            referencedColumns: ['genre_uuid'];
          },
          {
            foreignKeyName: 'posts_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          category: string | null;
          content: string | null;
          created_at: string;
          id: number;
          price: string | null;
          product_grade: string | null;
          product_img: string[] | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          category?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          price?: string | null;
          product_grade?: string | null;
          product_img?: string[] | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          category?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          price?: string | null;
          product_grade?: string | null;
          product_img?: string[] | null;
          title?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'products_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      qna: {
        Row: {
          content: string;
          created_at: string;
          id: number;
          message_type: string;
          room_id: string;
          sender_id: string | null;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: number;
          message_type?: string;
          room_id: string;
          sender_id?: string | null;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: number;
          message_type?: string;
          room_id?: string;
          sender_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'qna_room_id_fkey';
            columns: ['room_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'qna_sender_id_fkey';
            columns: ['sender_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      subcomments: {
        Row: {
          comment_id: number | null;
          content: string | null;
          created_at: string;
          id: number;
          user_id: string | null;
        };
        Insert: {
          comment_id?: number | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          comment_id?: number | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'subcomments_comment_id_fkey';
            columns: ['comment_id'];
            isOneToOne: false;
            referencedRelation: 'comments';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'subcomments_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          email: string | null;
          id: string;
          isAdmin: boolean | null;
          nickname: string | null;
          user_img: string | null;
        };
        Insert: {
          email?: string | null;
          id: string;
          isAdmin?: boolean | null;
          nickname?: string | null;
          user_img?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string;
          isAdmin?: boolean | null;
          nickname?: string | null;
          user_img?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_comments_info: {
        Args: {
          post_id_input: number;
        };
        Returns: {
          comment_id: number;
          comment_created_at: string;
          comment_post_id: number;
          comment_user_id: string;
          comment_content: string;
          user_email: string;
          user_nickname: string;
          user_img: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] & Database['public']['Views'])
    ? (Database['public']['Tables'] & Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never;

export type mapMarkerDataTypes = {
  id: number;
  gov_id: string;
  name: string;
  category1: string;
  category2: string;
  address: string;
  latitude: number;
  longitude: number;
  weekdays_open_at: number;
  weekdays_close_at: number;
  saturday_open_at: number;
  saturday_close_at: number;
  sunday_open_at: number;
  sunday_close_at: number;
  closedDay_open_at: number;
  closedDay_close_at: number;
  closedDay_guide: string;
  tel_num: number;
  optn_dc: string;
  adit_dc: string;
  postal_code: number;
};
