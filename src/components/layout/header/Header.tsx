import { useNavigate } from 'react-router-dom';
import { signoutHandler } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './Header.styled';
import SearchArea from './SearchArea';

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
        <St.Image src="/images/common/logo.png" />
      </div>
      <St.HeaderUl>
        <St.HeaderLiBox>
          <St.HeaderLi>
            <a href="/bookertalk">북커톡</a>
          </St.HeaderLi>
          <St.HeaderLi>
            <a href="/aboutbooks">도서소개</a>
          </St.HeaderLi>
          <St.HeaderLi>
            <a href="/survey">책 추천 받기</a>
          </St.HeaderLi>
          <St.HeaderLi>
            <a href="/market">중고거래</a>
          </St.HeaderLi>
          <St.HeaderLi>
            <a href="/indBookStores">독립서점</a>
          </St.HeaderLi>
        </St.HeaderLiBox>
      </St.HeaderUl>
      <St.HeaderUl>
        <SearchArea />
        {auth.session !== null ? (
          <>
            <St.HeaderBtn
              onClick={() => {
                navigate(`/profile/${auth.session?.user.id}`);
              }}>
              <img
                src={auth.session.user.user_metadata.user_img || `${process.env.PUBLIC_URL}/images/common/Logo.png`}
                alt="유저 프로필 이미지"
              />
            </St.HeaderBtn>
            <St.HeaderBtn onClick={onClickSignoutHandler}>
              <St.Image src="/images/header/profileIcon.png" />
            </St.HeaderBtn>
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
