import { useEffect, useState } from 'react';
import { supabase } from '../../../api/supabase.api';
import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatStyle';

const Chat = () => {
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');
  //현재 로그인 한 계정의 id값을 담고 있는 state
  const [userId, setUserId] = useState<string | undefined>('');

  //현재 로그인 한 계정의 닉네임 값을 담고 있는 state
  const [nickname, setNickname] = useState<string>('');
  //isAdmin 값을 담고 있는 state
  const [currentUser, setCurrentUser] = useState<boolean | null>(null);

  useEffect(() => {
    fetchIsAdmin(userId as string);
    fetchId();
  }, [userId]);

  //현재 로그인 한 계정의 id값
  const fetchId = async () => {
    const { data, error } = await supabase.auth.getUser();
    setNickname(data?.user?.user_metadata?.full_name);
    setUserId(data?.user?.id);
  };

  //현재 로그인 한 계정의 isAdmin 값을 가져오기
  const fetchIsAdmin = async (id: string) => {
    const { data: users, error } = await supabase.from('users').select('isAdmin').eq('id', id);

    if (users && users.length > 0) {
      setCurrentUser(users[0].isAdmin);
    } else {
      // 적절한 오류 처리 또는 기본값 설정
      console.error('사용자 데이터를 찾을 수 없거나 오류가 발생했습니다', error);
      setCurrentUser(null);
    }
  };

  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  //메세지보내는 함수
  const sendMessage = async () => {
    if (!askMessage.trim()) return; // 메시지가 비어있지 않은지 확인

    const { data, error } = await supabase.from('qna').insert({
      nickname: nickname,
      sender_id: userId,
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
      {currentUser ? (
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
                  <ChatLog userId={userId} />
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
