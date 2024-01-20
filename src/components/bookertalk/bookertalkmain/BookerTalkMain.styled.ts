import styled from 'styled-components';

export const Container = styled.div`
  grid-template-columns: 35rem 1fr; /* 사이드바와 메인 컨텐츠 영역 구분 */
  gap: 5rem;
  min-height: 100vh; /* 화면 높이에 맞춰 최소 높이 설정 */
`;
export const CategoryAndPostListBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;
export const Title = styled.div`
  margin: 0rem 0rem 5rem 30rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
`;

export const CategoryWrapper = styled.div`
  width: 25rem;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 70rem;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.7rem;
  line-height: 1.2;
`;

export const BookRecommendBox = styled.div`
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h1`
  font-size: 3rem;
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
export const PostListWrapper = styled.div`
  width: 90rem;
`;

export const PostListBox = styled.div`
  display: flex;
  height: 4rem;
  font-size: 1.8rem;
  align-items: center;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
export const PostTitle = styled.span`
  margin-left: 0.2rem;
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
