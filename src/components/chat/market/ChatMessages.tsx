import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일 가져오기
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as St from '../ChatModal.styled';
import { ChatId, MessagePayload, MessageType, mainChatModalOpen, person, sendMessages, updateMesaages } from '../../../atom/product.atom';
import { supabase } from '../../../api/Supabase.api';



const ChatMessages = () => {
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);
  const [ischatRoomModalOpen, setIschatRoomModalOpen] = useRecoilState(mainChatModalOpen);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

    //챗방 메시지 가져오기
    const fetchMessages = async () => {
        if (chatId) {
          // Fetch all messages for the chatId
          let { data: messagesData, error: messagesError } = await supabase
            .from('messages')
            .select('*,users(*)')
            .eq('chat_id', chatId);
  
          if (messagesError) {
            console.error('메시지를 가져오는 중 오류가 발생했습니다:', messagesError);
            return;
          }
  
          if (!messagesData) {
            setMessages([]);
            return;
          }
  
          setMessages(messagesData);
        }
      };
  

  //챗메시지 가져오기
  useEffect(() => {

    fetchMessages();
  
  }, [chatId, updateMesaage]);

  useEffect(()=>{
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
          console.log('payload', payload);
        //   fetchMessages();
          setUpdateMesaage(payload as MessagePayload);
        },
      )
      .subscribe();

    return () => {
      changes.unsubscribe();
    };
  },[])

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
              <>
                {dateLabel} {/* Display the date label if the date has changed */}
                {message.author_id !== LoginPersonal && <St.NicknameLabel>{message.users?.nickname}</St.NicknameLabel>}
                <St.MessageComponent key={message.id} isOutgoing={message.author_id === LoginPersonal}>
                  {message.content} {formattedTime}
                </St.MessageComponent>
              </>
            );
          })}
      </>
    );
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const current = chatBodyRef.current;
    if (current) {
      const isAtBottom = current.scrollHeight - current.scrollTop === current.clientHeight;
      setIsAtBottom(isAtBottom);
    }
  };

  // 최하단으로 스크롤하는 함수
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  
  // 채팅 모달이 열리거나 메시지 목록이 변경될 때 스크롤
  useEffect(() => {
    if (ischatRoomModalOpen && isAtBottom) {
      // 비동기적으로 스크롤 함수 실행하여 모든 DOM 업데이트 후 스크롤되도록 함
      setTimeout(scrollToBottom, 0);
    }
  }, [messages, ischatRoomModalOpen, isAtBottom]);

  // 채팅 컨테이너에 스크롤 이벤트 리스너 추가
  useEffect(() => {
    const chatBody = chatBodyRef.current;
    if (chatBody) {
      chatBody.addEventListener('scroll', handleScroll);
      return () => {
        chatBody.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // 채팅 몸체에 스크롤 이벤트 리스너를 추가
  useEffect(() => {
    const chatBody = chatBodyRef.current;
    if (chatBody) {
      chatBody.addEventListener('scroll', handleScroll);
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        chatBody.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  
  return <>
          <St.ChatModalBody ref={chatBodyRef}>
  {RenderMessages()}
  <div ref={messagesEndRef} />
              </St.ChatModalBody>
  </>    
   

  
    
};

export default ChatMessages;
