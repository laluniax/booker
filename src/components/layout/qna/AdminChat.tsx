import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../api/supabase.api';
import * as St from './adminchat.styled';
interface QnaItem {
  content: string;
  id: number;
  isQuestion: boolean;
  sender_id: string;
}

const AdminChat = () => {
  const [qnaRoomIds, setQnaRoomIds] = useState<string[]>([]);
  const navigate = useNavigate();

  /* 
    어드민 채팅 ui 
    1.어드민 로그인 후 모달클릭시 유저와 운영자간의 채팅방이 보여야 함 
    2.채팅방은 sender_id를 기준으로 보여야할듯..?? {sender_id.map}으로 돌려야 하지 않을까
    2-1. sender_id 중복을 제외하는 방법도 생각해야함  (filter..?? ) O 
    3.아이디를 가져오는건 좋은데 해당채팅방으로 어떻게 이동해야하는가 params? O 
    4.usechat component도 필요할 것 같음 
  */
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

    // 데이터를 순회하며 Map에 sender_id를 키로 사용하여 저장합니다.
    // Map은 자동으로 중복된 키에 대해 마지막 값을 유지합니다.
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
