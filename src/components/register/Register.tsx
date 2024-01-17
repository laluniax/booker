import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupHandler } from '../../api/supabase.api';

const Form = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [password, setPassword] = useState('');
  const nicknameRef = useRef<HTMLInputElement | null>(null);
  const navigation = useNavigate();

  const SignUpHandler = async () => {
    try {
      const result = await signupHandler(emailRef.current?.value || '', password, nicknameRef.current?.value || '');
      if (result.error) {
        console.error('회원가입 중 오류 발생:', result.error);
        return;
      }

      // 테이블에 회원가입 데이터
      // await supabase.from('users').upsert([
      //   {
      //     id: data.user?.id,
      //     email: emailRef.current?.value || '',
      //     nickname: nicknameRef.current?.value || '',
      //   },
      // ]);

      console.log('회원가입 성공:', result.data);
      alert('회원가입 완료');
      navigation('/login');
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input type="email" ref={emailRef} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>Nickname:</label>
      <input type="text" ref={nicknameRef} />
      <button onClick={SignUpHandler}>Sign Up</button>
    </div>
  );
};

export default Form;
