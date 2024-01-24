// Register.style.ts
import styled from 'styled-components';

export const Container = styled.div`
  height: 80rem;

  @media (max-width: 768px) {
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 65rem;
  min-width: 50rem;
  height: 84rem;
  margin: 50px auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.6rem;

  @media (max-width: 768px) {
  }
`;
export const FormBox = styled.div`
  margin-left: 2rem;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 1rem;
`;

export const Label1 = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 2rem;
  margin-top: 2.3rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 70%;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  font-size: 2rem;
`;

export const Button = styled.button`
  width: 15%;
  padding: 10px;
  color: #000;
  font-size: 1.8rem;
  border: 1px solid #000;
  border-radius: 1rem;
  background-color: #fff;
  margin-top: 1rem;

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
  background-color: #000;
  color: #fff;
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
