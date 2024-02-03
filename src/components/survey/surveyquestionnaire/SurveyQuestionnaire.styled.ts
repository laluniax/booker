import styled from 'styled-components';

// 장르가 긴 설문(인기있는 책 장르별 추천받기 / 따끈따끈 신작 추천받기 / 텅장러 )의 컨테이너 입니다.
export const LongContainer = styled.div`
  min-height: 40rem;
  max-width: 35rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'GmarketSansMedium';
  padding-bottom: 5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  min-height: 75rem;
  max-width: 100rem;
  padding-bottom: 11rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 120rem;
  `};
`;

// 장르가 긴 설문의 버튼 크기를 조절했습니다.
// 1200px 에서 버튼 2개는 세로정렬 , 그 이상 넘어가면 가로로 정렬했습니다.
export const LongAnswer = styled.div`
  margin: 2.3rem;

  & button {
    width: 16rem;
    height: 6rem;
    margin-bottom: 1.5rem;
    font-family: 'GmarketSansMedium';
    color: #fff;
    border: 0.1rem solid #fca311;
    background-color: #fca311;
    border-radius: 2rem;
    font-size: 2rem;

    &:hover {
      background-color: #14213d;
      color: #fca311;
      transition: 0.2s;
    }

    &:not(:hover) {
      transition: 0.4s;
    }
  }

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  text-align: center;
  justify-content: center;

  & button {
  width: 15rem;
  min-width: 8.5rem;
  height: 7rem;
  margin-left: 1rem;
  font-size: 1.8rem;
  }
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  & button {
    width: 20rem;
    font-size: 2.5rem;
  }
  `};
`;

export const Question = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-bottom: 5rem;
  font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 4rem;
  `};
`;

export const Container = styled.div`
  min-height: 40rem;
  max-width: 35rem;
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

  ${({ theme }) => theme.mediaQuery.sm`
  min-height: 75rem;
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;

export const Answer = styled.div`
  margin: 2rem;

  & button {
    font-family: 'GmarketSansMedium';
    width: 20rem;
    color: #fff;
    border: 0.1rem solid #fca311;
    background-color: #fca311;
    border-radius: 2rem;
    font-size: 2rem;
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

  ${({ theme }) => theme.mediaQuery.sm`
  & button {
    width: 25rem;
    font-size: 2.5rem;
  }
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  & button {
    width: 30rem;
    font-size: 3rem;
  }
  `};
`;
