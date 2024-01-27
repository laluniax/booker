import styled from 'styled-components';
import prev from '../../../assets/common/prevbutton2.webp';

export const Container = styled.div`
  min-height: 100rem;
`;

export const PrevButton = styled.div`
  background: url(${prev});
  background-size: contain;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
`;

export const TitleAndAuthorBox = styled.div`
  margin-bottom: 2rem;
  border-bottom: 0.3rem solid #e5e5e5;
  padding-bottom: 3rem;
`;

export const BookWrapper = styled.div``;

export const BookTitle = styled.h2`
  font-family: 'GmarketSansMedium';
  font-size: 3rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
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
  margin-left: 1rem;
`;

export const BookDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Bookauthor = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const Publisher = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const EmphasisDescription = styled.span`
  font-family: 'GmarketSansMedium';
  font-size: 2.3rem;
  margin-top: 1.3rem;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;
export const DescriptionLi = styled.li`
  font-size: 2rem;
  margin-top: 1rem;
`;

export const PubData = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;
