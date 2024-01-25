import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signoutHandler } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './Header.styled';
import SearchArea from './SearchArea';

const Header = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <St.HeaderLogo />
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
          {auth.session ? (
            <St.HeaderBtn onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <St.ProfileIconImage />
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
        </St.HeaderUl>
      </St.Wrapper>
    </St.Container>
  );
};

export default Header;
