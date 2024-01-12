import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSessionHandler, signoutHandler } from '../../../api/supabase.api';
import * as St from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<User | undefined>();

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setSession(result.session?.user);
  };

  const onClickSignoutHandler = async () => {
    const result = await signoutHandler();
    setSession(undefined);
    navigate('/');
  };

  useEffect(() => {
    getUserSession();
  }, []);

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
        {session === undefined ? (
          <St.HeaderBtn
            onClick={() => {
              navigate('/login');
            }}>
            로그인
          </St.HeaderBtn>
        ) : (
          <>
            <St.HeaderBtn
              onClick={() => {
                navigate(`/profile/${session.id}`);
              }}>
              <img src={session?.user_metadata.user_img} />
            </St.HeaderBtn>
            <St.HeaderBtn onClick={onClickSignoutHandler}>로그아웃</St.HeaderBtn>
          </>
        )}
      </St.HeaderUl>
    </St.Container>
  );
};

export default Header;
