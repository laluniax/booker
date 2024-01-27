import styled from 'styled-components';
import bannerBookImage from '../../assets/mainimage/bannerbookimage.webp';
// 북커톡
import bookerTalkImage1 from '../../assets/mainimage/bookertalkimage1.webp';
import bookerTalkImage2 from '../../assets/mainimage/bookertalkimage2.webp';
import bookerTalkImage3 from '../../assets/mainimage/bookertalkimage3.webp';
import bookerTalkImage4 from '../../assets/mainimage/bookertalkimage4.webp';
// 도서소개
import bookIntroImage1 from '../../assets/mainimage/bookintrobest.webp';

// 중고거래
import marketImage1 from '../../assets/mainimage/marketimage1.webp';
import marketImage2 from '../../assets/mainimage/marketimage2.webp';
import marketImage3 from '../../assets/mainimage/marketimage3.webp';
import marketImage4 from '../../assets/mainimage/marketimage4.webp';

//독립서점
import indBookStoreImage from '../../assets/indbookstoreimage/indbookstoreimage1.webp';

// 맞춤추천
import surveyImage from '../../assets/mainimage/mainindebookstore.webp';

export const Container = styled.div`
  min-height: 380rem;

  ${({ theme }) => theme.mediaQuery.sm`
   width : 70rem;
   margin : 0 auto;
`};
`;

// 공통으로 쓰는 것들
// 구분선
export const Contour = styled.div`
  border-bottom: 3px solid #000;
  width: 100%;
  margin-top: 7rem;

  ${({ theme }) => theme.mediaQuery.sm`
  border: 1px solid #000;
   width : 100rem;
   margin-top: -3rem;
   margin-left:-20rem;
`};
`;

// 더보기 버튼
export const SeeMoreButton = styled.button`
  all: unset;
  float: right;
  margin-right: 2rem;
  color: #939393;

  &:hover {
    cursor: pointer;
  }
`;

export const Titlebox = styled.div`
  margin-left: 3rem;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: #14213d;
  font-family: 'GmarketSansMedium';

  ${({ theme }) => theme.mediaQuery.sm`
   width : 100rem;
   font-size: 3rem;
   margin-top : -5rem;
   margin-left:-20rem;
`};
`;
export const Detail = styled.div`
  font-size: 1.9rem;
  margin-left: 0.3rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
   margin-top : 1rem;
   margin-left:-20rem;
`};
`;
//카드
export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem auto;
  width: 50rem;

  ${({ theme }) => theme.mediaQuery.sm`
   width : 110rem;
   margin : 0 auto;
`};
`;

// 배너
export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60rem;
  justify-content: center;
  margin-top: 8rem;

  ${({ theme }) => theme.mediaQuery.sm`
   width : 60rem;
 `};
`;

// 배너 왼쪽 파트
export const BannerBookIntroBox = styled.div``;

export const BannerBookImage = styled.div`
  background: url(${bannerBookImage});
  background-size: contain;
  object-fit: cover;
  width: 30rem;
  height: 44rem;

  ${({ theme }) => theme.mediaQuery.sm`
   width : 24rem;
   height : 35rem;
 `};
`;

export const BannerBookIntro = styled.div`
  background-color: #14213d;
  margin-top: 1rem;
  height: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
   width : 24rem;
   height : 15rem;
 `};
`;

export const TodayBook = styled.div`
  color: #fff;
  font-size: 1.7rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
   font-size: 2.1rem;
 `};
`;
export const BannerBookTitle = styled.div`
  color: #fff;
  font-size: 3rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
   font-size: 4.1rem;
   margin-top:-1rem;
 `};
`;

// 배너 오른쪽 파트
export const BannerRecommendBox = styled.div``;
export const BannerRecommendTitleBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #fca311;
  width: 85rem;
  height: 8.5rem;
  margin-left: 2rem;
  margin-top: 0.5rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #333;
  }

  ${({ theme }) => theme.mediaQuery.sm`
   width: 74rem;
   height:8.5rem;
 `};
`;

export const BannerRecommendTitle = styled.div`
  color: #fff;
  font-size: 2.1rem;
  font-weight: bold;
  margin-left: 2rem;
`;
// -------------------------------------------
// 북커톡
export const BookerTalkWrapper = styled.div`
  margin-top: 10rem;
  height: 50rem;
