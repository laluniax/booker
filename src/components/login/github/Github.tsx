import { githubLoginHandler } from '../../../api/Supabase.api';
import * as St from '../Form.styled';

export const GithubLogin = async () => {
  const result = await githubLoginHandler();

  if (result.error) {
    console.error('에러가 발견되었습니다', result.error);
  } else if (result.data) {
    alert('깃허브 로그인 창으로 이동합니다');
  }
};

export const GithubLoginBtn = () => {
  return <St.GithubIcon onClick={GithubLogin} />;
};
