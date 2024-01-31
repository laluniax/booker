import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinHandler } from '../../api/supabase.api';
import * as St from './Form.styled';
import ImageSlideshow from './MainImgSlide';
import { GithubLoginBtn } from './github';
import { GoogleLoginBtn } from './google';

const Form = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 이메일 유효성 검사 함수
  const validateEmail = (email: string): boolean => {
    if (email.trim() === '') {
      setEmailError('');
      return false;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('유효하지 않은 이메일 형식입니다');
      return false;
    }
    setEmailError('');
    return true;
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:<>?])[A-Za-z\d!@#$%^&*()_+{}:<>?]{8,}$/;

    if (password === '') {
      setPasswordError('');
    } else if (!regex.test(password)) {
      setPasswordError(
        '비밀번호는 최소 8자 이상이며, 최소 하나의 문자와 하나의 숫자, 하나의 특수문자를 포함해야 합니다',
      );
    } else {
      setPasswordError(''); // 성공 메시지
    }
  };

  const moveToSignUpHandler = () => {
    navigate('/register');
  };

  // 엔터 키 이벤트 핸들러
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      signInWithEmail();
    }
  };

  //사용자 가입
  const signInWithEmail = async () => {
    try {
      const result = await signinHandler(emailRef.current?.value || '', passwordRef.current?.value || '');

      if (result.error) {
        console.error('로그인중 오류 발생', result.error);
      } else {
        console.log('로그인 성공', result.data);
        // 로그인 성공 후 추가 작업 수행
        navigate('/');
      }
    } catch (error) {
      console.error('로그인중 오류 발생', error);
    }
  };

  return (
    <St.Container>
      <St.FormAndImageSlideWrapper>
        <ImageSlideshow />
        <St.LoginContainer>
          <div>
            <St.Title>로그인</St.Title>
            <St.InputGroup>
              <St.Label>이메일</St.Label>
              <St.Input
                placeholder="이메일"
                type="email"
                ref={emailRef}
                onChange={() => validateEmail(emailRef.current?.value || '')}
                onKeyDown={handleKeyPress}
              />
              {emailError && <St.ErrorText>{emailError}</St.ErrorText>}
            </St.InputGroup>
            <br />
            <St.InputGroup>
              <St.Label>비밀번호</St.Label>
              <St.Input
                placeholder="비밀번호"
                type="password"
                ref={passwordRef}
                onChange={() => validatePassword(passwordRef.current?.value || '')}
                onKeyDown={handleKeyPress}
              />
              {passwordError && <St.ErrorText>{passwordError}</St.ErrorText>}
            </St.InputGroup>
            <St.Button onClick={signInWithEmail}>로그인</St.Button>
          </div>

          <br />
          <St.SignUpLink onClick={moveToSignUpHandler}>회원이 아니신가요?</St.SignUpLink>
          <br />
          <St.SocialLoginBtnBox>
            <GoogleLoginBtn />
            <GithubLoginBtn />
          </St.SocialLoginBtnBox>
        </St.LoginContainer>
      </St.FormAndImageSlideWrapper>
    </St.Container>
  );
};

export default Form;
