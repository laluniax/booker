import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
`;
export const PaginationUl = styled.ul`
  display: flex;
`;

export const PaginationLi = styled.li``;

export const PaginationSpan = styled.span`
  margin: 1rem;
  cursor: pointer;

  // 선택된 페이지에 대한 색상추가
  &.selected {
    color: #7fd4f3;
  }
`;
