import { useMutation } from 'react-query';
import {
  googleLoginHandler,
  kakaoLoginHandler,
  signinHandler,
  signoutHandler,
  signupHandler,
} from '../../api/Supabase.api';

export const useSigninQuery = () => {
  return useMutation((data: { email: string; password: string }) => signinHandler(data.email, data.password));
};

export const useSignupQuery = () => {
  return useMutation((data: { email: string; password: string; nickname: string }) =>
    signupHandler(data.email, data.password, data.nickname),
  );
};

export const useKakaoLoginQuery = () => {
  return useMutation(() => kakaoLoginHandler());
};

export const useGoogleLoginQuery = () => {
  return useMutation(() => googleLoginHandler());
};

export const useSignoutQuery = () => {
  return useMutation(() => signoutHandler());
};
