import { useState } from 'react';
import * as St from './ChatStyle';
const Chat = () => {
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState(false);
  const [isAsk, setIsAsk] = useState(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState('');
  //유저정보를 담고 있는 state
  const [currentUser, setCurrentUser] = useState();

  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  return (
    /* 
           
      채팅룸 table
      유저(senderId) id  /관리자(reciveId) id table -> 따로필요x 
      메세지(content) table
      
      로직생각해보기 
      만약 접속한 계정이 어드민이라면? 채팅방을 출력해주기
      접속한 계정이 어드민이 아니라면? 운영자와 채팅할 수 있는 1:1 톡방 문의하기 버튼이 나타나야함 
      
      유저정보 가져오기 ->가져온 유저 정보중에 admin이면 채팅방 출력해주기? 
      user라면? 1:1 톡방 문의하기 버튼이 나타나야 함 
      */
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
            <St.ChatInputWrapper>
              <St.Input placeholder="메시지를 입력해주세요" value={askMessage} onChange={onChangeMessageHandler} />
            </St.ChatInputWrapper>
          ) : null}
        </St.ChatWrapper>
      ) : null}

      <St.TalkButtonWrapper>
        <St.TalkButton>
          {isSwitch ? (
            <span onClick={() => setIsSwitch(false)}>close</span>
          ) : (
            <span onClick={() => setIsSwitch(true)}>open</span>
          )}
        </St.TalkButton>
      </St.TalkButtonWrapper>
    </St.Container>
  );
};

export default Chat;
