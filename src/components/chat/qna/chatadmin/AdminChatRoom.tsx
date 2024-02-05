import { useEffect, useState } from 'react';
import { supabase } from '../../../../api/Supabase.api';

import { MessageTypes } from '../../../../types/types';
import AdminChatId from '../adminchatId/AdminChatId';
import AdminChatInput from '../adminchatInput/AdminChatInput';
import AdminChatBody from '../adminchatbody/AdminChatBody';
import * as St from './AdminChatRoom.styled';

const AdminChat = () => {
  const [qnaRoomIds, setQnaRoomIds] = useState<string[]>([]);

  const [currentQnaRoomId, setCurrentQnaRoomId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageTypes[]>([]);

  const getQnaTable = async () => {
    const response = await supabase.from('qna').select('*');
    const result = response.data;
    //result값에서 중복된 ID값 제거 로직
    const uniqueSenderMap = new Map();

    result?.forEach((item) => {
      uniqueSenderMap.set(item.room_id, item.room_id);
    });
    const uniqueData = Array.from(uniqueSenderMap.values());
    setQnaRoomIds(uniqueData);
  };

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

  useEffect(() => {
    getQnaTable();
    if (currentQnaRoomId) {
      messageTable(); // 선택된 방 ID가 변경될 때마다 메시지를 불러옴
    }
  }, []);

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
            <AdminChatBody messages={messages} />
            <AdminChatInput messageTable={messageTable} currentQnaRoomId={currentQnaRoomId} />
          </>
        ) : (
          <>
            <AdminChatId qnaRoomIds={qnaRoomIds} handleSenderClick={handleSenderClick} />
          </>
        )}
      </St.ChatWrapper>
    </St.Container>
  );
};

export default AdminChat;
