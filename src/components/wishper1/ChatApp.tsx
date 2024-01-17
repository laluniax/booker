import React from 'react'

const ChatApp = () => {
  return (
    <div>ChatApp</div>
  )
}

export default ChatApp

// // ChatApp.tsx
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { supabase } from '../../api/supabase.api';

// // Styled components
// const ChatContainer = styled.div`
//   display: flex;
//   height: 70vh;
// `;

// const UsersList = styled.aside`
//   width: 100px;
//   border-right: 1px solid #ccc;
//   overflow-y: auto;
// `;

// const User = styled.div`
//   padding: 10px;
//   border-bottom: 1px solid #eee;
//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

// const MessagesContainer = styled.main`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
// `;

// const MessageList = styled.div`
//   flex-grow: 1;
//   overflow-y: auto;
//   padding: 20px;
// `;

// const Message = styled.div`
//   margin-bottom: 10px;
//   background: #f9f9f9;
//   padding: 10px;
//   border-radius: 10px;
// `;

// const InputContainer = styled.div`
//   padding: 10px;
//   background: #fff;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// // TypeScript types for messages and users
// type MessageType = {
//   id: number;
//   content: string;
// };

// type UserType = {
//   id: number;
//   name: string;
//   email: string;
// };



// //포스트그레스만으로 구현 했다. 인서트 /필터 내 아이디 인것만 다 구독// 이벤트(메시지가 온다)생기면 채팅창을 연다 같은  
// //전체 서버(채널)(useEfftct로 시작시 구독을 실행 루트에)?채널 하나 만들고 필터를 계속
// //  거기서 채널 있는 지 확인 후(chats 테이블 하나면 충분)
// //없으면 채널을 만들고, 상대방에게 도착해서 컴포넌트가 열리면 구독이 되는 거다.



// // React component
// const ChatApp: React.FC = () => {
//   const [messages, setMessages] = useState<MessageType[]>([]);
//   const [users, setUsers] = useState<UserType[]>([]);
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     // Fetch initial data
//     const fetchUsers = async () => {
//       let { data, error } = await supabase.from('profiles').select('*');
//       if (error) {
//         console.error('Error fetching users:', error);
//         return;
//       }
//       if (data) {
//         // You might need to assert the data to UserType[]
//         setUsers(data as UserType[]);
//       }
//     };

//     const fetchMessages = async () => {
//       let { data, error } = await supabase.from('messages').select('*');
//       if (error) {
//         console.error('Error fetching messages:', error);
//         return;
//       }
//       if (data) {
//         // You might need to assert the data to MessageType[]
//         setMessages(data as MessageType[]);
//       }
//     };

//     fetchUsers();
//     fetchMessages();

//     // Real-time subscriptions
//     // Supabase를 이용해 실시간으로 'messages' 테이블에
//     //새 메시지가 추가될 때마다 해당 메시지를 React 컴포넌트의 상태에 추가하는 기능을 구현합니다.
//     const messageChannel = supabase
//       .channel('messages_channel')
//       .on(
//         'postgres_changes',
//         {
//           event: 'INSERT',
//           schema: 'public',
//           table: 'messages',
//         },
//         (payload) => {
//           console.log('payload', payload);
//           // Assume payload.new contains the new message
//           setMessages((prevMessages) => [...prevMessages, payload.new as MessageType]);
//         },
//       )
//       .subscribe();

//     // Clean up subscriptions on unmount
//     return () => {
//       messageChannel.unsubscribe();
//     };
//   }, []);


  

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       const {
//         data: { user },
//       } = await supabase.auth.getUser();

//       // Supabase로 메시지 보내기
//       supabase
//         .from('messages')
//         .insert([{ content: inputValue, author_id: user?.id }])
//         .then(({ error }) => {
//           if (error) {
//             console.error('메시지 삽입 중 오류가 발생했습니다:', error);
//           }
//         });

//       setInputValue('');
//     }
//   };

//   return (
//     <ChatContainer>
//       <UsersList>
//         {users.map((user) => (
//           <User key={user.id}>{user.email}</User>
//         ))}
//       </UsersList>
//       <MessagesContainer>
//         <MessageList>
//           {messages.map((message) => (
//             <Message key={message.id}>{message.content}</Message>
//           ))}
//         </MessageList>
//         <InputContainer>
//           <Input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//           />
//         </InputContainer>
//       </MessagesContainer>
//     </ChatContainer>
//   );
// };

// export default ChatApp;
