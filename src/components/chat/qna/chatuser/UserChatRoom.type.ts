export type MessageProp = {
  messages: MessageList[];
};

export type MessageList = {
  created_at: string;
  content: string;
  sender_id: string;
  message_type: string;
  id: number;
};
