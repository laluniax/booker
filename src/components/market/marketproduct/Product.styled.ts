import styled from 'styled-components';
import prev from '../../../assets/common/prevbutton2.webp';
import deleteIcon from '../../../assets/market/deleteicon.webp';
import editIcon from '../../../assets/market/editicon.webp';
import { MessageProps } from '../../qna/ChatModal.styled';
// import Prev from '../../styles/assets/buttonimages/prev2.png';

export const Container = styled.div`
  position: relative;
  max-width: 40rem;
  min-height: 120rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
    max-width: 70rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    max-width: 90rem;
  `};
`;

export const PrevButton = styled.div`
  position: absolute;
  left: 0rem;
  top: -6rem;
  background: url(${prev});
  background-size: contain;
  width: 5rem;
  height: 5rem;
  border-radius: 2rem;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.sm`
    left: -10rem;
    top: -1rem;
    width: 6rem;
    height: 6rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const Title = styled.div`
  max-width: 35rem;
  font-family: 'GmarketSansMedium';
  margin: 5rem auto;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 2rem;
  font-weight: 600;
  ${({ theme }) => theme.mediaQuery.sm`
 max-width: 70rem;
  font-size: 3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
 max-width: 90rem;
  font-size: 4rem;
  `};
`;
export const ProductWrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  gap: 3rem;
  `};
`;
export const LogoWrapper = styled.div`
  width: 30rem;
  height: 40rem;
  & img {
    width: 30rem;
    height: 40rem;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 50rem;
    height: 50rem;
    & img {
      width: 50rem;
      height: 50rem;
      object-fit: cover;
    }
  `};
`;
// export const LogoImage = styled.img`
//   background: url(${logoImage});
//   background-size: contain;
//   /* max-width: 25rem; */
//   /* max-height: 4.3766rem; */
// `;
export const SliderWrapper = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;
  overflow: hidden;
  margin-bottom: 3rem;
  ${({ theme }) => theme.mediaQuery.sm`
  margin-bottom: 0rem;
    width: 40rem;
    height: 50rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 50rem;
    height: 50rem;
  `};
`;

interface SliderUlProps {
  $slideCount: number;
  $currentSlide: number;
}

export const SliderUl = styled.ul<SliderUlProps>`
  display: flex;
  width: calc(40rem * ${(props) => props.$slideCount});
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${(props) => props.$currentSlide * 10}rem);
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  transform: translateX(-${(props: SliderUlProps) => props.$currentSlide * 20}rem);
    width: calc(50rem * ${(props: SliderUlProps) => props.$slideCount});
  `};
`;

export const SliderLi = styled.li`
  width: 40rem;
  height: 40rem;
  & img {
    width: 40rem;
    height: 40rem;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    width: 40rem;
    height: 50rem;
    & img {
      width: 40rem;
      height: 50rem;
    }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 50rem;
    height: 50rem;
    & img {
      width: 50rem;
      height: 50rem;
    }
  `};
`;

export const SliderBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  border-radius: 50%;
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
  & img {
    width: 1.2rem;
    opacity: 0.6;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    width: 3.5rem;
    height: 3.5rem;
  `}
`;

// export const SliderPrevBtn = styled.div`
//   background: url(${SliderPrevIcon});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 1.3rem;
//   height: 2rem;
// `;

// export const SliderNextBtn = styled.div`
//   background: url(${SliderNextIcon});
//   margin-left: 0.4rem;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 1.2rem;
//   height: 2rem;
// `;

export const ProductInfo = styled.div`
  width: 35rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 3.8rem;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 30rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 40rem;
  `};
`;

export const ProductTitleAndDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div`
  font-family: 'GmarketSansMedium';
  height: 9rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  width: 35rem;
  text-overflow: ellipsis;
  overflow: hidden;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  width: 30rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  width: 40rem;
  `};
`;

export const ProductDate = styled.div`
  font-size: 1.6rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
  `};
`;

export const ProductCategory = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  /* line-height: 1.5; */
  & span {
    font-weight: 400;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 1.7rem;
    font-weight: 600;
    & span {
      font-weight: 400;
    }
  `};
`;
export const ProductGrade = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 600;
  & span {
    font-weight: 400;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  margin-top: 1rem;
  font-weight: 600;
  & span {
    font-weight: 400;
  }
  `};
`;

export const PriceBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 2rem;
  font-weight: 600;
  & span {
    font-size: 1.5rem;
  }
`;

export const ProductBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpdateBtn = styled.button`
  height: 3rem;
  background-color: transparent;
  border: none;
`;

export const ProductLikes = styled.div`
  background-color: #14213d;
  border: none;
  color: #fff;
  width: 16.5rem;
  height: 5rem;
  font-size: 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 14rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 18.5rem;
  `};
`;

export const ProductsLikesWrapper = styled(ProductLikes)`
  cursor: default;
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const StartChat = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14213d;
  color: #fff;
  width: 16.5rem;
  height: 5rem;
  font-size: 1.6rem;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  width: 14rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  width: 18.5rem;
  `};
`;

