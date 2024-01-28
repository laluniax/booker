import styled from 'styled-components';
import HeartIcon from '../../assets/common/icon-_heart_white.webp';
import logoImage from '../../assets/common/logo.webp';
export const Container = styled.div``;

export const ContentsWrapper = styled.div``;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 2.7rem;
  font-weight: 600;
  margin-bottom: 5rem;

  ${({ theme }) => theme.mediaQuery.sm`
   font-size: 3rem;
   margin-bottom: 5rem;
    `}

  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 4rem;
  `};
`;

export const CategoryProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
`;

export const CategoryWrapper = styled.div`
  width: 25rem;
  margin-top: 2rem;

  /* display: flex;
  width: 20rem;
  height: 100%;
  justify-content: center; */
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23rem;
  padding: 2rem 0 4rem 0;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.7rem;
  line-height: 1.2;
`;

export const CategoryTitle = styled.div`
  font-family: 'GmarketSansMedium';
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
  color: #003c52;
  cursor: pointer;
`;
export const CategoryBtnBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1rem;
  width: 20rem;
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
  width: 90rem;
  /* height: 100%; */
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  gap: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const ProductCard = styled.div`
  position: relative;
  background-color: #14213d;
  color: #fff;
  width: 22rem;
  height: 34.6rem;
  padding: 1rem;
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
`;

export const CardTitleAndContentBox = styled.div`
  position: relative;
  border-top: 1px solid #fff;
  padding: 0.3rem;
  margin-top: 0.3rem;
`;

export const Onsale = styled.div`
  font-family: 'GmarketSansMedium';
  position: absolute;
  color: #ff0000;
  padding: 0.2rem;
  font-size: 3rem;
  font-weight: bold;
  top: 13rem;
  left: 4.8rem;
`;

export const LogoImage = styled.div`
  background: url(${logoImage});
  background-size: cover;
  width: 20rem;
  height: 26rem;
  /* margin: 0 auto; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* & img { */
  /* width: 20rem; */
  /* } */
`;
export const ProductImg = styled.div`
  width: 20rem;
  height: 26rem;
  margin: 0 auto;
  & img {
    width: 20rem;
    height: 26rem;
    object-fit: cover;
  }
`;

export const EmptyHeartImg = styled.div`
  position: absolute;
  background: url(${HeartIcon});
  background-size: contain;
  width: 2rem;
  height: 1.7rem;
  right: 0;
  top: 1.2rem;
`;

export const ProductTitle = styled.div`
  font-family: 'GmarketSansMedium';
  margin-top: 0.6rem;
  font-size: 2rem;
  font-weight: bold;
  width: 11ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-family: 'Pretendard-Regular';
  width: 11rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductCreatedAt = styled.div`
  font-size: 1.5rem;
`;

export const PostButton = styled.button`
  all: unset;
  float: right;
  padding: 0.9rem 1.2rem;
  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  font-size: 1.5rem;
  background-color: #fca311;
  color: #000;
  &:hover {
    cursor: pointer;
    background-color: #14213d;
    color: #fca311;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const PaginationWrapper = styled.div`
  width: 90rem;
`;
