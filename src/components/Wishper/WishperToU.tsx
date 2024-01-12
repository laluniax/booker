
import React from 'react'

const WishperToU = () => {
  return (
    <div>WishperToU</div>
  )
}

export default WishperToU

// import { createClient } from '@supabase/supabase-js';
// import { supabase } from '../../api/supabase.api';

// const WishperToU = () => {
//   // 클라이언트 초기화
//   const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string;
//   const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string;

//   const clientA = createClient(SUPABASE_URL, SUPABASE_KEY);

// //사용자 검색 
// // 이 메서드는 로컬 세션 대신 데이터베이스에서 사용자 개체를 가져옵니다.
// const { data: { user } } = await supabase.auth.getUser()

// // 인증 이벤트 듣기


// const subscription = supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session)

//   if (event === 'INITIAL_SESSION') {
//     // handle initial session
//   } else if (event === 'SIGNED_IN') {
//     // handle sign in event
//   } else if (event === 'SIGNED_OUT') {
//     // handle sign out event
//   } else if (event === 'PASSWORD_RECOVERY') {
//     // handle password recovery event
//   } else if (event === 'TOKEN_REFRESHED') {
//     // handle token refreshed event
//   } else if (event === 'USER_UPDATED') {
//     // handle user updated event
//   }
// })

// // call unsubscribe to remove the callback
// subscription.unsubscribe()

//   //방송 메시지 듣기

//   // Join a room/topic. Can be anything except for 'realtime'.
//   const channelA = clientA.channel('room-1');

//   // Simple function to log any messages we receive
//   function messageReceived(payload) {
//     console.log(payload);
//   }

//   // Subscribe to the Channel
//   channelA.on('broadcast', { event: 'test' }, (payload) => messageReceived(payload)).subscribe();
//   // ===========================================

//   // 브로드캐스트 메시지 보내기
//   // Join a room/topic. Can be anything except for 'realtime'.
//   const channelB = clientA.channel('room-1');

//   channelB.subscribe((status) => {
//     // Wait for successful connection
//     if (status !== 'SUBSCRIBED') {
//       return null;
//     }

//     // Send a message once the client is subscribed
//     channelB.send({
//       type: 'broadcast',
//       event: 'test',
//       payload: { message: 'hello, world' },
//     });
//   });

//   // 직접 메시지 보내기
//   const myChannel = supabase.channel('room-2', {
//     config: {
//       broadcast: { self: true },
//     },
//   });

//   myChannel.on('broadcast', { event: 'test-my-messages' }, (payload) => console.log(payload));

//   myChannel.subscribe((status) => {
//     if (status !== 'SUBSCRIBED') {
//       return;
//     }
//     channelC.send({
//       type: 'broadcast',
//       event: 'test-my-messages',
//       payload: { message: 'talking to myself' },
//     });
//   });

//   // 메시지 확인
//   const myChannel = clientD.channel('room-3', {
//     config: {
//       broadcast: { ack: true },
//     },
//   });

//   myChannel.subscribe(async (status) => {
//     if (status !== 'SUBSCRIBED') {
//       return;
//     }

//     const serverResponse = await myChannel.send({
//       type: 'broadcast',
//       event: 'acknowledge',
//       payload: {},
//     });

//     console.log('serverResponse', serverResponse);
//   });

//   return <div>WishperToU</div>;
// };

// export default WishperToU;
// ==========================================================================================================
// 원본
// import { createClient } from '@supabase/supabase-js'
// import { writable } from 'svelte/store'
// import type { Database } from '../types/supabase'



// export const currentUser = await supabase.auth.getUser()

// supabase.auth.onAuthStateChange(async () => {
//         currentUser.set((await supabase.auth.getUser()).data.user)
//     }
// )

// async function getAllChats() {
//   // get all chats where the current user is a member
//   const { data: chatIds } = await supabase
//       .from('chats')
//       .select('id, users:chats_users!inner(user_id)')
//       .eq('users.user_id', $currentUser.id)

