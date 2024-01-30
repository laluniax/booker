import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 65%;
  overflow-y: auto;
  padding: 10px;
  margin-top: 1rem;
  background: #f9f9f9;
`;

export const CustomerMessageBox = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 1rem;
`;

export const AdminChatLogWrapper = styled.div`
  align-self: flex-start;
  background-color: #f1f3f5;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 8px;
  max-width: 60%;
  word-wrap: break-word;
  border: 1px solid #dee2e6;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  & > p:first-child {
    font-size: 0.85rem;
    color: #495057;
    margin-bottom: 5px;
  }
`;

export const CustomerChatLogWrapper = styled.div`
  align-self: flex-end;
  background-color: #d0ebff;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 8px;
  max-width: 30%;
  word-wrap: break-word;
  border: 1px solid #74c0fc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const MessageContent = styled.p`
  font-size: 1.4rem;
  color: #343a40;
`;

export const AdminName = styled.p``;
