import styled from 'styled-components';
import bannerBookImage from '../../assets/mainimage/bannerbookimage.webp';
// 북커톡
// 도서소개
// 중고거래
//독립서점
import indBookStoreImage from '../../assets/indbookstoreimage/indbookstoreimage1.webp';
// 맞춤추천
import surveyImage from '../../assets/mainimage/mainindebookstore.webp';
export const Container = styled.div`
  min-height: 350rem;
  margin: 0 auto;
  width: 80%;
  height: 385rem;
  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 85rem;
  height: 300rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 120rem;
  height: 370rem;

  `};
`;
// 공통으로 쓰는 것들
// 구분선
export const Contour = styled.div`
  border-bottom: 3px solid #000;
  min-width: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin: 0 auto ;
  border-bottom: 2px solid #000;
    margin-bottom: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top : 7rem;
    margin-bottom: 10rem;
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
  ${({ theme }) => theme.mediaQuery.sm`
  margin-left:2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-left:3rem;
  `};
`;
export const Title = styled.h2`
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  font-size: 3rem;
  color: #14213d;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3.5rem;
  `};
`;
export const Detail = styled.div`
  margin-left: 0.3rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.6rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.9rem;
  `};
`;
//카드

export const MarketCardBox = styled.div`
  display: grid;
  /* justify-content: center; */
  /* align-items: center; */
  grid-template-columns: repeat(2, 1fr);
  width: 30rem;
  height: 47rem;
  margin: 1rem auto;
  gap: 2rem;
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  width: 78.2rem;
  height: 40rem;
  gap: 1rem;
  margin: 3rem auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width:120rem;
  height: 47rem;
  gap:2rem;
  margin-top: 3rem;
  `};
`;
// -------------------------------------------
// 배너
export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 40rem;
  max-height: 21rem;
  justify-content: center;

  ${({ theme }) => theme.mediaQuery.sm`
    max-width: 85rem;
    margin: 0 auto;
    max-height: 45rem;
    margin-bottom: 2rem;
    flex-direction: row;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 120rem;
    margin: 6rem auto;
    max-height: 60rem;
    flex-direction: row;
  `};
`;
// 배너 왼쪽 파트
export const BannerBookIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 10rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 23rem;
  height: 45rem;
  margin-right: 1.2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    max-width: 30rem;
    height : 60.5rem;
    margin: 0 auto;
  `};
`;

export const BannerBookImage = styled.div`
  background: url(${bannerBookImage});
  background-size: contain;
  object-fit: cover;
  width: 10rem;
  height: 14.9rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 23rem;
  height: 34rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 30rem;
    height: 45rem;
  `};
`;

// 오늘의 책 div
export const BannerBookIntro = styled.div`
  background-color: #14213d;
  margin-top: 0.3rem;
  height: 6rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 23rem;
  height: 11rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 30rem;
    height: 15rem;
  `};
`;
export const TodayBook = styled.div`
  color: #fff;
  font-size: 0.8rem;
  padding: 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
  padding:1.5rem;
  font-size: 1.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  padding:2rem;
  font-size: 1.7rem;
  `};
`;
export const BannerBookTitle = styled.div`
  color: #fff;
  font-size: 1.2rem;
  padding: 0rem 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
  width:16rem;
  height:5rem;
  font-size:2.5rem;
  padding: 0.2rem 1.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 30rem;
    height: 9rem;
    font-size:3rem;
    padding:2rem;
  `};
`;
// 배너 오른쪽 파트
export const BannerRecommendBox = styled.div`
  max-width: 22rem;
  margin-left: 0.7rem;
  margin-top: 0.2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 0rem;
  max-width: 53rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 0rem;
    max-width: 87.1rem;
    height : 60.5rem;
  `};
  /* margin: 0 auto; */
  /* width: 87rem;
  height: 60rem; */
`;

