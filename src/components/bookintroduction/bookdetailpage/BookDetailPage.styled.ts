import styled from 'styled-components';
import prev from '../../../assets/common/prevbutton2.webp';

export const Container = styled.div`
  width: 30rem;
  height: 100rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 70rem;
  height: 70rem;
  margin-top: 5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  height: 80rem;
  `};
`;

export const PrevButton = styled.div`
  background: url(${prev});
  background-size: contain;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 5rem;
  height: 5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 6rem;
  height: 6rem;
  `};
`;

export const BookWrapper = styled.div``;

export const BookTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  /* width: 30rem; */
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3rem;
  font-weight: 100;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 4rem;
  `};
`;
export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaQuery.sm`
  flex-direction: row;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const BookImage = styled.div`
  display: flex;

  & img {
    width: 30rem;
    height: 45rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    & img {
      width: 30rem;
      height: 50rem;
    }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    & img {
      width: 40rem;
      height: 60rem;
    }
  `};
`;

export const BookIntro = styled.div`
  /* font-size: 1.5rem; */
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
`;

export const BookDetailBox = styled.div``;

export const Bookauthor = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const Publisher = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;

  ${({ theme }) => theme.mediaQuery.sm`
font-size: 2rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
`};
`;

export const Description = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;

  ${({ theme }) => theme.mediaQuery.sm`
font-size: 2rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
`};
`;

export const PubData = styled.div`
  margin-top: 1rem;
  font-size: 1.4rem;

  ${({ theme }) => theme.mediaQuery.sm`
font-size: 2rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
`};
`;
