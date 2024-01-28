import React from 'react'

function wat() {
  return (
    <div>wat</div>
  )
}

export default wat

// useEffect(() => {
//   const fetchChatRooms = async () => {
//     try {
//       // 채팅방 ID 가져오기
//       const { data: chatRoomsData, error: chatRoomsError } = await supabase.from('chats').select('*');

//       if (chatRoomsError) throw chatRoomsError;

//       // 각 채팅방에 대해 사용자의 닉네임과 마지막 메시지를 가져오기
//       const updatedChatRooms = await Promise.all(
//         chatRoomsData.map(async (chatRoom) => {
//           const { data: chatUser, error: chatUserError } = await supabase
//             .from('chats_users')
//             .select('user_id,item_id,created_at')
//             .eq('chat_id', chatRoom.id);


//           if (chatUserError) throw chatUserError;

//           //챗방 마지막 메시지
//           const { data: lastMessageData, error: lastMessageError } = await supabase
//             .from('messages')
//             .select(`content, users(nickname), author_id`)
//             .eq('chat_id', chatRoom.id)
//             .order('created_at', { ascending: false })
//             .limit(1)
//             .maybeSingle();


//           if (lastMessageError) throw lastMessageError;

//           let sendNickname = '알 수 없음';
//           if (lastMessageData && lastMessageData.author_id) {
//             const { data: userData, error: userError } = await supabase
//               .from('users')
//               .select('nickname')
//               .eq('id', lastMessageData.author_id)
//               .single();

       
//             // Handle userError if any...
//             if (userData) {
//               sendNickname = userData.nickname; // Assign the fetched nickname
//             }
//           }

//           return chatUser.map((chatUser) => ({
//             chat_id: chatRoom.id,
//             user_id: chatUser.user_id || '알 수 없음',
//             item_id: chatUser.item_id || '알 수 없음',
//             lastMessage: lastMessageData ? lastMessageData.content : '메시지가 없습니다.',
//             sendNickname: sendNickname,
//             // hasNewMessage: false, // Initialize the hasNewMessage property
//             // unread_count: unreadCount, 
//             created_at: chatUser.created_at,
//           }));
//         }),
//       );
//       // Flatten the array of arrays
//       const flatChatRooms = updatedChatRooms.flat();


//       // Make sure flatChatRooms is of type ChatRoom[]
//       setChatRooms(flatChatRooms as ChatRoom[]);
//     } catch (error) {
//       console.error('채팅방 가져오기 오류:', error);
//     }
//   };

//   fetchChatRooms();

//   //챗방 메시지 가져오기
//   const fetchMessages = async () => {
//     if (chatId) {
//       // Fetch all messages for the chatId
//       let { data: messagesData, error: messagesError } = await supabase
//         .from('messages')
//         .select('*,users(id,nickname)')
//         .eq('chat_id', chatId);

//       if (messagesError) {
//         console.error('메시지를 가져오는 중 오류가 발생했습니다:', messagesError);
//         return;
//       }

//       if (!messagesData) {
//         setMessages([]);
//         return;
//       }

//       setMessages(messagesData);
//     }
//   };

//   fetchMessages();

//   // 기존에 있던 chatRoom 값에 구독한 payload 업데이트
//   const handleNewMessage = (payload: MessagePayload) => {
//     setChatRooms((prevChatRooms) =>
//       prevChatRooms.map((chatRoom) => {
//         if (chatRoom.chat_id === payload.new.chat_id) {
//     const unreadCount = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id)?.unread_count || 0;
//           // 새 메시지가 도착한 채팅방에 대한 처리
//           return {
//             ...chatRoom,
//             lastMessage: payload.new.content, // 마지막 메시지를 새 메시지로 업데이트
//              unread_count: unreadCount, // 새 메시지 표시 업데이트
//           };
//         } else {
//           // 다른 채팅방에 대한 처리는 그대로 유지
//           return chatRoom;
//         }
//       }),
//     );
//   };

//   const handleNewMessageCount = (payload: MessagePayload) => {
//     // 채팅 모달이 열려 있지 않을 때만 새 메시지 수를 증가
//     if (!ChatBtnOpen) {
//       // fetchChatRooms();
//       setNewMessagesCount((prevCount) => prevCount + 1);
//     }
//   };

// //읽지않음 카운팅
//   async function updateUnreadCount() {
//     const { data, error } = await supabase
//       .rpc('count_unread_messages', { user_id: LoginPersonal });
  
//       console.log('카운팅함수데이터', data)
//     if (error) {
//       console.log('읽지 않은 수 업데이트 오류:', error);
//     } else {
//       setUnreadCounts(data)
//     }
//   }
  
//   // //채링리스트에 표시 
//   // const updateChatRoomsUnreadCount = (unreadCounts: UnreadCount[]) => {
//   //   setChatRooms((prevChatRooms) =>
//   //     prevChatRooms.map((chatRoom) => {
//   //       const unreadCount = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id)?.unread_count || 0;
//   //       return { ...chatRoom, unread_count: unreadCount };
//   //     }),
//   //   );
//   // };
  

  

