import styled from 'styled-components';

export const Container = styled.div``;

export const CommentWrapper = styled.div``;

export const Comment = styled.div`
  width: 50rem;
  margin: 2rem auto;
  font-size: 1.5rem;
  line-height: 1.5;
`;
export const UserImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
export const CommentUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentNicknameCreatedAt = styled.div`
  width: 35rem;
`;
export const CommentNickname = styled.div``;

export const CommentCreatedAt = styled.div``;

export const CommentContent = styled.div`
  background-color: #bcbcbc;
  & input {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const CommentBtnDiv = styled.div`
  width: 10rem;
`;

export const CommentForm = styled.div`
  width: 50rem;
  margin: 0 auto;
`;

export const FormUserData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CommentTextArea = styled.textarea`
  resize: none;
  width: 50rem;
`;

export const CommentSubmit = styled.div`
  text-align: right;
  & button {
    cursor: pointer;
  }
`;
export const SubCommentWrapper = styled.div``;

export const SubCommentAddBtn = styled.button``;

export const SubCommentBox = styled.div``;

export const Subcomment = styled.div`
  display: flex;
`;

export const SubCommentImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
export const SubCommentUserAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SubCommentUser = styled.div`
  display: flex;
  gap: 1rem;
`;
export const SubCommentNickname = styled.div``;

export const SubCommentDate = styled.div``;

export const SubCommentContent = styled.div``;

export const SubCommentTextArea = styled.textarea`
  width: 100%;
  resize: none;
`;

export const SubCommentSubmitBtn = styled.button``;