export const BannerRecommendTitleBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #fca311;
  width: 20rem;
  height: 4rem;
  margin-top: 0.4rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #333;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  width:52.7rem;
  margin-left: 0.1rem;
  height:7rem;
  margin-top: 1rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  align-items: center;
  background-color: #fca311;
  width:85.1rem;
  height:8.5rem;
  margin-left: 2rem;
  `};
`;
export const BannerRecommendTitle = styled.div`
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0 auto;
  padding: 0.4rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size:1.5rem;
  margin-left: 1.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size:2.1rem;
 
  `};
`;
// -------------------------------------------
// 북커톡
export const BookerTalkWrapper = styled.div`
  width: 30rem;
  height: 45rem;
  margin: 3rem auto;
  margin-bottom: 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 4rem;
  width:70rem;
  height:30rem;
  margin-bottom: 0.3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 8rem;
  width:120rem;
  height: 45rem;
  margin-bottom: 0.3rem;
  `};
`;

export const BookerTalkCardBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  max-width: 30rem;
  height: 40rem;
  margin: 1rem auto;
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  max-width: 85rem;
  height: 22rem;
  gap: 1rem;
  margin-top: 1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 120rem;
  height: 32rem;
  gap:2rem;
  margin-top: 2rem;
  `};
`;

export const BookerTalkCard = styled.div``;
type BookerTalkCardImageProps = {
  $backgroundimage: string;
};
export const BookerTalkCardImage = styled.div<BookerTalkCardImageProps>`
  // 알려지지 않은 prop이 DOM요소로 전달되어 오류 발생
  background: url(${(props) => props.$backgroundimage}); // prop을 스타일에서만 사용하고 DOM요소로 전달하지 않음
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 20%;
  width: 13rem;
  height: 13rem;
  &:hover {
    cursor: pointer;
    width: 14.5rem;
    height: 14.5rem;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  width:16rem;
  height:16rem;
  &:hover {
    cursor: pointer;
    width: 18rem;
    height: 18rem;
    transition: 0.4s;
  }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  height: 25rem;
  &:hover {
    cursor: pointer;
    padding: 1rem;
    width: 30rem;
    height: 30rem;
    transition: 0.4s;
  }
  `};
`;
export const CardTitle = styled.div`
  font-family: 'GmarketSansMedium';
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  width: 14ch;
  /* 5글자의 너비 */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size:1.7rem;
  max-width: 16rem;
   width: 16ch;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 2rem;
    max-width: 25rem;
     width: 16ch;
  `};
`;
export const CardContent = styled.div`
  margin-top: 0.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size:1.3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 1.8rem;
  `};
`;
// -------------------------------------------
// 도서소개
export const BookIntroWrapper = styled.div`
  margin: 4rem auto;
  max-width: 50rem;
  min-height: 60rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top : 1rem;
  max-width: 78.8rem;
  height: 100rem;
  margin: 4rem auto;


  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 2rem;
  max-width: 120rem;
  height: 65rem;
  margin: 5rem auto;
 
  `};
`;

export const BookIntroCardBox = styled.div`
  display: flex;
  max-width: 85rem;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  max-width: 85rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  margin-top: 1.5rem;
  margin-left: 1rem;
  max-width: 120rem;
  flex-wrap: nowrap;
  justify-content: start;
  `};
`;

export const CategoryBox = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* margin-left: 1rem; */
  /* grid-row-gap: 20rem; */
  /* z-index: 0; */
  margin-left: 4rem;
  margin-top: 4rem;
  width: 15rem;
  height: 1.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.4rem;
  width: 14rem;
  height: 4rem;
  margin-left: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  height: 5rem;
  margin-left:2rem;
  `};
`;
export const BookIntroCategory = styled.div`
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  font-size: 1.6rem;
  border-bottom: 2px solid #000;
  padding-bottom: 0.4rem;
  width: 13rem;
  height: 2rem;
  padding-left: 0.3rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size : 1.8rem;
  width: 14rem;
  height: 2.5rem;
  letter-spacing: 0.2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 2.6rem;
    width: 25rem;
    height: 4rem;
    letter-spacing: 0.2rem;
  `};
`;

