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
