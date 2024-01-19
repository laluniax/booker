import styled from 'styled-components';
import BannerBookImg from '../../styles/assets/bookimages/SampleBookImage2.jpg';
import BookRecommendImg from '../../styles/assets/mainpageimages/book_recomend_image.png';
import BookStoreImg from '../../styles/assets/mainpageimages/bookstore_image.png';
import BannerSamplePaintingImg from '../../styles/assets/mainpageimages/famouspainting1.jpg';
// 북커톡
import BookertalkImage from '../../styles/assets/mainpageimages/book.jpg';
import BookertalkImage2 from '../../styles/assets/mainpageimages/book2.jpg';
import BookertalkImage3 from '../../styles/assets/mainpageimages/book3.jpg';
import BookertalkImage4 from '../../styles/assets/mainpageimages/book4.jpg';
// 도서소개
import BookIntroImage from '../../styles/assets/bookimages/bestsellertop1.jpg';
import BookIntroImage4 from '../../styles/assets/bookimages/bookerpicktop1.jpg';
import BookIntroImage2 from '../../styles/assets/bookimages/newbooktop1.jpg';
import BookIntroImage3 from '../../styles/assets/bookimages/specialtop1.jpg';
// 중고거래
import ProductImage from '../../styles/assets/bookimages/productimage.jpg';
import ProductImage2 from '../../styles/assets/bookimages/productimage2.jpg';
import ProductImage3 from '../../styles/assets/bookimages/productimage3.jpg';
import ProductImage4 from '../../styles/assets/bookimages/productimage4.jpg';

export const Container = styled.div`
  height: 300rem;
`;

// 공통으로 쓰는 것들
// 구분선
export const Contour = styled.div`
  border-bottom: 3px solid #000;
  width: 100%;
  margin-top: 7rem;
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
`;
export const Detail = styled.div`
  font-size: 1.7rem;
  margin-left: 0.3rem;
  margin-top: 1rem;
`;
//카드
export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

// -------------------------------------------
// 배너
export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60rem;
  justify-content: center;
  margin-top: 8rem;
`;

// 배너 왼쪽 파트
export const BannerBookIntroBox = styled.div``;
export const BannerBookImage = styled.div`
  background: url(${BannerBookImg});
  background-size: contain;
  object-fit: cover;

  width: 30rem;
  height: 44rem;
`;
export const BannerBookIntro = styled.div`
  background-color: #ab8bed;
  margin-top: 1rem;
  height: 15rem;
`;
export const TodayBook = styled.div`
  color: #fff;
  font-size: 1.5rem;
  padding: 2rem;
`;
export const BannerBookTitle = styled.div`
  color: #fff;
  font-size: 3rem;
  padding: 2rem;
`;

// 배너 오른쪽 파트
export const BannerRecommendBox = styled.div``;
export const BannerRecommendImage = styled.div`
  background: url(${BannerSamplePaintingImg});
  background-size: contain;
  object-fit: cover;
  margin-left: 2rem;

  width: 85rem;
  height: 51rem;
`;
export const BannerRecommendTitleBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #d55cc2;
  width: 85rem;
  height: 8.5rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
`;

export const BannerRecommendTitle = styled.div`
  color: #fff;
  font-size: 2rem;
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
  background: url(${BookertalkImage}) no-repeat;
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
export const CardTitle = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  width: 16ch; /* 5글자의 너비 */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
`;

export const CardContent = styled.div`
  font-size: 1.8rem;
  margin-top: 0.5rem;
`;
export const BookerTalkCardImage2 = styled.div`
  background: url(${BookertalkImage2}) no-repeat;
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
  background: url(${BookertalkImage3}) no-repeat;
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
  background: url(${BookertalkImage4}) no-repeat;
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
  height: 45rem;
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
    background-color: #000;
    color: #fff;
    transition: background-image 0.5s ease-in-out;
    z-index: 20;
  }

  &:hover::after {
    top: 0;
  }
`;

export const BookImage = styled.div`
  background: url(${BookIntroImage});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;
  width: 23rem;
  height: 35rem;
`;

export const BookImage2 = styled.div`
  background: url(${BookIntroImage2});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const BookImage3 = styled.div`
  background: url(${BookIntroImage3});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const BookImage4 = styled.div`
  background: url(${BookIntroImage4});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const BookIntroCardTitle = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  width: 16ch;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
`;

export const BookIntroCardContent = styled.div`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
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
  height: 45rem;
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
    background-color: #357c96;
    color: #fff;
    transition: background-image 0.5s ease-in-out;
    z-index: 1;
  }

  &:hover::after {
    top: 0;
  }
`;

export const MarketProductImage = styled.div`
  background: url(${ProductImage});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const MarketProductImage2 = styled.div`
  background: url(${ProductImage2});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const MarketProductImage3 = styled.div`
  background: url(${ProductImage3});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const MarketProductImage4 = styled.div`
  background: url(${ProductImage4});
  background-size: contain;
  object-fit: cover;
  margin-top: 1rem;
  margin-left: 1.3rem;

  width: 23rem;
  height: 35rem;
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  margin-left: 1rem;
  font-weight: bold;
`;

export const ProductTitle = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  width: 19ch; /* 5글자의 너비 */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
`;
export const ProductContent = styled.div`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
`;
// 독립서점 / 책 추천 공통

export const IndeBookAndRecommnedTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
export const IndeBookAndRecommnedContent = styled.div`
  font-size: 1.7rem;
  color: #939393;
  vertical-align: text-bottom;
  line-height: 2.2rem;
  width: 32ch;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  margin-top: 3rem;
`;
//------------------------------

// 독립서점
export const IndeBookstoreWrapper = styled.div`
  margin-top: 10rem;
`;

export const IndeBookstorebox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

export const IndeBookStoreImage = styled.div`
  background: url(${BookStoreImg});
  background-size: contain;
  width: 70rem;
  height: 35rem;
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
`;
export const BookRecommendImage = styled.div`
  background: url(${BookRecommendImg});
  background-size: contain;
  width: 70rem;
  height: 35.8rem;
`;
