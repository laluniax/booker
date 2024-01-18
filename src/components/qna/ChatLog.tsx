import { useEffect, useState } from 'react';
import { supabase } from '../../api/supabase.api';
import { useAuth } from '../../contexts/auth.context';
import * as St from './ChatLog.styled';

interface Message {
  created_at: string;
  content: string;
  sender_id: string;
  message_type: string;
  id: number;
}

const ChatLog = ({ messageEndRef }: { messageEndRef: React.RefObject<HTMLDivElement> }) => {
  const auth = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!auth.session) return;

    getQnaLog(auth.session.user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [auth.session, messages]);

  //qna table 가져오는 함수
  const getQnaLog = async (roomId: string) => {
    if (!auth.session) return;

    const response = await supabase.from('qna').select('*').eq('room_id', roomId);
    const result = response.data;
    if (result) {
      setMessages(result);
    } else {
      setMessages([]);
    }
  };

  return (
    <St.Container>
      {messages.map((message) => (
        <div key={message.id}>
          {message.message_type === 'question' ? (
            <St.CustomerChatLogWrapper>
              <p>{message.content}</p>
            </St.CustomerChatLogWrapper>
          ) : (
            <St.AdminChatLogWrapper>
              <p>admin</p>
              <p>{message.content}</p>
            </St.AdminChatLogWrapper>
          )}
          <div ref={messageEndRef}></div>
        </div>
      ))}
    </St.Container>
  );
};

export default ChatLog;
