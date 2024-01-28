import styled from 'styled-components';

export const Container = styled.div`
  width: 90rem;
  margin: 0 auto;
`;
export const BackToListBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #74c0fc;
  padding: 1rem;
`;

export const ResultWrapper = styled.div``;
export const Result = styled.div`
  margin: 5rem 0;
`;
export const ResultRank = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
  & span {
    font-size: 2rem;
    color: #74c0fc;
    font-weight: 900;
  }
`;
export const ResultImgAndInfo = styled.div`
  display: flex;
`;
export const ResultImg = styled.div``;

export const ResultInfo = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const ResultTitle = styled.div`
  font-size: 2rem;
  line-height: 1.5;
`;

export const ResultAuthor = styled.div``;

export const ResultPublisher = styled.div``;

export const ResultPubdate = styled.div``;

export const ResultDescription = styled.div`
  line-height: 2;
`;
