import styled from 'styled-components';

type CategoryButtonProps = {
  isSelected: boolean;
};

export const Container = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  margin-top: 4rem;
`;

export const CatrgoryBox = styled.div`
  display: flex;
  width: 17rem;
  height: 20rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #000;
  border-radius: 8px;
`;
export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  margin-top: 1rem;
`;

export const CategoryList = styled.button`
  all: unset;
  font-size: 2rem;
  &.active {
    color: #015e80;
    border-bottom: 0.1rem solid black;
  }
  &:hover {
    cursor: pointer;
  }
`;
