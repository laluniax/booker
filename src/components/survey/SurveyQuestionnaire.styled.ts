import styled from 'styled-components';
// 74c0fc d0ebff
export const Container = styled.div`
  min-height: 75rem;
  width: 90rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'GmarketSansMedium';
  margin-bottom: 2rem;

  &.genre {
    height: 110vh;
  }
`;

// 장르가 긴 설문(인기있는 책 장르별 추천받기 / 따끈따끈 신작 추천받기 / 텅장러 )의 컨테이너 입니다.
export const LongContainer = styled.div`
  min-height: 77rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'GmarketSansMedium';
  padding-bottom: 11rem;
`;

// 장르가 긴 설문의 버튼 크기를 조절했습니다.
// 1200px 에서 버튼 2개는 세로정렬 , 그 이상 넘어가면 가로로 정렬했습니다.
export const LongAnswer = styled.div`
  display: flex;
  margin: 2.3rem;
  text-align: center;
  justify-content: center;
  & button {
    width: 20rem;
    height: 7rem;
    margin-left: 1rem;
    font-family: 'GmarketSansMedium';
    color: #fff;
    border: 0.1rem solid #fca311;
    background-color: #fca311;
    border-radius: 2rem;
    font-size: 2.5rem;

    &:hover {
      background-color: #14213d;
      color: #fca311;
      transition: 0.2s;
    }

    &:not(:hover) {
      transition: 0.4s;
    }
  }
`;

export const Title = styled.div``;

export const Question = styled.div`
  font-size: 4rem;
  margin-bottom: 5rem;
`;

export const Answer = styled.div`
  margin: 2rem;

  & button {
    font-family: 'GmarketSansMedium';
    width: 30rem;
    color: #fff;
    border: 0.1rem solid #fca311;
    background-color: #fca311;
    border-radius: 2rem;
    font-size: 3rem;
    padding: 3rem;

    &:hover {
      background-color: #14213d;
      color: #fca311;
      transition: 0.2s;
    }

    &:not(:hover) {
      transition: 0.4s;
    }
  }
`;
