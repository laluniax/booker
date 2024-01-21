import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Title = styled.div`
  margin: 0rem 0rem 5rem 40rem;
  font-size: 2rem;
  border-bottom: 0.2rem solid black;
  width: 80rem;
  padding-bottom: 0.5rem;
  & img {
    width: 10rem;
    margin-right: 0.5rem;
  }
`;

export const BtnContainaer = styled.div`
  margin-top: 10rem;
  margin-left: 30rem;
  & div {
    border-bottom: 0.1rem solid black;
    padding: 3rem 0;
  }
`;

export const SurveyButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
`;
