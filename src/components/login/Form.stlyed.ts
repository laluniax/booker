import styled from 'styled-components';

//전체 컨테이너
export const Container = styled.div`
  // background-color: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr; // 두 열로 나눕니다
  height: 100vh; // 전체 뷰포트 높이를 차지하도록 설정합니다 (선택 사항)
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 작은 화면에서는 열을 쌓습니다
  }
`;
//로그인 컨테이너
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // 왼쪽 정렬
  padding: 2rem;
  background-color: #fff; // 배경색은 흰색
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자 효과
  width: 400px; // 너비 설정
  margin-left: auto; // 자동 마진으로 오른쪽 정렬
  margin-right: 2rem; // 우측 여백
  border-radius: 4px; // 모서리 둥글게
`;

// 제목 스타일
export const Title = styled.h2`
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
  color: #666;
`;

// 인풋 스타일
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// 버튼 스타일
export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  background-color: #007bff; // 버튼 색상
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3; // 호버 색상
  }
`;

export const SignUpLink = styled.div`
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
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

export const SnsLogo = styled.img`
  width: 3rem;
`;
