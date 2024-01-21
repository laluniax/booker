import { useEffect, useState } from 'react';
import { supabase } from '../../api/supabase.api';
import { useAuth } from '../../contexts/auth.context';
import * as St from './Adminchat.styled';

interface Message {
  created_at: string;
  content: string;
  sender_id: string;
  message_type: string;
  id: number;
}

const AdminChat = () => {
  const [qnaRoomIds, setQnaRoomIds] = useState<string[]>([]);
  const [answerMessage, setAnswerMessage] = useState<string>('');
  const [currentQnaRoomId, setCurrentQnaRoomId] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const auth = useAuth();

  useEffect(() => {
    getQnaTable();
    if (currentQnaRoomId) {
      messageTable(); // 선택된 방 ID가 변경될 때마다 메시지를 불러옴
    }
  }, [currentQnaRoomId]);

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
  return (
    <St.Container>
      <St.ChatWrapper>
        {isOpen ? (
          <>
            <St.ChatHeader>
              <St.LogoWrapper>
                <St.PrevBtn onClick={PrevHandler}>
                  <img src="images/chat/prev.png" alt="Prev" width={30} height={30} />
                </St.PrevBtn>
                <img src="/images/common/logo.png" alt="Logo" />
              </St.LogoWrapper>
            </St.ChatHeader>
            <St.MainMessage>
              안녕하세요 🙌 <br />
              새로운 지식으로 시작되는 어쩌구저쩌구, 북커입니다📚
              <br />​ 무엇을 도와드릴까요?
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
            <St.ChatHeader>
              <img src="/images/common/logo.png" alt="Logo" />
            </St.ChatHeader>
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
