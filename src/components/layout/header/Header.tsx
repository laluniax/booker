import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSessionHandler, signoutHandler } from '../../../api/Supabase.api';
import logo from '../../../assets/common/logo.webp';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './Header.styled';
import SearchArea from './SearchArea';

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nickname, setNickname] = useState('');

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
        <St.ImageWrapper
          onClick={() => {
            navigate('/');
          }}>
          <img src={logo} />
        </St.ImageWrapper>
        <St.HeaderUl>
          <St.HeaderLi>
            <a href="/bookertalk">북커톡</a>
          </St.HeaderLi>
          <St.HeaderLi>
            <a href="/aboutbook/bestseller">도서소개</a>
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
