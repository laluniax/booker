import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
`;
export const CountLike = styled.div`
  font-size: 2rem;
  & span {
    font-size: 1.4rem;
    color: #bcbcbc;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 2.4rem;
    & span {
      font-size: 1.6rem;
    }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;
export const HeartButton = styled.button`
  background-color: transparent;
  border: none;
  & img {
    width: 2.5rem;
  }
`;
