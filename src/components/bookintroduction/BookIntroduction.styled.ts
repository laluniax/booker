import styled from 'styled-components';

type CategoryButtonProps = {
  isSelected: boolean;
};

export const CategoryWrapper = styled.div`
  width: 40rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  align-items : center;
   width: 18rem;
   height: 38rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  align-items : center;

  width: 18rem;
  height: 45rem;
  `};
`;

export const CatrgoryBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14213d;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #000;
  border-radius: 8px;
  width: 38rem;
  height: 6rem;

  ${({ theme }) => theme.mediaQuery.sm`
   width: 16rem;
   height: 21rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 18rem;
  height: 23rem;
  `};
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 2rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  flex-direction: column;
  align-items: center;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
   display: flex;
   flex-direction: column;
   align-items: center;
  width: 11.4rem;
  height: 17rem;
  `};
`;

export const CategoryList = styled.button`
  all: unset;
  font-size: 1.5rem;
  margin: 0.2rem 0.3rem;

  &.active {
    color: #fca311;
    font-size: 1.8rem;
    border-bottom: 0.1rem solid #fca311;
    padding-bottom: 0.4rem;
  }

  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  margin: 0.3rem;
  font-size: 1.8rem;

  &.active {
    color: #fca311;
    font-size: 1.8rem;
    border-bottom: 0.1rem solid #fca311;
    padding-bottom: 0.4rem;
  }
  &:hover {
    cursor: pointer;
  }
  
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  margin: 0.3rem;
  font-size: 2rem;

  &.active {
    color: #fca311;
    font-size: 2.1rem;
    border-bottom: 0.1rem solid #fca311;
    padding-bottom: 0.4rem;
  }
  &:hover {
    cursor: pointer;
  }
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width:70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width:120rem;
  display:flex;
  justify-content: center;
  `};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
    max-width: 72rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 0;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    max-width: 120rem;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 0;
  `};
`;

export const BookintroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 40rem;

  ${({ theme }) => theme.mediaQuery.sm`
   display: flex;
   flex-direction: column;
   max-width: 87rem;
   width: 56rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
   display: flex;
   flex-direction: column;
   max-width: 95rem;
   width: 90rem;
  `};
`;

export const Header = styled.header``;

export const CategoryTitle = styled.div`
  font-family: 'GmarketSansMedium';
  border-bottom: 2px solid #000;
  padding-bottom: 1rem;
  font-weight: bold;
  font-size: 2rem;
  margin: 0 auto;
  width: 90%;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 4rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 5rem;
  display: flex;
  width: 80rem;
  margin: 0 auto;
  `};
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 35rem;
  margin: 2rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 50rem;
    margin-top: 2.4rem;
  grid-gap: 3rem;
  margin: 1rem auto;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 80rem;
  margin-top: 4rem;
  grid-gap: 3rem;
  margin: 1rem auto;
  `};
`;

export const BookCardWrapper = styled.div`
  border-bottom: 1px solid #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 1rem;
  width: 17rem;
  height: 27rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #14213d;
    border: 0.1rem solid #fff;
    color: #fca311;
    transition: all 0.3s ease 0s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 4rem;
  width: 24rem;
  height: 37rem;

  &:hover {
    cursor: pointer;
    padding: 2rem;
    transition: all 0.3s ease 0s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 5rem;
  width: 31rem;
  height: 47rem;

  &:hover {
    cursor: pointer;
    padding: 2rem;
    transition: all 0.3s ease 0s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
  `};
`;

export const BookGenre = styled.h3`
  font-size: 14px;
`;

export const BookImg = styled.div`
  border-radius: 2rem;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 18rem;

  ${({ theme }) => theme.mediaQuery.sm`
   display: flex;
   justify-content: center;
   align-items: center;
  width: 22rem;
  height: 25rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27rem;
    height: 31rem;
  `};

  & img {
    width: 13rem;
    height: 17rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  & img { 
    width: 20rem;
    height: 25rem;
  }
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  & img { 
    width: 24rem;
    height: 31rem;
    }
  `};
`;

export const BookIntro = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.3rem;
  margin-top: 0.8rem;

  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 1.5rem;
      gap: 0.5rem;
      margin-left: 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    gap: 1rem;
    margin-left: 1rem;
  `};
`;

export const Title = styled.h4`
  width: 13ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.8rem;
  width: 16ch;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2.5rem;
  width: 16ch;
  `};
`;

export const Author = styled.span`
  white-space: nowrap;
  width: 12.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:22rem;
  font-size: 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  width:28rem;
  `};
`;

export const Plot = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 12.7rem;
  font-size: 1.2rem;
  margin-top: 0.3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:22rem;
  font-size: 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  width:28rem;
  `};
`;
