import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useSendMessage } from '../../api/chatApi';
import { supabase } from '../../api/supabase.api';
import Logo from '../../assets/Logo.png';
import Prev from '../../assets/prev.png';
import { ChatId, chatRoomsState, otherPerson, person, productState, sendMessages } from '../../atom/product.atom';
import { useAuth } from '../../contexts/auth.context';
import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatStyle';

export type MessageType = {
  id: number;
  content: string;
  author_id: string;
  chat_id: string;
  item_id: number;
  others_id: string;
};
export type UserType = {
  id: string;
  email: string;
  lastMessage?: string; // lastMessage 속성 추가 (옵셔널로 처리)
  nickname: string;
};

export type ChatData = {
  id: string;
};

const Chat = () => {
  //모달창을 열고 닫는 state
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isAsk, setIsAsk] = useState<boolean>(false);
  //메세지 저장 state
  const [askMessage, setAskMessage] = useState<string>('');

const [user,setUsers] = useState('')
  const [inputValue, setInputValue] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [otherLoginPersonal, setOtherLoginPersonal] = useRecoilState(otherPerson);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const { mutate: sendDirectMessage } = useSendMessage();

  const [productId, setProductId] = useRecoilState(productState);
  const chatRooms = useRecoilValue(chatRoomsState);



  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  //모달에선 b->a로 보내면 a->b로 가는 형식이라. 받는 사람 보내는 사람이 a가 되기 때문에, 수정해야됨.
  // DM 클릭 핸들러
  const DmClickhandler = async (otherUserId: string, item_id: number, chat_id: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log(user?.id)
    // console.log(otherUserId)
    if (user && user.email) {
      const userId = user.id;
      setUsers(userId)
      if (user) {
        // await checkChatWithUser(user.id, otherUserId, item_id, chat_id);
        setChatId(chat_id);
        setLoginPersonal(otherUserId);
        setOtherLoginPersonal(user.id);
        setProductId(item_id);

        setIsChatModalOpen(true);
        // setOtherLoginPersonal(otherUserId);
      }
    }
  };

  //모달 창 뜨고 메시지 보내는 핸들러들
  // 메시지 전송 핸들러
  const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      sendDirectMessage({
        content: inputValue,
        author_id: LoginPersonal,
        chat_id: chatId,
        item_id: productId,
        others_id: otherLoginPersonal,
      });
      setInputValue('');
    }
  };

  //dm메시지 전송
  const sendDmMessage = async () => {
    if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인
 console.log(inputValue)
 console.log(LoginPersonal)
 console.log(chatId)
 console.log(productId)
 console.log(otherLoginPersonal)
    sendDirectMessage({
      content: inputValue,
      author_id: LoginPersonal,
      chat_id: chatId,
      item_id: productId,
      others_id: otherLoginPersonal,
    });

    setInputValue('');
  };

  const renderMessages = () => {
    return messages
      .filter(
        (message: MessageType) =>
          (message.author_id === LoginPersonal || message.author_id === otherLoginPersonal) &&
          message.chat_id === chatId &&
          message.item_id === productId,
      )
      .map((message: MessageType) => (
        <St.MessageComponent key={message.id} isOutgoing={message.author_id === LoginPersonal}>
          {message.content}
        </St.MessageComponent>
      ));
  };



  const auth = useAuth();

  const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAskMessage(e.target.value);
  };

  //메세지보내는 함수
  const sendMessage = async () => {
    if (!auth.session) return;
    if (!askMessage.trim()) return; // 메시지가 비어있지 않은지 확인
    console.log('sendMessage 실행');
    await supabase.from('qna').insert({
      room_id: auth.session.user.id,
      sender_id: auth.session.user.id,
      content: askMessage,
      message_type: 'question',
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

  async function checkChatWithUser(userId: string, otherUserId: string, itemid: number, chat_id: string) {
   console.log(userId)
   console.log(otherUserId)
   console.log(itemid)
   console.log(chat_id)
   
    // 상점 채팅시 발신자 other 수신자 user// 메인 채팅시 반대로 생각하면 됨.
    const { data: existingChatUser } = await supabase
      .from('chats_users')
      .select('chat_id, others_id')
      .eq('user_id', otherUserId)
      .eq('item_id', itemid);

    console.log('existingChatUser', existingChatUser);

    const { data: existingChatOther } = await supabase
      .from('chats_users')
      .select('chat_id,  user_id')
      .eq('others_id', userId)
      .eq('item_id', itemid);

    console.log('existingChatOther', existingChatOther);
    if (existingChatUser && existingChatOther) {
      let commonChatId = null;



      for (let chatUser of existingChatUser) {
        for (let chatOther of existingChatOther) {
          if (chatUser.chat_id === chatOther.chat_id) {
            commonChatId = chatUser.chat_id;

            break;
          }
        }

        if (commonChatId) break;
      }

      if (commonChatId) {
        setChatId(commonChatId);
        setLoginPersonal(userId);
        setOtherLoginPersonal(otherUserId);
        setProductId(itemid);
      }
    }
  }

  const prevHandler = () => {
    setIsAsk(false);
  };

  // 사용자 목록을 렌더링하는 함수
  const renderChatRoomsList = () => {
    return chatRooms.map((chatRoom) => (
      <St.UserItem key={chatRoom.chat_id}>
        <St.UserEmail>{chatRoom.receiverNickname}</St.UserEmail> {/* '받는 사람'의 닉네임을 표시 */}
        <St.UserLastMessage>{chatRoom.lastMessage || 'No messages yet.'}</St.UserLastMessage>
        <St.DMButton onClick={() => DmClickhandler(chatRoom.others_id, chatRoom.item_id, chatRoom.chat_id)}>
          Open Chat
        </St.DMButton>
      </St.UserItem>
    ));
  };

  return (
    <>
      {auth.session.profile.isAdmin ? (
        isSwitch && <AdminChat />
      ) : (
        <St.Container>
          {isChatModalOpen && (
            <St.ChatModalWrapper>
              {/* 채팅 모달 내용 */}
              <St.ChatModalHeader>
                <button onClick={() => setIsChatModalOpen(false)}>닫기</button>
                <div>채팅</div>
                <div>구매확정</div>
              </St.ChatModalHeader>
              <St.ChatModalBody>{renderMessages()}</St.ChatModalBody>
              <St.ChatModalFooter>
                <St.InputField
                  value={inputValue}
                  onChange={InputChanger}
                  onKeyDown={KeyPresshandler}
                  placeholder="메시지를 입력해주세요"
                />
                <St.SendButton onClick={sendDmMessage}>전송</St.SendButton>
              </St.ChatModalFooter>
            </St.ChatModalWrapper>
          )}
          {/* 채팅 UI가 모달 UI 위에 올라가지 않도록 조건부 렌더링을 적용합니다. */}
          {isSwitch && !isChatModalOpen && (
            <St.ChatWrapper>
              {isAsk ? (
                <St.LogoWrapper>
                  <St.PrevBtn onClick={prevHandler}>
                    <img src={Prev} alt="Prev" width={30} height={30} />
                  </St.PrevBtn>
                  <St.ChatHeader>
                    <img src={Logo} alt="Logo" />
                  </St.ChatHeader>
                </St.LogoWrapper>
              ) : (
                <St.ChatHeader>
                  <img src={Logo} alt="Logo" />
                </St.ChatHeader>
              )}
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
              ) : (
                <>
                  {/* Chats 컴포넌트의 UI 추가 */}
                  <div>{renderChatRoomsList()}</div>
                </>
              )}
            </St.ChatWrapper>
          )}
        </St.Container>
      )}
      <St.TalkButtonWrapper>
        <St.TalkButton onClick={() => setIsSwitch(!isSwitch)}>{isSwitch ? 'close' : 'open'}</St.TalkButton>
      </St.TalkButtonWrapper>
    </>
  );
};

export default Chat;
