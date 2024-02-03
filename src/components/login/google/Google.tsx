import { googleLoginHandler } from '../../../api/Supabase1.api';
import * as St from '../Form.styled';

export const GoogleLogin = async () => {
  const result = await googleLoginHandler();

  if (result.error) {
    console.error('에러가 발견되었습니다', result.error);
  } else if (result.data) {
    alert('구글 로그인 창으로 이동합니다');
  }
};

export const GoogleLoginBtn = () => {
  return <St.GoogleIcon onClick={GoogleLogin} />;
};
