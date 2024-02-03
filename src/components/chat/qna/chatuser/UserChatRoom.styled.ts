import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: linear-gradient(92.34deg, rgba(239, 240, 240, 0.8) 95.04%, rgba(247, 247, 248, 0.8) 100%);
  margin: 0 auto;
  padding: 1rem;
  margin-top: -1rem;
  width: 25rem;
  height: 23.5rem;
  border-radius: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 1rem;
  margin-top: 0rem;
  width:38rem;
  height:29rem;
`};

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  // margin-top: 1rem;
  width:45rem;
  height:33rem;
`};
`;

export const CustomerMessageBox = styled.div`
  display: flex;
  justify-content: right;

  ${({ theme }) => theme.mediaQuery.sm`
`};

  ${({ theme }) => theme.mediaQuery.lg`
  margin-right: 1rem;
`};
`;

export const AdminChatLogWrapper = styled.div`
  align-self: flex-start;
  background-color: #f1f3f5;
  word-wrap: break-word;
  border: 1px solid #dee2e6;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 8px;
  max-width: 10rem;

  & > p:first-child {
    color: #495057;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin-bottom: 8px;
    max-width: 15rem;
`};

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 8px;
  max-width: 20rem;
  & > p:first-child {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
`};
`;

export const CustomerChatLogWrapper = styled.div`
  align-self: flex-end;
  background-color: #d0ebff;
  word-wrap: break-word;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  text-align: right;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 8px;
  max-width: 10rem;
  border: 0.1rem solid #74c0fc;

  ${({ theme }) => theme.mediaQuery.sm`
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin-bottom: 8px;
    max-width: 15rem;
`};

  ${({ theme }) => theme.mediaQuery.lg`
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin-bottom: 8px;
    max-width: 20rem;

`};
`;

export const MessageContent = styled.p`
  color: #343a40;
  font-size: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
`};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.4rem;
`};
`;

export const AdminName = styled.p``;
