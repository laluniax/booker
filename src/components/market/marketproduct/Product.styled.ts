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
  cursor: pointer;
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

export const ProductLikes = styled.button`
  background-color: #bcbcbc;
  border: none;
  width: 8rem;
  height: 3rem;
`;

export const ProductChat = styled.button`
  background-color: #bcbcbc;
`;

export const ProductUser = styled.div`
  background-color: #bcbcbc;
  margin-top: 1rem;
  cursor: pointer;
`;

export const ProductContent = styled.div``;





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


export const MessageComponent = styled.div<MessageProps>`
padding: 10px;
margin: 5px;
border-radius: 10px;
max-width: 80%;
word-wrap: break-word;
align-self: ${(props) => (props.isOutgoing ? 'flex-end' : 'flex-start')};
  background-color: ${(props) => (props.isOutgoing ? '#DCF8C6' : '#FFFFFF')}; // 예시 색상
`;