import styled from 'styled-components';
import githubIcon from '../../assets/snslogo/githublogo.webp';
import googleIcon from '../../assets/snslogo/googlelogo.webp';

//전체 컨테이너
export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  align-items: center;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  justify-content: center;
  margin-left: 25rem;
  `};
`;

export const FormAndImageSlideWrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; // 두 열로 나눕니다 */
  display: flex;
  width: 150rem;
  height: 100vh; // 전체 뷰포트 높이를 차지하도록 설정합니다 (선택 사항)
  gap: 6rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 작은 화면에서는 열을 쌓습니다
    width: 50rem;
    height: 80rem;
  }
`;

//로그인 컨테이너
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 40rem; // 너비 설정
  border-radius: 4px; // 모서리 둥글게
  font-size: 1.5rem;
  margin-left: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

// 제목 스타일
export const Title = styled.h2`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem; // 제목 아래 여백
  color: #333; // 색상 설정
`;

// 레이블과 인풋을 감싸는 컨테이너
export const InputGroup = styled.div`
  font-family: 'GmarketSansMedium';
  width: 100%;
  margin-bottom: 1rem;
`;

// 레이블 스타일
export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  font-weight: bold;
`;

// 인풋 스타일
export const Input = styled.input`
  font-family: 'GmarketSansMedium';
  padding: 0.3rem;
  width: 95%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
`;

// 버튼 스타일
export const Button = styled.button`
  font-family: 'GmarketSansMedium';
  width: 100%;
  height: 4rem;
  padding: 0.8rem;
  border: none;
  background-color: #14213d; // 버튼 색상
  color: white;
  border-radius: 2rem;
  font-size: 1.7rem;
  cursor: pointer;

  &:hover {
    background-color: #fca311; // 호버 색상
  }
`;

export const SignUpLink = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  cursor: pointer;
  padding-bottom: 1rem;
  color: #4a90e2;

  &:hover {
    text-decoration: underline;
  }
`;

// 에러 텍스트용 스타일 컴포넌트
export const ErrorText = styled.div`
  color: red;
  font-size: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const GithubIcon = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 1rem;
  background: url(${githubIcon});
  background-size: contain;
  cursor: pointer;
`;

export const GoogleIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: url(${googleIcon});
  background-size: contain;
  cursor: pointer;
`;

export const SocialLoginBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
