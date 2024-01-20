import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../api/supabase.api';
import * as St from './Adminchat.styled';

const AdminChat = () => {
  const [qnaRoomIds, setQnaRoomIds] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getQnaTable();
  }, []);

  const getQnaTable = async () => {
    const response = await supabase.from('qna').select('*');
    const result = response.data;
    const uniqueSenderMap = new Map();

    result?.forEach((item) => {
      uniqueSenderMap.set(item.room_id, item.room_id);
    });
    const uniqueData = Array.from(uniqueSenderMap.values());
    setQnaRoomIds(uniqueData);
  };

  const handleSenderClick = (qnaRoomId: string) => {
    navigate(`/chat/${qnaRoomId}`);
  };

  return (
    <St.Container>
      <St.ChatWrapper>
        <St.ChatHeader>
          <img src="/images/common/logo.png" alt="Logo" />
        </St.ChatHeader>
        <St.ChatBody>
          {/* 채팅방 출력 */}
          {qnaRoomIds.map((qnaRoomID) => {
            return (
              <div key={qnaRoomID} onClick={() => handleSenderClick(qnaRoomID)}>
                <div>{qnaRoomID}</div>
              </div>
            );
          })}
        </St.ChatBody>
      </St.ChatWrapper>
    </St.Container>
  );
};

export default AdminChat;
