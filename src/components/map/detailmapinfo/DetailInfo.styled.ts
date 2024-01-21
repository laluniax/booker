import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 60rem;
  width: 60rem;
  font-size: 4rem;
`;

export const MarkerDataDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  & > div {
    margin-bottom: 1.5rem;
  }
`;