//   // get all chats with the user profiles
//   return await supabase
//       .from('chats')
//       .select('*, users:chats_users!inner(user:profiles(email))')
//       .in('id', [chatIds.map(chat => chat.id)])
// }

// onMount(async () => {
//   ({ data: allChats } = await getAllChats());
  
//   chatsWatcher = supabase.channel('custom-all-channel')
//       .on(
//           'postgres_changes',
//           { event: '*', schema: 'public', table: 'chats' }, 
//           async () => {
//               console.log('chats changed');
//               ({ data: allChats } = await getAllChats());
//           }
//       )
//       .subscribe()
// })

// onDestroy(() => {
//   chatsWatcher?.unsubscribe();
// })

// async function createChatWithUser() {
//   const {data: otherUser} = await supabase
//       .from('profiles')
//       .select('id')
//       .eq('email', newUserEmail)
//       .single()

//   if (otherUser) {
//       const {data: chat} = await supabase
//           .from('chats')
//           .insert({})
//           .select()
//           .single()

//       const {data, error} = await supabase
//           .from('chats_users')
//           .insert([
//               {
//                   chat_id: chat.id,
//                   user_id: $currentUser.id
//               },
//               {
//                   chat_id: chat.id,
//                   user_id: otherUser.id
//               }]
//           )       
//   }
// }

// async function getAllMessages() {
//   return await supabase.from("messages").select("*").eq("chat_id", chatId);
// }

// onMount(async () => {
//   ({ data: allMessages } = await getAllMessages());

//   messagesWatcher = supabase
//       .channel("custom-all-channel")
//       .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, async () => {
//       ({ data: allMessages } = await getAllMessages());
//       })
//       .subscribe();
// });

// onDestroy(() => {
//   messagesWatcher?.unsubscribe();
// });

// async function sendMessage() {
//   const { data, error } = await supabase.from("messages").insert([
//       {
//       chat_id: parseInt(chatId),
//       author_id: $currentUser.id,
//       content: newMessage,
//       },
//   ]);
// }

// ======================================================================================
// 채팅방에 대한 Supabase 채널 설정
// /** state to store a reference of the realtime channel */
// const [channel, setChannel] = useState<RealtimeChannel>();

// /** Setup supabase realtime chat channel and subscription */
// useEffect(() => {
//     /** only create the channel if we have a roomCode and username */
//     if (roomCode && username) {
//         /**
//          * Step 1:
//          *
//          * Create the supabase channel for the roomCode, configured
//          * so the channel receives its own messages
//          */
//         const channel = supabase.channel(`room:${roomCode}`, {
//             config: {
//                 broadcast: {
//                     self: true
//                 }
//             }
//         });

//         /**
//          * Step 2:
//          *
//          * Listen to broadcast messages with a `message` event
//          */
//         channel.on('broadcast', { event: 'message' }, ({ payload }) => {
//             setMessages((messages) => [...messages, payload]);
//         });

//         /**
//          * Step 3:
//          *
//          * Subscribe to the channel
//          */
//         channel.subscribe();

//         /**
//          * Step 4:
//          *
//          * Set the channel in the state
//          */
//         setChannel(channel);

//         /**
//          * * Step 5:
//          *
//          * Return a clean-up function that unsubscribes from the channel
//          * and clears the channel state
//          */
//         return () => {
//             channel.unsubscribe();
//             setChannel(undefined);
//         };
//     }
// }, [roomCode, username]);

// onMessage={(message) => {
//   setMessages((messages) => {
//       return [
//           ...messages,
//           {
//               id: createIdentifier(),
//               message,
//               username,
//               type: 'chat'
//           }
//       ];
//   });
// }}


// 온라인 채팅 사용자 표시
// channel.on('presence', { event: 'sync' }, () => {
//   /** Get the presence state from the channel, keyed by realtime identifier */
//   const presenceState = channel.presenceState();

