import styled from 'styled-components';
import bookerChattingIcon from '../../assets/common/bookerchattingicon.webp';
import prevIcon from '../../assets/common/prevbutton1.webp';

export const Container = styled.div`
  width: 35rem;
  height: 55rem;
  position: relative;

  ${({ theme }) => theme.mediaQuery.sm`
        width: 50rem;
        height: 65rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      width: 56rem;
      height: 67rem;
  `};
`;
export const ChatWrapper = styled.div`
  /* box-sizing: border-box; */
  position: fixed;
  /* z-index: 1000; */
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
  bottom: 14rem;
  right: 1.5rem;
  border-radius: 2rem;
  padding: 0.8rem;
  `};
`;
export const LogoWrapper = styled.div``;

export const PrevBtn = styled.div`
  cursor: pointer;
`;

export const ChatHeader = styled.div`
  display: flex;
  overflow: hidden;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 0.1rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0.8rem;
  // margin: 1.6rem 1.6rem 1.2rem;
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
  height: 5rem;
  width: 25rem;
  margin-top: 1.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    height: 7rem;
    width: 40rem;
    margin-top:2rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 10rem;
  width: 40rem;
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
  width:40rem;
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
  height: 4rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQuery.sm`
      margin-top: 1rem;
      width: 10rem;
      height: 3rem;
      font-size: 1.3rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 2rem;
    width: 35rem;
    height: 4rem;
    font-size: 1.5rem;
  `};
`;

export const Contour = styled.div`
  border-bottom: 3px solid #000;
  width: 35rem;
  display: flex;
  justify-content: center;
  width: 25rem;
  border-bottom: 2px solid #000;
  margin: 2.5rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
  width : 30rem;
  border-bottom: 2px solid #000;
  margin : 2rem auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top : 1rem;
    width : 40rem;
    height: 3rem;
  `};
`;

//중고거래 문구
export const ChatContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 25rem;
  height: 4rem;
  margin-top: -1rem;

  ${({ theme }) => theme.mediaQuery.sm`
      width: 40rem;
      height: 3rem;
      margin-top: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 40rem;
    height: 3rem;
    margin-top: 3.5rem;
  `};
`;

export const ChatContentTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  width: 25rem;
  height: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
      font-weight: bold;
      font-size: 1.4rem;
      width: 40rem;
      height: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-weight: bold;
    font-size: 1.6rem;
    width: 40rem;
    height: 2rem;
  `};
`;

export const ChatContent = styled.div`
  text-align: center;
  font-size: 1.1rem;
  width: 25rem;
  height: 1.1rem;
  margin: -0.3rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
      font-size: 1.2rem;
      width: 40rem;
      height: 1.5rem;
      margin: 0.5rem auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 1.4rem;
    width: 40rem;
    height: 1.5rem;
    margin: 1rem auto;
  `};
`;

// 채팅 리스트
export const ChatListWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem auto;
  font-size: 1.1rem;
  width: 25rem;
  height: 40rem;

  ${({ theme }) => theme.mediaQuery.sm`
     margin-top: 2rem;
     font-size: 1.2rem;
     width:40rem;
     height:50rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
   margin-top: 3rem;
   font-size: 1.3rem;
   width:40rem;
   height:55rem;
  `};
`;

export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0 0.6rem 0 1.4rem;
  `};
`;

export const Input = styled.input`
  width: 95%;
  position: relative;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(92.34deg, rgba(239, 239, 240, 0.8) 48.04%, rgba(247, 247, 248, 0.8) 100%);
  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 2rem;
    min-height: 5rem;
    padding: 0 0.6rem 0 1.4rem;
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

//고객센터 채팅내역
export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.1rem solid #000;
  color: #000;
  cursor: pointer;
  margin: 0 auto;
  width: 25rem;
  height: 4rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: #e9e9e9;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 36rem;
    height: 4.5rem;
    margin-bottom: 0.5rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 38rem;
  height: 5rem;
  margin-bottom: 1rem;
  `};
`;

