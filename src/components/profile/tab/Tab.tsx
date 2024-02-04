import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userSession } from '../../../state/atom/userSessionAtom';
import * as St from './Tab.styled';
import EditProfile from './tablist/EditProfile';
import FollowList from './tablist/FollowList';
import LikesList from './tablist/LikesList';
import PostsList from './tablist/PostsList';

const Tab = () => {
  const [active, setActive] = useState('1');

  const session = useRecoilValue(userSession);
  const params = useParams().id;

  useEffect(() => {
    setActive('1');
  }, [params]);

  return (
    <St.TabWrapper>
      <St.ProfileTab>
        <St.TabMenu
          onClick={() => {
            setActive('1');
          }}
          className={active === '1' ? 'active' : ''}>
          내가 쓴 글
        </St.TabMenu>
        <St.TabMenu
          onClick={() => {
            setActive('2');
          }}
          className={active === '2' ? 'active' : ''}>
          팔로우 목록
        </St.TabMenu>
        <St.TabMenu
          onClick={() => {
            setActive('3');
          }}
          className={active === '3' ? 'active' : ''}>
          좋아요한 글
        </St.TabMenu>
        {session?.id === params && (
          <St.TabMenu
            onClick={() => {
              setActive('4');
            }}
            className={active === '4' ? 'active' : ''}>
            프로필 수정하기
          </St.TabMenu>
        )}
      </St.ProfileTab>
      <St.ProfileContent>
        {active === '1' && <PostsList />}
        {active === '2' && <FollowList />}
        {active === '3' && <LikesList />}
        {active === '4' && <EditProfile />}
      </St.ProfileContent>
    </St.TabWrapper>
  );
};

export default Tab;
