import styled from 'styled-components';
import logoImage from '../../assets/common/logo.webp';

export const Container = styled.div`
  font-family: 'GmarketSansMedium';
  min-height: 120rem;
`;

export const SearchResult = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
  `};
`;

type HeightProps = {
  height: number;
};

export const SearchWrapper = styled.div<HeightProps>`
  height: ${(props) => props.height}rem;
  margin: 5rem auto;
  overflow: hidden;
  height: auto;
  white-space: nowrap;
  width: 80%;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 80rem;
  `};
`;

export const SearchBookWrapper = styled.div`
  height: 100%;
  margin: 2rem auto;
  overflow: hidden;
  white-space: nowrap;
  width: 80%;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
   max-width: 80rem;
  `};
`;

export const SearchTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  border-bottom: 0.2rem solid black;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;

export const PostListBox = styled.div`
  padding: 1rem;
`;

export const PostList = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  font-size: 1.5rem;
  border-bottom: 0.1rem solid #bcbcbc;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 1rem;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
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
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid #bcbcbc;
  height: auto;
  overflow: hidden;
  gap: 1.3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 70rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 80rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `};
`;

export const Book = styled.div`
  width: 14rem;
  height: 21rem;
  border: 0.1rem solid #fff;
  border-radius: 2rem;
  background-color: #14213d;
  color: #fff;
  padding: 1rem;
  line-height: 1.5;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  width: 20rem;
  height: 32rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 80rem;
  width: 24rem;
  height: 35rem;
  `};

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #000;
    background-color: #fca311;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

export const BookImg = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  width: 10rem;
  height: 14.5rem;

  & img {
    object-fit: cover;
    width: 10rem;
    height: 13rem;

    ${({ theme }) => theme.mediaQuery.sm`
    width: 15rem;
    height: 22rem;
    `};

    ${({ theme }) => theme.mediaQuery.lg`
    width: 18rem;
    height: 26rem;
    `};
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width: 15rem;
  height: 23.2rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 18rem;
  height: 27rem;
  `};
`;

export const BookAuthor = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 1.1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  `};
`;

export const BookListCategory = styled.div`
  font-size: 2rem;
  padding: 2rem 0 1rem 0;
  margin-left: 0.4rem;
`;

export const ProductList = styled.div`
  width: 50rem;
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 60rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `};
`;

export const Product = styled.div`
  width: 14rem;
  height: 23rem;
  border: 0.1rem solid #bcbcbc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2rem;
  line-height: 2;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 18rem;
  height: 28rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 19rem;
  height: 28rem;
  `};

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: #fff;
    background-color: #14213d;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

export const TitleAndPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  height : 5rem;
  margin-top: 1rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  height: 4.4rem;
  `};
`;

export const ProductTitle = styled.div`
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size : 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  `};
`;

export const ProductPrice = styled.div`
  font-size: 1.5rem;
  height: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size : 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  `};
`;

export const ProductImg = styled.div`
  width: 12rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 12rem;
    height: 15rem;
    object-fit: cover;

    ${({ theme }) => theme.mediaQuery.sm`
    width: 16rem;
    height: 20rem;
    `};

    ${({ theme }) => theme.mediaQuery.lg`
    width: 17rem;
    height: 20rem;
  `};
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width : 16rem;
  height: 20rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 17rem;
  height: 20rem;
  `};
`;

export const LogoImg = styled.div`
  background: url(${logoImage});
  background-size: contain;
  width: 12rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 16rem;
  height: 20rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 17rem;
  height: 20rem;
  `};
`;

export const PaginationWrapper = styled.div`
  margin-top: 3rem;
`;

export const SearchNoData = styled.div`
  font-size: 2rem;
`;
