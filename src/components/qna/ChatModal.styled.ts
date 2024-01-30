import styled from 'styled-components';
import bookerChattingIcon from '../../assets/common/bookerchattingicon.webp';
import prevIcon from '../../assets/common/prevbutton1.webp';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const ChatWrapper = styled.div`
  width: 50rem;
  height: 60rem;
  box-sizing: border-box;
  position: fixed;
  z-index: 1000;
  bottom: 14rem;
  right: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0 0.7rem 2.9rem 0;
  border-radius: 2rem;
  padding: 0.8rem;
  background-color: white;
  overflow: scroll;
  z-index: 999;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PrevBtn = styled.div`
  cursor: pointer;
`;
export const ChatHeader = styled.div`
  display: flex;
  padding: 0.8rem;
  margin: 1.6rem 1.6rem 1.2rem;
  overflow: hidden;
`;
export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 0.8rem;
  margin: 0 1.6rem;
`;
export const ChatTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  margin-bottom: 2rem;
`;
export const MainMessage = styled.div`
  font-size: 1.4rem;
`;
// 문의하기 버튼
export const AskButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const AskButton = styled.button`
  all: unset;
  margin-top: 2rem;
  width: 35rem;
  height: 4rem;
  font-weight: bold;
  text-align: center;
  border-radius: 2rem;
  background-color: #14213d;
  color: #fca311;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
export const Contour = styled.div`
  border-bottom: 2px solid #000;
  margin-top: 2rem;
  border-bottom-style: dotted;
`;
// 채팅 리스트
export const ChatListWrapper = styled.div`
  display: grid;
  justify-content: center;
  overflow: auto;
  margin-top: 5rem;
`;
export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.6rem 0 1.4rem;
  z-index: 999;
`;
export const Input = styled.input`
  margin-top: 2rem;
  width: 95%;
  position: relative;
  min-height: 5rem;
  padding: 0 0.6rem 0 1.4rem;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(92.34deg, rgba(239, 239, 240, 0.8) 48.04%, rgba(247, 247, 248, 0.8) 100%);
  &:focus {
    outline: none;
  }
`;
export const TalkButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  z-index: 1000;
`;
export const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  justify-content: ${(props) => (props.isOutgoing ? 'flex-start' : 'flex-end')};
`;

export type MessageProps = {
  isOutgoing: boolean;
};
//고객센터 채팅내역
export const UserItemBox = styled.div`
  margin-top: 3rem;
  align-items: center;
  margin-left: 2rem;
`;
export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  height: 5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0.1rem solid #000;
  color: #000;
  border-radius: 0.4rem;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const UserEmail = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;
export const UserLastMessage = styled.div`
  color: #000;
  font-size: 1.2rem;
  padding-left: 3rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const DMButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #14213d;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #fca311;
    color: #000;
    font-weight: bold;
  }
`;
// 채팅 모달 래퍼
export const ChatModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 48rem;
  height: 60rem;
  background-color: white;
  border: 0.1rem solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2000;
  bottom: 6rem;
  right: 1rem;
`;
export const ChatModalTitle = styled.p`
  font-size: 1.5rem;
  margin-left: 0.4rem;
  color: #fff;
`;
export const ChatModalCloseButton = styled.button`
  all: unset;
  font-size: 2.6rem;
  margin-right: 0.4rem;
  color: #fff;
  &:hover {
    cursor: pointer;
    color: #fca311;
  }
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
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: calc(100vh - 200px); //채팅창의 높이를 화면에 맞게 조정
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
  margin-right: 1rem;
  padding: 0.2rem;
  height: 4rem;
  background-color: #fff;
  border-radius: 1rem;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #000;
  ::placeholder {
    font-size: 1.5rem;
  }
`;
export const SendButton = styled.button`
  padding: 1rem 1.5rem;
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
export const PrevIcon = styled.div`
  background: url(${prevIcon});
  background-size: contain;
  width: 3rem;
  height: 3rem;
`;
export const BookerChattingIcon = styled.div`
  background: url(${bookerChattingIcon});
  background-size: contain;
  width: 13rem;
  height: 13rem;
  cursor: pointer;
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

export const UserImage = styled.img`
  width: 40px; // 유저 이미지 크기 조절
  height: 40px;
  border-radius: 50%; // 원형으로 만들기
  object-fit: cover; // 이미지 비율 유지
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  flex: 1;
  margin-right: 10px; // 오른쪽에 있는 물품 이미지와의 간격
`;

export const UserNickname = styled.div`
  font-weight: bold;
  // 기타 필요한 스타일 ...
`;

export const ProductImage = styled.img`
  width: 60px; // 물품 이미지 크기 조절
  height: 60px;
  border-radius: 8px; // 적당한 둥근 모서리
  object-fit: cover;
`;

export const NotificationBadge = styled.span`
  background-color: red;
  color: white;
  padding: 0.2em 0.6em;
  font-size: 0.75em;
  border-radius: 9999px; // 원형 모양
  margin-left: 10px;
  vertical-align: super;
  // 기타 필요한 스타일 ...
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

export const MessagesContainer = styled.div`
  /* 스타일 속성들 */
`;

// export const ChatModalHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #FFF; // Assuming white background
//   border-bottom: 1px solid #ddd; // Border to separate header from chat messages
// `;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #000; // Black background for user section
`;

// export const UserInfo = styled.div`
//   flex-grow: 1;
//   color: white; // White text for user info
//   display: flex;
//   align-items: center;
// `;

export const ProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff; // White background for product section
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
  padding: 10px;
  background-color: #000; // 사용자 정보 섹션의 백그라운드 색상
`;

export const ProductInfoSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd; // 상품 정보 섹션과 분리선
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
