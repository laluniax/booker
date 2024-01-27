import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  min-height: 90rem;
  gap: 6rem;
  margin-top: 8rem;
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  max-width: 85rem;
  margin: 0 auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    max-width: 120rem;
  `};
`;

export const MobileCategoryWrapper = styled.div`
  display: flex;
  justify-content: end;
  ${({ theme }) => theme.mediaQuery.sm`
  display:none;
  `};
`;

export const CategoryWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQuery.sm`
  display: block;
    max-width: 20rem;
  `};
  /* ${({ theme }) => theme.mediaQuery.lg`
    max-width: 25rem;
  `}; */
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
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
  height: 2.5rem;

  &.active {
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

export const PaginationWrapper = styled.div`
  margin-top: 3rem;
`;
// 리스트 부분
export const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 2.7rem;
  font-weight: 600;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-bottom: 5rem;
  font-size: 3rem;
  // max-width: 70rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 4rem;
  // max-width: 90rem;

  `};
`;
export const MobilePostCateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & select {
    border: 0.2rem solid black;
    font-family: 'GmarketSansMedium';
    border-radius: 0.5rem;
  }
  ${({ theme }) => theme.mediaQuery.sm`
display: none;
  `};
`;

export const MobilePostButton = styled.button`
  all: unset;
  font-family: 'GmarketSansMedium';
  float: right;
  padding: 0.7rem 1.2rem;

  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  font-size: 1.2rem;
  background-color: #fca311;
  color: #000;
  &:hover {
    cursor: pointer;
    background-color: #e89610;
  }
  ${({ theme }) => theme.mediaQuery.sm`
display: none;

  `};
`;
export const PostButton = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQuery.sm`
  display: block;
  all: unset;
  font-family: 'GmarketSansMedium';
  float: right;
  padding: 0.7rem 1.2rem;

  border: 0.1rem solid #fca311;
  border-radius: 1rem;
  font-size: 1.3rem;
  background-color: #fca311;
  color: #000;
  &:hover {
    cursor: pointer;
    background-color: #e89610;
  }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  padding: 0.9rem 1.2rem;
  `};
`;

export const PostListWrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;
export const PostListBox = styled.div`
  display: flex;
  height: 4.8rem;
  font-size: 1.6rem;
  align-items: center;
  border-bottom: 1px solid #000;
  justify-content: space-between;
  margin-top: 1.5rem;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 1rem;
  }
  /* ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.8rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`

  `}; */
`;
export const PostTitle = styled.span`
  font-family: 'GmarketSansMedium';
  margin-left: 0.2rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PostNicknameDate = styled.div`
  min-width: 30%;
  ${({ theme }) => theme.mediaQuery.sm`
    display: flex;
    justify-content: end;
    align-items:center;
  `};
`;

export const PostNickName = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: end;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  ${({ theme }) => theme.mediaQuery.sm`  
   margin-right: 1rem;
   padding-right: 1rem;
    font-size: 1.6rem;
    border-right: 0.1rem solid black;
  margin-bottom: 0rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`

  `};
`;

// export const PostContent = styled.span``;

export const PostDate = styled.span`
  font-size: 1.2rem;
  float: right;
`;
