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
  height: 100%;
  /* align-items: center; */
  justify-content: center;

  /* margin-top: 4rem; */
  /* padding-left: 7rem; */
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 15rem;
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
  width: 90rem;
  height: 100%;
  display: grid;
  grid-template-columns: 20rem 20rem 20rem 20rem;
  gap: 2.5rem;
  line-height: 1.5;
`;

export const ProductCard = styled.div`
  width: 20rem;
  height: 31rem;
  border: 0.2rem solid black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const LogoImg = styled.div`
  width: 18rem;
  height: 23rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 18rem;
  }
`;
export const ProductImg = styled.div`
  width: 18rem;
  height: 23rem;
  margin: 0 auto;
  & img {
    width: 18rem;
    height: 23rem;
    object-fit: cover;
  }
`;

export const ProductTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 1rem 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
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
