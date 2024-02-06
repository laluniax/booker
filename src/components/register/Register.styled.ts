import styled from 'styled-components';

export const Container = styled.div`
  height: 40rem;

  ${({ theme }) => theme.mediaQuery.sm`
  height: 85rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  height: 85rem;
  `};
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 65rem;
  min-width: 30rem;
  height: auto;
  margin: 50px auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.6rem;

  ${({ theme }) => theme.mediaQuery.lg`
  height: auto;
  `};
`;
export const FormBox = styled.div`
  margin-left: 2rem;

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 59rem;
  height: auto;
  `};
`;

export const Title = styled.h2`
  font-family: 'GmarketSansMedium';
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 1rem;
`;

export const Label1 = styled.label`
  font-family: 'GmarketSansMedium';
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-family: 'GmarketSansMedium';
  display: block;
  margin-bottom: 2rem;
  margin-top: 2.3rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const EmailAndNickNameBox = styled.div`
  width: 100%;
  padding-right: 1rem;
`;

export const Input = styled.input`
  font-family: 'GmarketSansMedium';
  width: 65%;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  font-size: 1.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 70%;
  font-size: 1.7rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 70%;
  font-size: 2rem;
  `};
`;

export const Button = styled.button`
  all: unset;
  text-align: center;
  margin-left: 0.2rem;
  font-family: 'GmarketSansMedium';
  color: #000;
  width: 7rem;
  height: 4rem;
  font-size: 1.4rem;
  border-radius: 2rem;
  color: #fca311;
  background-color: #14213d;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 14%;
  font-size: 1.8rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 17%;
  font-size: 1.8rem;
  `};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #333;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 1.6rem;
  margin-left: 2.5rem;
`;

export const SuccessText = styled.div`
  font-family: 'GmarketSansMedium';
  color: blue;
  margin-left: 2.5rem;
`;

export const RegisterButtonBox = styled.div`
  margin-top: 2rem;
  margin-right: 1rem;
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 4.4rem;
  padding: 10px;
  font-family: 'GmarketSansMedium';
  color: #fca311;
  background-color: #14213d;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px #333;
  }
`;

export const SignInLink = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  cursor: pointer;
  color: #4a90e2;
  font-size: 1.6rem;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;
