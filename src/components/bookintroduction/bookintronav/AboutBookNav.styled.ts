import styled from 'styled-components';

type CategoryButtonProps = {
  isSelected: boolean;
};

export const Container = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
 display: flex;
 align-items : center;
  width: 18rem;
  height: 32rem;
 
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  align-items : center;

  width: 18rem;
  height: 48rem;
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

  ${({ theme }) => theme.mediaQuery.sm`
   width: 15rem;
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
    font-size: 2.2rem;
    border-bottom: 0.1rem solid #fca311;
    padding-bottom: 0.4rem;
  }
  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  margin: 0.3rem;
  font-size: 1.8rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin: 0.3rem;
  font-size: 2rem;
  `};
`;
