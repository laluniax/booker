import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.div`
  margin: 0rem 0rem 5rem 30rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 3rem;
  font-weight: 600;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  width: 30rem;
  align-items: center;
  justify-content: center;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 14rem;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  line-height: 1.2;
`;

export const BookRecommendBox = styled.div`
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

export const GenreButtonbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.7rem;
  margin-top: 1rem;
`;

export const GenreButton = styled.button`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;
export const FreeTalkBox = styled.div`
  margin-top: 1rem;
`;
export const PostListWrapper = styled.div``;

export const PostListBox = styled.div`
  display: flex;
  width: 70rem;
  height: 4rem;
  font-size: 1.5rem;
  gap: 2rem;
  align-items: center;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  margin: 2px;
`;
export const PostTitle = styled.span`
  margin-left: 0.2rem;
`;
export const PostContent = styled.span``;
export const PostDate = styled.span``;
export const PostNickName = styled.span`
  margin-right: 0.3rem;
`;

export const PostButton = styled.div`
  all: unset;
  float: right;
  padding: 0.5rem 1rem;
  border: 0.2rem solid black;
  font-size: 1.5rem;
  background-color: #000;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;
