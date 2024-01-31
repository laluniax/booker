import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width:70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width:120rem;
  `};
`;

export const Container = styled.div`
  width: 30rem;
  margin: 0 auto;
  margin-left: 3rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 50rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width:900rem;
  `};
`;
export const Header = styled.header``;
export const CategoryTitle = styled.div`
  font-family: 'GmarketSansMedium';
  border-bottom: 2px solid #000;
  padding-bottom: 1rem;
  font-size: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 4rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 5rem;
  `};
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  width: 30rem;
  margin: 1rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 50rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width:90rem;
  grid-gap: 3rem;
  // padding: 5px;
  `};
`;
export const BookCardWrapper = styled.div`
  border-bottom: 1px solid #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 1rem;
  width: 14rem;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    padding: 2rem;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 4rem;
  width: 23rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 5rem;
  width:30rem;
  `};
`;
export const BookGenre = styled.h3`
  font-size: 14px;
`;

export const BookImg = styled.div`
  & img {
    width: 10rem;
    height: 15rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  & img { 
    width: 20rem;
    height: 25rem;
  }
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  & img { 
    width: 25rem;
    height: 30rem;
    }
  `};
`;

export const BookIntro = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
`;
export const Title = styled.h4`
  width: 12.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:22rem;
  font-size: 1.8rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  width:28rem;
  `};
`;

export const Author = styled.span`
  white-space: nowrap;
  width: 12.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  margin-top: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:22rem;
  font-size: 1rem;
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
  font-size: 1rem;
  margin-top: 0.3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width:22rem;
  font-size: 1rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  width:28rem;
  `};
`;

export const BookWrapper = styled.div`
  display: flex;
  background-color: gray;
`;
