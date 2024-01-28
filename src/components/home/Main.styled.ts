import styled from 'styled-components';
import bannerBookImage from '../../assets/mainimage/bannerbookimage.webp';
// 북커톡
// 도서소개
import bookIntroImage1 from '../../assets/mainimage/bookintrobest.webp';

// 중고거래

//독립서점
import indBookStoreImage from '../../assets/indbookstoreimage/indbookstoreimage1.webp';

// 맞춤추천
import surveyImage from '../../assets/mainimage/mainindebookstore.webp';

export const Container = styled.div`
  min-height: 380rem;
  max-width: 35rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
    min-height: 270rem;
    max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  min-height: 380rem;
  max-width: 120rem;
  `};
`;

// 공통으로 쓰는 것들
// 구분선
export const Contour = styled.div`
  border-bottom: 3px solid #000;
  width: 35rem;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width : 62rem;
  border-bottom: 2px solid #000;
  margin : -2rem auto;
  
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top : 7rem;
    width : 120rem;
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
  font-weight: bold;
  font-size: 3rem;
  color: #14213d;
  font-family: 'GmarketSansMedium';

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
export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 30rem;
  height: 50rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  width: 65rem;
  gap:5rem;
  margin:0 auto;
  margin-top: 1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width:120rem;
  gap:2rem;
  margin-top: 2rem;
  `};
`;

// -------------------------------------------
// 배너
export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  height: 80rem;
  justify-content: center;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 70rem;
    margin: -2rem auto;
    height:40rem;
    flex-direction: row;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 120rem;
    margin: 6rem auto;
    height: 60rem;
    flex-direction: row;
  `};
`;

// 배너 왼쪽 파트
export const BannerBookIntroBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
    // width: 100%;
    // height:40rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    // width: 100%;
    // height: 60rem;
  `};
`;
export const BannerBookImage = styled.div`
  background: url(${bannerBookImage});
  background-size: contain;
  object-fit: cover;
  max-width: 30rem;
  height: 44rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:15rem;
  height:22rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    width: 30rem;
    height: 44rem;
  `};
`;
export const BannerBookIntro = styled.div`
  background-color: #14213d;
  margin-top: 1rem;
  height: 8rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:15rem;
  height:10rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    width: 30rem;
    height: 15rem;
  `};
`;
export const TodayBook = styled.div`
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;

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
  font-size: 2.5rem;
  padding-left: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:16rem;
  height:5rem;
  font-size:2.5rem;
  padding: 0.2rem 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    width: 30rem;
    height: 24rem;
    font-size:3rem;
    padding:2rem;
  `};
`;

// 배너 오른쪽 파트
export const BannerRecommendBox = styled.div`
  margin-top: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 0rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 0rem;
  `};
  /* margin: 0 auto; */
  /* width: 87rem;
  height: 60rem; */
`;
// export const BannerRecommendImage = styled.div`
//   background: url(${BannerSamplePaintingImg});
//   background-size: contain;
//   object-fit: cover;
//   margin-left: 2rem;

//   width: 85rem;
//   height: 51rem;
// `;
export const BannerRecommendTitleBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #fca311;
  width: 35rem;
  height: 5rem;
  margin: 1rem auto;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #333;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width:46rem;
  height:6.5rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width:85rem;
  height:8.5rem;
  `};
`;

export const BannerRecommendTitle = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 auto;

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

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 7rem;
  width:70rem;
  height:30rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 8rem;
  width:120rem;
  height: 45rem;
  `};
`;

export const BookerTalkCard = styled.div``;

type BookerTalkCardImageProps = {
  backgroundimage: string;
};

export const BookerTalkCardImage = styled.div<BookerTalkCardImageProps>`
  background: url(${(props) => props.backgroundimage});
  background-size: contain;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 20%;

  width: 14rem;
  height: 14rem;

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
  width:14rem;
  height:14rem;

  &:hover {
    cursor: pointer;
    width: 17rem;
    height: 17rem;
    transition: 0.4s;
  }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  height: 25rem;
  
  &:hover {
    cursor: pointer;
    width: 30rem;
    height: 30rem;
    transition: 0.4s;
  }

  `};
`;
export const CardTitle = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  width: 16ch; /* 5글자의 너비 */
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size:1.7rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 2rem;
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
  margin: 8rem auto;
  width: 30rem;
  ${({ theme }) => theme.mediaQuery.sm`
  margin-top : 1rem;
  height: 40rem;
  width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 2rem;
  height: 65rem;
  width: 120rem;
  `};
`;

export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3rem;
  margin-left: 1rem;
  grid-row-gap: 20rem;
  z-index: 0;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:3rem;
  margin:3rem auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  gap: 4rem;
  `};
`;

export const BookIntroCategory = styled.div`
  font-weight: bold;
  border-bottom: 2px solid #000;
  padding-bottom: 0.4rem;
  letter-spacing: 0.2rem;
  width: 13rem;
  padding-left: 0.3rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size : 1.5rem;
  width: 13rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 2.6rem;
    width: 20rem;
  `};
