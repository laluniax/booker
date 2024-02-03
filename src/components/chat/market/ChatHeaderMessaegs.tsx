import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  ChatId,
  mainChatModalOpen,
  newMessagesCountState,
  otherUserDetail,
  productDetail,
  productState,
  updateMesaages,
} from '../../../atom/Product.atom';
import * as St from '../ChatModal.styled';

const ChatHeaderMessaegs = () => { //props 못 내림.
  const [productDetails, setProductDetails] = useRecoilState(productDetail);
  const [isChatModalOpen, setIsChatModalOpen] = useRecoilState(mainChatModalOpen);
  const [otherUserDetails, setOtherUserDetails] = useRecoilState(otherUserDetail);
  const [newMessagesCount, setNewMessagesCount] = useRecoilState(newMessagesCountState);
  const [updateMesaage, setUpdateMesaage] = useRecoilState(updateMesaages);
  const [chatId, setChatId] = useRecoilState(ChatId);
  const [productId, setProductId] = useRecoilState(productState);

  // useNavigate 훅으로부터 navigate 함수를 얻음
  const navigate = useNavigate();

  useEffect(() => {
    RenderChatHeader();
  }, [updateMesaage, newMessagesCount]);

  // // 채팅 헤더를 렌더링하는 함수입니다
  const RenderChatHeader = () => {
    // 제품 상세 페이지로 이동하는 함수
    const navigateToProductPage = () => {
      const productId = productDetails?.id; // productDetails로부터 제품의 ID를 얻음
      if (productId) {
        navigate(`/product/${productId}`); // 제품 ID를 사용하여 경로를 생성하고, 해당 경로로 이동
      }
    };

    return (
      <St.ChatModalHeader>
        <St.UserInfoSection>
          <St.CloseButton onClick={() => setIsChatModalOpen(false)}>←</St.CloseButton>
          <St.UserImage src={otherUserDetails?.user_img} alt="user" />

          <St.ChatRoomUserNickname>{otherUserDetails?.nickname}</St.ChatRoomUserNickname>
        </St.UserInfoSection>
        <St.ProductInfoSection>
          <St.ProductImage onClick={() => navigateToProductPage()} src={productDetails?.image} alt="product" />

          <div>
            <St.ProductTitle>제목:{productDetails?.title}</St.ProductTitle>
            <St.ProductPrice>가격:{productDetails?.price}</St.ProductPrice>
          </div>
        </St.ProductInfoSection>
      </St.ChatModalHeader>
    );
  };
  return <div>{RenderChatHeader()}</div>;
};

export default ChatHeaderMessaegs;
