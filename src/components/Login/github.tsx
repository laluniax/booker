import { githubLoginHandler } from '../../api/supabase.api';
import githubLogo from '../../styles/assets/githubLogo.png'


export const GithubLogin = async () => {
  const result = await githubLoginHandler();

  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //       provider: 'github',
  //   options: {
  //     queryParams: {
  //       // 사용자의 동의 없이도 장기간(오프라인)에 걸쳐 데이터에 액세스할 수 있도록 하는 옵션입니다.
  //       access_type: 'offline',
  //       // 사용자에게 동의를 강제로 요청하는데 사용됨
  //       prompt: 'consent',
  //     },
  //   },
  // });
  if (result.error) {
    console.error('에러가 발견되었습니다', result.error);
  } else if (result.data) {
    alert('깃허브 로그인 창으로 이동합니다');
  }
};
// TODO//로그 아웃 기능.
// async function signOut() {
//     const { error } = await supabase.auth.signOut()
//   }
// TODO// 테이블 모든 요저
// select * from auth.users;

export const GithubLoginBtn = () => {
  return (

      <img width="30px" src={githubLogo} alt="깃허브 로고" onClick={GithubLogin} />


  );
};
