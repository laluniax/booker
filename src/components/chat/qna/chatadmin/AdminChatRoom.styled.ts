import styled from 'styled-components';
import prevIcon from '../../../../assets/common/prevbutton1.webp';

export const Container = styled.section`
  overflow: scroll;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 50rem;
  height: 65rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 56rem;
  height: 67rem;
`};
`;

export const ChatWrapper = styled.div`
  bottom: 10rem;
  right: 1rem;
  box-sizing: border-box;
  position: fixed;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2rem;
  overflow: scroll;
  background-color: white;
  z-index: 999;
`;

export const PrevBtn = styled.div`
  cursor: pointer;
`;

export const PrevIcon = styled.div`
  background: url(${prevIcon});
  background-size: contain;
  width: 3rem;
  height: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 3rem;
  height: 3rem;
`};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 3rem;
  height: 3rem;
`};
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 43rem;
  bottom: 13rem;
  right: 1.5rem;
  border-radius: 2rem;
  padding: 0.8rem;

  ${({ theme }) => theme.mediaQuery.lg`
  gap: 12px;
  padding: 8px;
  margin: 0px 16px;
`};
`;

export const AdminMessage = styled.div`
  text-align: right;
`;

export const UserMessage = styled.div`
  text-align: left;
`;

export const MainMessage = styled.p`
  ${({ theme }) => theme.mediaQuery.lg`
  width: 45rem;
  height: 30rem;
`};
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
