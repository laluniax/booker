import styled from 'styled-components';

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
  overflow: hidden;
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