export const UserEmail = styled.div`
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.3rem;
  `};
`;

export const UserLastMessage = styled.div`
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.2rem;
    margin-top:0.5rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.2rem;
  margin-top:0.5rem;
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
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2000;

  ${({ theme }) => theme.mediaQuery.sm`
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
  margin-right: 0.4rem;
  `};
`;

// 개인 채팅 모달 헤더
// export const ChatModalHeader = styled.div`
//   padding: 1rem;
//   background-color: #000;
//   border-bottom: 1px solid #ddd;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 7rem;
// `;
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

// 개인 채팅 모달 닫기 버튼
export const CloseButton = styled.button`
  all: unset;
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #fca311;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 2.3rem;
  font-size: 1.6rem;
  margin-right: 1rem;
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
  background-color: #fff;
  height: calc(100vh - 200px); //채팅창의 높이를 화면에 맞게 조정

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  `};
`;

export const MessageComponent = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  word-wrap: break-word;
  background-color: ${(props) => (props.isOutgoing ? '#14213D' : '#FCA311')}; /* 배경 색상을 변경합니다. */
  color: ${(props) => (props.isOutgoing ? '#fff' : '#fff')}; /* 텍스트 색상을 변경합니다. */
  align-self: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  /* 추가: 메시지 버블 안에 텍스트가 중앙에 오도록 만듭니다. */
  align-items: center;
  font-weight: bold;
  text-align: ${(props) => (props.isOutgoing ? 'right' : 'left')};

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    padding: 1rem 2rem;
    margin: 0.5rem;
    border-radius: 20px;
    font-size: 1.5rem;
    max-width: 40%; /* 메시지의 최대 너비를 설정합니다. */
  `};
`;

// 모달 푸터
export const ChatModalFooter = styled.div`
  background-color: #f5f5f5;
  border-top: 0.1rem solid #ddd;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  height: 7rem;
  `};
`;

// 입력 필드 및 전송 버튼
export const InputField = styled.input`
  all: unset;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 1rem;
  border-bottom: 0.1rem solid #000;
  ::placeholder {
    font-size: 1.5rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-right: 1rem;
  padding: 0.2rem;
  height: 4rem;
  font-size: 1.5rem;
  `};
`;

export const SendButton = styled.button`
  background-color: #000;
  color: #fca311;
  border: none;
  cursor: pointer;

  font-weight: bold;
  &:hover {
    background-color: #262626;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 4.4rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  `};
`;

export const PrevIcon = styled.div`
  background: url(${prevIcon});
  background-size: contain;

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 3rem;
  height: 3rem;
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
    // margin-bottom: 3rem;
    // width: 13.5rem;
    // height: 13.5rem;
    // bottom: 10rem;
    // right: 3.5rem;
  `};
`;

export const NicknameLabel = styled.div`
  background-color: #f0f0f0; // 닉네임 라벨 배경색
  color: #333; // 닉네임 라벨 텍스트 색상
  align-self: flex-start; // 부모 요소의 시작점에 정렬

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 2px 8px; // 닉네임 라벨 패딩
  border-radius: 10px; // 닉네임 라벨 둥근 모서리
  font-size: 0.75rem; // 닉네임 라벨 글꼴 크기
  margin-bottom: 4px; // 닉네임 라벨과 메시지 컴포넌트 사이의 여백
  `};
`;

export const UserImage = styled.img`
  border-radius: 50%; // 원형으로 만들기
  object-fit: cover; // 이미지 비율 유지
  margin-right: 0.5rem;
  width: 3.5rem; // 유저 이미지 크기 조절
  height: 3.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    margin-right: 1rem;
    width: 4rem; // 유저 이미지 크기 조절
    height: 4rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-right: 1rem;
  width: 4rem; // 유저 이미지 크기 조절
  height: 4rem;
  `};
`;

