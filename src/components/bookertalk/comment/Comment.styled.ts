import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
`;

export const CommentForm = styled.div`
  max-width: 35rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 60rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 80rem;
  `};
`;

export const FormUserData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.7rem;
`;

export const CommentTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  padding: 1rem 1rem 1.5rem 1.3rem;
  resize: none;
  font-size: 1.7rem;
  width: 100%;
  height: 10rem;
  border-radius: 1rem;
`;

export const CommentSubmit = styled.div`
  text-align: center;
  font-size: 1.4rem;

  ${({ theme }) => theme.mediaQuery.sm`
  text-align: right;
  font-size: 1.6rem;
  `};
`;

export const CommentSubmitButton = styled.button`
  all: unset;
  font-family: 'GmarketSansMedium';
  margin-top: 1rem;
  background-color: #14213d;
  padding: 1.3rem;
  border-radius: 1rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fca311;
  }
`;

export const CommentWrapper = styled.div`
  padding-bottom: 10rem;
  max-width: 35rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 60rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 80rem;
  `};
`;

export const Comment = styled.div`
  font-family: 'GmarketSansMedium';
  width: 100%;
  margin: 0 auto;
  line-height: 1.5;
  margin-top: 4rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #000;
`;

export const UserImg = styled.img`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const CommentUser = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserImgNicknameCreatedAt = styled.div`
  display: flex;
`;

export const CommentNicknameCreatedAt = styled.div``;

export const CommentNickname = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.8rem;
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
   font-size: 2rem;
  `};
`;

export const CommentCreatedAt = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const CommentContent = styled.div`
  font-size: 1.7rem;
  height: auto;
  padding: 1rem;
  margin-top: 1rem;
  word-break: break-word;
  overflow-wrap: break-word;

  & input {
    font-family: 'GmarketSansMedium';
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.7rem;
  }
`;

export const CommentInput = styled.textarea`
  resize: none;
  width: 59rem;
  min-height: 4rem;
`;

export const CommentButtonBox = styled.div``;

export const CommentBtnDiv = styled.div`
  margin-left: 1rem;
`;

export const CommentButton = styled.button`
  all: unset;
  width: 4rem;
  height: 3rem;
  text-align: center;
  color: #000;

  &:hover {
    cursor: pointer;
    border-bottom: 0.1rem solid #000;
  }
`;

export const CommentEditSubmitBtnBox = styled.div``;

export const SubCommentEditSubmitBtnBox = styled.div`
  font-size: 1.2rem;
`;

export const SubCommentEditSubmitButton = styled.button`
  all: unset;
  width: 4rem;
  height: 3rem;
  text-align: center;
  color: #000;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    border-bottom: 0.1rem solid #000;
  }
`;

export const SubCommentWrapper = styled.div``;

export const SubCommentAddBtn = styled.button`
  all: unset;
  font-family: 'GmarketSansMedium';
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
  width: 9rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  background-color: #14213d;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fca311;
  }
`;

export const SubCommentBox = styled.div``;

export const SubCommentList = styled.div`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
`;

export const SubComment = styled.div`
  width: 100%;
`;

export const SubCommentUserInfoContent = styled.div``;

export const SubCommentProfileBox = styled.div``;

export const SubCommentImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const SubCommentUserAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  margin-top: 1rem;
`;

export const SubCommentUser = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SubCommentNickname = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.7rem;
`;

export const SubCommentDate = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.5rem;
  padding-top: 0.1rem;
`;

export const SubCommentContent = styled.div`
  font-family: 'GmarketSansMedium';
  padding: 0.5rem 0 0 2.8rem;
  font-size: 1.5rem;
  height: auto;
  word-break: break-word;
  overflow-wrap: anywhere;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.7rem;
  `};
`;

export const SubCommentButton = styled.button`
  all: unset;
  width: 4rem;
  height: 3rem;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    border-bottom: 0.1rem solid #000;
  }
`;

export const SubCommentTextAreaBox = styled.div`
  padding-bottom: 2.4rem;
`;

export const SubCommentTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  width: 100%;
  resize: none;
  margin-top: 2rem;
  height: 7rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 1rem 1rem 1.5rem 1.3rem;
`;

export const subCommentEditInput = styled.textarea`
  font-family: 'GmarketSansMedium';
  resize: none;
  width: 50rem;
  height: 6rem;
  font-size: 1.5rem;
  margin-top: 1rem;
  border-radius: 1rem;
  outline: none;
  padding: 1rem 1rem 1.5rem 1.3rem;
`;

export const SubCommentSubmitBtn = styled.button`
  all: unset;
  float: right;
  background-color: #14213d;
  padding: 0.4rem;
  width: 5rem;
  text-align: center;
  border-radius: 1rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #14213d;
    color: #fca311;
  }
`;

export const SubCommentNextText = styled.div`
  font-size: 3rem;
  margin-right: 1rem;
`;
