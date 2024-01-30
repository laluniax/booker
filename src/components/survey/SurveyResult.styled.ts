import styled from 'styled-components';
import prevButton from '../../assets/common/prevbutton2.webp';

export const Container = styled.div`
  position: relative;
  /* width: 90rem; */
  max-width: 38rem;
  margin: 0 auto;
  min-height: 90rem;
  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;

export const BackToListBtn = styled.div`
  background: url(${prevButton});
  background-size: contain;
  position: absolute;
  top: -4.5rem;
  width: 5rem;
  height: 5rem;

  &:hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  position: static;
  `};
`;

export const ResultWrapper = styled.div`
  font-family: 'GmarketSansMedium';
`;

export const Result = styled.div`
  margin-bottom: 2rem;
  ${({ theme }) => theme.mediaQuery.sm`
    margin: 5rem 0;
  `};
`;
export const ResultRank = styled.div`
  font-size: 1.8rem;
  width: 17rem;
  margin: 1.5rem auto;
  padding: 0 1rem;
  display: flex;
  align-items: end;
  & p {
    width: 2.7rem;
    font-size: 2rem;
    color: #74c0fc;
    font-weight: 900;
    margin: 0 0.5rem;
    display: flex;
    justify-content: flex-end;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  width: 100%;
  margin: 1rem 0;
  `};
`;
export const ResultImgAndInfo = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
    display: flex;
  `};
`;
export const ResultImg = styled.div`
  width: 25rem;
  margin: 0 auto;
  & img {
    width: 25rem;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  width: 20rem;
  & img {
    width: 20rem;
  }
  `};
`;

export const ResultInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  line-height: 1.5;
  min-height: 30rem;
  ${({ theme }) => theme.mediaQuery.sm`
  min-heignt: 32rem;
  `};
`;

export const ResultTitle = styled.div`
  font-size: 2rem;
  line-height: 1.5;
`;

export const ResultAuthor = styled.div`
  font-size: 1.3rem;
`;

export const ResultPublisher = styled.div`
  font-size: 1.3rem;
`;

export const ResultPubdate = styled.div`
  font-size: 1.3rem;
`;

export const ResultDescription = styled.div`
  line-height: 1.5;
  ${({ theme }) => theme.mediaQuery.sm`
  line-height: 2;
  `};
`;

export const NoResultWrapper = styled.div`
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
