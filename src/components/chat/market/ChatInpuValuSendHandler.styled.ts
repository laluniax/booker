import styled from 'styled-components';

// 입력 필드 및 전송 버튼
export const InputField = styled.input`
  all: unset;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 1rem;
  border-bottom: 0.1rem solid #000;
  margin-right: 1rem;
  padding: 0.2rem;
  height: 3rem;
  font-size: 1.5rem;

  ::placeholder {
    font-size: 1.5rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  margin-right: 1rem;
  padding: 0.2rem;
  height: 4rem;
  font-size: 1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-right: 1rem;
  padding: 0.2rem;
  height: 4rem;
  font-size: 1.5rem;
  `};
`;

export const SendButton = styled.button`
  background-color: #000;
  color: #fca311;
  border: none;
  cursor: pointer;
  height: 3.4rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #262626;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  height: 4.4rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 4.4rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  `};
`;
