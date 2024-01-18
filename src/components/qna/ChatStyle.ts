import styled, { keyframes } from 'styled-components';

interface HeaderProps {
  isSwitch: boolean;
}

const slideUp = keyframes`
  from {
    transform: translateY(100%); 
    opacity: 0; // 투명하게 시작
  }
  to {
    transform: translateY(0); 
    opacity: 1; 
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const ChatWrapper = styled.div<HeaderProps>`
  width: 390px;
  height: 590px;
  box-sizing: border-box;
  position: fixed;
  bottom: 100px;
  right: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2rem;
  padding: 8px;
  background-color: white;
  overflow: hidden scroll;

  animation: ${(props) => (props.isSwitch ? slideUp : slideDown)} 0.5s ease-in-out forwards;
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
export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const PrevBtn = styled.div`
  cursor: pointer;
`;
export const MainMessage = styled.p``;

export const AskWrapper = styled.div`
  margin: 16px 16px 12px;
  width: 100%;
`;
export const AskButton = styled.button`
  position: absolute;
  top: 200px;
  width: 90%;
  border: none;
  padding: 1rem;
`;
export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px 6px 0px 14px;
`;

export const Input = styled.input`
  width: 90%;

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
  bottom: 60px;
  right: 10px;
`;

export const TalkButton = styled.button``;

export const MessageComponent = styled.div<MessageProps>`
padding: 10px;
margin: 5px;
border-radius: 10px;
max-width: 80%;
word-wrap: break-word;
align-self: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isOutgoing ? '#DCF8C6' : '#FFFFFF')}; // 예시 색상
`;


// Props 타입 정의
export type MessageProps = {
  isOutgoing: boolean;
}

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const UserEmail = styled.div`
  font-weight: bold;
`;

export const UserLastMessage = styled.div`
  color: #666;
  font-size: 0.9em;
`;

export const DMButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4e9af1;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
  }
`;


// 모달 래퍼
export const ChatModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 400px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1000;
`;
 
// 모달 헤더
export const ChatModalHeader = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

// 입력 필드 및 전송 버튼
export const InputField = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;