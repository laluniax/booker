import { useEffect, useState } from 'react';
import { supabase } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './ChatLog.styled';
interface QnaParams {
  id: number;
  isQuestion: boolean;
  content: string;
  sender_id: string;
  nickname: string;
}

const ChatLog = () => {
  const auth = useAuth();
  const [QnaLog, setQnaLog] = useState<QnaParams[]>([]);

  useEffect(() => {
    if (!auth.session) return;

    getQnaLog(auth.session.user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.session]);

  //qna table 가져오는 함수
  const getQnaLog = async (userId: string) => {
    if (!auth.session) return;

    const isAdmin = auth.session.profile.isAdmin;

    const result = isAdmin
      ? await supabase.from('qna').select('*')
      : await supabase.from('qna').select('*').eq('sender_id', userId);
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
          {/* id를 키로 사용 */}
          {auth.session?.profile.isAdmin ? (
            <St.AdminChatLogWrapper>{qna.content}</St.AdminChatLogWrapper>
          ) : (
            <St.CustomerChatLogWrapper>{qna.content}</St.CustomerChatLogWrapper>
          )}
        </div>
      ))}
    </St.Container>
  );
};

export default ChatLog;
