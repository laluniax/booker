import styled from 'styled-components';

export const TabWrapper = styled.div`
  height: 100vh;
`;

export const ProfileTab = styled.div`
  width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: #bcbcbc;
  & div {
    padding: 1.5rem;
    width: 100%;
    text-align: center;
    border-bottom: 0.2rem solid #bcbcbc;
    cursor: pointer;
    &.active {
      border-bottom: 0.2rem solid black;
      color: black;
    }
  }
`;

export const TabMenu = styled.div``;

export const ProfileContent = styled.div`
  width: 80rem;
  margin: 0 auto;
`;

export const TabListTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 5rem 0 2rem 0;
`;

// 내가 쓴 글
export const PostWraapper = styled.div`
  height: 50rem;
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;
`;

export const PostTitle = styled.div``;

export const PostDate = styled.div``;

export const ProductWrapper = styled.div`
  height: 50rem;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;
`;
export const ProductTitlePrice = styled.div`
  width: 60rem;
  line-height: 2;
`;
export const ProductTitle = styled.div``;

export const ProductImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

export const ProductPrice = styled.div``;

export const ProductDate = styled.div`
  font-size: 1.3rem;
`;

// 팔로우 목록
export const FollowWrapper = styled.div`
  width: 50rem;
  margin: 0 auto;
  margin-top: 5rem;
`;

export const Follow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;
`;

export const FollowImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const FollowNickname = styled.div`
  font-size: 1.8rem;
  width: 30rem;
`;
export const UnfollowBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #bcbcbc;
`;

// 프로필 수정하기

export const ProfileEditWrapper = styled.div``;
export const ProfileImgEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;
`;

export const ProfileEditTitle = styled.div`
  font-size: 1.5rem;
  width: 10rem;
`;
export const ProfileImgUpload = styled.div`
  width: 65rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
`;

export const ProfileImgUploadFile = styled.div``;
export const ProfileLabel = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  padding-right: 1rem;
  border-right: 0.2em solid black;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;
export const ProfileImgUpdate = styled.button`
  background-color: transparent;
  border: none;
`;

export const ProfileNicknameEdit = styled(ProfileImgEdit)`
  display: flex;
  align-items: center;
`;
export const ProfileNicknameEditValidation = styled.div`
  width: 65rem;
  display: flex;
  justify-content: space-between;
`;
export const ProfileNicknameInput = styled.input`
  border: none;
  border-bottom: 0.1rem solid black;
  background-color: transparent;
  font-size: 2rem;
`;
export const ProfileNicknameValidation = styled.button`
  background-color: transparent;
  border: none;
  padding: 1rem;
`;
export const ProfileIntroTextEdit = styled(ProfileImgEdit)`
  display: flex;
  align-items: center;
`;
export const ProfileIntroTextWrapper = styled.div`
  width: 65rem;
  & span {
    /* float: right; */
  }
`;
export const ProfileIntroTextArea = styled.textarea`
  border: none;
  border-bottom: 0.1rem solid black;
  resize: none;
  height: 4rem;
  line-height: 1.2;
  width: 93.5%;
`;

export const ProfileBtnDiv = styled.div`
  display: center;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
`;
export const ProfileBtn = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 2rem;
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;
