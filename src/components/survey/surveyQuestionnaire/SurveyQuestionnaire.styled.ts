import styled from 'styled-components';
// 74c0fc d0ebff
export const Container = styled.div`
  height: 100vh;
  width: 90rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.genre {
    height: 110vh;
  }
`;

export const Title = styled.div`
  background-color: green;
`;

export const Question = styled.div`
  font-size: 4rem;
  margin-bottom: 5rem;
`;

export const Answer = styled.div`
  margin: 2rem;
  & button {
    width: 30rem;
    border: 0.1rem solid #74c0fc;
    background-color: #d0ebff;
    font-size: 3rem;
    padding: 3rem;
  }
`;
