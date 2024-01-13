import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  margin: 5rem 0rem 5rem 25rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const SliderWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
  position: relative;
`;

export const SliderUl = styled.ul`
  display: flex;
`;

export const SliderLi = styled.li`
  & img {
    width: 30rem;
    height: 30rem;
  }
`;

export const SliderBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  top: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  line-height: 4;
  gap: 2rem;
`;

export const ProductTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const ProductCategory = styled.div`
  & span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  & span {
    font-size: 1.2rem;
  }
`;

export const ProductGrade = styled.div`
  & span {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const ProductBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductLikes = styled.button`
  background-color: #bcbcbc;
  border: none;
  width: 8rem;
  height: 3rem;
`;

export const ProductChat = styled.button`
  background-color: #bcbcbc;
`;

export const ProductUser = styled.div`
  background-color: #bcbcbc;
  margin-top: 1rem;
  cursor: pointer;
`;

export const ProductContent = styled.div``;
