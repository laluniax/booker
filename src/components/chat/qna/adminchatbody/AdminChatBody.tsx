import React, { useEffect } from 'react';
import { AdminChatBodyProps } from '../../ChatModal.type';
import * as St from '../chatadmin/AdminChatRoom.styled';

const AdminChatBody = ({ messages, messageTable }: AdminChatBodyProps) => {
  useEffect(() => {
    messageTable();
  }, []);

  return (
    <St.ChatBody>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          {message.message_type === 'answer' ? (
            <St.AdminMessage>{message.content}</St.AdminMessage>
          ) : (
            <St.UserMessage>{message.content}</St.UserMessage>
          )}
        </React.Fragment>
      ))}
    </St.ChatBody>
  );
};

export default AdminChatBody;
