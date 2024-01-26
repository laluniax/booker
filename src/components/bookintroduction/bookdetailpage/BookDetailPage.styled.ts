import styled from 'styled-components';
import prev from '../../../assets/common/prevbutton2.webp';

export const Container = styled.div`
  min-height: 90rem;
  margin-top: 10rem;
`;

export const PrevButton = styled.div`
  background: url(${prev});
  background-size: contain;
  width: 6rem;
  height: 6rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export const BookWrapper = styled.div``;

export const BookTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 2rem;
`;
export const InfoHeader = styled.div``;

export const BookImage = styled.div`
  display: flex;
`;

export const BookIntro = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
`;

export const BookDetailBox = styled.div``;

export const Bookauthor = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const Publisher = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const Description = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;

export const PubData = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;
