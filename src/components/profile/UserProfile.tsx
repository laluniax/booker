import { Session } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteUserImgHandler,
  followHandler,
  followIdListHandler,
  getPublicUrlHandler,
  getUserDataHandler,
  getUserSessionHandler,
  unFollowHandler,
  updateUserAuthNicknameHandler,
  updateUserAuthUserImgHandler,
  uploadUserImgHandler,
} from '../../api/supabase.api';
import { Tables } from '../../types/types';
import Tab from './Tab';
import * as St from './UserProfile.styled';

const UserProfile = () => {
  const params = useParams().id;

  const imgRef = useRef<HTMLInputElement>(null);

  const [userSession, setUserSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [editing, setEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [tempImg, setTempImg] = useState(''); // 화면에서 보여줄 이미지
  const [uploadFile, setUploadFile] = useState<File>(); // 실제로 업로드 할 파일
  const [followId, setFollowId] = useState('');
  const [following, setFollowing] = useState(false); // 팔로잉:거짓 이 기본

  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    const session = await getUserSessionHandler();
    const newFollowId = params + '-' + userSession?.user.id;
    setUserData(result[0]);
    setNickname(result[0].nickname);
    setTempImg(result[0].user_img);
    setUserSession(session.session);
    setFollowId(newFollowId);
  };

  const updateUserTempImg = () => {
    const reader = new FileReader();
    if (imgRef.current && imgRef.current.files) {
      reader.readAsDataURL(imgRef.current?.files[0]);
      reader.onloadend = () => {
        setTempImg(reader.result as string);
      };
    }
    if (imgRef.current && imgRef.current.files) setUploadFile(imgRef.current?.files[0]);
  };
  const updateUserImg = async () => {
    try {
      await deleteUserImgHandler(params as string);
      await uploadUserImgHandler(params as string, uploadFile as File);
      // storage에서 링크 가져와서 auth meta_data에 넣어주기
      const url = getPublicUrlHandler(params as string);
      await updateUserAuthUserImgHandler(url.publicUrl);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUserData = async () => {
    await updateUserAuthNicknameHandler(nickname);
    // storage에 사진 삭제 후 업로드
    await updateUserImg();
    setEditing(false);
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
    const result = await followHandler(followId, params as string, userSession?.user.id as string);
    followIdList();
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
      <St.Title>마이페이지</St.Title>
      <St.ProfileWrapper>
        <St.ProfileImg
          src={
            tempImg ||
            userSession?.user.user_metadata.avatar_url ||
            `${process.env.PUBLIC_URL}/images/header/profileImg.png`
          }
        />
        <St.ProfileInfo>
          {editing ? (
            <>
              <St.ProfileNicknameInput
                type="text"
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
              <br />
              <St.ProfileLabel htmlFor="imgInput">이미지 업로드</St.ProfileLabel>
              <St.ProfileImgInput
                id="imgInput"
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={updateUserTempImg}
              />
              <br />
              <St.ProfileBtn onClick={updateUserData}>프로필 수정완료</St.ProfileBtn>
            </>
          ) : (
            <>
              {userSession?.user.id === params ? (
                <>
                  <St.ProfileNickname>
                    안녕하세요! {nickname || userSession?.user.user_metadata.preferred_username}님
                  </St.ProfileNickname>
                  <St.ProfileEmail>{userData?.email}</St.ProfileEmail>
                  <St.ProfileBtn
                    onClick={() => {
                      setEditing(true);
                    }}>
                    프로필 수정하기
                  </St.ProfileBtn>
                </>
              ) : (
                <>
                  <St.ProfileNickname>{nickname}</St.ProfileNickname>
                  <St.ProfileEmail>{userData?.email}</St.ProfileEmail>
                  {following ? (
                    <St.ProfileBtn onClick={onClickUnfollowBtn}>언팔로우</St.ProfileBtn>
                  ) : (
                    <St.ProfileBtn onClick={onClickFollowBtn}>팔로우</St.ProfileBtn>
                  )}
                </>
              )}
            </>
          )}
        </St.ProfileInfo>
      </St.ProfileWrapper>
      <Tab userSession={userSession} userData={userData} />
    </St.Container>
  );
};

export default UserProfile;
