import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  followHandler,
  followIdListHandler,
  getUserDataHandler,
  getUserSessionHandler,
  unFollowHandler,
} from '../../api/supabase.api';
import profileImage from '../../assets/profile/defaultprofileimage.webp';
import { Tables } from '../../types/types';
import Tab from './Tab';
import * as St from './UserProfile.styled';

const UserProfile = () => {
  const params = useParams().id;

  const [userSession, setUserSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [nickname, setNickname] = useState('');
  const [followId, setFollowId] = useState('');
  const [following, setFollowing] = useState(false); // 팔로잉:거짓 이 기본

  const navigate = useNavigate();

  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    const session = await getUserSessionHandler();
    const newFollowId = params + '-' + userSession?.user.id;
    setUserData(result[0]);
    setNickname(result[0].nickname);
    setUserSession(session.session);
    setFollowId(newFollowId);
  };

  // 팔로우/언팔로우 판단하기
  const followIdList = async () => {
    const result = await followIdListHandler();
    const filteredResult = result.filter((item) => {
      return item.follow_id === followId;
    });
    if (filteredResult.length > 0) setFollowing(true);
    else setFollowing(false);
  };
  // 팔로우하기
  const onClickFollowBtn = async () => {
    if (!userSession) {
      if (window.confirm('로그인 페이지로 이동하시겠습니까?')) {
        navigate(`/login`);
        return;
      } else return;
    } else {
      const result = await followHandler(followId, params as string, userSession?.user.id as string);
      followIdList();
    }
  };
  // 언팔로우하기
  const onClickUnfollowBtn = async () => {
    const result = await unFollowHandler(followId);
    followIdList();
  };

  useEffect(() => {
    getUserData();
  }, [params]);
  useEffect(() => {
    followIdList();
  }, [followId]);

  return (
    <St.Container>
      <St.Title>프로필</St.Title>
      <St.ProfileWrapper>
        <St.ProfileImg src={userData?.user_img || profileImage} />
        {userSession?.user.id === params ? (
          // 마이 프로필
          <St.ProfileInfo>
            <St.ProfileNicknameEmail>
              <St.ProfileNickname>
                안녕하세요! {nickname || userSession?.user.user_metadata.preferred_username}님
              </St.ProfileNickname>
              <St.ProfileEmail>{userData?.email}</St.ProfileEmail>
              <St.ProfileIntroText>{userData?.intro_text}</St.ProfileIntroText>
            </St.ProfileNicknameEmail>
          </St.ProfileInfo>
        ) : (
          // 타겟 유저 프로필
          <St.ProfileInfo>
            <St.ProfileNickname>{nickname}</St.ProfileNickname>
            <St.ProfileEmail>{userData?.email}</St.ProfileEmail>
            <St.ProfileIntroText>{userData?.intro_text}</St.ProfileIntroText>
            {following ? (
              <St.ProfileBtn onClick={onClickUnfollowBtn}>언팔로우</St.ProfileBtn>
            ) : (
              <St.ProfileBtn onClick={onClickFollowBtn}>팔로우</St.ProfileBtn>
            )}{' '}
          </St.ProfileInfo>
        )}
      </St.ProfileWrapper>
      <Tab userSession={userSession} userData={userData} />
    </St.Container>
  );
};

export default UserProfile;