export const BookIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  gap: 0.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `};
`;

export const BookIntroCard = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  width: 19rem;
  height: 29rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #e5e5e5;
    color: #000;
    /* box-shadow: 0 0 5px #FCA311; */
    transition: background-color 0.5s ease-in-out;
    z-index: 20;
  }

  &:not(:hover) {
    transition: 0.4s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width: 25rem;
  height: 40rem;

  &:hover {
    width: 28rem;
    height: 40rem;
    transition: 0.4s;
  }

    &:not(:hover) {
    transition: 0.4s;
  }

  `};
  ${({ theme }) => theme.mediaQuery.lg`
 width: 27rem;
 height: 45rem;
 margin-left: 2rem;

  &:hover {
    width: 30rem;
    height: 45rem;
    transition: 0.4s;
  }

    &:not(:hover) {
    transition: 0.4s;
  }
  `};
`;
export const BookImage = styled.div`
  object-fit: cover;
  width: 15rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & img {
    width: 15rem;
    height: 20rem;
    ${({ theme }) => theme.mediaQuery.sm`
   width: 20rem;
   height: 28rem;
`};
    ${({ theme }) => theme.mediaQuery.lg`
  width: 24rem;
  height: 32rem;
  }
`};
    // 이미지 box
    ${({ theme }) => theme.mediaQuery.sm`
    width: 20rem;
    height: 29rem;
 
 `}
    ${({ theme }) => theme.mediaQuery.lg`
   width: 27rem;
    height: 33rem;
   }
 `};
  }
`;

export const BookIntroTitleAndContent = styled.div`
  max-width: 15rem;
  margin-top: 0.1rem;
  margin-left: 0.2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 20rem;
  margin-left: 0.2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 25rem;
  `};
`;

export const BookIntroCardTitle = styled.div`
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  padding-bottom: 0.2rem;
  font-size: 1.4rem;
  width: 15rem;
  height: 1.6rem;
  margin-top: 1rem;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.7rem;
  width: 20rem;
  height: 2rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 1rem;
  font-size: 2.5rem;
  width: 25rem;
  height: 3rem;
`};
`;
export const BookIntroCardContent = styled.div`
  margin-top: 0.5rem;
  font-size: 1.4rem;
  width: 15rem;
  height: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
  width: 20rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
   width: 25rem;
  height: 5rem;
`};
`;
// -------------------------------------------
// 중고거래
export const MarketWrapper = styled.div`
  height: 45rem;
  margin: 0 auto;
  width: 30rem;
  height: 58rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin:0 auto;
  margin-bottom: 1rem;
  width: 78.2rem;
  height: 48rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 4rem;
  margin-bottom: -4rem;
  width:120rem;
  height:60rem;
  `};
`;
export const MarketProductCard = styled.div`
  position: relative;
  border-radius: 1rem;
  line-height: 1.2;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  background-color: #14213d;
  color: #fff;
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
    background-color: #fca311;
    color: #fff;
    transition: background-image 0.5s ease-in-out;
    z-index: 1;
  }
  &:hover::after {
    top: 0;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  width: 33rem;
  height: 33rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
   width: 28.5rem;
   height: 47rem;
  `};
`;
export const MarketProductImage = styled.div`
  object-fit: cover;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  /* width: 15rem;
  height: 18rem; */
  & img {
    width: 12rem;
    height: 15rem;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQuery.sm`
  margin:1rem auto;
  display: flex; 
  justify-content : center;
  & img {
    width: 17rem;
    height: 22rem;
  }
`};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 27.8rem
  height: 35.2rem
  display: flex; 
  justify-content : center;
  margin-top: 1rem;
  & img {
  width: 26rem;
  height: 35rem;
  }`};
`;
export const ProductPrice = styled.div`
  font-weight: bold;
  font-family: 'Pretendard-Regular';
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
      margin-left: 1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-left: 1rem;
    margin-bottom: 0.4rem;
    font-size: 2rem;
  `};
