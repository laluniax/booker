import styled from 'styled-components';
import HeartIcon from '../../assets/common/icon-_heart_white.webp';
import logoImage from '../../assets/common/logo.webp';

export const Container = styled.div`
  width: 30rem;
  height: 200rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
   width: 70rem;
   height: 100rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      width: 120rem;
      height: 200rem;
  `};
`;

export const ContentsWrapper = styled.div`
  width: 20rem;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 55rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top:3rem;
  width: 90rem;
  `};
`;

export const TitlePostButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-left:2rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  /* padding-bottom: 0.5rem; */
  /* border-bottom: 0.2rem solid black; */
  font-size: 2rem;
  font-weight: 600;
  /* padding-top: 2rem; */
  margin-bottom: 3rem;
  /* padding: 0.9rem 1.2rem; */
  margin: auto 0;

  ${({ theme }) => theme.mediaQuery.sm`
   font-size: 2.7rem;
   
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 4rem;
  `};
`;

export const PostButton = styled.button`
  all: unset;
  float: right;

  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  background-color: #fca311;
  color: #000;
  font-size: 1.8rem;
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
   font-size: 1.5rem;
   padding: 0.5rem 1rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 2rem;
    padding: 0.9rem 1.2rem;
  `};
`;

export const Contour = styled.div`
  border-bottom: 3px solid #000;
  width: 35rem;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width : 55rem;
  border-bottom: 2px solid #000;
  margin : 1rem auto;
  margin-left: 2rem;
  
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin-top : 2rem;
    width : 90rem;
  `};
`;

export const CategoryProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 4rem;
      gap: 5rem;
  `};
`;

export const CategoryWrapper = styled.div`
  width: 8rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 10rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
    width: 25rem;
    margin-top: 2rem;
  `};
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  font-size: 1.2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  padding: 2rem 0 4rem 0;

`};
`;

export const CategoryTitle = styled.div`
  font-family: 'GmarketSansMedium';
  color: #003c52;
  cursor: pointer;
  /* font-size: 2rem; */

  ${({ theme }) => theme.mediaQuery.sm`
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
  font-size: 3rem;
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

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  width: 20rem;
  margin: 2rem auto;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 55rem;
  gap:1rem;
  margin-left: 2rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    width: 90rem;
    gap: 1.5rem;
    line-height: 1.5;
    margin-bottom: 2rem;
`};
`;

export const ProductCard = styled.div`
  position: relative;
  background-color: #14213d;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  width: 14rem;
  height: 22rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    width: 22rem;
    height: 34.6rem;
    padding: 1rem;
    border-radius: 2rem;
`};
`;

export const CardTitleAndContentBox = styled.div`
  position: relative;
  border-top: 1px solid #fff;

  ${({ theme }) => theme.mediaQuery.sm`
  // witdh:13rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0.3rem;
  margin-top: 0.3rem;
`};
`;

export const Onsale = styled.div`
  font-family: 'GmarketSansMedium';
  position: absolute;
  color: #ff0000;

  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  top: 10rem;
  left: 2.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 0.2rem;
  font-size: 3rem;
  top: 13rem;
  left: 4.8rem;
`};
`;

export const LogoImage = styled.div`
  background: url(${logoImage});
  background-size: cover;
  width: 20rem;
  height: 26rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 13rem;
  height: 17rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 20rem;
  height: 26rem;
`};
`;
export const ProductImg = styled.div`
  margin: 0 auto;
  & img {
    object-fit: cover;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  & img {
    width: 13rem;
    height: 17rem;
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

export const EmptyHeartImg = styled.div`
  position: absolute;
  background: url(${HeartIcon});
  background-size: contain;
  right: 0;

  ${({ theme }) => theme.mediaQuery.sm`
  width:1.5rem;
  height:1.5rem;
  margin-right:0.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 2rem;
  height: 1.7rem;
  top: 1.2rem;
  margin-right:-0.5rem;
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

  ${({ theme }) => theme.mediaQuery.sm`
  width: 11.5rem;
  font-size:1.5rem;
  margin-top:0.3rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 0.6rem;
  font-size: 2rem;
  width: 11ch;
  `};
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top:0.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top:-0.5rem;
  `};
`;

export const ProductPrice = styled.div`
  font-family: 'Pretendard-Regular';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  width: 11rem;
  `};
`;

export const ProductCreatedAt = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  `};
`;

export const PaginationWrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 90rem;
  `};
`;
