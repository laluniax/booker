import styled from 'styled-components';

export const TabListTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 3rem 0 0.5rem 0;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  font-weight: 500;
  margin: 4rem 0 1rem 0;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  font-weight: 600;
  margin: 5rem 0 2rem 0;
  `};
`;

// 구분선
export const Contour = styled.div`
  border-bottom: 0.1rem solid #000;
  width: 100%;
  margin-top: 9rem;

  ${({ theme }) => theme.mediaQuery.sm`
  border-bottom: 0.15rem solid #000;
  width: 100%;
  margin-top: 4rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  border-bottom: 0.2rem solid #000;
  width: 100%;
  margin-top: 3rem;
  `};
`;

// 내가 쓴 글
export const PostWrapper = styled.div`
  height: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
  height: 25rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 35rem;
  `};
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.1rem;
  padding: 1.1rem 0;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 0.6rem;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.3rem;
    padding: 1.3rem 0;
  
    &:hover {
      border-radius: 0.8rem;
    }
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  padding: 1.5rem 0;

  &:hover {
    border-radius: 1rem;
  }
  `};
`;

export const PostTitle = styled.div`
  font-size: 1.2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.7rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  `};
`;

export const PostDate = styled.div``;

export const ProductWrapper = styled.div`
  height: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
  height: 40rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 50rem;
  `};
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.3rem;
  padding: 1rem 0;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 0.6rem;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
    padding: 1.3rem 0;
  
    &:hover {
      border-radius: 0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  padding: 1.5rem 0;

  &:hover {
    border-radius: 1rem;
  }
  `};
`;
export const ProductTitlePrice = styled.div`
  margin-left: 0.9rem;
  width: 10rem;
  line-height: 1.5;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-left: 1.1rem;
  width: 32rem;
  line-height: 1.7;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 1.3rem;
  width: 58rem;
  line-height: 2;
  `};
`;

export const ProductTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 30rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 50rem;
  `};
`;

export const ProductImg = styled.img`
  object-fit: cover;
  background-color: #14213d;
  border-radius: 1rem;
  width: 5rem;
  height: 5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  border-radius: 1.5rem;
  width: 6rem;
  height: 6rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 2rem;
  width: 7rem;
  height: 7rem;
  `};
`;

export const ProductPrice = styled.div`
  font-size: 1.2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.8rem;
  `};
`;

export const ProductDate = styled.div`
  font-size: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
  `};
`;

// 팔로우 목록
export const FollowWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 4rem;
  width: 50rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 5rem;
  width: 80rem;
  `};
`;

export const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.1rem;
  padding: 1.1rem 0;

  &:hover {
    cursor: pointer;
    background-color: #14213d;
    border-radius: 1rem;
    padding: 0.6rem;
    color: #fff;
    transition: 0.3s;

    & div {
      color: #fca311;
    }
  }

  &:not(:hover) {
    transition: 0.4s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  padding: 1.3rem 0;
  
  &:hover {
    border-radius: 1.5rem;
    padding: 0.8rem;
  }
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  padding: 1.5rem 0;

  &:hover {
    border-radius: 2rem;
    padding: 1rem;
  }
  `};
`;

export const FollowImgAndNickNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  gap: 2rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  gap: 3rem;
  `};
`;

export const FollowImg = styled.img`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  object-fit: cover;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 5rem;
  height: 5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 7rem;
  height: 7rem;
  `};
`;

export const FollowNickname = styled.div`
  font-size: 1.2rem;
  width: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.5rem;
  width: 25rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.8rem;
  width: 30rem;
  `};
`;

export const UnfollowBtn = styled.button`
  font-family: 'GmarketSansMedium';
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: #bcbcbc;

  &:hover {
    color: #fca311;
    transition: 0.2s;
    font-weight: bold;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
 `};
`;

export const NoFollowList = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  font-size: 1.2rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.6rem;
  `}
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.8rem;
 `};
`;
