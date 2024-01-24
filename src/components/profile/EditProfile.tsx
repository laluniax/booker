import { Session } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteUserImgHandler,
  getPublicUrlHandler,
  getUserDataHandler,
  getUserSessionHandler,
  updateUserAuthNicknameHandler,
  updateUserAuthUserImgHandler,
  updateUserIntroTextHandler,
  uploadUserImgHandler,
} from '../../api/supabase.api';
import { Tables } from '../../types/types';
import * as St from './Tab.styled';

const EditProfile = () => {
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [tempImg, setTempImg] = useState(''); // 화면에서 보여줄 이미지
  const [uploadFile, setUploadFile] = useState<File>(); // 실제로 업로드 할 파일
  const [nickname, setNickname] = useState('');
  const [introText, setIntroText] = useState('');

  const params = useParams().id;
  const imgRef = useRef<HTMLInputElement>(null);

  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    const session = await getUserSessionHandler();
    const newFollowId = params + '-' + userSession?.user.id;
    console.log(result);
    setUserData(result[0]);
    setNickname(result[0].nickname);
    setTempImg(result[0].user_img);
    setUserSession(session.session);
    setIntroText(result[0].intro_text);
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
    alert('프로필 이미지는 우측의 완료 버튼을 눌러야 저장됩니다.');
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

  const onClickImgUpdate = async () => {
    if (uploadFile) {
      await updateUserImg();
      alert('프로필 이미지 변경이 완료되었습니다.');
    } else {
      alert('첨부된 이미지가 없습니다.');
      return;
    }
  };

  // 프로필 업데이트 함수
  const updateUserData = async () => {
    await updateUserAuthNicknameHandler(nickname);
    await updateUserIntroTextHandler(params as string, introText);
    alert('수정되었습니다.');
    getUserData();
  };

  useEffect(() => {
    getUserData();
  }, [params]);
  return (
    <St.ProfileEditWrapper>
      <St.ProfileImgEdit>
        <St.ProfileEditTitle>프로필 이미지</St.ProfileEditTitle>
        <St.ProfileImgUpload>
          <St.ProfileImg
            src={
              tempImg ||
              userSession?.user.user_metadata.avatar_url ||
              `${process.env.PUBLIC_URL}/images/header/profileImg.png`
            }
          />
          <St.ProfileImgUploadFile>
            <St.ProfileLabel htmlFor="imgInput">이미지 선택하기</St.ProfileLabel>
            <St.ProfileImgInput id="imgInput" type="file" accept="image/*" ref={imgRef} onChange={updateUserTempImg} />
            <St.ProfileImgUpdate onClick={onClickImgUpdate}>완료</St.ProfileImgUpdate>
          </St.ProfileImgUploadFile>
        </St.ProfileImgUpload>
      </St.ProfileImgEdit>
      <St.ProfileNicknameEdit>
        <St.ProfileEditTitle>닉네임</St.ProfileEditTitle>
        <St.ProfileNicknameEditValidation>
          <St.ProfileNicknameInput
            type="text"
            maxLength={10}
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <St.ProfileNicknameValidation>닉네임 중복확인</St.ProfileNicknameValidation>
        </St.ProfileNicknameEditValidation>
      </St.ProfileNicknameEdit>
      <St.ProfileIntroTextEdit>
        <St.ProfileEditTitle>한 줄 소개</St.ProfileEditTitle>
        <St.ProfileIntroTextArea value={introText} onChange={(e) => setIntroText(e.target.value)} />
      </St.ProfileIntroTextEdit>
      <St.ProfileBtnDiv>
        <St.ProfileBtn onClick={updateUserData}>프로필 수정완료</St.ProfileBtn>
      </St.ProfileBtnDiv>
    </St.ProfileEditWrapper>
  );
};

export default EditProfile;
