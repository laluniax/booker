import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinHandler } from '../../api/supabase.api';
import * as St from './Form.stlye';
import ImageSlideshow from './MainImgSlide';
import { GithubLoginBtn } from './Github';
import { GoogleLoginBtn } from './Goolge';
// import { KakaoLoginBtn } from './kakao';

const Form = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  // const [password, setPassword] = useState('');
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 이메일 유효성 검사 함수
  const validateEmail = (email: string): boolean => {
    if (email.trim() === '') {
      setEmailError('이메일을 입력해주세요');
      return false
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
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (!regex.test(password)) {
      setPasswordError('비밀번호는 최소 8자 이상이며, 최소 하나의 문자와 하나의 숫자를 포함해야 합니다');
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

      console.log('result', result);

      //   const { data, error } = await supabase.auth.signInWithPassword({
      //     email: emailRef.current?.value || '',
      //     password: password,
      //   });

      if (result.error) {
        console.error('로그인중 오류 발생', result.error);
      } else {
        console.log('로그인 성공', result.data);
        // 로그인 성공 후 추가 작업 수행
        // alert('로그인완료');
        navigate('/');
      }
    } catch (error) {
      console.error('로그인중 오류 발생', error);
    }
  };

  return (
    <St.Container>
      <div>
        <ImageSlideshow />
      </div>
      <St.LoginContainer>
        <div>
          <St.InputGroup>
            <St.Input
              placeholder="이메일:"
              type="email"
              ref={emailRef}
              onBlur={() => validateEmail(emailRef.current?.value || '')}
              // . React에서 onBlur 이벤트는 사용자가 입력 필드를 입력하고 다른 부분을 클릭할 때, 즉 그 입력 필드에서 포커스가 벗어났을 때 호출됩니다
              onKeyDown={handleKeyPress} 
           />
            {emailError && <St.ErrorText>{emailError}</St.ErrorText>}
          </St.InputGroup>
          <St.InputGroup>
            <St.Input
              placeholder="비밀번호:"
              type="password"
              ref={passwordRef}
              onBlur={() => validatePassword(passwordRef.current?.value || '')}
              onKeyDown={handleKeyPress} 
            />
            {passwordError && <St.ErrorText>{passwordError}</St.ErrorText>}
          </St.InputGroup>
          <St.Button onClick={signInWithEmail}>로그인</St.Button>
        </div>

        <br />
        <St.SignUpLink onClick={moveToSignUpHandler}>회원가입</St.SignUpLink>
        <br />
        <div>
          <GoogleLoginBtn />
          <GithubLoginBtn />
          {/* <KakaoLoginBtn/> */}
        </div>
      </St.LoginContainer>
    </St.Container>
  );
};

export default Form;
