import styled from 'styled-components';

export const TabWrapper = styled.div`
  font-family: 'GmarketSansMedium';
  height: 60vh;

  ${({ theme }) => theme.mediaQuery.sm`
  height: 80vh;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 100vh;
  `};
`;

export const ProfileTab = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: #bcbcbc;
  width: 33rem;
  font-size: 1rem;

  & div {
    width: 100%;
    border-bottom: 0.1rem solid #bcbcbc;
    text-align: center;
    cursor: pointer;

    &.active {
      color: black;
      border-bottom: 0.1rem solid #fca311;
    }
  }

  ${({ theme }) => theme.mediaQuery.sm`
    width: 60rem;
    font-size: 1.5rem;

    & div {
      padding: 1.3rem;
      width: 100%;
      border-bottom: 0.15rem solid #bcbcbc;

      &.active {
        border-bottom: 0.15rem solid #fca311;
      }
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 90rem;
  font-size: 2rem;

  & div {
    padding: 1.5rem;
    width: 100%;
    border-bottom: 0.2rem solid #bcbcbc;

    &.active {
      border-bottom: 0.2rem solid #fca311;
    }
    `};
`;

export const TabMenu = styled.div``;

export const ProfileContent = styled.div`
  margin: 0 auto;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 60rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 85rem;
    `};
`;
