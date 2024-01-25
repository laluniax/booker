import styled from 'styled-components';
import BookStoreImage1 from '../../../styles/assets/indebookstoreimages/indebookstoreimage1.jpg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  height: 60rem;
  width: 60rem;
  font-size: 4rem;
  margin-top: 8rem;
  max-height: 60rem;
  overflow-y: auto;
  color: #fff;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 2rem;
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
`;

export const DetainSpan = styled.span`
  color: #fca311;
`;

export const BookStoreImage = styled.img`
  background: url(${BookStoreImage1});
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
  font-size: 1.8rem;
`;
