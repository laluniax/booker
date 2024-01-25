import styled from 'styled-components';

export const Container = styled.div`
  height: 120vh;
  min-height: 120rem;
`;

export const Title = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const CategoryProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
`;

export const CategoryWrapper = styled.div`
  width: 25rem;

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
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
  color: #003c52;
  cursor: pointer;
`;
export const CategoryBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.9rem;
  margin-top: 1rem;
`;
export const CategoryBtn = styled.button`
  all: unset;
  line-height: 1.5;
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: #015e80;
    font-weight: bold;
    font-size: 2rem;
    border-bottom: 0.1rem solid black;
  }
`;
export const ContentsWrapper = styled.div``;
export const ProductsWrapper = styled.div`
  width: 90rem;
  /* height: 100%; */
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  gap: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const ProductCard = styled.div`
  position: relative;
  background-color: #dcdcdc;
  width: 22rem;
  height: 33rem;
  padding: 1rem;
  /* border: 0.2rem solid black; */
  cursor: pointer;
  &.soldout {
    background: rgba(0, 0, 0, 0.5);
    & img {
      opacity: 0.5;
    }
  }
`;
export const Onsale = styled.div`
  position: absolute;
  color: #fff;
  font-size: 3rem;
  font-weight: 800;
  top: 13rem;
  left: 5.5rem;
`;

export const LogoImg = styled.div`
  width: 20rem;
  height: 26rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 20rem;
  }
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

export const ProductTitle = styled.div`
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
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
`;

export const ProductLikes = styled.div``;

export const PostButton = styled.button`
  all: unset;
  float: right;
  padding: 0.9rem 1.2rem;
  border: 0.2rem solid black;
  border-radius: 1rem;
  font-size: 1.5rem;
  background-color: #000;
  color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #404040;
  }
`;
export const PaginationWrapper = styled.div`
  width: 90rem;
`;