`;

export const BookIntroCard = styled.div`
  position: relative;
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

  ${({ theme }) => theme.mediaQuery.sm`
  width: 14.5rem;
  margin:0 auto;
  display: flex;
  flex-direction:column;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 30rem;
  height: 47rem;
  margin-left: 3rem;
  `};
`;

export const BookImage = styled.div`
  /* background: url(${bookIntroImage1}); */
  /* background-size: contain; */
  object-fit: cover;
  width: 14rem;
  height: 21rem;
  margin-left: 1rem;

  & img {
    object-fit: cover;
    width: 14rem;
    height: 21rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    width: 23rem;
    height: 35rem;
  & img {
    width: 14.5rem;
    height: 26rem;
    margin:-1rem auto;
  }
`};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 1.3rem;
  margin-top: 1rem;
  & img {
  width: 23rem;
  height: 35rem;
  }
`};
`;

export const BookIntroCardTitle = styled.div`
  font-weight: bold;
  padding-bottom: 0.2rem;
  width: 20ch;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: -8rem;
  font-size: 1.5rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
`};
`;

export const BookIntroCardContent = styled.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1rem;
`};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.8rem;
`};
`;

// -------------------------------------------
// 중고거래

export const MarketWrapper = styled.div`
  height: 65rem;
  margin: 0 auto;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin:0 auto;
  margin-top:8rem;
  margin-bottom: 1rem;
  width:70rem;
  height:48rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 4rem;
  margin-bottom: -4rem;
  width:120rem;
  height:65rem;
  `};
`;
export const MarketProductCard = styled.div`
  position: relative;
  border-radius: 1rem;
  line-height: 1.2;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  width: 14rem;
  height: 30rem;
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

  ${({ theme }) => theme.mediaQuery.sm`
  width: 14.5rem;
  margin:0 auto;
  height:35rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 30rem;
  height: 47rem;
  margin-left: 3rem;
  `};
`;

export const MarketProductImage = styled.div`
  object-fit: cover;
  margin-top: 1rem;
  width: 15rem;
  height: 18rem;
  & img {
    width: 14rem;
    height: 18rem;
    object-fit: cover;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width:17rem;
  height:26rem;
  margin:1rem auto;
  & img {
    width: 17rem;
    height: 26rem;
  }
`};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 1.3rem;
  margin-top: 1rem;
  & img {
  width: 23rem;
  height: 35rem;
  }`};
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  font-family: 'GmarketSansMedium';

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-left: 1rem;
    margin-bottom: 0.4rem;
    font-size: 2rem;
  `};
`;

export const ProductTitle = styled.div`
  margin-top: 0.5rem;
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
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.8rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  `};
`;
// 독립서점 / 책 추천 공통

export const IndBookAndRecommnedTitle = styled.div`
  /* margin: 0 auto; */
  font-family: 'GmarketSansMedium';
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  width:60rem;
  height:5rem;
  margin:2rem auto:
  font-size: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  `};
`;
export const IndBookAndRecommnedContent = styled.div`
  font-size: 1.7rem;
  color: #939393;
  vertical-align: text-bottom;
  line-height: 2.2rem;
  width: 30rem;
  word-wrap: break-word;
  letter-spacing: 0.1rem;
  margin-top: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 60rem;
    margin: -1rem auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 40rem;
  `};
`;

// 독립서점
export const IndBookStoreWrapper = styled.div`
  margin: 5rem auto;
  width: 30rem;
  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 5rem;
    width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 10rem;
    width: 120rem;
  `};
`;

export const IndBookStorebox = styled.div`
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    gap: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  display:flex;
   gap: 4rem;
  `};
`;

export const IndBookStoreImage = styled.div`
  background: url(${indBookStoreImage});
  background-size: contain;
  width: 30rem;
  height: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
    margin:0 auto;
    width: 46rem;
    height: 26.1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
   width: 70rem;
   height: 40rem;
  `};
`;

export const TitleAndContentBox = styled.div`
  width: 30rem;
  font-size: 2rem;
  margin-top: 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 60rem;
    margin-top:2rem;
    margin-left: 1rem;
    font-size: 3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 40rem;
    margin-top: 8rem;
    margin-left: 1rem;
  `};
`;

// -------------------------------------------
// 책 맞춤추천
export const BookRecommendWrapper = styled.div`
  width: 30rem;
  margin: 6rem auto;
  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 5rem;
    width:70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top: 10rem;
    width:120rem;
  `};
`;
export const BookRecommendBox = styled.div`
  margin: 0 auto;
  gap: 4rem;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 0 5px -5px #333;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    gap: 2rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  display:flex;
   gap: 4rem;
  `};
`;
export const BookRecommendImage = styled.div`
  background: url(${surveyImage});
  background-size: contain;
  width: 30rem;
  height: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
    margin:0 auto;
    width: 46rem;
    height: 26.1rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
   width: 70rem;
   height: 40rem;
  `};
`;
