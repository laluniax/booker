import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getUserDataHandler } from '../../api/Supabase.api';
import { Tables } from '../../api/Supabase.type';
import profileImage from '../../assets/profile/defaultprofileimage.webp';
import { useUserDataQuery } from '../../hooks/users/useUserData';
import { userSession } from '../../state/atom/userSessionAtom';
import Follow from '../common/follow/Follow';
import * as St from './UserProfile.styled';
import Tab from './tab/Tab';

const UserProfile = () => {
  const params = useParams().id;
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [nickname, setNickname] = useState('');
  const session = useRecoilValue(userSession);

  const data = useUserDataQuery(params as string);

  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    setUserData(result[0]);
    setNickname(result[0].nickname);
  };

  useEffect(() => {
    getUserData();
  }, [params]);

  return (
    <St.Container>
      <St.Title>프로필</St.Title>
      <St.ProfileWrapper>
        <St.ProfileImg src={userData?.user_img || profileImage} />
        {session?.id === params ? (
          // 마이 프로필
          <St.ProfileInfo>
            <St.ProfileNicknameEmail>
              <St.ProfileNickname>
                안녕하세요!{' '}
                <St.ProfileUserName>{nickname || session?.user_metadata.preferred_username}</St.ProfileUserName>님
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
      <Tab />
    </St.Container>
  );
};

export default UserProfile;
