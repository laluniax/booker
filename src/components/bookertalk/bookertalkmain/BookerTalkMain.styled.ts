import styled from 'styled-components';

export const Container = styled.div`
  grid-template-columns: 35rem 1fr;
  gap: 5rem;
  min-height: 90rem;
  margin-top: 8rem;
`;

export const CategoryAndPostListBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
`;
export const CategoryWrapper = styled.div`
  width: 25rem;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23rem;
  height: 72rem;
  /* background: #ebebeb; */
  /* color: #fff; */
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.7rem;
  line-height: 1.2;
`;

export const BookRecommendBox = styled.div`
  margin-bottom: 1rem;
`;
export const CategoryTopTitle = styled.h1`
  font-family: 'GmarketSansMedium';
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #003c52;
  cursor: pointer;
`;
export const CategoryTitle = styled.h1`
  font-family: 'GmarketSansMedium';
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #003c52;
  cursor: default;
`;

export const GenreButtonbox = styled.div`
  font-family: 'GmarketSansMedium';
  width: 10.5rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  line-height: 1.3;
  gap: 0.9rem;
  margin-top: 1rem;
`;

export const GenreButton = styled.button`
  all: unset;
  color: black;
  width: 10.5rem;
  height: 2.5rem;
  &.active {
    width: 10.5rem;
    height: 2.5rem;
    color: #015e80;
    font-weight: bold;
    font-size: 2rem;
    border-bottom: 0.1rem solid black;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const FreeTalkBox = styled.div`
  margin-top: 1rem;
`;
export const PostListWrapper = styled.div`
  width: 90rem;
`;
export const PaginationWrapper = styled.div`
  margin-top: 3rem;
`;

export const ContentWrapper = styled.div`
  width: 90rem;
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 5rem;
`;

export const PostListBox = styled.div`
  display: flex;
  height: 4.8rem;
  font-size: 1.8rem;
  align-items: center;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  margin-top: 1.5rem;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 1rem;
  }
`;
export const PostTitle = styled.span`
  font-family: 'GmarketSansMedium';
  margin-left: 0.2rem;
  font-weight: bold;
`;
export const PostContent = styled.span``;

export const PostDate = styled.span`
  font-size: 1.2rem;
`;
export const PostNickName = styled.span`
  margin-right: 1rem;
`;

export const PostButton = styled.div`
  all: unset;
  font-family: 'GmarketSansMedium';
  float: right;
  padding: 0.9rem 1.2rem;
  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  font-size: 1.5rem;
  background-color: #fca311;
  color: #000;
  &:hover {
    cursor: pointer;
    background-color: #e89610;
  }
`;
