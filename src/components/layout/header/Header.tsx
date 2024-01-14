import { useNavigate } from 'react-router-dom';
import { signoutHandler } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const onClickSignoutHandler = async () => {
    await signoutHandler();
    navigate('/');
  };

  return (
    <St.Container>
      <div
        onClick={() => {
          navigate('/');
        }}>
        로고
      </div>

      <St.HeaderUl>
        <St.HeaderLi>
          <a href="/bookertalk">북커톡</a>
        </St.HeaderLi>
        <St.HeaderLi>
          <a href="/market">중고거래</a>
        </St.HeaderLi>
        <St.HeaderLi>
          <a href="/aboutbooks">도서소개</a>
        </St.HeaderLi>
        <St.HeaderLi>
          <a href="/survey">책 추천 받기</a>
        </St.HeaderLi>
      </St.HeaderUl>
      <St.HeaderUl>
        <St.HeaderBtn>서치</St.HeaderBtn>
        {auth.session !== null ? (
          <>
            <St.HeaderBtn
              onClick={() => {
                navigate(`/profile/${auth.session?.user.id}`);
              }}>
              <img src={auth.session.user.user_metadata.user_img} alt="유저 프로필 이미지" />
            </St.HeaderBtn>
            <St.HeaderBtn onClick={onClickSignoutHandler}>로그아웃</St.HeaderBtn>
          </>
        ) : (
          <St.HeaderBtn
            onClick={() => {
              navigate('/login');
            }}>
            로그인
          </St.HeaderBtn>
        )}
      </St.HeaderUl>
    </St.Container>
  );
};

export default Header;
