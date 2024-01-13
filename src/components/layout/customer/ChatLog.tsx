import { useEffect, useState } from 'react';
import { supabase } from '../../../api/supabase.api';
import * as St from './ChatLog.styled';
interface QnaParams {
  id: number;
  isQuestion: boolean;
  content: string;
  sender_id: string;
  nickname: string;
}

interface Props {
  userId: string | undefined;
}

const ChatLog = ({ userId }: Props) => {
  const [QnaLog, setQnaLog] = useState<QnaParams[]>([]);

  useEffect(() => {
    getQnaLog();
  }, [userId, QnaLog]);

  //qna table 가져오는 함수
  const getQnaLog = async () => {
    //
    const result = await supabase.from('qna').select('*').eq('sender_id', userId);
    if (result.data) {
      setQnaLog(result.data as QnaParams[]);
    } else {
      console.error('데이터를 가져오는 데 실패했습니다.');
      setQnaLog([]); // 데이터가 없을 때 빈 배열로 설정
    }
  };

  return (
    <St.Container>
      {QnaLog.map((qna) => (
        <div key={qna.id}>
          {' '}
          {/* id를 키로 사용 */}
          {userId === qna.sender_id && qna.isQuestion ? (
            <St.CustomerChatLogWrapper>{qna.content}</St.CustomerChatLogWrapper>
          ) : (
            <St.AdminChatLogWrapper>{qna.content}</St.AdminChatLogWrapper>
          )}
        </div>
      ))}
    </St.Container>
  );
};

export default ChatLog;
