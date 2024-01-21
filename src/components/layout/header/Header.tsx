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
      <St.Wrapper>
        <St.ImageWrapper
          onClick={() => {
            navigate('/');
          }}>
          <St.Image src="/images/common/logo.png" />
        </St.ImageWrapper>
        <St.HeaderUl>
          <St.HeaderLiBox>
            <St.HeaderLi>
              <a href="/bookertalk">북커톡</a>
            </St.HeaderLi>
            <St.HeaderLi>
              <a href="/aboutbooks">도서소개</a>
            </St.HeaderLi>
            <St.HeaderLi>
              <a href="/survey">맞춤추천</a>
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
                <St.HeaderUserImage
                  src={
                    auth.session.user.user_metadata.user_img ||
                    auth.session.user.user_metadata.avatar_url ||
                    `${process.env.PUBLIC_URL}/images/header/profileImg.png`
                  }
                  alt="유저 프로필 이미지"
                />
              </St.HeaderBtn>
              <St.HeaderBtn onClick={onClickSignoutHandler}>
                <St.Image src="/images/header/profileIcon.png" />
              </St.HeaderBtn>
            </>
          ) : (
            <St.LoginBtn
              onClick={() => {
                navigate('/login');
              }}>
              로그인
            </St.LoginBtn>
          )}
        </St.HeaderUl>
      </St.Wrapper>
    </St.Container>
  );
};

export default Header;
