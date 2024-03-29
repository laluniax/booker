export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
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
          id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
        };
        Relationships: [];
      };
      chats_users: {
        Row: {
          chat_id: string | null;
          created_at: string;
          id: number;
          item_id: number | null;
          others_id: string | null;
          user_id: string | null;
        };
        Insert: {
          chat_id?: string | null;
          created_at?: string;
          id?: number;
          item_id?: number | null;
          others_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          chat_id?: string | null;
          created_at?: string;
          id?: number;
          item_id?: number | null;
          others_id?: string | null;
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
            foreignKeyName: 'chats_users_others_id_fkey';
            columns: ['others_id'];
            isOneToOne: false;
            referencedRelation: 'users';
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
      follows: {
        Row: {
          created_at: string;
          follow_from: string | null;
          follow_id: string | null;
          follow_to: string | null;
          id: number;
        };
        Insert: {
          created_at?: string;
          follow_from?: string | null;
          follow_id?: string | null;
          follow_to?: string | null;
          id?: number;
        };
        Update: {
          created_at?: string;
          follow_from?: string | null;
          follow_id?: string | null;
          follow_to?: string | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'follows_follow_to_fkey';
            columns: ['follow_to'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
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
          chat_id: string | null;
          content: string | null;
          created_at: string;
          id: number;
          is_read: boolean | null;
          item_id: number | null;
          others_id: string | null;
        };
        Insert: {
          author_id?: string | null;
          chat_id?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          is_read?: boolean | null;
          item_id?: number | null;
          others_id?: string | null;
        };
        Update: {
          author_id?: string | null;
          chat_id?: string | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          is_read?: boolean | null;
          item_id?: number | null;
          others_id?: string | null;
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
      post_likes: {
        Row: {
          created_at: string | null;
          id: number;
          post_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          post_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          post_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'post_likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'posts';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'post_likes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
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
          post_img: string[] | null;
          tags: string[] | null;
          title: string | null;
          user_id: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          genre_id?: string | null;
          id?: number;
          post_img?: string[] | null;
          tags?: string[] | null;
          title?: string | null;
          user_id?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          genre_id?: string | null;
          id?: number;
          post_img?: string[] | null;
          tags?: string[] | null;
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
      product_likes: {
        Row: {
          created_at: string;
          id: number;
          post_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          post_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          post_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'product_likes_post_id_fkey';
            columns: ['post_id'];
            isOneToOne: false;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'product_likes_user_id_fkey';
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
          onsale: boolean | null;
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
          onsale?: boolean | null;
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
          onsale?: boolean | null;
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
          nickname: string | null;
          room_id: string;
          sender_id: string | null;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: number;
          message_type?: string;
          nickname?: string | null;
          room_id: string;
          sender_id?: string | null;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: number;
          message_type?: string;
          nickname?: string | null;
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
          intro_text: string | null;
          isAdmin: boolean | null;
          nickname: string | null;
          user_img: string | null;
        };
        Insert: {
          email?: string | null;
          id: string;
          intro_text?: string | null;
          isAdmin?: boolean | null;
          nickname?: string | null;
          user_img?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string;
          intro_text?: string | null;
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
      count_unread_messages: {
        Args: {
          user_id: string;
        };
        Returns: {
          chat_id: string;
          unread_count: number;
        }[];
      };
      mark_messages_as_read: {
        Args: {
          p_chat_id: string;
          p_user_id: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

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
