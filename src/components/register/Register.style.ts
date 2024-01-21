// Register.style.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  height: 70rem;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.6rem;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  width: 15%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 2rem;

  &:hover {
    background-color: #444;
  }
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
    background-color: #444;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

export const SuccessText = styled.div`
  color: blue;
  margin-bottom: 10px;
`;

export const SignInLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  cursor: pointer;
  color: #4a90e2;
  &:hover {
    text-decoration: underline;
  }
`;
