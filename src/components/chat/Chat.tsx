
import React from 'react'

function Chat() {
  return (
    <div>Chat</div>
  )
}

export default Chat
// import { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { UnreadCounts, chatRoomsState, globalModalSwitch, isChatModalOpenState, person } from '../../atom/product.atom';
// import * as St from './ChatModal.styled';

// const Chat = () => {
//   const [isOpen, setIsOpen] = useRecoilState(globalModalSwitch);
//   //모달창을 열고 닫는 state
//   const [isSwitch, setIsSwitch] = useState<boolean>(false);
//   const [ChatBtnOpen, setChatBtnOpen] = useRecoilState(isChatModalOpenState);
//   //토글 열닫
//   const toggleChatModal = () => {
//     setChatBtnOpen((prevState) => !prevState);
//   };
//   const [chatRooms, setChatRooms] = useRecoilState(chatRoomsState);
//   const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
//   const [unreadCounts, setUnreadCounts] = useRecoilState(UnreadCounts);

//   //총 안읽은 메시지
//   const totalUnreadCount = chatRooms
//     .filter((chatRoom) => chatRoom.user_id === LoginPersonal) // 현재 사용자가 포함된 채팅방만 필터링
//     .reduce((total, chatRoom) => {
//       const unreadInfo = unreadCounts.find((uc) => uc.chat_id === chatRoom.chat_id);
//       return total + (unreadInfo ? unreadInfo.unread_count : 0);
//     }, 0);

//   return (
//     <div>
//       <St.BookerChattingIcon
//         onClick={() => {
//           setIsOpen(!isOpen);
//           setIsSwitch(!isSwitch);
//           toggleChatModal();
//         }}
//       />
//       {!ChatBtnOpen && totalUnreadCount > 0 && (
//         <St.NotificationBadge>
//           {totalUnreadCount}
//           {/* {newMessagesCount} */}
//         </St.NotificationBadge>
//       )}
//     </div>
//   );
// };

// export default Chat;