`;

export const BookerTalkCard = styled.div``;

export const BookerTalkCardImage = styled.div`
  background: url(${bookerTalkImage1});
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 20%;

  width: 25rem;
  height: 25rem;

  &:hover {
    cursor: pointer;
    width: 30rem;
    height: 30rem;
    transition: 0.4s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
   width: 13rem;
   height:13rem;
   margin-left:-22rem;
 `};
`;
export const CardTitle = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  width: 16ch; /* 5글자의 너비 */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardContent = styled.div`
  font-size: 1.8rem;
  margin-top: 0.5rem;
`;
export const BookerTalkCardImage2 = styled.div`
  background: url(${bookerTalkImage2});
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 20%;

  width: 25rem;
  height: 25rem;

  &:hover {
    cursor: pointer;
    width: 30rem;
    height: 30rem;
    transition: 0.4s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const CardTitle2 = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const BookerTalkCardImage3 = styled.div`
  background: url(${bookerTalkImage3});
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 20%;
  object-fit: cover;

  width: 25rem;
  height: 25rem;

  &:hover {
    cursor: pointer;
    width: 30rem;
    height: 30rem;
    transition: 0.4s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const CardTitle3 = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const BookerTalkCardImage4 = styled.div`
  background: url(${bookerTalkImage4}) no-repeat;
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 20%;

  width: 25rem;
  height: 25rem;

  &:hover {
    cursor: pointer;
    width: 30rem;
    height: 30rem;
    transition: 0.4s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const CardTitle4 = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

// -------------------------------------------
// 도서소개
export const BookIntroWrapper = styled.div`
  margin-top: 2rem;
  height: 65rem;
`;

export const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  margin-top: 3rem;
  margin-left: 2rem;
`;

export const BookIntroCategory = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  border-bottom: 2px solid #000;
  padding-bottom: 0.4rem;
  letter-spacing: 0.2rem;
  width: 20rem;
  padding-left: 0.3rem;
`;

export const BookIntroCard = styled.div`
  position: relative;
  margin-left: 3rem;
  width: 30rem;
  height: 47rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    bottom: 0;
    transition: top 0.5s ease-in-out;
    z-index: -1; // 콘텐츠 뒤에 위치
  }

  &:hover {
    background-color: #e5e5e5;
    color: #000;
    /* box-shadow: 0 0 5px #fca311; */
    transition: background-image 0.5s ease-in-out;
    z-index: 20;
  }

  &:hover::after {
    top: 0;
  }
`;

export const BookImage = styled.div`
  /* background: url(${bookIntroImage1}); */
  /* background-size: contain; */
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;
  width: 23rem;
  height: 35rem;
  & img {
    object-fit: cover;
    width: 23rem;
    height: 35rem;
  }
`;

export const BookIntroCardTitle = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 0.2rem;
  width: 20ch;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookIntroCardContent = styled.div`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// -------------------------------------------
// 중고거래

export const MarketWrapper = styled.div`
  margin-top: 4rem;
  height: 65rem;
`;
export const MarketProductCard = styled.div`
  position: relative;
  margin-left: 3rem;
  width: 30rem;
  height: 47rem;
  border-radius: 1rem;
  line-height: 1.2;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
    bottom: 0;
    transition: top 0.5s ease-in-out;
    z-index: -1; // 콘텐츠 뒤에 위치
  }

  &:hover {
    background-color: #e5e5e5;
    color: #000;
    transition: background-image 0.5s ease-in-out;
    z-index: 1;
  }

  &:hover::after {
    top: 0;
  }
`;

export const MarketProductImage = styled.div`
  /* background: url(${marketImage1}); */
  /* background-size: contain; */
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
  & img {
    width: 23rem;
    height: 35rem;
    object-fit: cover;
  }
`;

export const MarketProductImage2 = styled.div`
  background: url(${marketImage2});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const MarketProductImage3 = styled.div`
  background: url(${marketImage3});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const MarketProductImage4 = styled.div`
  background: url(${marketImage4});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 0.4rem;
  font-family: 'GmarketSansMedium';
`;

export const ProductTitle = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  width: 25ch; /* 5글자의 너비 */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  margin-bottom: 0.4rem;
  // 한 줄 초과 시 ...으로 표시
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ProductContent = styled.div`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
`;
// 독립서점 / 책 추천 공통

export const IndBookAndRecommnedTitle = styled.div`
  font-size: 3rem;
  font-family: 'GmarketSansMedium';
  font-weight: bold;
`;
export const IndBookAndRecommnedContent = styled.div`
  font-size: 1.7rem;
  color: #939393;
  vertical-align: text-bottom;
  line-height: 2.2rem;
  width: 40ch;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  margin-top: 3rem;
`;
//------------------------------

// 독립서점
export const IndBookStoreWrapper = styled.div`
  margin-top: 10rem;
`;

export const IndBookStorebox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

export const IndBookStoreImage = styled.div`
  background: url(${indBookStoreImage});
  background-size: contain;
  width: 70rem;
  height: 40rem;
`;
export const TitleAndContentBox = styled.div`
  width: 40rem;
  margin-top: 10rem;
  margin-left: 1rem;
`;

// -------------------------------------------
// 책 맞춤추천
export const BookRecommendWrapper = styled.div`
  margin-top: 6rem;
`;
export const BookRecommendBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const BookRecommendImage = styled.div`
  background: url(${surveyImage});
  background-size: contain;
  width: 70rem;
  height: 40rem;
`;
