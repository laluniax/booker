import styled from 'styled-components';
import logoImage from '../../assets/common/logo.webp';

export const Container = styled.div``;
type HeightProps = {
  height: number;
};
export const SearchWrapper = styled.div<HeightProps>`
  height: ${(props) => props.height}rem;
  width: 80rem;
  margin: 2rem auto;
  overflow: hidden;
  white-space: nowrap;
`;

export const SearchBookWrapper = styled.div`
  height: 100%;
  width: 80rem;
  margin: 2rem auto;
  overflow: hidden;
  white-space: nowrap;
`;

export const SearchTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 0.2rem solid black;
`;

export const PostList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #bcbcbc;
  cursor: pointer;
`;
type WidthProps = {
  width: number;
};
export const Post = styled.div<WidthProps>`
  width: ${(props) => props.width}rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem;
`;

export const BookList = styled.div`
  display: flex;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid #bcbcbc;
`;

export const Book = styled.div`
  width: 20rem;
  height: 30rem;
  border: 0.1rem solid #bcbcbc;
  padding: 1rem;
  line-height: 1.5;
  cursor: pointer;
`;
export const BookImg = styled.div`
  width: 18rem;
  height: 23rem;
  margin: 0 auto;
  margin-bottom: 1rem;

  & img {
    width: 18rem;
    height: 23rem;
    object-fit: cover;
  }
`;

export const BookAuthor = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
`;
export const BookListCategory = styled.div`
  font-size: 1.5rem;
  padding: 2rem 0 1rem 0;
`;

export const ProductList = styled.div`
  display: flex;
`;

export const Product = styled.div`
  border: 0.1rem solid #bcbcbc;
  padding: 1rem;
  margin: 1rem;
  line-height: 2;
  cursor: pointer;
  & :nth-child(2) {
    font-size: 1.5rem;
  }
`;

export const ProductImg = styled.div`
  width: 14rem;
  height: 14rem;
  & img {
    width: 14rem;
    height: 14rem;
    object-fit: cover;
  }
`;
export const LogoImg = styled.div`
  background: url(${logoImage});
  background-size: contain;
  width: 14rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
