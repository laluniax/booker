import { supabase } from "../../api/supabase.api"
// 사용자 검색
const { data: { user } } = await supabase.auth.getUser()

//모든 채팅 목록을 얻고 이를 프로필 테이블과 조인하여 사용자의 이메일을 가져올 수 있음
async function getAllChats() {
  // get all chats where the current user is a member
  const { data: chatIds } = await supabase
      .from('chats')
      .select('id, users:chats_users!inner(user_id)')
      .eq('users.user_id', $currentUser.id)

  // get all chats with the user profiles
  return await supabase
      .from('chats')
      .select('*, users:chats_users!inner(user:profiles(email))')
      .in('id', [chatIds.map(chat => chat.id)])
}

onMount(async () => {
  ({ data: allChats } = await getAllChats());
  
  chatsWatcher = supabase.channel('custom-all-channel')
      .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'chats' },
          async () => {
              console.log('chats changed');
              ({ data: allChats } = await getAllChats());
          }
      )
      .subscribe()
})

// import React from 'react'
// import { createClient } from '@supabase/supabase-js'

// const WishperToU = () => {



//     const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL as string
//     const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY as string
    
//     const clientA = createClient(SUPABASE_URL, SUPABASE_KEY)
   
    
//     //방송 메시지 듣기 

// // Join a room/topic. Can be anything except for 'realtime'.
// const channelA = clientA.channel('room-1')

// // Simple function to log any messages we receive
// function messageReceived(payload) {
//   console.log(payload)
// }

// // Subscribe to the Channel
// channelA
//   .on(
//     'broadcast',
//     { event: 'test' },
//     (payload) => messageReceived(payload)
//   )
//   .subscribe()
// // ===========================================

// // 브로드캐스트 메시지 보내기 
// // Join a room/topic. Can be anything except for 'realtime'.
// const channelB = clientA.channel('room-1')

// channelB.subscribe((status) => {
//   // Wait for successful connection
//   if (status !== 'SUBSCRIBED') {
//     return null
//   }

//   // Send a message once the client is subscribed
//   channelB.send({
//     type: 'broadcast',
//     event: 'test',
//     payload: { message: 'hello, world' },
//   })
// })

// // 직접 메시지 보내기 
// const myChannel = supabase.channel('room-2', {
//   config: {
//     broadcast: { self: true },
//   },
// })

// myChannel.on(
//   'broadcast',
//   { event: 'test-my-messages' },
//   (payload) => console.log(payload)
// )

// myChannel.subscribe((status) => {
//   if (status !== 'SUBSCRIBED') { return }
//   channelC.send({
//     type: 'broadcast',
//     event: 'test-my-messages',
//     payload: { message: 'talking to myself' },
//   })
// })

// // 메시지 확인 
// const myChannel = clientD.channel('room-3', {
//   config: {
//     broadcast: { ack: true },
//   },
// })

// myChannel.subscribe(async (status) => {
//   if (status !== 'SUBSCRIBED') { return }

//   const serverResponse = await myChannel.send({
//     type: 'broadcast',
//     event: 'acknowledge',
//     payload: {},
//   })

//   console.log('serverResponse', serverResponse)
// })


//   return (
//     <div>WishperToU</div>
//   )
// }

// export default WishperToU