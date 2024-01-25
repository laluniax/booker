import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
`;
export const CountLike = styled.div`
  font-size: 2.4rem;
  & span {
    font-size: 1.6rem;
    color: #bcbcbc;
  }
`;
export const HeartButton = styled.button`
  background-color: transparent;
  border: none;
  & img {
    width: 2.5rem;
  }
`;
