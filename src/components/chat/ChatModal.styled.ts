import styled, { keyframes } from 'styled-components';
import bookerChattingIcon from '../../assets/common/bookerchattingicon.webp';
import prevIcon from '../../assets/common/prevbutton1.webp';

export const Container = styled.div``;

export const ChatWrapper = styled.div`
  position: fixed;
  box-shadow: rgba(100, 100, 111, 0.2) 0 0.7rem 2.9rem 0;
  background-color: white;
  overflow: scroll;
  z-index: 999;
  margin: 0 auto;
  width: 28rem;
  height: 40rem;
  bottom: 12.5rem;
  right: 1.5rem;
  border-radius: 2rem;
  padding: 0.8rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 43rem;
    height: 50rem;
    bottom: 13rem;
    right: 1.5rem;
    border-radius: 2rem;
    padding: 0.8rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 50rem;
  height: 60rem;
  bottom: 18rem;
  right: 1.5rem;
  border-radius: 2rem;
  padding: 0.8rem;
  `};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PrevBtn = styled.div`
  cursor: pointer;
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-10%);
  }
  30% {
    transform: translateY(-5%);
  }
  40% {
    transform: translateY(-15%);
  }
  60% {
    transform: translateY(-7%);
  }
  70% {
    transform: translateY(-12%);
  }
  90% {
    transform: translateY(-9%);
  }
`;

export const QnaIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: auto;
  animation: ${bounceAnimation} 6s infinite;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 4rem;
    height: 4rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      width: 5rem;
      height: 5rem;
  `};
`;

export const ChatHeader = styled.div`
  display: flex;
  overflow: hidden;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 0.1rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0.8rem;
  `};
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  gap: 1.2rem;
  padding: 0.8rem;
  margin: 0 1.6rem;
  `};
`;

export const ChatTopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  height: 8.5rem;
  width: 25rem;
  margin-top: 0rem;

  ${({ theme }) => theme.mediaQuery.sm`
  height: 10rem;
  width: 40rem;
  margin-top:0rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 11.5rem;
  width: 40rem;
  margin-top:0rem;
  `};
`;
export const MainMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  width: 25rem;
  height: 2rem;
  text-align: center;
  margin-top: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  width:40rem;
  height:2rem;
  text-align:center;
  margin-top:0.5rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.4rem;
  width:30rem;
  height:2rem;
  text-align:center;
  margin-top:1rem;
  `};
`;

// 문의하기 버튼
export const AskButton = styled.button`
  all: unset;
  font-weight: bold;
  text-align: center;
  border-radius: 2rem;
  background-color: #14213d;
  color: #fca311;
  font-weight: bold;
  margin-top: 1rem;
  width: 10rem;
  height: 6rem;
  font-size: 1.4rem;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 2rem;
  width: 10rem;
  height: 3.5rem;
  font-size: 1.4rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 2rem;
  width: 12rem;
  height: 4rem;
  font-size: 1.6rem;
  `};
`;

export const Contour = styled.div`
  display: flex;
  justify-content: center;
  width: 22rem;
  border-bottom: 2px solid #000;
  margin: 1.5rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
  width : 35rem;
  border-bottom: 2px solid #000;
  margin : 1.5rem auto;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top : -0.5rem;
  width : 40rem;
  height: 3rem;
  `};
`;
export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1rem auto;
  margin-left: -0.5rem;
  z-index: 999;
  padding: 0 0.6rem 0 1.4rem;
  width: 26.5rem;
  height: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 0 0.6rem 0 1.4rem;
  width:39.5rem;
  height:5rem;
  margin-left: 0.5rem;
  margin-top: -0.3rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0 0.6rem 0 1.4rem;
  width:47rem;
  height:5rem;
  `};
`;

export const Input = styled.input`
  width: 95%;
  position: relative;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(92.34deg, rgba(239, 239, 240, 0.8) 48.04%, rgba(247, 247, 248, 0.8) 100%);
  margin-top: 0.5rem;
  min-height: 3rem;
  padding: 0 0.6rem 0 1.4rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 1rem;
  min-height: 4rem;
  padding: 0 0.6rem 0 1.4rem;
  font-size: 1.2rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 2rem;
  min-height: 5rem;
  width:40rem;
  padding: 0 0.6rem 0 1.4rem;
  font-size: 1.5rem;
  `};
`;

