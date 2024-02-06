import { useState } from 'react';
import { supabase } from '../../../../api/Supabase.api';
import { useAuth } from '../../../../contexts/auth.context';
import { AdminChatInputProps } from '../../ChatModal.type';
import * as St from '../chatadmin/AdminChatRoom.styled';

const AdminChatInput = ({ messageTable, currentQnaRoomId }: AdminChatInputProps) => {
  const [answerMessage, setAnswerMessage] = useState('');
  const auth = useAuth();
  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!auth.session) return;
    if (!answerMessage.trim()) return; // 메시지가 비어있지 않은지 확인

    await supabase.from('qna').insert({
      room_id: currentQnaRoomId,
      sender_id: auth.session.user.id,
      content: answerMessage,
      message_type: 'answer',
      nickname: '관리자',
    });
    setAnswerMessage(''); // 메시지 전송 후 입력 필드 초기화
    await messageTable(); // 메시지 목록 새로고침
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <St.ChatInputWrapper>
      <St.Input
        placeholder="메시지를 입력해주세요"
        value={answerMessage}
        onChange={onChangeMessageHandler}
        onKeyDown={onKeyDownHandler}
      />
    </St.ChatInputWrapper>
  );
};

export default AdminChatInput;
