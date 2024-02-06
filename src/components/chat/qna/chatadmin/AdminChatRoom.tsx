import { useState } from 'react';
import { supabase } from '../../../../api/Supabase.api';

import { adminCHatMessages } from '../../ChatModal.type';
import AdminChatId from '../adminchatId/AdminChatId';
import AdminChatInput from '../adminchatInput/AdminChatInput';
import AdminChatBody from '../adminchatbody/AdminChatBody';
import * as St from './AdminChatRoom.styled';

const AdminChat = () => {
  const [currentQnaRoomId, setCurrentQnaRoomId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<adminCHatMessages[]>([]);
  const handleSenderClick = (qnaRoomId: string) => {
    setCurrentQnaRoomId(qnaRoomId);
    setIsOpen(true);
  };

  const messageTable = async () => {
    const response = await supabase.from('qna').select('*').eq('room_id', currentQnaRoomId);
    const result = response.data;

    if (result) {
      setMessages(result);
    } else {
      setMessages([]);
    }
  };

  const PrevHandler = () => {
    setIsOpen(false);
  };
  return (
    <St.Container>
      <St.ChatWrapper>
        {isOpen ? (
          <>
            <St.PrevBtn onClick={PrevHandler}>
              <St.PrevIcon />
            </St.PrevBtn>
            <St.MainMessage>
              안녕하세요 !
              <br />
              책에 대한 모든 것을 담는 북커입니다 ⸜๑•⌔•๑ ⸝ <br />
              궁금한 점이 있으신가요?
            </St.MainMessage>
            <AdminChatBody messages={messages} messageTable={messageTable} />
            <AdminChatInput messageTable={messageTable} currentQnaRoomId={currentQnaRoomId} />
          </>
        ) : (
          <>
            <AdminChatId handleSenderClick={handleSenderClick} />
          </>
        )}
      </St.ChatWrapper>
    </St.Container>
  );
};

export default AdminChat;
