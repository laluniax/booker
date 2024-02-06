import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { signoutHandler } from '../../../api/Supabase.api';
import logo from '../../../assets/common/logo.webp';
import { userSession } from '../../../state/atom/userSessionAtom';
import * as St from './Header.styled';
import SearchArea from './SearchArea';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  const [session, setSession] = useRecoilState(userSession);

  const navigate = useNavigate();

  const onClickSignoutHandler = async () => {
    await signoutHandler();
    setSession(undefined);
    navigate('/');
  };

  const bookertalkRegex = /^\/bookertalk/;
  const detailRegex = /^\/detail\/[^/]+$/;
  const marketRegex = /^\/market/;
  const productRegex = /^\/product\/[^/]+$/;
  const marketPostRegex = /^\/marketpost/;
  const aboutbookRegex = /^\/aboutbook/;
  const surveyRegex = /^\/survey/;

  useEffect(() => {
    setActiveTab(window.location.pathname);
    // const LocationChangehandler = () => {
    //   setActiveTab(window.location.pathname);
    // };

    // // URL이 변경될 때마다 handleLocationChange를 호출합니다.
    // window.addEventListener('popstate', LocationChangehandler);

    // return () => {
    //   window.removeEventListener('popstate', LocationChangehandler);
    // };
  }, [window.location.pathname]);

  useEffect(() => {
    setNickname(
      session?.user_metadata.full_name ||
        session?.user_metadata.preferred_name ||
        session?.user_metadata.user_name ||
        session?.user_metadata.name,
    );
  }, [session]);

  return (
    <St.Container>
      <St.Wrapper>
        <St.ImageWrapper
          onClick={() => {
            setActiveTab('/');
            setIsDropdownOpen(false);
            navigate('/');
          }}>
          <img src={logo} alt="logo" loading="lazy" />
        </St.ImageWrapper>
        <St.HeaderUl>
          {/* <St.HeaderLiBox> */}
          <St.HeaderLi $isActive={bookertalkRegex.test(activeTab) || detailRegex.test(activeTab)}>
            <a href="/bookertalk" onClick={() => setActiveTab('/bookertalk')}>
              북커톡
            </a>
          </St.HeaderLi>
          <St.HeaderLi $isActive={aboutbookRegex.test(activeTab)}>
            <a href="/aboutbook/bestseller" onClick={() => setActiveTab('/aboutbook/bestseller')}>
              도서소개
            </a>
          </St.HeaderLi>
          <St.HeaderLi $isActive={surveyRegex.test(activeTab)}>
            <a href="/survey" onClick={() => setActiveTab('/survey')}>
              맞춤추천
            </a>
          </St.HeaderLi>
          <St.HeaderLi
            $isActive={marketRegex.test(activeTab) || marketPostRegex.test(activeTab) || productRegex.test(activeTab)}>
            <a href="/market" onClick={() => setActiveTab('/market')}>
              중고거래
            </a>
          </St.HeaderLi>
          <St.HeaderLi $isActive={activeTab === '/indBookStores'}>
            <a href="/indBookStores" onClick={() => setActiveTab('/indBookStores')}>
              독립서점
            </a>
          </St.HeaderLi>
        </St.HeaderUl>
        <St.HeaderSearchMypage>
          <SearchArea />

          {session ? (
            <St.HeaderBtn onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <St.ProfileIconImage />
              <St.NickNameAndIconBox>
                {nickname ? <St.NickName>{nickname} 님</St.NickName> : null}
              </St.NickNameAndIconBox>
              {isDropdownOpen && (
                <St.Dropdown>
                  <St.DropdownItem onClick={() => navigate(`/profile/${session?.id}`)}>마이페이지</St.DropdownItem>
                  <St.DropdownItem onClick={onClickSignoutHandler}>로그아웃</St.DropdownItem>
                </St.Dropdown>
              )}
            </St.HeaderBtn>
          ) : (
            <St.LoginBtn onClick={() => navigate('/login')}>
              <St.ProfileIconImage />
            </St.LoginBtn>
          )}
        </St.HeaderSearchMypage>
      </St.Wrapper>
    </St.Container>
  );
};

export default Header;
