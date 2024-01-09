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
  };

  useEffect(() => {
    getUserSession();
  }, []);

  return (
    <St.Container>
      <div>로고</div>

      <div
        onClick={() => {
          navigate('/');
        }}>
        Home
      </div>
      <div
        onClick={() => {
          navigate('/bookertalk');
        }}>
        bookertalk
      </div>
      <div
        onClick={() => {
          navigate('/market');
        }}>
        market
      </div>
      <div
        onClick={() => {
          navigate('/aboutbooks');
        }}>
        AboutBooks
      </div>
      <St.NavbarWrapper>
        <span>서치</span>
        {session === undefined ? (
          <>
            {' '}
            <button
              onClick={() => {
                navigate('/login');
              }}>
              로그인
            </button>
            <button
              onClick={() => {
                navigate('/register');
              }}>
              회원가입
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                navigate('/profile');
              }}>
              <St.ProfileImg src={session.user_metadata.user_img} />
            </button>

            <button onClick={onClickSignoutHandler}>로그아웃</button>
          </>
        )}
      </St.NavbarWrapper>
    </St.Container>
  );
};

export default Header;