//   /** transform the presence */
//   const users = Object.keys(presenceState)
//       .map((presenceId) => {
//           const presences = presenceState[presenceId] as unknown as { username: string }[];
//           return presences.map((presence) => presence.username);
//       })
//       .flat();
//   /** sort and set the users */
//   setUsers(users.sort());
// });

// channel.subscribe((status) => {
//   if (status === 'SUBSCRIBED') {
//       channel.track({ username });
//   }
// });

// 사용자가 채팅방에 참여하고 나갈 때 표시
// /**
// * Step 1:
// *
// * Listen to presence event for users joining the chat room
// */
// channel.on('presence', { event: 'join' }, ({ newPresences }) => {
//  const presenceMsg = newPresences.map(({ username }) => {
//    return {
//      id: createIdentifier(),
//      type: 'presence' as const,
//      username,
//      message: 'joined' as const
//    };
//  });
//  setMessages((messages) => [...messages, ...presenceMsg]);
// });

// /**
// * Step 2:
// *
// * Listen to presence event for users leaving the chat room
// */
// channel.on('presence', { event: 'leave' }, ({ leftPresences }) => {
//  const presenceMsg = leftPresences.map(({ username }) => {
//    return {
//      id: createIdentifier(),
//      type: 'presence' as const,
//      username,
//      message: 'left' as const
//    };
//  });
//  setMessages((messages) => [...messages, ...presenceMsg]);

// ================================================================================
// 구현된 로직 

// 슈파 데이터베이스 메시지 업로드
// const handleKeyPress = async(event: React.KeyboardEvent<HTMLInputElement>) => {
//   if (event.key === 'Enter' && inputValue.trim()) {
//     const { data: { user } } = await supabase.auth.getUser()
// // console.log('a',user);
// //       // Supabase로 메시지 보내기
//     supabase.from('messages').insert([
//       { content: inputValue, chat_id: roomCode, author_id: user?.id }
//     ]).then(({ error }) => {
//       if (error) {
//         console.error('메시지 삽입 중 오류가 발생했습니다:', error);
//       }
//     });

//     setInputValue('');
//   }
// };

//실시간 메시지 변화 추적 
  // Real-time subscriptions
  // const messageChannel = supabase
  //   .channel('messages_channel')
  //   .on('postgres_changes', {
  //     event: 'INSERT',
  //     schema: 'public',
  //     table: 'messages',
  //   }, payload => {
  //     console.log('payload',payload)
  //     // Assume payload.new contains the new message
  //     setMessages(prevMessages => [...prevMessages, payload.new as MessageType]);
  //   })
  //   .subscribe();

  // // Clean up subscriptions on unmount
  // return () => {
  //   messageChannel.unsubscribe();
  // };

  // ====================================================

  // ChatApp.tsx
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



//포스트그레스만으로 구현 했다. 인서트 /필터 내 아이디 인것만 다 구독// 이벤트(메시지가 온다)생기면 채팅창을 연다 같은  
//전체 서버(채널)(useEfftct로 시작시 구독을 실행 루트에)?채널 하나 만들고 거기서 채널 있는 지 확인 후(chats 테이블 하나면 충분)
//없으면 채널을 만들고, 상대방에게 도착해서 컴포넌트가 열리면 구독이 되는 거다.



// React component
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

{/* <>
<OpenChatButton onClick={openChat}>Open Chat</OpenChatButton>
<Modal isOpen={isChatOpen} onClose={closeChat}>
  <ChatApp />
</Modal>
</>

const [isChatOpen, setChatOpen] = useState(false);

const openChat = () => setChatOpen(true);
const closeChat = () => setChatOpen(false);
 */}

//  const OpenChatButton = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   padding: 10px 20px;
//   font-size: 16px;
//   color: #fff;
//   background-color: #007bff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// import styled from "styled-components";