export const UserInfo = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 15rem;
  margin-left: 0.5rem; // 오른쪽에 있는 물품 이미지와의 간격

  ${({ theme }) => theme.mediaQuery.sm`
    width: 22rem;
    margin-left: 0.5rem; // 오른쪽에 있는 물품 이미지와의 간격
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  margin-left: 0.5rem; // 오른쪽에 있는 물품 이미지와의 간격
  `};
`;

export const NicknameMessageTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 22rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  `};
`;

export const MessageTime = styled.div`
  font-size: 1rem;
  margin-right: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.1rem;
  margin-right: 1rem;

`}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.1rem;
  `};
`;

export const UserNickname = styled.div`
  font-weight: bold;
`;

export const ProductImage = styled.img`
  /* object-fit: cover; */
  width: 4rem; // 물품 이미지 크기 조절
  height: 4rem;
  margin-left: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 4rem; // 물품 이미지 크기 조절
    height: 4rem;
    margin-left:0.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 5rem; // 물품 이미지 크기 조절
  height: 5rem;
  margin-left:0.5rem;
  `};
`;

export const AlarmUserWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 0.7rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 4rem;
    height: 4rem;
    margin-left:1rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 4rem; 
  height: 4rem;
  `};
`;

export const AlarmDetail = styled.span`
  background-color: red;
  color: white;
  vertical-align: super;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  // 기타 필요한 스타일 ...
  border-radius: 9999px; // 원형 모양
  margin-left: -1.5rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  left: 1rem;
  top: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    border-radius: 9999px; // 원형 모양
    margin-left: -1.5rem;
    margin-top: -0.5rem;
    padding: 0.2em 0.6em;
    font-size: 1rem;
    width:1.7rem;
    height:1.7rem;
    left:1rem;
    top:0.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 9999px; // 원형 모양
  margin-left: -1.5rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1rem;
  width:1.7rem;
  height:1.7rem;
  left:1rem;
  top:0.3rem;
  `};
`;

export const NotificationBadge = styled.span`
  background-color: red;
  color: white;
  vertical-align: super;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // 기타 필요한 스타일 ...
  border-radius: 5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1.2rem;
  width: 1.7rem;
  height: 1.7rem;
  left: 1.5rem;
  top: 3.3rem;

  ${({ theme }) => theme.mediaQuery.sm`
    border-radius: 5rem;
    margin-left: -1rem;
    margin-top: -0.5rem;
    padding: 0.2em 0.6em;
    font-size: 1.2rem;
    width:2.2rem;
    height:2.2rem;
    left:1.5rem;
    top:3.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1.5rem;
  width:3rem;
  height:3rem;
  left:1.5rem;
  top:4.5rem;
  `};
`;

// 제품 상세 정보에 대한 스타일드 컴포넌트를 정의합니다
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.span`
  // 제품 제목을 위한 스타일 추가
`;

export const ProductPrice = styled.span`
  // 제품 가격을 위한 스타일 추가
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;

  background-color: #000; // Black background for user section

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 10px;
  `};
`;

export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff; // White background for product section

  ${({ theme }) => theme.mediaQuery.sm`
`}

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
  background-color: #fff; // 백그라운드 색상 지정
`;

export const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000; // 사용자 정보 섹션의 백그라운드 색상

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 10px;
  `};
`;

export const ProductInfoSection = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd; // 상품 정보 섹션과 분리선

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 10px;
  `};
`;

export const DateLabel = styled.div`
  background-color: #f0f0f0; // 배경색
  color: #333; // 텍스트 색상
  text-align: center; // 텍스트 중앙 정렬
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 그림자 효과
  width: fit-content; // 콘텐츠에 맞는 너비

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 8px 16px; // 패딩
  margin: 10px 0; // 위 아래 마진
  border-radius: 4px; // 테두리 둥글게
  font-size: 0.9em; // 폰트 크기
  margin-left: auto; // 왼쪽 자동 마진
  margin-right: auto; // 오른쪽 자동 마진
  `};
`;
