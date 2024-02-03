import styled from 'styled-components';
import detailIndBookStoreImage from '../../../assets/indbookstoreimage/detailindbookstoreimage.webp';
export const Container = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  height: 60rem;
  width: 30rem;
  margin: 0 auto;
  font-size: 3rem;
  max-height: 60rem;
  overflow-y: auto;
  color: #fff;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 2rem;
  padding-bottom: 2rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3.5rem;
  width: 40rem;  margin-top: 8rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 4rem;
  width: 60rem;

  `};
`;

export const MarketNameAndImage = styled.div`
  height: 33rem;
`;

export const MarkerDataDetail = styled.div`
  font-size: 1.5rem;
`;

export const MarketName = styled.h1`
  margin: 2rem 0 2rem 0;
  margin-top: 5rem;
  font-weight: bold;
  color: #fca311;
  text-align: center;
`;

export const DetailContent = styled.div`
  color: #fff;
  text-align: center;
  line-height: 1.4;
  width: 25rem;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 35rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 45rem;
  `};
`;

export const DetainSpan = styled.span`
  color: #fca311;
`;

export const BookStoreImage = styled.img`
  background: url(${detailIndBookStoreImage});
  background-size: contain;
  width: 50rem;
  height: 30rem;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 55rem;
  margin-top: 8rem;
  align-items: center;
  font-size: 1.6rem;

  ${({ theme }) => theme.mediaQuery.sm`
      font-size: 1.6rem;
      padding-bottom: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 1.8rem;
  `};
`;
