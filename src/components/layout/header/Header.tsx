import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signoutHandler } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './Header.styled';

type StatePropsTypes = {
  searchKeyword: string;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
};

const Header = ({ searchKeyword, setSearchKeyword }: StatePropsTypes) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [searchBarOpen, setSearchBarOpen] = useState(false);

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
        <St.Image src="/images/logo.png" />
      </div>
      <St.HeaderUl>
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
      </St.HeaderUl>
      <St.HeaderUl>
        {searchBarOpen ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(searchKeyword);
            }}>
            <input
              type="text"
              value={searchKeyword}
              // 문자열 모든 공백 제거하여 input 값으로 받아옴
              onChange={(e) => setSearchKeyword(e.target.value.replace(/(\s*)/g, ''))}
            />
          </form>
        ) : null}
        <St.HeaderBtn onClick={() => setSearchBarOpen(!searchBarOpen)}>
          <img src="/images/serchIcon.jpg" alt="serchIcon" style={{ width: '30px', height: '30px' }} />
        </St.HeaderBtn>
        {auth.session !== null ? (
          <>
            <St.HeaderBtn
              onClick={() => {
                navigate(`/profile/${auth.session?.user.id}`);
              }}>
              <img src={auth.session.user.user_metadata.user_img} alt="유저 프로필 이미지" />
            </St.HeaderBtn>
            <St.HeaderBtn onClick={onClickSignoutHandler}>
              {/* <St.Image src="/images/profileIcon.png" /> */}
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