`;
export const ProductTitle = styled.div`
  font-family: 'GmarketSansMedium';
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  width: 14ch; /* 5글자의 너비 */
  word-wrap: break-word;

  margin-bottom: 0.4rem;
  // 한 줄 초과 시 ...으로 표시
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.6rem;
    width: 25ch;
    margin-left: 1rem;
    letter-spacing: 0.1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  width: 25ch;
  margin-left: 1rem;
  letter-spacing: 0.1rem;
  `};
`;

export const ProductContentBox = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 0.6rem;
  padding-top: 0.3rem;
  `};
`;

export const ProductContent = styled.div`
  font-family: 'GmarketSansMedium';
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
     margin-left: 1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  width: 30rem;
  height: 3rem;
  `};
`;
// 독립서점 / 책 추천 공통
export const IndBookAndRecommnedTitle = styled.div`
  /* margin: 0 auto; */
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 50rem;
  height: 3rem;
  margin: 2rem auto:
  font-size: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  width: 35rem;
  `};
`;
export const IndBookAndRecommnedContent = styled.div`
  font-size: 1.4rem;
  color: #939393;
  vertical-align: text-bottom;
  line-height: 2.2rem;
  width: 30rem;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  margin-top: 2rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 50rem;
      font-size: 1.7rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 35rem;
    font-size: 1.7rem;
  `};
`;
// 독립서점
export const IndBookStoreWrapper = styled.div`
  margin: 5rem auto;
  width: 31rem;
  height: 36rem;
  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 5rem;
    width: 70rem;
    height: 43.9rem;
    margin: 5rem auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 10rem;
    width: 120rem;
    height: 35rem;
    margin: 5rem auto;
  `};
`;
export const IndBookStorebox = styled.div`
  width: 31rem;
  height: 36rem;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px -4px #333;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 5rem;
    width: 70rem;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;

 &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  height: 35rem;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;

   &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  `};
`;
export const IndBookStoreImage = styled.div`
  background: url(${indBookStoreImage});
  background-size: contain;
  width: 31rem;
  height: 17rem;
  ${({ theme }) => theme.mediaQuery.sm`
    margin: 0 auto;
    width: 50rem;
    height: 29rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
   width: 65rem;
   height: 35rem;
  `};
`;
export const TitleAndContentBox = styled.div`
  width: 30rem;
  font-size: 2rem;
  margin-top: 3rem;
  margin-left: 0.2rem;
  text-align: center;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 50rem;
    margin-top: 3.3rem;
    margin-left: 1rem;
    font-size: 3rem;
    text-align: center;
     display: flex;
    flex-direction: column;
    justify-content: center;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 40rem;
    margin-top: 8rem;
    margin-left: 1rem;
    margin-bottom: 6rem;
  `};
`;
// -------------------------------------------
// 책 맞춤추천
export const BookRecommendWrapper = styled.div`
  margin: 6rem auto;
  width: 31rem;
  height: 36rem;
  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 5rem;
    width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 10rem;
    width: 120rem;
    height : 50rem;
  `};
`;
export const BookRecommendBox = styled.div`
  width: 31rem;
  height: 36rem;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px -4px #333;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width: 70rem;
  height: 43.9rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  `};

  ${({ theme }) => theme.mediaQuery.lg`
   width: 120rem;
   height: 35rem;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  `};
`;
export const BookRecommendImage = styled.div`
  background: url(${surveyImage});
  background-size: contain;
  width: 31rem;
  height: 18rem;
  ${({ theme }) => theme.mediaQuery.sm`
    margin:0 auto;
    width: 50rem;
    height: 29rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
      width: 65rem;
      height: 37rem;
  `};
`;
