import styled from 'styled-components';

//전체 컨테이너
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 25rem;

  @media (max-width: 768px) {
    margin-left: 4rem;
  }
`;

export const FormAndImageSlideWrapper = styled.div`
  // background-color: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr; // 두 열로 나눕니다
  width: 150rem;
  height: 100vh; // 전체 뷰포트 높이를 차지하도록 설정합니다 (선택 사항)
  gap: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 작은 화면에서는 열을 쌓습니다
    width: 50rem;
    height: 80rem;
    display: flex;
  }
`;

//로그인 컨테이너
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; // 왼쪽 정렬 */
  padding: 2rem;
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과
  width: 40rem; // 너비 설정
  border-radius: 4px; // 모서리 둥글게
  font-size: 1.5rem;
  margin-left: 2rem;
  @media (max-width: 768px) {
  }
`;

// 제목 스타일
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem; // 제목 아래 여백
  color: #333; // 색상 설정
`;

// 레이블과 인풋을 감싸는 컨테이너
export const InputGroup = styled.div`
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
  width: 100%;
  padding: 0.8rem;
  border: none;
  background-color: #000; // 버튼 색상
  color: white;
  border-radius: 2rem;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; // 호버 색상
  }
`;

export const SignUpLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  cursor: pointer;
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

export const SnsLogo = styled.img`
  width: 4rem;
  margin-left: 1rem;
`;

export const SocialLoginBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
