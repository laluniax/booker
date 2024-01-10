
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