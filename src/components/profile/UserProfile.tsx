import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteUserImgHandler,
  getPublicUrlHandler,
  getUserDataHandler,
  getUserSessionHandler,
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

  const [userSession, setUserSession] = useState<string | undefined>('');
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [editing, setEditing] = useState(false);
  const [nickname, setNickname] = useState('');
  const [tempImg, setTempImg] = useState(''); // 화면에서 보여줄 이미지
  const [uploadFile, setUploadFile] = useState<File>(); // 실제로 업로드 할 파일

  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    const session = await getUserSessionHandler();
    setUserData(result[0]);
    setNickname(result[0].nickname);
    setTempImg(result[0].user_img);
    setUserSession(session.session?.user.id);
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
      console.log(url);
      await updateUserAuthUserImgHandler(url.publicUrl);
      // console.log(url);
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

  useEffect(() => {
    getUserData();
  }, [params]);

  return (
    <St.Container>
      <St.Title>마이페이지</St.Title>
      <St.ProfileWrapper>
        <St.ProfileImg src={tempImg} />
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
              {userSession === params ? (
                <>
                  <St.ProfileNickname>안녕하세요! {nickname}님</St.ProfileNickname>
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
