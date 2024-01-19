import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useCreateOrGetChat, useSendMessage } from '../../api/chatApi';
import { supabase } from '../../api/supabase.api';
import { ChatId, chatFunctionsState, otherPerson, person, sendMessages } from '../../atom/product.atom';
import { useAuth } from '../../contexts/auth.context';
import AdminChat from './AdminChat';
import ChatLog from './ChatLog';
import * as St from './ChatStyle';
export type MessageType = {
  id: number;
  content: string;
  author_id: string;
  chat_id: number;
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
  const [users, setUsers] = useState<UserType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  //흐름  첫랜더링시 useEffect 실행 : 로그인 아이디+모든 사용자/메시지 => DmClickhandler (상대방정보가져옴)
  //=> 이메일 챗방만들기함수 넘겨줌 => createOrGetChatWithUser 이메일 기반 데이터 조회 및 비교 해서 기존 챗방 있는지 확인
  //=> 있으면 setChatId(chat방id값임) || 없으면 새로생성 => KeyPresshandler함수에 값을 입력하면 상대방에게 메시지가는 구조
  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [otherLoginPersonal, setOtherLoginPersonal] = useRecoilState(otherPerson);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const setChatFunctions = useSetRecoilState(chatFunctionsState);
  const { mutate: sendDirectMessage } = useSendMessage();
  const { mutate: createOrGetChat } = useCreateOrGetChat();
  // const productId = useRecoilValue(productState); // Recoil에서 제품 ID 가져오기
  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  // DM 클릭 핸들러
  const DmClickhandler = async (otherUserId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user && user.email) {
      // const userId = user.id;
      if (user) {
        await checkChatWithUser(user.id, otherUserId);
        setIsChatModalOpen(true);
        setOtherLoginPersonal(otherUserId);
      }
    }
  };
  // 메시지 전송 핸들러
  const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      sendDirectMessage({ content: inputValue, authorId: otherLoginPersonal, chatId: chatId });
      setInputValue('');
    }
  };
  const sendDmMessage = async () => {
    if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인
    sendDirectMessage({ content: inputValue, authorId: otherLoginPersonal, chatId: chatId });
    setInputValue('');
  };
  // 메시지 컴포넌트를 렌더링하는 함수
  const renderMessages = () => {
    return messages
      .filter((message: MessageType) => String(message.chat_id) === chatId)
      .map((message: MessageType) => (
        <St.MessageComponent key={message.id} isOutgoing={message.author_id === LoginPersonal}>
          {message.content}
        </St.MessageComponent>
      ));
  };
  useEffect(() => {
    // 로그인한 사용자 정보 가져오기
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setLoginPersonal(data.user.id);
      }
    });
    // 모든 사용자 가져오기
    const fetchUsers = async () => {
      let { data, error } = await supabase.from('users').select('*');
      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setUsers(data as UserType[]);
      }
    };
    // 선택된 사용자의 메시지 가져오기
    const fetchMessages = async () => {
      if (chatId) {
        let { data, error } = await supabase.from('messages').select('*').eq('chat_id', chatId);
        if (error) {
          console.error('Error fetching messages:', error);
        } else {
          setMessages(data ?? []);
        }
      }
    };
    fetchUsers();
    fetchMessages();
    // 메시지 변경사항을 감지할 채널 구독
    const messagesSubscription = supabase
      .channel('custom-all-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, async (payload: any) => {
        console.log('Changes received!', payload);
        fetchMessages(); // 데이터베이스에 변화가 있을 때 메시지 다시 가져오기
        // setChatId(payload.new.chat_id); //메시지 창 열기
      })
      .subscribe();
    // 채팅방 변경사항을 감지할 채널 구독
    const chatChannel = supabase
      .channel('chat-channel')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, (payload) => {
        console.log('New chat!', payload);
        // 새 채팅방이 생성되었을 때 필요한 동작을 수행합니다.
      })
      .subscribe();
    // 구독 해지
    return () => {
      messagesSubscription?.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, [chatId]);
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
  //챗방 만들기 //여기에 기존에 있는 챗방인지 아닌지 파악 하고 있으면 기존 거 쓰고 없으면 새로 //구현 되면 상대방이 챗을 받으면 챗창 오픈 되도록
  async function checkChatWithUser(userId: string, otherUserId: string) {
    console.log('checkChatWithUser', userId);
    console.log('checkChatWithUserother', otherUserId);
    // userId에 해당하는 챗방의 chat_id와 item_id를 가져옴
    //.eq('others_id', userId);  .eq('user_id', otherUserId); 거꾸로 되어있네?
    //왜냐? 모달은 a->b 한테 신청 상점은 b->a 한테 신청인데. 상점에서 신청을 해야 되는거라 주체가 달라
    // otherUserId에 해당하는 챗방의 chat_id와 item_id를 가져옴
    const { data: existingChatUser } = await supabase
      .from('chats_users')
      .select('chat_id, item_id,others_id')
      .eq('user_id', userId);
    console.log('existingChatUser', existingChatUser);
    const { data: existingChatOther } = await supabase
      .from('chats_users')
      .select('chat_id, item_id,user_id')
      .eq('others_id', otherUserId);
    console.log('existingChatOther', existingChatOther);
    if (existingChatUser && existingChatOther) {
      let commonChatId = null;
      // Check for a common chat_id and item_id
      for (let chatUser of existingChatUser) {
        for (let chatOther of existingChatOther) {
          if (chatUser.chat_id === chatOther.chat_id && chatUser.item_id === chatOther.item_id) {
            commonChatId = chatUser.chat_id;
            break;
          }
        }
        if (commonChatId) break;
      }
      if (commonChatId) {
        // A common chat_id is found
        setChatId(commonChatId);
      }
    }
  }
  // 사용자 목록을 렌더링하는 함수
  const renderUserList = () => {
    return users
      .filter((user) => user.id !== LoginPersonal)
      .map((user) => (
        <St.UserItem key={user.id}>
          <St.UserEmail>{user.nickname}</St.UserEmail>
          <St.UserLastMessage>{user.lastMessage || '메시지가 없습니다.'}</St.UserLastMessage>
          <St.DMButton onClick={() => DmClickhandler(user.id)}>DM</St.DMButton>
        </St.UserItem>
      ));
  };
  const prevHandler = () => {
    setIsAsk(false);
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
                <div>채팅</div>
                <button onClick={() => setIsChatModalOpen(false)}>닫기</button>
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
                    <img src="/images/chat/prev.png" alt="Prev" width={30} height={30} />
                  </St.PrevBtn>
                  <St.ChatHeader>
                    <img src="/images/common/logo.png" alt="Logo" />
                  </St.ChatHeader>
                </St.LogoWrapper>
              ) : (
                <St.ChatHeader>
                  <img src="/images/common/logo.png" alt="Logo" />
                </St.ChatHeader>
              )}
              <St.ChatBody>
                <St.MainMessage>
                  안녕하세요 :두_손을_들고_있는_사람: <br />
                  새로운 지식으로 시작되는 어쩌구저쩌구, 북커입니다:책:
                  <br />​ 무엇을 도와드릴까요?
                </St.MainMessage>
              </St.ChatBody>
              <St.AskWrapper>
                <St.AskButton style={isAsk ? { display: 'none' } : { display: 'block' }} onClick={() => setIsAsk(true)}>
                  문의하기 :질주:
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
                  <div>{renderUserList()}</div>
                </>
              )}
            </St.ChatWrapper>
          )}
        </St.Container>
      )}
      <St.TalkButtonWrapper>
        <St.TalkButton
          src="/images/customerchatting/bookerchattingicon.png"
          alt="bookerchattingicon"
          onClick={() => setIsSwitch(!isSwitch)}
        />
        {/* {isSwitch ? 'close' : 'open'} */}
      </St.TalkButtonWrapper>
    </>
  );
};
export default Chat;
