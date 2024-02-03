import { useEffect, useRef } from 'react';
import * as St from './UserChatRoom.styled';
import { MessageProp } from './UserChatRoom.type';

const ChatLog = ({ messages }: MessageProp) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <St.Container>
      {messages.map((message) => (
        <div key={message.id}>
          {message.message_type === 'question' ? (
            <St.CustomerMessageBox>
              <St.CustomerChatLogWrapper>
                <St.MessageContent>{message.content}</St.MessageContent>
              </St.CustomerChatLogWrapper>
            </St.CustomerMessageBox>
          ) : (
            <St.AdminChatLogWrapper>
              <St.AdminName>관리자</St.AdminName>
              <St.MessageContent>{message.content}</St.MessageContent>
            </St.AdminChatLogWrapper>
          )}
        </div>
      ))}
      <div ref={messageEndRef}></div>
    </St.Container>
  );
};
export default ChatLog;
