// 프로필 수정하기

import styled from 'styled-components';

export const ProfileEditWrapper = styled.div``;

export const ProfileImgEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 4rem 0;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 5rem 0;
  `};
`;

export const ProfileEditTitle = styled.div`
  font-size: 1.1rem;
  width: 8rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.6rem;
  width: 11rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.8rem;
  width: 13rem;
  `};
`;

export const ProfileImgEditBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #14213d;
  padding: 1.2rem;
  border-radius: 1rem;
  width: 22rem;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 1.4rem;
  border-radius: 1.5rem;
  width: 45rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1.6rem;
  border-radius: 2rem;
  width: 65rem;
  `};
`;

export const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
  gap: 1.5rem;
  width: 50rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  gap: 2rem;
  width: 60rem;
  `};
`;

export const ProfileImg = styled.img`
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
  width: 9rem;
  height: 9rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 15rem;
  height: 15rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 20rem;
  height: 20rem;
  `};
`;

export const ProfileImgUploadFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  gap: 1rem;
  height: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 40rem;
  gap: 1.5rem;
  height: 3rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 50rem;
  gap: 2rem;
  height: 4rem;
  `};
`;

export const ProfileLabelBox = styled.div`
  display: flex;
  align-items: center;
  height: 1.8rem;
  border-right: 0.1em solid #fca311;

  ${({ theme }) => theme.mediaQuery.sm`
  height: 2rem;
  border-right: 0.2em solid #fca311;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  height: 2.6rem;
  border-right: 0.2em solid #fca311;
  `};
`;

export const ProfileLabel = styled.label`
  font-size: 1.1rem;
  padding-right: 0.6rem;
  margin-right: 0.2rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
    padding: 0.6rem;
    border-radius: 1rem;
    margin-right: 0.4rem;
    font-size: 1.4rem;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
  padding-right: 0.8rem;
  margin-right: 0.3rem;
  
  &:hover {
    padding: 0.8rem;
    border-radius: 1.5rem;
    margin-right: 0.6rem;
    font-size: 1.7rem;
  }
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  padding-right: 1rem;
  margin-right: 0.4rem;

  &:hover {
    padding: 1rem;
    border-radius: 2rem;
    margin-right: 0.8rem;
    font-size: 2rem;
  }
  `};
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const ProfileImgUpdate = styled.button`
  all: unset;
  font-family: 'GmarketSansMedium';
  border: none;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  height: 1.6rem;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
    padding: 0.2rem;
    border-radius: 1rem;
    font-size: 1.4rem;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  height: 1.8rem;
  
  &:hover {
    padding: 0.3rem;
    border-radius: 1.5rem;
    font-size: 1.7rem;
  }
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  height: 2rem;

  &:hover {
    padding: 0.4rem;
    border-radius: 2rem;
    font-size: 2rem;
  }
 `};
`;

export const ProfileEditBox = styled.div``;

export const ProfileNicknameEdit = styled(ProfileImgEdit)`
  display: flex;
  align-items: center;
`;

export const ProfileNicknameEditValidation = styled.div`
  width: 30rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 45rem;
  height: 4rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 65rem;
  height: 6rem;
  `};
`;

export const ProfileNicknameInput = styled.input`
  font-family: 'GmarketSansMedium';
  border: none;
  border-bottom: 0.1rem solid black;
  background-color: transparent;
  font-size: 1.3rem;
  width: 11rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.7rem;
  width: 20rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  width: 25rem;
  `};
`;

export const ProfileNicknameLength = styled.span`
  font-size: 1rem;
  padding-left: 0.1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  padding-left: 0.4rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  padding-left: 0.5rem;
  `};
`;

export const ProfileNicknameValidation = styled.button`
  all: unset;
  border: none;
  font-size: 1rem;
  padding: 0.3rem;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
    font-weight: bold;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
  padding: 0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.7rem;
  padding: 1rem;
  `};
`;

export const NicknameValidationTextCorrect = styled.div`
  color: #0f77ff;
  font-size: 1rem;
  margin-top: 0.1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  margin-top: 0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  margin-top: 1rem;
  `};
`;

export const NicknameValidationTextError = styled.div`
  color: #ff0f0f;
  font-size: 1rem;
  margin-top: 0.6rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  margin-top: 0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  margin-top: 1rem;
  `};
`;

export const ProfileIntroTextEdit = styled(ProfileImgEdit)`
  display: flex;
  align-items: center;
`;

export const ProfileIntroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29rem;
  gap: 0.6rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 45rem;
  gap: 0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 65rem;
  gap: 1rem;
  `};
`;

export const ProfileIntroTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  border-bottom: 0.1rem solid black;
  resize: none;
  width: 93.5%;
  outline: none;
  font-size: 1.1rem;
  height: 6rem;
  line-height: 1;
  padding: 1rem;
  border: 0.6px solid #14213d;
  border-radius: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
  height: 8rem;
  line-height: 1;
  padding: 1.2rem;
  border: 0.8px solid #14213d;
  border-radius: 1.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  border-bottom: 0.1rem solid black;
  font-size: 1.7rem;
  height: 10rem;
  line-height: 1.2;
  padding: 1.4rem;
  border: 1px solid #14213d;
  border-radius: 2rem;
  `};
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
  font-weight: bold;
  width: 11rem;
  height: 3rem;
  border-radius: 1rem;
  margin-top: 1.5rem;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width: 13rem;
  height: 4rem;
  border-radius: 1.5rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 15rem;
  height: 5rem;
  border-radius: 2rem;
  margin-top: 3rem;
  font-size: 1.7rem;
  `};
`;
