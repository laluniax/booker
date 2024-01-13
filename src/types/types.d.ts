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
          content: string | null;
          id: number;
          isQuestion: boolean;
          sender_id: string | null;
        };
        Insert: {
          content?: string | null;
          id?: number;
          isQuestion?: boolean;
          sender_id?: string | null;
        };
        Update: {
          content?: string | null;
          id?: number;
          isQuestion?: boolean;
          sender_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'qna_sender_id_fkey';
            columns: ['sender_id'];
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
      [_ in never]: never;
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
