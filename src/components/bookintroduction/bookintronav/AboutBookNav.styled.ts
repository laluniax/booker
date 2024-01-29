import styled from 'styled-components';

type CategoryButtonProps = {
  isSelected: boolean;
};

export const Container = styled.div`
  width: 35rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size:1.3rem;
  width:12rem;
  margin-right: 3rem;
  margin-top:4rem;
  height: 10rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 1.8rem;
    width:120rem;
  `};
`;

export const CatrgoryBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  width: 17rem;

  height: 20rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: -8rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 17rem;
    height: 20rem;
    margin-top: 10rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 15rem;
  `};
`;
export const Category = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: start; */
  gap: 2rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  flex-direction: column;
  align-items: start;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const CategoryList = styled.button`
  all: unset;
  font-size: 1.5rem;
  margin: 0.2rem 0.3rem;
  &.active {
    color: #015e80;
    font-size: 2.2rem;
    border-bottom: 0.1rem solid black;
  }
  &:hover {
    cursor: pointer;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  margin: 0.3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  margin: 0.3rem;
  `};
`;
