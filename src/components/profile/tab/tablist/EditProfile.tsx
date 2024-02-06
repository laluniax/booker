import { Session } from '@supabase/supabase-js';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteUserImgHandler,
  getPublicUrlHandler,
  getUserDataHandler,
  getUserSessionHandler,
  nicknameValidationHandler,
  updateUserAuthNicknameHandler,
  updateUserAuthUserImgHandler,
  updateUserIntroTextHandler,
  uploadUserImgHandler,
} from '../../../../api/Supabase.api';
import { Tables } from '../../../../api/Supabase.type';
import profileImage from '../../../../assets/profile/defaultprofileimage.webp';
import * as St from './EditProfile.styled';

const EditProfile = () => {
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<Tables<'users'>>();
  const [tempImg, setTempImg] = useState(''); // 화면에서 보여줄 이미지
  const [uploadFile, setUploadFile] = useState<File>(); // 실제로 업로드 할 파일
  const [nickname, setNickname] = useState('');
  const [nicknameValidation, setNicknameValidation] = useState(true);
  const [validationText, setValidationText] = useState(false);
  const [introText, setIntroText] = useState('');
  const params = useParams().id;
  const imgRef = useRef<HTMLInputElement>(null);
  const getUserData = async () => {
    const result = await getUserDataHandler(params as string);
    const session = await getUserSessionHandler();
    setNickname(result[0].nickname);
    setTempImg(result[0].user_img);
    setUserData(result[0]);
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
      console.error(error);
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

  // 닉네임 유효성(중복검사) 함수
  const onClickNicknameValidation = async () => {
    const result = await nicknameValidationHandler(nickname);
    // 닉네임 중복 검사
    if (result.error) {
      console.error('닉네임 중복 검사 중 오류 발생:', result.error);
      return;
    }
    if (result.data) {
      alert('중복된 닉네임입니다');
      setNicknameValidation(false);
    } else {
      setNicknameValidation(true);
    }
    setValidationText(true);
  };

  // 프로필 업데이트 함수
  const updateUserData = async () => {
    await updateUserAuthNicknameHandler(nickname);
    await updateUserIntroTextHandler(params as string, introText);
    alert('수정되었습니다.');
    getUserData();
    setValidationText(false);
  };

  // 프로펠 업데이트 유효성 검사
  const onClickUpdateUserData = () => {
    if (!validationText) {
      if (userData?.nickname === nickname) {
        if (userData?.intro_text === introText) {
          alert('변경내용이 없습니다.');
          return;
        }
        updateUserData();
      } else {
        alert('닉네임 중복검사를 완료해주세요.');
      }
    } else {
      if (nicknameValidation) {
        updateUserData();
      } else {
        alert('프로필 변경이 불가능합니다.');
        return;
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, [params]);
  return (
    <St.ProfileEditWrapper>
      <St.ProfileBtnDiv>
        <St.ProfileBtn onClick={onClickUpdateUserData}>프로필 수정완료</St.ProfileBtn>
      </St.ProfileBtnDiv>
      <St.ProfileImgEdit>
        <St.ProfileEditTitle>프로필 이미지</St.ProfileEditTitle>
        <St.ProfileImgEditBox>
          <St.ProfileImgBox>
            <St.ProfileImg src={tempImg || userSession?.user.user_metadata.avatar_url || profileImage} loading="lazy" />{' '}
            <St.ProfileImgUploadFile>
              <St.ProfileLabelBox>
                <St.ProfileLabel htmlFor="imgInput">이미지 선택하기</St.ProfileLabel>
                <St.ProfileImgInput
                  id="imgInput"
                  type="file"
                  accept="image/*"
                  ref={imgRef}
                  onChange={updateUserTempImg}
                />
              </St.ProfileLabelBox>
              <St.ProfileImgUpdate onClick={onClickImgUpdate}>완료</St.ProfileImgUpdate>
            </St.ProfileImgUploadFile>
          </St.ProfileImgBox>
        </St.ProfileImgEditBox>
      </St.ProfileImgEdit>
      <St.ProfileNicknameEdit>
        <St.ProfileEditTitle>닉네임</St.ProfileEditTitle>
        <St.ProfileNicknameEditValidation>
          <St.ProfileEditBox>
            <St.ProfileNicknameInput
              type="text"
              maxLength={10}
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <St.ProfileNicknameLength>{nickname.length}/10</St.ProfileNicknameLength>
            {validationText ? (
              <>
                {nicknameValidation ? (
                  <St.NicknameValidationTextCorrect>사용가능한 닉네임입니다.</St.NicknameValidationTextCorrect>
                ) : (
                  <St.NicknameValidationTextError>중복된 닉네임입니다.</St.NicknameValidationTextError>
                )}
              </>
            ) : null}
          </St.ProfileEditBox>
          <St.ProfileNicknameValidation onClick={onClickNicknameValidation}>
            닉네임 중복확인
          </St.ProfileNicknameValidation>
        </St.ProfileNicknameEditValidation>
      </St.ProfileNicknameEdit>
      <St.ProfileIntroTextEdit>
        <St.ProfileEditTitle>한 줄 소개</St.ProfileEditTitle>
        <St.ProfileIntroTextWrapper>
          <St.ProfileIntroTextArea value={introText} onChange={(e) => setIntroText(e.target.value)} maxLength={80} />
          <St.ProfileNicknameLength>{introText.length}/80</St.ProfileNicknameLength>
        </St.ProfileIntroTextWrapper>
      </St.ProfileIntroTextEdit>
    </St.ProfileEditWrapper>
  );
};

export default EditProfile;
