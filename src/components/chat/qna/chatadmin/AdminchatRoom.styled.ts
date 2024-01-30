import styled from 'styled-components';
import prevIcon from '../../../../assets/common/prevbutton1.webp';

export const Container = styled.section`
  height: 70%;
  padding: 10px;
  overflow: scroll;
`;

export const ChatWrapper = styled.div`
  width: 390px;
  height: 590px;
  box-sizing: border-box;
  position: fixed;
  bottom: 100px;
  right: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2rem;
  padding: 8px;
  overflow: scroll;
  background-color: white;

  z-index: 9999;
`;
export const ChatHeader = styled.div`
  display: flex;
  padding: 8px;
  margin: 16px 16px 12px;
  overflow: hidden;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PrevBtn = styled.div`
  cursor: pointer;
`;

export const PrevIcon = styled.div`
  background: url(${prevIcon});
  background-size: contain;
  width: 3rem;
  height: 3rem;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  margin: 0px 16px;
`;
export const AdminMessage = styled.div`
  text-align: right;
`;

export const UserMessage = styled.div`
  text-align: left;
`;
export const MainMessage = styled.p`
  padding: 10px;
`;
export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 6px 0px 14px;
  z-index: 9999;
`;

export const Input = styled.input`
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
