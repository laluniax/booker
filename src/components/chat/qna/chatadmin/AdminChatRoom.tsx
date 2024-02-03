import { useEffect, useState } from 'react';
import { supabase } from '../../../../api/Supabase.api';
import { useAuth } from '../../../../contexts/auth.context';
import { MessageTypes } from '../../../../types/types';
import * as St from './AdminchatRoom.styled';

const AdminChat = () => {
  const [qnaRoomIds, setQnaRoomIds] = useState<string[]>([]);
  const [answerMessage, setAnswerMessage] = useState<string>('');
  const [currentQnaRoomId, setCurrentQnaRoomId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageTypes[]>([]);
  const auth = useAuth();

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
            <St.ChatBody>
              {messages.map((message) => {
                return (
                  <>
                    {message.message_type === 'answer' ? (
                      <St.AdminMessage>{message.content}</St.AdminMessage>
                    ) : (
                      <St.UserMessage>{message.content}</St.UserMessage>
                    )}
                  </>
                );
              })}
            </St.ChatBody>
            <St.ChatInputWrapper>
              <St.Input
                placeholder="메시지를 입력해주세요"
                value={answerMessage}
                onChange={onChangeMessageHandler}
                onKeyDown={onKeyDownHandler}
              />
            </St.ChatInputWrapper>
          </>
        ) : (
          <>
            <St.ChatBody>
              {qnaRoomIds.map((qnaRoomID) => (
                <div key={qnaRoomID} onClick={() => handleSenderClick(qnaRoomID)}>
                  <div>{qnaRoomID}</div>
                </div>
              ))}
            </St.ChatBody>
          </>
        )}
      </St.ChatWrapper>
    </St.Container>
  );
};

export default AdminChat;
