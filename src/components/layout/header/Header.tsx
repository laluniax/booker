import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSessionHandler, signoutHandler } from '../../../api/supabase.api';
import logo from '../../../assets/common/logo.webp';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './Header.styled';
import SearchArea from './SearchArea';

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [activeTab, setActiveTab] = useState(window.location.pathname);

  useEffect(() => {
    const LocationChangehandler = () => {
      setActiveTab(window.location.pathname);
    };

    // URL이 변경될 때마다 handleLocationChange를 호출합니다.
    window.addEventListener('popstate', LocationChangehandler);

    return () => {
      window.removeEventListener('popstate', LocationChangehandler);
    };
  }, []);

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setNickname(
      result.session?.user.user_metadata.full_name ||
        result.session?.user.user_metadata.preferred_name ||
        result.session?.user.user_metadata.user_name ||
        result.session?.user.user_metadata.name,
    );
  };

  const onClickSignoutHandler = async () => {
    await signoutHandler();
    navigate('/');
  };

  return (
    <St.Container>
      <St.Wrapper>
        {/* <St.SearchWrapper>
          <SearchArea />
        </St.SearchWrapper> */}
        <St.ImageWrapper
          onClick={() => {
            setActiveTab('/');
            navigate('/');
          }}>
          <img src={logo} />
          {/* <St.HeaderLogo /> */}
        </St.ImageWrapper>
        <St.HeaderUl>
          {/* <St.HeaderLiBox> */}
          <St.HeaderLi isActive={activeTab === '/bookertalk'}>
            <a href="/bookertalk" onClick={() => setActiveTab('/bookertalk')}>
              북커톡
            </a>
          </St.HeaderLi>
          <St.HeaderLi isActive={activeTab === '/aboutbook/bestseller'}>
            <a href="/aboutbook/bestseller" onClick={() => setActiveTab('/aboutbook/bestseller')}>
              도서소개
            </a>
          </St.HeaderLi>
          <St.HeaderLi isActive={activeTab === '/survey'}>
            <a href="/survey" onClick={() => setActiveTab('/survey')}>
              맞춤추천
            </a>
          </St.HeaderLi>
          <St.HeaderLi isActive={activeTab === '/market'}>
            <a href="/market" onClick={() => setActiveTab('/market')}>
              중고거래
            </a>
          </St.HeaderLi>
          <St.HeaderLi isActive={activeTab === '/indBookStores'}>
            <a href="/indBookStores" onClick={() => setActiveTab('/indBookStores')}>
              독립서점
            </a>
          </St.HeaderLi>
          {/* </St.HeaderLiBox> */}
        </St.HeaderUl>
        <St.HeaderSearchMypage>
          <SearchArea />

          {auth.session ? (
            <St.HeaderBtn onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <St.ProfileIconImage />
              <div>{nickname ? <span>{nickname}</span> : null}</div>
              {isDropdownOpen && (
                <St.Dropdown>
                  <St.DropdownItem onClick={() => navigate(`/profile/${auth.session?.user.id}`)}>
                    마이페이지
                  </St.DropdownItem>
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
