
import { googleLoginHandler } from '../../api/supabase.api';
import googleLogoPng from '../../styles/assets/googleLogo.png'

export const GoogleLogin = async () => {
  const result = await googleLoginHandler();

  if (result.error) {
    console.error('에러가 발견되었습니다', result.error);
  } else if (result.data) {
    alert('구글 로그인 창으로 이동합니다');
  }
};
// TODO//로그 아웃 기능.
// async function signOut() {
//     const { error } = await supabase.auth.signOut()
//   }
// TODO// 테이블 모든 요저
// select * from auth.users;

export const GoogleLoginBtn = () => {
  return (
 
      <img width="30px" src={googleLogoPng} alt="구글로고" onClick={GoogleLogin}/>

  );
};


