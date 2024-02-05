import styled from 'styled-components';
// import logoImage from '../../assets/common/logo.webp';
// import defaultImg from '../../assets/market/marketdefault.png';
import defaultImg from '../../assets/profile/defaultprofileimage.webp';

export const Container = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  /* height: 100rem; */

  ${({ theme }) => theme.mediaQuery.sm`
    display: flex;
    justify-content: space-between;
    max-width: 85rem;
    gap: 5rem;

    `}
  ${({ theme }) => theme.mediaQuery.lg`
    max-width: 120rem;
    gap: 3rem;

  `};
`;

export const CategoryWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQuery.sm`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.2;
    width: 20rem;
    height: 114rem;
    margin-top: 2rem;
    font-size: 1.7rem;
    padding: 2rem 0 4rem 0;
    `}
  ${({ theme }) => theme.mediaQuery.lg`
    width: 23rem;
    height: 114rem;
    margin-top: 2rem;
    font-size: 1.7rem;
    padding: 2rem 0 4rem 0;
  `};
`;

export const CategoryTitle = styled.div`
  font-family: 'GmarketSansMedium';
  color: #003c52;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.sm`
      margin: 2rem 0;
      font-size: 2.5rem;
      font-weight: bold;
`}
  ${({ theme }) => theme.mediaQuery.lg`
    margin: 2rem 0;
    font-size: 3rem;
    font-weight: bold;
`};
`;
export const CategoryBtnBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
`};
`;
export const CategoryBtn = styled.button`
  all: unset;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }

  &.active {
    color: #015e80;
    font-weight: bold;
    font-size: 2rem;
    border-bottom: 0.1rem solid black;
  }
`;

export const ContentsWrapper = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  min-height: 145rem;
  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 62rem;
  min-width: 62rem;
  min-height: 145rem;
    `}
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  min-width: 40rem;
  `};
`;

// export const TitlePostButtonWrapper = styled.div`
//   align-items: center;

//   ${({ theme }) => theme.mediaQuery.sm`
//     `}
//   ${({ theme }) => theme.mediaQuery.lg`
//   `};
// `;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 2.7rem;
  font-weight: 600;

  ${({ theme }) => theme.mediaQuery.sm`
   font-size: 3rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 4rem;
  `};
`;

export const PostButton = styled.button`
  all: unset;
  float: right;
  font-family: 'GmarketSansMedium';
  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  background-color: #fca311;
  color: #000;
  font-size: 1.5rem;
  display: none;
  &:hover {
    cursor: pointer;
    background-color: #14213d;
    color: #fca311;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  ${({ theme }) => theme.mediaQuery.sm`
   display: block;
   font-size: 1.5rem;
   padding: 0.7rem 1.1rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 1.7rem;
    padding: 0.9rem 1.2rem;
  `};
`;

export const Contour = styled.div`
  border-bottom: 0.2rem solid #000;
  margin: 0.5rem 0 2rem 0;
  ${({ theme }) => theme.mediaQuery.sm`
    margin: 0.5rem 0 3rem 0;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin: 0.5rem 0 5rem 0;
  `};
`;

export const MobileCategory = styled.div`
  font-family: 'GmarketSansMedium';
  font-weight: 600;

  & select {
    width: 16rem;
    height: 2.8rem;
    border: 0.2rem solid black;
    border-radius: 0.5rem;
    font-family: 'GmarketSansMedium';
  }
  ${({ theme }) => theme.mediaQuery.sm`
    display: none;
    `}
`;
export const MobilePostButton = styled.div`
  all: unset;
  float: right;
  font-family: 'GmarketSansMedium';
  padding: 0.7rem 1.2rem;
  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  background-color: #fca311;
  color: #000;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    background-color: #14213d;
    color: #fca311;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    display: none;
    `}
`;

export const ProductsWrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 1rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
  width: 103%;
  display:flex;
  flex-wrap: wrap;
    gap: 1.5rem;
`};
`;

export const ProductCard = styled.div`
  position: relative;
  background-color: #14213d;
  color: #fff;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30rem;
  height: 40rem;
  padding: 2rem;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #14213d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    color: #fca311;
    transition: 0.3s;
  }
  &:not(:hover) {
    transition: 0.3s;
  }
  &.soldout {
    background: rgba(20, 33, 61, 0.4);
    color: rgba(20, 33, 61, 0.4);
    & img {
      opacity: 0.3;
    }
    &:hover {
      color: #ff0000;
      box-shadow: none;
      transition: 0.3s;
    }
    &:not(:hover) {
      transition: 0.3s;
    }
  }
  ${({ theme }) => theme.mediaQuery.sm`
      width: 19.8rem;
      height: 31.1rem;
      margin: 0 auto;
      padding: 1rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
    width: 22rem;
    height: 34.6rem;
`};
`;

export const LogoImage = styled.div`
  background: url(${defaultImg});
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* background-color: #fff; */
  width: 26rem;
  height: 30rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 18rem;
    height: 23.4rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
    width: 20rem;
    height: 26rem;
`};
`;

export const ProductImg = styled.div`
  width: 26rem;
  height: 30rem;
  margin: 0 auto;
  & img {
    width: 26rem;
    height: 30rem;
    object-fit: cover;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    width: 18rem;
    height: 23.4rem;
    & img {
      width: 18rem;
      height: 23.4rem;
    }
`}
  ${({ theme }) => theme.mediaQuery.lg`
  width: 20rem;
  height: 26rem;
  & img {
    width: 20rem;
    height: 26rem;
  }
`};
`;

export const CardTitleAndContentBox = styled.div`
  position: relative;
  height: 5.5rem;
  border-top: 1px solid #fff;
  padding: 1.3rem 0.3rem 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    height: 5.8rem;
    padding: 1rem 0.3rem 0.3rem 0.3rem;
    margin-top: 0.3rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 6.5rem;
  padding: 1.3rem 0.3rem 0.3rem 0.3rem;
  margin-top: 0.3rem;
`};
`;

export const TitleLikes = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProductTitle = styled.div`
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 2rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size:1.8rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  `};
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  `};
`;

export const ProductPrice = styled.div`
  font-family: 'Pretendard-Regular';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
  `};
`;

export const ProductCreatedAt = styled.div``;

export const Onsale = styled.div`
  font-family: 'GmarketSansMedium';
  position: absolute;
  color: #ff0000;
  font-weight: bold;
  font-size: 3rem;
  top: 15rem;
  left: 8.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2.5rem;
  top: 12rem;
  left: 4.8rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0.2rem;
  font-size: 3rem;
  top: 13rem;
  left: 4.8rem;
`};
`;

export const PaginationWrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
  padding: 1.5rem 0;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;
