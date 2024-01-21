import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { useCreateOrGetChat, useSendMessage } from '../../../api/chatApi';
import {
  deleteProductHandler,
  deleteProductImgStorage,
  getProductHandler,
  getUserSessionHandler,
  supabase,
} from '../../../api/supabase.api';
import { ChatId, otherPerson, person, productState, sendMessages } from '../../../atom/product.atom';

import { Session } from '@supabase/supabase-js';
import { ProductsTypes } from '../../../types/types';
import { MessageType } from '../../qna/ChatModal';
import { categoryArr } from '../marketpost/Post';
import * as St from './Product.styled';

const Product = () => {
  const params = useParams().id;
  const navigate = useNavigate();
  const slideRef = useRef<HTMLUListElement>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [product, setProduct] = useState<ProductsTypes>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const [inputValue, setInputValue] = useState('');
  // const [productId, setProductId] = useRecoilState(productState);
  const [productId, setProductId] = useRecoilState(productState);
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
      alert('자신에게 채팅을 보낼 수 없습니다 ');
      return;
    } else {
      if (user) {
        const userId = user?.id;
        setIsChatModalOpen(true);

        createOrGetChat({ userId, otherUserId, productId });
        setProductId(productId);
        setOtherLoginPersonal(otherUserId);
        setLoginPersonal(userId);
      }
    }
  };

  const InputChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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
      setChatId(chatId)
      setInputValue('');
  
    }
  };

  const sendDmMessage = async () => {
    if (!inputValue.trim()) return; // 메시지가 비어있지 않은지 확인

    sendDirectMessage({
      content: inputValue,
      author_id: LoginPersonal,
      chat_id: chatId,
      item_id: productId,
      others_id: otherLoginPersonal,
    });
    setChatId(chatId)
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

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setSession(result.session);
  };
  const getProduct = async () => {
    const result = await getProductHandler(params as string);
    setProduct(result[0]);
    setSlideLength(result[0].product_img.length);
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

  const onClickDeleteButton = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      const result = await deleteProductHandler(params as string);
      const resultStorage = await deleteProductImgStorage(params as string);
      navigate(`/market`);
    } else {
      return false;
    }
  };

  const onClickLikesButton = () => {
    if (!session && window.confirm('로그인 페이지로 이동하시겠습니까?')) navigate(`/login`);
    alert('기능 구현 중');
    return;
  };

  const onClickDMButton = () => {
    session
      ? product?.user_id && DmClickhandler(product.user_id, product.id)
      : window.confirm('로그인 페이지로 이동하시겠습니까?') && navigate(`/login`);
  };

  useEffect(() => {
    getProduct();
    getUserSession();
  }, []);
  useEffect(() => {
    if (slideRef.current) slideRef.current.style.marginLeft = `${-currentSlide * 30}rem`;
  }, [currentSlide]);

  return (
    <St.Container>
      <St.PrevButton
        onClick={() => navigate(`/market/${categoryArr.indexOf(product?.category as string)}`)}></St.PrevButton>
      <St.Title>중고 거래 상세페이지</St.Title>
      <St.ProductWrapper>
        {product?.product_img?.length === 0 ? (
          <St.LogoWrapper>
            <St.Logo src={`${process.env.PUBLIC_URL}/images/common/logo.png`} alt="Logo" />
          </St.LogoWrapper>
        ) : (
          <St.SliderWrapper>
            <St.SliderUl ref={slideRef}>
              {product?.product_img?.map((img, i) => (
                <St.SliderLi key={i}>
                  <img src={img} />
                </St.SliderLi>
              ))}
            </St.SliderUl>
            {currentSlide !== 0 && (
              <St.SliderBtn onClick={onClickPrevBtn} className="prev">
                〈
              </St.SliderBtn>
            )}
            {currentSlide !== slideLength - 1 && (
              <St.SliderBtn onClick={onClickNextBtn} className="next">
                〉
              </St.SliderBtn>
            )}
          </St.SliderWrapper>
        )}
        <St.ProductInfo>
          <St.ProductTitle>{product?.title}</St.ProductTitle>
          <St.ProductCategory>
            <span>카테고리 | </span>
            {product?.category}
          </St.ProductCategory>
          <St.ProductGrade>
            <span>상품 상태 | </span>
            {product?.product_grade}
          </St.ProductGrade>
          <St.PriceBtnWrapper>
            <St.ProductPrice>
              {product?.price} <span>원</span>
            </St.ProductPrice>
            {session?.user.id === product?.user_id ? (
              <St.ProductBtn>
                <St.UpdateBtn onClick={() => navigate(`/marketpost/${product?.id}`)}>
                  <img src={`${process.env.PUBLIC_URL}/images/market/edit.png`} />
                </St.UpdateBtn>
                <St.UpdateBtn onClick={onClickDeleteButton}>
                  <img src={`${process.env.PUBLIC_URL}/images/market/delete.png`} />
                </St.UpdateBtn>
              </St.ProductBtn>
            ) : null}
          </St.PriceBtnWrapper>
          <St.ProductLikesChatUser>
            <St.ProductBtn>
              {product?.onsale ? (
                <>
                  <St.ProductLikes onClick={onClickLikesButton}>좋아요</St.ProductLikes>
                  <St.ProductLikes onClick={onClickDMButton}>대화 시작하기</St.ProductLikes>
                </>
              ) : (
                <St.ProductSoldOut>판매 완료된 상품입니다.</St.ProductSoldOut>
              )}

              {/* 여기에 채팅 모달을 조건부 렌더링합니다. */}
              {isChatModalOpen && (
                <St.ChatModalWrapper>
                  {/* 채팅 모달 내용 */}
                  <St.ChatModalHeader>
                    <St.ChatModalTitle>채팅</St.ChatModalTitle>
                    <St.ChatModalCloseButton onClick={() => setIsChatModalOpen(false)}>x</St.ChatModalCloseButton>
                  </St.ChatModalHeader>
                  <St.ChatModalBody>{renderMessages()}</St.ChatModalBody>
                  <St.ChatModalFooter>
                    <St.InputField
                      value={inputValue}
                      onChange={InputChanger}
                      onKeyDown={KeyPresshandler}
                      placeholder="메세지를 입력해주세요"
                    />
                    <St.SendButton onClick={sendDmMessage}>전송</St.SendButton>
                  </St.ChatModalFooter>
                  {/* 채팅 모달 내용 */}
                  {/* <St.ChatModalHeader>
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
                </St.ChatModalFooter> */}
                </St.ChatModalWrapper>
              )}
            </St.ProductBtn>
            <St.ProductUser>
              <img src={product?.users.user_img ?? undefined} />
              <div>{product?.users.nickname}</div>
              <button
                onClick={() => {
                  navigate(`/profile/${product?.user_id}`);
                }}>
                프로필 방문
              </button>
            </St.ProductUser>
          </St.ProductLikesChatUser>
        </St.ProductInfo>
      </St.ProductWrapper>
      <St.ProductContent>{product?.content}</St.ProductContent>
    </St.Container>
  );
};

export default Product;
