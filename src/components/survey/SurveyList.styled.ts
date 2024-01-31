import styled from 'styled-components';
import Icon from '../../assets/common/icon-_caret-right_.webp';

export const Container = styled.div`
  min-height: 77rem;
  max-width: 35rem;
  margin: 0 auto;
  margin-top: 5rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* padding-bottom: 10rem; */
  /* margin-bottom: 10rem; */
  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 15rem;
  max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;
export const TitleWrapper = styled.div``;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.8rem;
  border-bottom: 0.2rem solid black;
  max-width: 30rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  text-align: center;
  line-height: 1.5;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2.4rem;
  max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  max-width: 90rem;
  `};
`;

export const NickName = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fca311;
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 4rem;
  `};
`;

export const SurveyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  /* width: 90rem; */
  max-width: 40rem;
  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;

export const SurveyContentBox = styled.div`
  /* max-width: 30rem; */
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  border-bottom: 0.2rem solid transparent;
  &:hover {
    border-bottom: 0.2rem solid #14213d;
    cursor: pointer;
    transition: border-bottom 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
  /* ${({ theme }) => theme.mediaQuery.sm`
max-width: 70rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
max-width: 90rem;
  `}; */
`;

// export const IconAndButtonBox = styled.div`
//   display: flex;
//   gap: 0.3rem;
//   border-bottom: 0.2rem solid transparent;

//   &:hover {
//     border-bottom: 0.2rem solid #14213d;
//     cursor: pointer;
//     transition: border-bottom 0.2s;
//   }

//   &:not(:hover) {
//     transition: 0.2s;
//   }
// `;
export const Righticon = styled.div`
  background: url(${Icon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.6rem;
  height: 2.4rem;
  margin-top: 0.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 2rem;
    height: 3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const SurveyButton = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  color: #000;
  padding: 1rem;
  line-height: 1.5;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2.3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2.5rem;
  `};
`;
export const BreakPoint = styled.span`
  height: 0;
  ${({ theme }) => theme.mediaQuery.sm`
  display: none;
  `};
`;
