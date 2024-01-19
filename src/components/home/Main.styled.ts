import styled from 'styled-components';
import BookSampleImg from '../../styles/assets/BookSampleImage.png';
import BookRecommendImg from '../../styles/assets/book_recomend_image.png';
import BookStoreImg from '../../styles/assets/bookstore_image.png';
import CardSampleImg from '../../styles/assets/mainsample_img.png';
export const Container = styled.div``;

// 공통으로 쓰는 것들
// 구분선
export const Contour = styled.div`
  border-bottom: 2px solid #000;
  width: 95%;
  margin-left: 3rem;
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
export const CardTitle = styled.div`
  font-size: 1.5rem;
`;

export const CardContent = styled.div`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

// -------------------------------------------
// 북커톡
export const BookerTalkWrapper = styled.div`
  margin-top: 6rem;
`;

export const BookerTalkCard = styled.div``;

export const BookerTalkCardImage = styled.div`
  background: url(${CardSampleImg}) no-repeat;
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;

  width: 30rem;
  height: 24rem;
`;

// -------------------------------------------
// 도서소개
export const BookIntroWrapper = styled.div`
  margin-top: 6rem;
`;

export const BookIntroCard = styled.div``;

export const BookImage = styled.div`
  background: url(${BookSampleImg});
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;

  width: 20rem;
  height: 28rem;
`;

// -------------------------------------------
// 중고거래
export const MarketWrapper = styled.div`
  margin-top: 6rem;
`;
export const MarketProductCard = styled.div``;

// 독립서점

export const IndeBookstoreWrapper = styled.div`
  margin-top: 14rem;
`;

export const IndeBookstorebox = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

export const IndeBookStoreImage = styled.div`
  background: url(${BookStoreImg});
  background-size: contain;
  width: 45rem;
  height: 23rem;
`;
export const TitleAndContentBox = styled.div`
  width: 40rem;
  margin-top: 1rem;
`;

export const IndeBookStoreTitle = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
`;

export const IndeBookStoreContent = styled.p`
  font-size: 1.5rem;
  color: #939393;
  vertical-align: text-bottom;
  line-height: 2.2rem;

  margin-top: 3rem;
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
  width: 45rem;
  height: 23rem;
`;
export const BookRecommendTitle = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
`;
export const BookRecommendContent = styled.div`
  font-size: 1.5rem;
  color: #939393;
  vertical-align: text-bottom;
  line-height: 2.2rem;

  margin-top: 3rem;
`;
