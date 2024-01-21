import styled from 'styled-components';
import { MessageProps } from '../../qna/ChatStyle';

export const Container = styled.div``;

export const Title = styled.div`
  margin: 5rem 0rem 5rem 25rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  max-width: 25rem;
  max-height: 4.3766rem;
`;
export const SliderWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
  position: relative;
`;
export const SliderUl = styled.ul`
  display: flex;
`;

export const SliderLi = styled.li`
  & img {
    width: 30rem;
    height: 30rem;
  }
`;

export const SliderBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 50%;
  font-size: 1.5rem;
  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  line-height: 4;
  gap: 2rem;
`;

export const ProductTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const ProductCategory = styled.div`
  & span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const PriceBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  & span {
    font-size: 1.2rem;
  }
`;

export const ProductGrade = styled.div`
  & span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const ProductBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UpdateBtn = styled.button`
  height: 3rem;
  background-color: transparent;
  border-radius: 0.1rem solid black;
  margin-left: 1.5rem;
`;

export const ProductLikes = styled.button`
  background-color: #bcbcbc;
  border: none;
  width: 9rem;
  height: 3rem;
`;

export const ProductChat = styled.button`
  background-color: #bcbcbc;
`;

export const ProductUser = styled.div`
  width: 20rem;
  background-color: #bcbcbc;
  margin-top: 1rem;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  & button {
    border: 0.1rem solid black;
    background-color: transparent;
  }
`;

export const ProductContent = styled.div``;

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

export const MessageComponent = styled.div<MessageProps>`
  /* padding: 10px;
  margin: 5px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
  align-self: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isOutgoing ? '#DCF8C6' : '#FFFFFF')}; // 예시 색상 */
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