export const QnaSendButton = styled.button`
  background-color: #ffcc99;
  color: 0099ff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  height: 3rem;
  width: 5rem;
  border-radius: 1rem;
  font-size: 1rem;
  margin-top: 0.8rem;

  &:hover {
    background-color: #262626;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  height: 4rem;
  width:5rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin-top:0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 5rem;
  width:6rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  margin-top:2rem;
  `};
`;

export const TalkButtonWrapper = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 20;

  ${({ theme }) => theme.mediaQuery.sm`
  bottom: 4rem;
  right: 1rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  bottom: 3rem;
  right: 1rem;
  `};
`;

export const ScrollToTopButton = styled.div`
  position: fixed;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 20;
  margin-bottom: 3rem;
  width: 3.5rem;
  height: 3.5rem;
  bottom: 10rem;
  right: 3.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 4rem;
  height: 4rem;
  bottom: 11rem;
  right: 4rem;
  font-size: 1.6rem;
  padding: 1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 5.5rem;
  height: 5.5rem;
  bottom: 14rem;
  right: 4.7rem;
  font-size: 1.8rem;
  padding: 1.5rem;
  `};
`;

export const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.isOutgoing ? 'flex-start' : 'flex-end')};
`;

export type MessageProps = {
  isOutgoing: boolean;
};

export const UserEmail = styled.div`
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.3rem;
  `};
`;

export const DMButton = styled.button`
  border: none;
  background-color: #14213d;
  color: #fff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fca311;
    color: #000;
    font-weight: bold;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 1rem;
  `};
`;

// 채팅 모달 래퍼
export const ChatModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2000;
  bottom: 6rem;
  right: 1rem;
  width: 30rem;
  height: 40rem;
  border: 0.1rem solid #ccc;

  ${({ theme }) => theme.mediaQuery.sm`
  bottom: 6rem;
  right: 1rem;
  width: 45rem;
  height: 50rem;
  border: 0.1rem solid #ccc;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  bottom: 6rem;
  right: 1rem;
  width: 48rem;
  height: 60rem;
  border: 0.1rem solid #ccc;
  `};
`;

export const ChatModalTitle = styled.p`
  color: #fff;

  ${({ theme }) => theme.mediaQuery.sm`
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  margin-left: 0.4rem;
  `};
`;

export const ChatModalCloseButton = styled.button`
  all: unset;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fca311;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2.6rem;
  `};
`;

// 개인 채팅 모달 헤더
export const HeaderChattingModalTitle = styled.p`
  color: #fca311;
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  margin-left: 1rem;
  `};
`;

// 구매확정 버튼
export const HeaderPurchaseConfirmationButton = styled.button`
  all: unset;
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #fca311;
  }
`;

// 모달 바디
export const ChatModalBody = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px); //채팅창의 높이를 화면에 맞게 조정

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  `};
`;

export const MessageContentTime = styled.div`
  margin-right: auto;
  font-size: 0.8rem;
  margin-right: 0.1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1rem;
  margin-right: 0.1rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.2rem;
  margin-right: 0.1rem;
  `};
`;

export const MessageContentText = styled.div`
  font-size: 1.4rem;
  margin: 0.3rem;
  width: auto;
  height: auto;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.5rem;
  margin-top: 0.4rem;
  width: auto;
  height: auto;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  width: auto;
  height: auto;
  `};
`;

// 모달 푸터
export const ChatModalFooter = styled.div`
  background-color: #f5f5f5;
  border-top: 0.1rem solid #ddd;
  display: flex;
  align-items: center;
  padding: 0.6rem;
  height: 4.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
  padding: 0.8rem;
  height: 7rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  height: 7rem;
  `};
`;

export const PrevIcon = styled.div`
  background: url(${prevIcon});
  background-size: contain;
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: -0.5rem;
  margin-right: -1.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 3rem;
  height: 3rem;
  margin-bottom:-2rem;
  margin-top:1rem;
  margin-right: -1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom:-3rem;
  `};
`;

export const BookerChattingIcon = styled.div`
  background: url(${bookerChattingIcon});
  background-size: contain;
  width: 9rem;
  height: 9rem;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 10rem;
  height: 10rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 13rem;
  height: 13rem;
  margin-bottom: 3rem;
  width: 13.5rem;
  height: 13.5rem;
  bottom: 10rem;
  right: 3.5rem;
  `};
`;

export const UserImageNickName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

// 제품 상세 정보에 대한 스타일드 컴포넌트를 정의합니다
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitleProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  font-family: 'GmarketSansMedium';

  ${({ theme }) => theme.mediaQuery.sm`
  margin-left: 1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 2rem;
  `};
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 10px;
  `};
`;

export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 10px;
  `};
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChatModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
