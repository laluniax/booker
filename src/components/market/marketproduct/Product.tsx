import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { useCreateOrGetChat, useSendMessage } from '../../../api/chatApi';
import { getProductHandler, supabase } from '../../../api/supabase.api';
import { ChatId, otherPerson, person, productState, sendMessages } from '../../../atom/product.atom';

import { ListTypes } from '../MarketList';
import * as St from './Product.styled';
import { MessageType } from '../../qna/ChatModal';

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const slideRef = useRef<HTMLUListElement>(null);
  const [product, setProduct] = useState<ListTypes>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  const [inputValue, setInputValue] = useState('');
  const [productId, setProductId] = useRecoilState(productState);
  // const { createOrGetChatWithUser, KeyPresshandler, sendDmMessage } = useRecoilValue(chatFunctionsState);
  //리코일 작동안되는 부분 해결 하고, 함수를 리코일 비동기 하려면 로직을 리코일로 옮기고.

  const [LoginPersonal, setLoginPersonal] = useRecoilState(person);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [messages, setMessages] = useRecoilState(sendMessages);
  const [otherLoginPersonal, setOtherLoginPersonal] = useRecoilState(otherPerson);
  const { mutate: createOrGetChat } = useCreateOrGetChat();
  const [chatId, setChatId] = useRecoilState(ChatId);
  const { mutate: sendDirectMessage } = useSendMessage();

  
  // DM 클릭 핸들러
  const DmClickhandler = async (otherUserId: string, productId: number) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user?.id === otherUserId) {
      alert('자신에게 채팅을 보낼 수 없습니다 ')
     return; }else{   
      if (user) {
        const userId=user?.id
        setIsChatModalOpen(true);
      
        createOrGetChat({ userId, otherUserId, productId });

        setOtherLoginPersonal(otherUserId);
      }
    }
  };
  // useEffect를 사용하여 채팅 데이터 로드
  useEffect(() => {
    // 현재 채팅방의 메시지를 가져오는 함수
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

    fetchMessages();
    
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
      fetchMessages();
    })
    .subscribe();

    return () => {
      messagesSubscription?.unsubscribe();
      chatChannel?.unsubscribe();
    };
  }, [chatId]);

  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


 // 메시지 전송 핸들러
 const KeyPresshandler = async (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === 'Enter' && inputValue.trim()) {
    sendDirectMessage({ content: inputValue, authorId: otherLoginPersonal, chatId:chatId });
    setInputValue('');
  }
};
const sendDmMessage = async () => {
  if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인
      
  sendDirectMessage({ content: inputValue, authorId: otherLoginPersonal, chatId:chatId });

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
  const getProduct = async () => {
    const result = await getProductHandler(params.id as string);
    setProduct(result[0]);
    setSlideLength(result[0].product_img.length);
    setProductId(result[0]);
  };

  const onClickPrevBtn = useCallback(() => {
    if (currentSlide >= 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);
  const onClickNextBtn = useCallback(() => {
    if (currentSlide < slideLength - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slideLength]);

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    if (slideRef.current) slideRef.current.style.marginLeft = `${-currentSlide * 30}rem`;
  }, [currentSlide]);

  return (
    <St.Container>
      <St.Title>중고 거래 상세페이지</St.Title>
      <St.ProductInfo>
        <St.SliderWrapper>
          {/* 이미지 슬라이드로 할 지, 클릭 시 커지는 것으로 할 지 */}
          <St.SliderUl ref={slideRef}>
            {product?.product_img?.map((img, i) => (
              <St.SliderLi key={i}>
                <img src={img} />
              </St.SliderLi>
            ))}
          </St.SliderUl>
          <St.SliderBtn onClick={onClickPrevBtn} className="prev">
            〈
          </St.SliderBtn>
          <St.SliderBtn onClick={onClickNextBtn} className="next">
            〉
          </St.SliderBtn>
        </St.SliderWrapper>
        <div>
          <St.ProductTitle>{product?.title}</St.ProductTitle>
          <St.ProductCategory>
            <span>카테고리 | </span>
            {product?.category}
          </St.ProductCategory>
          <St.ProductGrade>
            <span>상품 상태 | </span>
            {product?.product_grade}
          </St.ProductGrade>
          <St.ProductPrice>
            {product?.price} <span>원</span>
          </St.ProductPrice>
          <St.ProductBtn>
            <St.ProductLikes>좋아요</St.ProductLikes>
            <St.ProductLikes onClick={() => product?.user_id && DmClickhandler(product.user_id, Number(product.id))}>
              대화 시작하기
            </St.ProductLikes>
               {/* 여기에 채팅 모달을 조건부 렌더링합니다. */}
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
                <St.SendButton onClick={ sendDmMessage}>전송</St.SendButton>
              </St.ChatModalFooter>
            </St.ChatModalWrapper>
          )}
          </St.ProductBtn>
          <St.ProductUser
            onClick={() => {
              navigate(`/profile/${product?.user_id}`);
            }}>
            <img />
            {product?.user_id}
          </St.ProductUser>
        </div>
      </St.ProductInfo>
      <St.ProductContent>{product?.content}</St.ProductContent>
    </St.Container>
  );
};

export default Product;
