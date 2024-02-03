import styled from 'styled-components';
import trendImage1 from '../../../assets/indbookstoreimage/indbookstore1.webp';
import trendImage2 from '../../../assets/indbookstoreimage/indbookstore2.webp';
import trendImage3 from '../../../assets/indbookstoreimage/indbookstore3.webp';
import indBookStoreImage1 from '../../../assets/indbookstoreimage/indbookstoreimage1.webp';
import indBookStoreImage2 from '../../../assets/indbookstoreimage/indbookstoreimage2.webp';

export const Color = styled.div`
  background-color: #000;
`;

export const Container = styled.div`
  max-width: 40rem;
  background-color: #000;
  min-height: 310rem;
  border-bottom: 2px solid #fff;
  margin-top: 5rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
max-width: 80rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
max-width: 120rem;

  `};
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
  height: 100rem;
  width: 40rem;
  margin-left: 3rem;
  margin-top: 7rem;
  margin: 1rem auto;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 80rem;
  height: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  margin-left: 10rem;

  `};
`;

// 통계 이미지 grid 정렬하기 위한 구역
export const ImageBox = styled.div``;
// 통계 이미지들
export const TrendImage1 = styled.div`
  background: url(${trendImage1});
  background-size: contain;
  width: 35rem;
  height: 30rem;
  border-radius: 2rem;
  margin: 3rem auto;
  ${({ theme }) => theme.mediaQuery.sm`
        width: 40rem;
        height: 35rem;
  margin: 0;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 45rem;
    height: 30rem;
  `};
`;

export const TrendImage2 = styled.div`
  background: url(${trendImage2});
  background-size: contain;
  width: 35rem;
  height: 30rem;
  border-radius: 2rem;
  margin: 3rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
        width: 40rem;
        height: 35rem;
        margin: 0;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 45rem;
    height: 30rem;
  `};
`;

export const TrendImage3 = styled.div`
  background: url(${trendImage3});
  background-size: cover;
  background-repeat: no-repeat;
  width: 35rem;
  height: 30rem;
  border-radius: 2rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
      width: 40rem;
      height: 35rem;
  margin-left: 3rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 50rem;
    height: 45rem;
  margin-left: 5rem;

  `};
`;

// 제목과 부가 설명
export const TitleAndContentWrapper = styled.div`
  margin-left: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-top: 10rem;
  margin-bottom: 2rem;
  color: #fca311;
  font-weight: bold;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 4rem;

  `};
`;

export const Content = styled.div`
  font-size: 1.6rem;
  margin-top: 2rem;
  letter-spacing: 1px;
  line-height: 3.5rem;
  color: #fff;
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 2rem;
  `};
`;

export const AboutIndeTitle = styled.h1`
  font-size: 3rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
  color: #fca311;
  font-weight: bold;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 4rem;

  `};
`;

export const SubTitle = styled.div`
  font-size: 2.4rem;
  color: #fca311;
  margin-top: 4rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3rem;

  `};
`;

//글씨 강조를 위한 span 태그
export const EmphasisContent = styled.span`
  font-size: 1.6rem;
  margin-top: 2rem;
  letter-spacing: 1px;
  line-height: 3rem;
  color: #fca311;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  `};
`;

export const IndeBookStoreImageBox = styled.div`
  width: 35rem;
  margin-top: 7rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
        display: flex;
  justify-content: center;
  margin-top: 7rem;
  gap: 4rem;
  width: 80rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;


  `};
`;

export const IndeBookStoreImages1 = styled.div`
  background: url(${indBookStoreImage1});
  background-size: cover;
  background-repeat: no-repeat;
  width: 35rem;
  height: 25rem;
  border-radius: 2rem;
  margin: 2rem 0;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 45rem;
  height: 30rem;
  margin: 0;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 50rem;
    height: 35rem;
  `};
`;

export const IndeBookStoreImages2 = styled.div`
  background: url(${indBookStoreImage2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 35rem;
  height: 25rem;
  border-radius: 2rem;
  margin: 2rem 0;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 45rem;
    height: 30rem;
  margin: 0;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 50rem;
    height: 35rem;
  `};
`;
