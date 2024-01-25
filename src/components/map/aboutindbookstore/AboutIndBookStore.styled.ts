import styled from 'styled-components';
import trendImage1 from '../../../assets/indbookstoreimage/indbookstore1.webp';
import trendImage2 from '../../../assets/indbookstoreimage/indbookstore2.webp';
import trendImage3 from '../../../assets/indbookstoreimage/indbookstore3.webp';

export const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

export const TitleImage = styled.div`
  background: url(${trendImage1});
  background-size: contain;
  margin-right: 3rem;
  /* width: 120rem; */
  height: 50rem;
`;

export const TrendImage1 = styled.div`
  background: url(${trendImage1});
  background-size: contain;
  width: 70rem;
  height: 38rem;
  margin-left: 5rem;
`;
export const TrendImage2 = styled.div`
  background: url(${trendImage2});
  background-size: contain;
  width: 70rem;
  margin-left: 6rem;
`;

export const TrendImage3 = styled.div`
  background: url(${trendImage3});
  background-size: contain;
  width: 100rem;
  height: 90rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const MarketContent = styled.h3`
  font-size: 3rem;
`;

export const Content = styled.h2`
  font-size: 3rem;
  margin-top: 2rem;
  letter-spacing: 1px;
  line-height: 3rem;
`;

export const AboutIndeBox = styled.div``;

export const Inde3ReasonContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  letter-spacing: 1px;
`;
export const Inde3ReasonContent = styled.h3`
  font-size: 2.7rem;
  margin-top: 3rem;
  line-height: 3.5rem;
`;
