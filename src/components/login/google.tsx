import { googleLoginHandler } from '../../api/supabase.api';

export const GoogleLogin = async () => {
  const result = await googleLoginHandler();

  if (result.error) {
    console.error('에러가 발견되었습니다', result.error);
  } else if (result.data) {
    alert('구글 로그인 창으로 이동합니다');
  }
};

export const GoogleLoginBtn = () => {
  return <img width="35px" src="/images/snslogo/googleLogo.png" alt="googleLogo" onClick={GoogleLogin} />;
};
