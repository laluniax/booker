import { useEffect, useState } from 'react';
import { supabase } from '../../../../api/Supabase.api';
import { AdminChatIdProps } from '../../../map/KakaoMap.type';
import { QnaTableRow } from '../../ChatModal.type';
import * as St from '../chatadmin/AdminChatRoom.styled';

const AdminChatId = ({ handleSenderClick }: AdminChatIdProps) => {
  const [qnaTable, setQnaTable] = useState<QnaTableRow[]>([]);

  const getQnaTable = async () => {
    const response = await supabase.from('qna').select('nickname, room_id');
    const result = response.data;

    if (result) {
      const uniqueMap = new Map<string, QnaTableRow>();

      result.forEach((item) => {
        const uniqueKey = `${item.nickname}-${item.room_id}`;
        uniqueMap.set(uniqueKey, { nickname: item.nickname, room_id: item.room_id });
      });

      const uniqueData = Array.from(uniqueMap.values());
      setQnaTable(uniqueData);
    } else {
      setQnaTable([]);
    }
  };

  useEffect(() => {
    getQnaTable();
  }, []);

  return (
    <St.ChatBody>
      {qnaTable
        .filter((item) => item.nickname !== '관리자' && item.nickname !== null && item.nickname !== '기본값')
        .map((item) => (
          <div key={`${item.nickname}-${item.room_id}`} onClick={() => handleSenderClick(item.room_id)}>
            <div>{item.nickname}</div>
          </div>
        ))}
    </St.ChatBody>
  );
};

export default AdminChatId;
