import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDataHandler, getUserSessionHandler } from '../../api/supabase.api';
import profileImage from '../../assets/profile/defaultprofileimage.webp';
import { Tables } from '../../types/types';
import Follow from '../common/follow/Follow';
import Tab from './Tab';
import * as St from './UserProfile.styled';

const UserProfile = () => {
  const params = useParams().id;

  const [userSession, setUserSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [nickname, setNickname] = useState('');

  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    const session = await getUserSessionHandler();
    // const newFollowId = params + '-' + userSession?.user.id;
    setUserData(result[0]);
    setNickname(result[0].nickname);
    setUserSession(session.session);
  };

  useEffect(() => {
    getUserData();
  }, [params]);

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
                안녕하세요!{' '}
                <St.ProfileUserName>
                  {nickname || userSession?.user.user_metadata.preferred_username}
                </St.ProfileUserName>
                님
              </St.ProfileNickname>
              <St.ProfileIntroText>{userData?.intro_text}</St.ProfileIntroText>
            </St.ProfileNicknameEmail>
          </St.ProfileInfo>
        ) : (
          // 타겟 유저 프로필
          <St.TargetProfileInfo>
            <St.ProfileNickname>{nickname}</St.ProfileNickname>
            <St.ProfileIntroText>{userData?.intro_text}</St.ProfileIntroText>
            {params && <Follow params={params} usage="userprofile" />}
          </St.TargetProfileInfo>
        )}
      </St.ProfileWrapper>
      <Tab userSession={userSession} userData={userData} />
    </St.Container>
  );
};

export default UserProfile;