//   //새 메시지 생성시 감지할 채널 구독
//   const changes = supabase
//     .channel('schema-db-changes')
//     .on(
//       'postgres_changes',
//       {
//         event: 'INSERT',
//         schema: 'public',
//         table: 'messages',
//       },
//       async (payload) => {
//         console.log('payload',payload)
//         fetchMessages();
//         handleNewMessageCount(payload as MessagePayload);
//         updateUnreadCount()
//         // 새 메시지 카운트를 증가시킬지 결정하는 함수 호출
//         handleNewMessage(payload as MessagePayload);
//         //이거 열면 안됨
//         // fetchChatRooms();
//       },
//     )
//     .subscribe();

//   // 채팅방 변경사항을 감지할 채널 구독
//   const chatChannel = supabase
//     .channel('chat-channel')
//     .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
//       fetchChatRooms();
//     })
//     .subscribe();

//   return () => {
//     changes.unsubscribe();
//     chatChannel?.unsubscribe();
//   };
// }, [chatId, ChatBtnOpen]);

// useEffect(() => {}, []);


// const renderChatRoomsList = () => {
//   return chatRooms
//     .filter((chatRoom) => chatRoom.user_id === LoginPersonal)
//     .map((chatRoom) => (
//       <St.UserItem key={chatRoom.chat_id}>
//         <St.UserEmail>
          
//           {chatRoom.sendNickname}
//           {chatRoom.unread_count > 0 && (
//             <>
//               {console.log('chatRoom:', chatRoom.chat_id)}
//               <St.NotificationBadge>{chatRoom.unread_count}</St.NotificationBadge>
//             </>
//           )}
//         </St.UserEmail>
//         <St.UserLastMessage>{chatRoom.lastMessage || 'No messages yet.'}</St.UserLastMessage>
//         <St.DMButton onClick={() => DmClickhandler(chatRoom.item_id, chatRoom.chat_id)}>Open Chat</St.DMButton>
//       </St.UserItem>
//     ));
// };

// ==========================================================

// type Message = {
//   author_id: string;
//   chat_id: string;
//   content: string;
//   created_at: string;
//   id: number;
//   item_id: number;
//   others_id: string | null;
// };

// // Define a type for the payload
// type MessagePayload = {
//   commit_timestamp: string;
//   errors: null | any; // Replace 'any' with a more specific type if possible
//   eventType: string;
//   new: Message;
//   old?: any; // Replace 'any' with a more specific type if possible
//   schema: string;
//   table: string;
// };

// type UnreadCount = {
//   chat_id: string;
//   unread_count: number;
// };

// type UserDetail = {
//   id: string;
//   nickname: string;
//   user_img: string;
// };

// type LastMessageData = {
//   author_id: string;
//   content: string;
//   is_read: boolean;
//   created_at: string;
// };

// type ProductImage = string | null;

// type ChatRoomDetail = {
//   chat_id: string;
//   user_id: string;
//   item_id: number;
//   lastMessage: string;
//   sendNickname: string;
//   productImages: ProductImage[];
//   unread_count: number;
//   created_at: string;
// };

// const queryClient = new QueryClient();

// const App = () => {
//   const [chatId, setChatId] = useRecoilState(ChatId);
//   const [messages, setMessages] = useRecoilState(sendMessages);
//   const [newMessagesCount, setNewMessagesCount] = useRecoilState(newMessagesCountState);
//   const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
//   const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(isChatModalOpenState);
//   const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
//   const [unreadCounts, setUnreadCounts] = useState<UnreadCount[]>([]);

//   useEffect(() => {
//     //챗방
//     const fetchChatRooms = async () => {
//       try {
//         // Fetch chat room IDs
//         const { data: chatRoomsData, error: chatRoomsError } = await supabase.from('chats').select('*');

//         if (chatRoomsError) throw chatRoomsError;

//         // For each chat room, fetch the users, messages, and product details
//         const chatDetailsPromises = chatRoomsData.map(async (chatRoom) => {
//           // Fetch users and items in the chat room
//           const { data: chatUsersData, error: chatUsersError } = await supabase
//             .from('chats_users')
//             .select('user_id, item_id')
//             .eq('chat_id', chatRoom.id);

//           // console.log('chatUsersData', chatUsersData);
//           if (chatUsersError) throw chatUsersError;

//           // Prepare arrays to hold the details
//           let usersDetails: UserDetail[] = []; // Define the type for the array
//           let lastMessageData: LastMessageData | {} = {}; // Define a union type that can be an empty object or LastMessageData
//           let productImages: ProductImage[] = []; // Define the type for the array

//           if (chatUsersData.length > 0) {
//             // Fetch user details for each user_id
//             usersDetails = await Promise.all(
//               chatUsersData.map(async (chatUser) => {
//                 const { data: userData, error: userError } = await supabase
//                   .from('users')
//                   .select('id, nickname, user_img') // Include 'id' in the selection
//                   .eq('id', chatUser.user_id);

            
//                 if (userError) throw userError;
//                 return userData[0]; // Assuming there is always one user returned per ID
//               }),
//             );
//     console.log('usersDetails', usersDetails);
//             // Fetch the last message details for the chat room
//             const { data: messagesData, error: messagesError } = await supabase
//               .from('messages')
//               .select('author_id, content, is_read')
//               .eq('chat_id', chatRoom.id)
//               .order('created_at', { ascending: false })
//               .limit(1); // Get the most recent message

