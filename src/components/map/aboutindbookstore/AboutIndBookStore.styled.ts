import styled from 'styled-components';
import trendImage1 from '../../../assets/indbookstoreimage/indbookstore1.webp';
import trendImage2 from '../../../assets/indbookstoreimage/indbookstore2.webp';
import trendImage3 from '../../../assets/indbookstoreimage/indbookstore3.webp';
import indBookStoreImage1 from '../../../assets/indbookstoreimage/indbookstoreimage1.webp';
import indBookStoreImage2 from '../../../assets/indbookstoreimage/indbookstoreimage2.webp';

export const Container = styled.div`
  background-color: #000;
  min-height: 310rem;
  border-bottom: 2px solid #fff;
`;

// 구분선
export const CoutourBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const Contour = styled.div`
  width: 90%;
  margin-top: 3rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const Contour2 = styled.div`
  width: 20%;
  margin-top: 3rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const TitleImage = styled.img`
  width: 120rem;
  height: 50rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70rem;
  width: 95%;
  margin-left: 3rem;
  margin-top: 7rem;
`;

// 통계 이미지 grid 정렬하기 위한 구역
export const ImageBox = styled.div`
  display: grid;
  gap: 2rem;
`;

// 통계 이미지들
export const TrendImage1 = styled.div`
  background: url(${trendImage1});
  background-size: contain;
  width: 45rem;
  height: 30rem;
  border-radius: 2rem;
`;

export const TrendImage2 = styled.div`
  background: url(${trendImage2});
  background-size: contain;
  width: 45rem;
  height: 30rem;
  border-radius: 2rem;
`;

export const TrendImage3 = styled.div`
  background: url(${trendImage3});
  background-size: contain;
  width: 50rem;
  height: 45rem;
  margin-left: 5rem;
  border-radius: 2rem;
`;

// 제목과 부가 설명
export const TitleAndContentWrapper = styled.div`
  margin-left: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-top: 10rem;
  margin-bottom: 2rem;
  color: #fca311;
  font-weight: bold;
`;

export const Content = styled.div`
  font-size: 2rem;
  margin-top: 2rem;
  letter-spacing: 1px;
  line-height: 3.5rem;
  color: #fff;
`;

export const AboutIndeTitle = styled.h1`
  font-size: 4rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
  color: #fca311;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: 3rem;
  color: #fca311;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

//글씨 강조를 위한 span 태그
export const EmphasisContent = styled.span`
  font-size: 2rem;
  margin-top: 2rem;
  letter-spacing: 1px;
  line-height: 3rem;
  color: #fca311;
`;

export const IndeBookStoreImageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
  gap: 4rem;
`;

export const IndeBookStoreImages1 = styled.div`
  background: url(${indBookStoreImage1});
  background-size: contain;
  width: 50rem;
  height: 30rem;
  border-radius: 2rem;
`;

export const IndeBookStoreImages2 = styled.div`
  background: url(${indBookStoreImage2});
  background-size: contain;
  width: 50rem;
  height: 30rem;
  border-radius: 2rem;
`;
