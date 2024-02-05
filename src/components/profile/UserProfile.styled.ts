import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 33rem;
  height: 100rem;

  ${({ theme }) => theme.mediaQuery.sm`
    height: 160rem;
    width:70rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  min-height: 180rem;
  width:120rem;
  `};
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  margin: 0 auto;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 500;
  width: 30rem;
  padding-bottom: 0.3rem;
  border-bottom: 0.1rem solid black;

  ${({ theme }) => theme.mediaQuery.sm`
    margin-bottom: 4rem;
    font-size: 3rem;
    font-weight: 600;
    width: 70rem;
    padding-bottom: 0.4rem;
    border-bottom: 0.15rem solid black;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-bottom: 5rem;
  font-size: 4rem;
  font-weight: 600;
  width: 90rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
    `};
`;

export const ProfileWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14213d;
  width: 30rem;
  height: 12rem;
  margin-bottom: 4rem;
  padding: 2rem 0;
  gap: 2rem;
  border-radius: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 70rem;
    height: 20rem;
    margin-bottom: 5rem;
    padding: 2.5rem 0;
    gap: 2.5rem;
    border-radius: 2.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 90rem;
  height: 30rem;
  margin-bottom: 6rem;
  padding: 3rem 0;
  gap: 3rem;
  border-radius: 3rem;
    `};
`;

export const ProfileImgWrapper = styled.div`
  text-align: center;
`;

export const ProfileImg = styled.img`
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  margin-left: -1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 15rem;
    height: 15rem;
    margin-left: 0;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 20rem;
  height: 20rem;
    `};
`;

export const ProfileInfo = styled.div`
  /* text-align: start; */
  display: flex;
  justify-content: center;
  width: 17rem;
  line-height: 2;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 30rem;
    line-height: 2;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 40rem;
  line-height: 2;
    `};
`;

export const NicknameAndIntrotext = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 0.9rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin: 0 auto;
    `};
`;

export const ProfileNicknameEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    gap: 1rem;
    height: 16rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
   gap: 2rem;
   height: 16rem;
    `};
`;

export const ProfileNickname = styled.div`
  font-family: 'GmarketSansMedium';
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 2rem;
    font-weight: 600;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2.5rem;
  font-weight: 700;
    `};
`;

export const ProfileEmail = styled.div`
  font-size: 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.3rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
    `};
`;

export const NicknameAndText = styled.div`
  ${({ theme }) => theme.mediaQuery.sm`
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 1rem;
  height: 14.5rem;
    `};
`;

export const ProfileIntroText = styled.div`
  font-family: 'GmarketSansMedium';
  color: #fff;
  display: flex;
  justify-content: start;
  font-size: 0.8rem;
  padding-left: 0.2rem;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.4rem;
    padding-left: 0.3rem;
    height: 10rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  padding-left: 0.4rem;
  width: 30ch;
    `};
`;

export const ProfileUserName = styled.span`
  font-family: 'GmarketSansMedium';
  color: #fca311;
  font-size: 1.2rem;
  font-weight: 600;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 2rem;
    font-weight: 600;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2.5rem;
  font-weight: 700;
    `};
`;

// 타겟 유저 프로필
export const TargetProfileInfo = styled.div`
  text-align: start;
  line-height: 1;

  ${({ theme }) => theme.mediaQuery.sm`
    line-height: 1.5;
    
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 54rem;
  line-height: 2;
    `};
`;
