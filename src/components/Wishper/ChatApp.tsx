// ChatApp.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const UsersList = styled.aside`
  width: 100px;
  border-right: 1px solid #ccc;
  overflow-y: auto;
`;

const User = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const MessagesContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`;

const Message = styled.div`
  margin-bottom: 10px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  padding: 10px;
  background: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// TypeScript types for messages and users
type MessageType = {
  id: number;
  content: string;
};

type UserType = {
  id: number;
  name: string;
};

// React component
const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [users, setUsers] = useState<UserType[]>([
    // Dummy users data
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    // ... more users
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newMessage: MessageType = {
        id: messages.length + 1,
        content: inputValue
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <ChatContainer>
      <UsersList>
        {users.map((user) => (
          <User key={user.id}>{user.name}</User>
        ))}
      </UsersList>
      <MessagesContainer>
        <MessageList>
          {messages.map((message) => (
            <Message key={message.id}>{message.content}</Message>
          ))}
        </MessageList>
        <InputContainer>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
        </InputContainer>
      </MessagesContainer>
    </ChatContainer>
  );
};

export default ChatApp;
