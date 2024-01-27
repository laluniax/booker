import styled from 'styled-components';
// 74c0fc d0ebff
export const Container = styled.div`
  min-height: 90rem;
  width: 90rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'GmarketSansMedium';
  margin-bottom: 2rem;

  &.genre {
    height: 110vh;
  }
`;

export const Title = styled.div``;

export const Question = styled.div`
  font-size: 4rem;
  margin-bottom: 5rem;
`;

export const Answer = styled.div`
  margin: 2rem;
  & button {
    font-family: 'GmarketSansMedium';
    width: 30rem;
    color: #fff;
    border: 0.1rem solid #fca311;
    background-color: #fca311;
    border-radius: 2rem;
    font-size: 3rem;
    padding: 3rem;
  }
`;
