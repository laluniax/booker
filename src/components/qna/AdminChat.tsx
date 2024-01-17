import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../api/supabase.api';
import * as St from './Adminchat.styled';
interface QnaItem {
  content: string;
  id: number;
  isQuestion: boolean;
  sender_id: string;
}

const AdminChat = () => {
  const [qnaRoomIds, setQnaRoomIds] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    supabase
      .from('qna')
      .select('*')
      .then((res) => console.log(res));
    getQnaTable();
  }, []);

  const getQnaTable = async () => {
    const response = await supabase.from('qna').select('*');
    const result = response.data;
    console.log('result', result);
    const uniqueSenderMap = new Map();

    result?.forEach((item) => {
      uniqueSenderMap.set(item.room_id, item.room_id);
    });
    const uniqueData = Array.from(uniqueSenderMap.values());
    setQnaRoomIds(uniqueData);
  };
  console.log(qnaRoomIds);

  const handleSenderClick = (qnaRoomId: string) => {
    navigate(`/chat/${qnaRoomId}`);
  };

  return (
    <St.Container>
      <St.ChatWrapper>
        <St.ChatHeader>BOOKER(로고)</St.ChatHeader>
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
