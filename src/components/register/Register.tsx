import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nicknameValidationHandler, signupHandler, supabase } from '../../api/Supabase.api';
import * as St from './Register.style';

const Form = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repasswordRef = useRef<HTMLInputElement | null>(null);
  const nicknameRef = useRef<HTMLInputElement | null>(null);
  const navigation = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repasswordError, setRepasswordError] = useState(''); // 비밀번호 재확인 에러 메시지 상태 추가
  const [nicknameError, setNicknameError] = useState(''); // 비밀번호 재확인 에러 메시지 상태 추가
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isRepasswordValid, setIsRepasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  // 로그인 창으로 이동
  const moveToSignInHandler = () => {
    navigate('/login');
  };

  // 이메일 유효성 검사 함수
  const validateEmail = (email: string): boolean => {
    if (email.trim() === '') {
      setEmailError('');
      return false;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('유효하지 않은 이메일 형식입니다');
      setIsEmailValid(false);
      return false;
    }
    setEmailError('');
    setIsEmailValid(true);
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
      setPasswordError('유효한 비밀번호입니다'); // 성공 메시지
      setIsPasswordValid(true);
    }
  };

  // 엔터 키 이벤트 핸들러
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      SignUpHandler();
    }
  };

  // 비밀번호 재확인 유효성 검사 함수
  const validateRepassword = () => {
    const password = passwordRef.current?.value || '';
    const repassword = repasswordRef.current?.value || '';
    if (repassword === '') {
      setRepasswordError('');
    } else if (password !== repassword) {
      setRepasswordError('비밀번호가 다릅니다');
    } else {
      setRepasswordError('비밀번호가 일치합니다'); // 성공 메시지
      setIsRepasswordValid(true);
    }
  };

  const checkEmail = async () => {
    const email = emailRef.current?.value || '';
    // 이메일 입력값이 비어있는지 확인
    if (email.trim() === '') {
      setEmailError('이메일을 입력해주세요');
      return;
    }
    // 이메일 형식 유효성 검사
    if (!validateEmail(email)) {
      return;
    }
    // 이메일 중복 검사
    const { data: emailData, error: emailError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .maybeSingle();
    // 오류 발생시
    if (emailError) {
      console.error('이메일 중복 검사 중 오류 발생:', emailError);
      setEmailError(emailError.message);
      return;
    }
    // 중복된 이메일이 있는 경우
    if (emailData) {
      setEmailError('중복된 이메일입니다');
      setIsEmailValid(false);
    } else {
      setEmailError('유효한 이메일입니다');
      setIsEmailValid(true);
    }
  };

  // 닉네임 유효성 검사 및 중복 검사
  const checkNickName = async () => {
    const nickname = nicknameRef.current?.value || '';
    if (nickname.trim() === '') {
      // 닉네임 입력을 확인
      setNicknameError('닉네임을 입력해주세요');
      return;
    }
    // 닉네임 중복 검사
    const result = await nicknameValidationHandler(nickname);
    if (result.error) {
      console.error('닉네임 중복 검사 중 오류 발생:', nicknameError);
      setNicknameError('오류가 발생했습니다. 다시 시도해주세요.');
      return;
    }
    if (result.data) {
      setNicknameError('중복된 닉네임입니다');
      setIsNicknameValid(false);
    } else {
      setNicknameError('유효한 닉네임입니다');
      setIsNicknameValid(true);
    }
  };

  const SignUpHandler = async () => {
    // 모든 유효성 검사가 통과되었는지 확인
    if (!isEmailValid || !isPasswordValid || !isRepasswordValid || !isNicknameValid) {
      alert('모든 입력란을 올바르게 채워주세요.');
      return;
    }
    try {
      const result = await signupHandler(
        emailRef.current?.value || '',
        passwordRef.current?.value || '',
        nicknameRef.current?.value || '',
      );
      if (result.error) {
        console.error('회원가입 중 오류 발생:', result.error);
        return;
      }
      alert('회원가입 완료');
      navigation('/login');
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
    }
  };

  return (
    <St.Container>
      <St.FormWrapper>
        <St.FormBox>
          <St.Title>회원가입</St.Title>
          <St.Label1>이메일</St.Label1>
          <St.EmailAndNickNameBox>
            <St.Input
              type="email"
              ref={emailRef}
              placeholder="이메일"
              onChange={() => validateEmail(emailRef.current?.value || '')}
              onKeyDown={handleKeyPress}
            />
            <St.Button onClick={checkEmail}>중복확인</St.Button>
          </St.EmailAndNickNameBox>
          {emailError &&
            (emailError.startsWith('유효한') ? (
              <St.SuccessText>{emailError}</St.SuccessText>
            ) : (
              <St.ErrorText>{emailError}</St.ErrorText>
            ))}
          <St.Label>비밀번호</St.Label>
          <St.Input
            type="password"
            ref={passwordRef}
            placeholder="비밀번호"
            onChange={() => validatePassword(passwordRef.current?.value || '')}
            onKeyDown={handleKeyPress}
          />
          {passwordError &&
            (passwordError.startsWith('유효한') ? (
              <St.SuccessText>{passwordError}</St.SuccessText>
            ) : (
              <St.ErrorText>{passwordError}</St.ErrorText>
            ))}
          <br />
          <St.Label>비밀번호 재확인</St.Label>
          <St.Input
            type="password"
            ref={repasswordRef}
            placeholder="비밀번호 재확인"
            onChange={validateRepassword}
            onKeyDown={handleKeyPress}
          />
          {repasswordError &&
            (repasswordError.startsWith('비밀번호가 일치') ? (
              <St.SuccessText>{repasswordError}</St.SuccessText>
            ) : (
              <St.ErrorText>{repasswordError}</St.ErrorText>
            ))}
          <br />
          <br />
          <St.Label1>닉네임</St.Label1>
          <St.EmailAndNickNameBox>
            <St.Input type="text" ref={nicknameRef} placeholder="닉네임" />
            <St.Button onClick={checkNickName}>중복확인</St.Button>
          </St.EmailAndNickNameBox>
          {nicknameError &&
            (nicknameError.startsWith('유효한') ? (
              <St.SuccessText>{nicknameError}</St.SuccessText>
            ) : (
              <St.ErrorText>{nicknameError}</St.ErrorText>
            ))}
          <br />
          <hr />
          <St.RegisterButtonBox>
            <St.RegisterButton onClick={SignUpHandler}>가입하기</St.RegisterButton>
            <St.SignInLink onClick={moveToSignInHandler}>이미 회원이신가요?</St.SignInLink>
          </St.RegisterButtonBox>
        </St.FormBox>
      </St.FormWrapper>
    </St.Container>
  );
};

export default Form;
