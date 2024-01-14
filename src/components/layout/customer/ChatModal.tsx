import { useState } from 'react';
import { supabase } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatStyle';

const Chat = () => {
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');

  const auth = useAuth();

  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  //메세지보내는 함수
  const sendMessage = async () => {
    if (!auth.session) return;
    if (!askMessage.trim()) return; // 메시지가 비어있지 않은지 확인

    await supabase.from('qna').insert({
      sender_id: auth.session.user.id,
      content: askMessage,
    });

    setAskMessage(''); // 메시지 전송 후 입력 필드 초기화
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 폼 제출 방지
      sendMessage();
    }
  };

  if (!auth.session) return null;

  return (
    /* 
           
      채팅룸 table
      유저(senderId) id  /관리자(reciveId) id table -> 따로필요x 
      메세지(content) table
      
      로직생각해보기 

      어떻게해야 채팅 말풍선이 왼쪽 오른쪽 구분해서 나올 수 있을까?
      곰곰문문 
      isQuestion이 true면 오른쪽에 채팅로그가, false라면 admin이 보낸 채팅로그이므로 왼쪽 !!?


      !!로그아웃시 리렌더링되어야함!!


      ------------------------------------------------------------------
      

      
      */
    <>
      {auth.session.profile.isAdmin ? (
        isSwitch && <AdminChat />
      ) : (
        <St.Container>
          {isSwitch ? (
            <St.ChatWrapper>
              <St.ChatHeader>BOOKER(로고)</St.ChatHeader>
              <St.ChatBody>
                <St.MainMessage>
                  안녕하세요 🙌 <br />
                  새로운 지식으로 시작되는 어쩌구저쩌구, 북커입니다📚
                  <br />​ 무엇을 도와드릴까요?
                </St.MainMessage>
              </St.ChatBody>
              <St.AskWrapper>
                <St.AskButton style={isAsk ? { display: 'none' } : { display: 'block' }} onClick={() => setIsAsk(true)}>
                  문의하기 💨
                </St.AskButton>
              </St.AskWrapper>
              {isAsk ? (
                <>
                  <ChatLog />
                  <St.ChatInputWrapper>
                    <St.Input
                      placeholder="메시지를 입력해주세요"
                      value={askMessage}
                      onChange={onChangeMessageHandler}
                      onKeyDown={onKeyDownHandler}
                    />
                  </St.ChatInputWrapper>
                </>
              ) : null}
            </St.ChatWrapper>
          ) : null}
        </St.Container>
      )}
      <St.TalkButtonWrapper>
        <St.TalkButton onClick={() => setIsSwitch(!isSwitch)}>{isSwitch ? 'close' : 'open'}</St.TalkButton>
      </St.TalkButtonWrapper>
    </>
  );
};

export default Chat;
