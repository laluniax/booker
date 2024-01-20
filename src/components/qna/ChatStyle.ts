import styled from 'styled-components';
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
  bottom: 140px;
  right: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2rem;
  padding: 8px;

  background-color: white;
  overflow: scroll;
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
  padding: 8px;
  margin: 16px 16px 12px;
  overflow: hidden;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  margin: 0px 16px;
`;
export const ChatTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
`;
export const MainMessage = styled.p`
  font-size: 1.4rem;
`;

// 문의하기 버튼
export const AskButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const AskButton = styled.button`
  all: unset;
  background-color: gray;
  margin-top: 2rem;
  width: 35rem;
  height: 4rem;
  text-align: center;
  border-radius: 2rem;
  background-color: #000;
  color: #7fd4f3;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: #1f1f1f;
    color: #8eddfa;
  }
`;

export const Contour = styled.div`
  border-bottom: 2px solid #000;
  margin-top: 2rem;
  border-bottom-style: dotted;
`;

export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 6px 0px 14px;
  z-index: 999;
`;

export const Input = styled.input`
  margin-top: 2rem;
  width: 95%;
  position: relative;

  min-height: 50px;
  padding: 0px 6px 0px 14px;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(92.34deg, rgba(239, 239, 240, 0.8) 48.04%, rgba(247, 247, 248, 0.8) 100%);
  &:focus {
    outline: none;
  }
`;
export const TalkButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 10px;
  z-index: 1000;
`;

// Close 버튼
export const TalkButton = styled.img`
  border-radius: 100%;
  width: 13rem;
  height: 13rem;
`;

export const MessageComponent = styled.div<MessageProps>`
  display: flex;
  /* flex-direction: column; */

  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  max-width: 45%;
  font-size: 1.3rem;
  word-wrap: break-word;
  justify-content: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isOutgoing ? '#DCF8C6' : '#000')}; // 예시 색상
  color: ${(props) => (props.isOutgoing ? '#DCF8C6' : '#fff')};
`;

// Props 타입 정의
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
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #000;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 2rem;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const UserEmail = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const UserLastMessage = styled.div`
  color: #666;
  font-size: 1.2rem;
`;

export const DMButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  border-radius: 1rem;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #1f1f1f;
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
  color: #fff;
`;

export const ChatModalCloseButton = styled.button`
  all: unset;
  font-size: 2.6rem;
  margin-right: 0.4rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #7fd4f3;
  }
`;

// 모달 바디
export const ChatModalBody = styled.div`
  padding: 10px;
  overflow-y: auto;
  flex-grow: 1;
`;

// 모달 푸터
export const ChatModalFooter = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
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
  color: #7fd4f3;
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
