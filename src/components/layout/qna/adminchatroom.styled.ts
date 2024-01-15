import styled from 'styled-components';

export const Container = styled.section`
  width: 390px;
  height: 590px;
  box-sizing: border-box;
  position: fixed;
  bottom: 100px;
  right: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2rem;
  padding: 8px;
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
export const MainMessage = styled.p``;
export const TalkButtonWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  right: 10px;
`;

export const TalkButton = styled.button``;
export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 60%;
  padding: 0px 6px 0px 14px;
`;

export const Input = styled.input`
  width: 90%;
  position: absolute;
  bottom: 10px;
  min-height: 50px;
  padding: 0px 6px 0px 14px;
  border-radius: 1rem;
  border: none;
  background: linear-gradient(92.34deg, rgba(239, 239, 240, 0.8) 48.04%, rgba(247, 247, 248, 0.8) 100%);
  &:focus {
    outline: none;
  }
`;

export const AdminMessage = styled.div`
  text-align: right;
`;

export const UserMessage = styled.div`
  text-align: left;
`;
