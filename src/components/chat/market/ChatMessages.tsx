import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 가져오기
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchMessages } from '../../../api/Chat.api';
import { supabase } from '../../../api/Supabase.api';
import { MessagePayload, MessageType } from '../../../state/atom/Chat.type';
import { ChatId, person, sendMessages, updateMesaages } from '../../../state/atom/chatAtom';
import * as St from '../market/ChatMessages.styled';

const ChatMessages = () => {
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);

  useEffect(() => {
    const fetchAndSetMessages = async () => {
      if (chatId) {
        try {
          const messages = await fetchMessages(chatId);
          setMessages(messages || []);
        } catch (error) {
          console.error('Failed to fetch messages:', error);
          // Handle the error appropriately
          setMessages([]); // Optionally reset messages or handle differently
        }
      }
    };

    fetchAndSetMessages();
  }, [chatId, updateMesaage]);

  useEffect(() => {
    //새 메시지 생성시 감지할 채널 구독
    const changes = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        async (payload) => {
          setUpdateMesaage(payload as MessagePayload);
        },
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  }, []);

  //채팅창 메시지 보여주기
  const RenderMessages = () => {
    let lastDate: dayjs.Dayjs | null = null;

    return (
      <>
        {messages
          .filter((message: MessageType) => message.chat_id === chatId)
          .sort((a: MessageType, b: MessageType) => a.id - b.id) // 오름차순 정렬
          .map((message: MessageType) => {
            const currentDate = dayjs(message.created_at);
            const formattedTime = currentDate.format('hh:mm A'); // Format time with AM/PM
            const formattedDate = currentDate.format('YYYY-MM-DD dddd'); // Format date with day of the week
            let dateLabel = null;

            // Check if the date has changed
            if (lastDate === null || !currentDate.isSame(lastDate, 'day')) {
              dateLabel = <St.DateLabel>{formattedDate}</St.DateLabel>; // Use DateLabel
              lastDate = currentDate;
            }

            return (
              <St.MessageWrapper key={message.id} $isoutgoing={message.author_id === LoginPersonal ? 'true' : 'false'}>
                {dateLabel} {/* Display the date label if the date has changed */}
                {message.author_id !== LoginPersonal && <St.NicknameLabel>{message.users?.nickname}</St.NicknameLabel>}
                <St.MessageComponent
                  key={message.id}
                  $isoutgoing={message.author_id === LoginPersonal ? 'true' : undefined}>
                  {message.content} {formattedTime}
                </St.MessageComponent>
              </St.MessageWrapper>
            );
          })}
      </>
    );
  };

  return <>{RenderMessages()}</>;
};

export default ChatMessages;