export const ProductSoldOut = styled.div`
  font-size: 1.7rem;
  margin: 0 auto;
  color: #ff0000;
  font-weight: bold;
`;

export const ProductLikesChatUser = styled.div``;

export const ProductUser = styled.div`
  font-family: 'GmarketSansMedium';
  height: 6.1rem;
  background-color: #14213d;
  color: #fff;
  padding: 0 2rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  cursor: pointer;
  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 30%;
    background-color: #fff;
    object-fit: cover;
  }
  & div {
    width: 16rem;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    & div {
      width: 11rem;
    }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    & img {
      width: 4rem;
      height: 4rem;
      border-radius: 30%;
    object-fit: cover;
    }
    & div {
      width: 21rem;
    }
  `};
`;
export const FollowBtn = styled.button`
  font-family: 'GmarketSansMedium';
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  width: 8rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transform: scale(1.1);
    transition: 0.1s;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.1s;
  }
  &:not(:hover) {
    transition: 0.1s;
  }
`;

export const ProductContent = styled.div`
  font-family: 'ChosunGu';
  border-top: 0.15rem solid black;
  margin: 5rem auto;
  padding: 4rem;
  font-size: 2rem;
  line-height: 2;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

// 모달 래퍼
export const ChatModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;

  bottom: 0;
  right: 0;
  width: 48rem;
  height: 60rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2000;
  bottom: 66px;
  right: 10px;
`;

// 모달 헤더
export const ChatModalHeader = styled.div`
  padding: 10px;
  background-color: #000;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
`;

export const ChatModalTitle = styled.p`
  font-size: 1.5rem;
  margin-left: 0.4rem;
  font-weight: bold;
  color: #fca311;
`;

export const ChatModalCloseButton = styled.button`
  all: unset;
  font-size: 2.6rem;
  margin-right: 0.4rem;
  color: #fff;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
    color: #fca311;
  }
`;

// 모달 바디
export const ChatModalBody = styled.div`
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: calc(100vh - 200px); //채팅창의 높이를 화면에 맞게 조정
`;

// 모달 푸터
export const ChatModalFooter = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  border-top: 0.1rem solid #ddd;
  display: flex;
  align-items: center;
  height: 7rem;
`;

// 입력 필드 및 전송 버튼
export const InputField = styled.input`
  all: unset;
  flex-grow: 1;
  margin-right: 10px;
  padding: 2px;
  height: 4rem;
  background-color: #fff;
  border-radius: 1rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #000;

  ::placeholder {
    font-size: 1.5rem;
  }
`;

export const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #000;
  color: #fca311;
  border: none;
  height: 4.4rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;

  &:hover {
    background-color: #262626;
  }
`;

export const MessageComponent = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  padding: 1rem 2rem;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 1.5rem;
  max-width: 40%; /* 메시지의 최대 너비를 설정합니다. */
  word-wrap: break-word;
  background-color: ${(props) => (props.isOutgoing ? '#14213D' : '#FCA311')}; /* 배경 색상을 변경합니다. */
  color: ${(props) => (props.isOutgoing ? '#fff' : '#fff')}; /* 텍스트 색상을 변경합니다. */
  align-self: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  /* 추가: 메시지 버블 안에 텍스트가 중앙에 오도록 만듭니다. */
  align-items: center;
  font-weight: bold;
  text-align: ${(props) => (props.isOutgoing ? 'right' : 'left')};
`;

export const EditIcon = styled.div`
  background: url(${editIcon});
  background-size: contain;
  width: 2rem;
  height: 2rem;
`;

export const DeleteIcon = styled.div`
  background: url(${deleteIcon});
  background-size: contain;
  width: 2rem;
  height: 2rem;
`;

export const NicknameLabel = styled.div`
  background-color: #f0f0f0; // 닉네임 라벨 배경색
  color: #333; // 닉네임 라벨 텍스트 색상
  padding: 2px 8px; // 닉네임 라벨 패딩
  border-radius: 10px; // 닉네임 라벨 둥근 모서리
  font-size: 0.75rem; // 닉네임 라벨 글꼴 크기
  margin-bottom: 4px; // 닉네임 라벨과 메시지 컴포넌트 사이의 여백
  align-self: flex-start; // 부모 요소의 시작점에 정렬
`;

export const DateLabel = styled.div`
  background-color: #f0f0f0; // 배경색
  color: #333; // 텍스트 색상
  padding: 8px 16px; // 패딩
  margin: 10px 0; // 위 아래 마진
  border-radius: 4px; // 테두리 둥글게
  font-size: 0.9em; // 폰트 크기
  text-align: center; // 텍스트 중앙 정렬
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 그림자 효과
  width: fit-content; // 콘텐츠에 맞는 너비
  margin-left: auto; // 왼쪽 자동 마진
  margin-right: auto; // 오른쪽 자동 마진
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

export const HeaderChattingModalTitle = styled.p`
  color: #fca311;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 1rem;
`;

// 개인 채팅 모달 닫기 버튼
export const CloseButton = styled.button`
  all: unset;
  color: white;
  margin-left: 2.3rem;
  font-size: 1.6rem;
  margin-right: 1rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #fca311;
  }
`;
