import styled from 'styled-components';

export const TabWrapper = styled.div`
  height: 100vh;
  font-family: 'GmarketSansMedium';
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
      border-bottom: 0.2rem solid #fca311;
      color: black;
    }
  }
`;

export const TabMenu = styled.div``;

export const ProfileContent = styled.div`
  width: 85rem;
  margin: 0 auto;
`;

export const TabListTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin: 5rem 0 2rem 0;
`;

// 구분선
export const Contour = styled.div`
  border-bottom: 0.2rem solid #000;
  width: 100%;
  margin-top: 3rem;
`;

// 내가 쓴 글
export const PostWrapper = styled.div`
  height: 35rem;
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 1rem;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;

export const PostTitle = styled.div`
  font-size: 1.8rem;
`;

export const PostDate = styled.div``;

export const ProductWrapper = styled.div`
  height: 50rem;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.7rem;
  padding: 1.5rem 0;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
    border-radius: 1rem;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;
export const ProductTitlePrice = styled.div`
  width: 58rem;
  line-height: 2;
  margin-left: 1.3rem;
`;
export const ProductTitle = styled.div`
  width: 50rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductImg = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  background-color: #14213d;
  border-radius: 2rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.8rem;
`;

export const ProductDate = styled.div`
  font-size: 1.6rem;
`;

// 팔로우 목록
export const FollowWrapper = styled.div`
  width: 80rem;
  margin: 0 auto;
  margin-top: 5rem;
`;

export const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;

  &:hover {
    cursor: pointer;
    background-color: #14213d;
    border-radius: 2rem;
    padding: 1rem;
    color: #fff;

    transition: 0.3s;

    & div {
      color: #fca311;
    }
  }

  &:not(:hover) {
    transition: 0.4s;
  }
`;

export const FollowImgAndNickNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const FollowImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
`;

export const FollowNickname = styled.div`
  font-size: 1.8rem;
  width: 30rem;
`;
export const UnfollowBtn = styled.button`
  font-family: 'GmarketSansMedium';
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  color: #bcbcbc;

  &:hover {
    color: #fca311;
    transition: 0.2s;
    font-weight: bold;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
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
  font-size: 1.8rem;
  width: 13rem;
`;
export const ProfileImgEditBox = styled.div`
  width: 65rem;
  display: flex;
  justify-content: center;
  background-color: #14213d;
  padding: 1.6rem;
  border-radius: 2rem;
`;

export const ProfileImgBox = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ProfileImg = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
`;

export const ProfileImgUploadFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  gap: 2rem;
  height: 4rem;
`;

export const ProfileLabelBox = styled.div`
  display: flex;
  border-right: 0.2em solid #fca311;
  align-items: center;
  height: 2.6rem;
`;

export const ProfileLabel = styled.label`
  font-size: 1.7rem;
  padding-right: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  color: #fff;
  margin-right: 0.4rem;

  &:hover {
    padding: 1rem;
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
    border-radius: 2rem;
    margin-right: 0.8rem;
    font-size: 2rem;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

export const ProfileImgInput = styled.input`
  display: none;
`;
export const ProfileImgUpdate = styled.button`
  all: unset;
  font-family: 'GmarketSansMedium';
  font-size: 1.7rem;
  border: none;
  text-align: center;
  height: 2rem;
  color: #fff;

  &:hover {
    padding: 0.4rem;
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
    border-radius: 2rem;
    font-size: 2rem;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const ProfileEditBox = styled.div``;

export const ProfileNicknameEdit = styled(ProfileImgEdit)`
  display: flex;
  align-items: center;
`;
export const ProfileNicknameEditValidation = styled.div`
  width: 65rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
`;
export const ProfileNicknameInput = styled.input`
  font-family: 'GmarketSansMedium';
  border: none;
  border-bottom: 0.1rem solid black;
  background-color: transparent;
  font-size: 2rem;
  width: 25rem;
`;

export const ProfileNicknameLength = styled.span`
  font-size: 1.5rem;
  padding-left: 0.5rem;
`;

export const ProfileNicknameValidation = styled.button`
  all: unset;
  font-size: 1.7rem;
  border: none;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
    font-weight: bold;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

export const NicknameValidationTextCorrect = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #0f77ff;
`;

export const NicknameValidationTextError = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #ff0f0f;
`;

export const ProfileIntroTextEdit = styled(ProfileImgEdit)`
  display: flex;
  align-items: center;
`;
export const ProfileIntroTextWrapper = styled.div`
  width: 65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & span {
    /* float: right; */
  }
`;
export const ProfileIntroTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  border-bottom: 0.1rem solid black;
  font-size: 1.7rem;
  resize: none;
  height: 10rem;
  line-height: 1.2;
  width: 93.5%;
  padding: 1.4rem;
  outline: none;

  border: 1px solid #14213d;
  border-radius: 2rem;
`;

export const ProfileBtnDiv = styled.div`
  display: flex;
  justify-content: right;
  text-align: center;
`;
export const ProfileBtn = styled.button`
  all: unset;
  background-color: #14213d;
  color: #fff;
  font-family: 'GmarketSansMedium';
  width: 15rem;
  height: 5rem;
  border-radius: 2rem;
  margin-top: 3rem;
  font-size: 1.7rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
