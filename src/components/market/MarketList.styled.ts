import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  margin: 0rem 0rem 5rem 30rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 3rem;
  font-weight: 600;
`;

export const CategoryProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  width: 20rem;
  align-items: center;
  justify-content: center;
  /* margin-top: 4rem; */
  /* padding-left: 7rem; */
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 12rem;
  padding: 1rem 1rem 1rem 1.5rem;
  background: #f5f5f5;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  line-height: 1.7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const CategoryBtn = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductsWrapper = styled.div`
  width: 80rem;
  height: 100%;
  display: grid;
  grid-template-columns: 19rem 19rem 19rem 19rem;
  gap: 1rem;
  line-height: 1.5;
`;

export const ProductCard = styled.div`
  width: 19rem;
  height: 25rem;
  padding: 0.5rem;
  border: 0.2rem solid black;
  cursor: pointer;
`;
export const LogoImg = styled.div`
  width: 18rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 15rem;
  }
`;
export const ProductImg = styled.img`
  width: 18rem;
  height: 18rem;
  object-fit: cover;
`;

export const ProductTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
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
  padding: 0.5rem 1rem;
  border: 0.2rem solid black;
  cursor: pointer;
`;