//             // console.log('messagesData', messagesData);
//             if (messagesError) throw messagesError;

//             lastMessageData = messagesData.length > 0 ? messagesData[0] : {};

//             // Fetch the product image for each item_id found in chatUsersData
//             productImages = await Promise.all(
//               chatUsersData.map(async (user) => {
//                 const { data: productData, error: productError } = await supabase
//                   .from('products')
//                   .select('product_img')
//                   .eq('id', user.item_id);
//                 // console.log('productData', productData);
//                 if (productError) throw productError;
//                 return productData.length > 0 ? productData[0].product_img : null;
//               }),
//             );
//           }
//           const lastMessage = lastMessageData as LastMessageData;
//           // Construct the chat room detail object
//           const chatRoomDetail: ChatRoomDetail = {
//             chat_id: chatRoom.id,
//             user_id: usersDetails.length > 0 ? usersDetails[0].id : '알 수 없음',
//             item_id: chatUsersData.length > 0 ? chatUsersData[0].item_id : '알 수 없음',
//             lastMessage: lastMessage.content || '메시지가 없습니다.',
//             sendNickname: usersDetails.length > 0 ? usersDetails[0].nickname : '알 수 없음',
//             productImages: productImages,
//             unread_count: lastMessage.content ? (lastMessage.is_read ? 0 : 1) : 0,
//             created_at: chatRoom.created_at,
//           };
//           return chatRoomDetail;
//         });

//         // Wait for all the chat details promises to resolve
//         const chatDetails = await Promise.all(chatDetailsPromises);

//         // Update the chat rooms state
//         setChatRooms(chatDetails as ChatRoomDetail[]);
//       } catch (error) {
//         console.error('Error fetching chat room details:', error);
//       }
//     };
//     console.log('chatRooms',chatRooms)

//     fetchChatRooms();

//     //챗방 메시지 가져오기
//     const fetchMessages = async () => {
//       if (chatId) {
//         // Fetch all messages for the chatId
//         let { data: messagesData, error: messagesError } = await supabase
//           .from('messages')
//           .select('*,users(id,nickname,user_img)')
//           .eq('chat_id', chatId);

//         // console.log('messagesData', messagesData);
//         if (messagesError) {
//           console.error('메시지를 가져오는 중 오류가 발생했습니다:', messagesError);
//           return;
//         }

//         if (!messagesData) {
//           setMessages([]);
//           return;
//         }

//         setMessages(messagesData);
//       }
//     };

//     fetchMessages();

//     // 기존에 있던 chatRoom 값에 구독한 payload 업데이트

//     const handleNewMessageCount = (payload: MessagePayload) => {
//       // 채팅 모달이 열려 있지 않을 때만 새 메시지 수를 증가
//       if (!ChatBtnOpen) {
//         // fetchChatRooms();
//         setNewMessagesCount((prevCount) => prevCount + 1);
//       }
//     };

//     //읽지않음 카운팅
//     async function updateUnreadCount() {
//       const { data, error } = await supabase.rpc('count_unread_messages', { user_id: LoginPersonal });

//       // console.log('카운팅함수데이터', data);
//       if (error) {
//         console.log('읽지 않은 수 업데이트 오류:', error);
//       } else {
//         setUnreadCounts(data);
//       }
//     }

//     // //채링리스트에 표시
//     // const updateChatRoomsUnreadCount = (unreadCounts: UnreadCount[]) => {
//     //   setChatRooms((prevChatRooms) =>
//     //     prevChatRooms.map((chatRoom) => {
//     //       const unreadCount = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id)?.unread_count || 0;
//     //       return { ...chatRoom, unread_count: unreadCount };
//     //     }),
//     //   );
//     // };

//     //새 메시지 생성시 감지할 채널 구독
//     const changes = supabase
//       .channel('schema-db-changes')
//       .on(
//         'postgres_changes',
//         {
//           event: 'INSERT',
//           schema: 'public',
//           table: 'messages',
//         },
//         async (payload) => {
//           console.log('payload', payload);
//           fetchMessages();
//           handleNewMessageCount(payload as MessagePayload);
//           updateUnreadCount();
//           // 새 메시지 카운트를 증가시킬지 결정하는 함수 호출
//           // handleNewMessage(payload as MessagePayload);
//           //이거 열면 안됨
//           // fetchChatRooms();
//         },
//       )
//       .subscribe();

//     // 채팅방 변경사항을 감지할 채널 구독
//     const chatChannel = supabase
//       .channel('chat-channel')
//       .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
//         // fetchChatRooms();
//       })
//       .subscribe();

//     return () => {
//       changes.unsubscribe();
//       chatChannel?.unsubscribe();
//     };
//   }, [chatId, ChatBtnOpen]);