import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CountLike = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 2.4rem;
  margin-bottom: 0.3rem;
  margin-left: 0.2rem;

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

  &.marketlist {
    padding-right: 0;
    & img {
      width: 2rem;
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.1s;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.1s;
  }
`;
