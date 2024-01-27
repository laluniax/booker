import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  font-size: 1.6rem;
  min-height: 80rem;
`;

export const CommentWrapper = styled.div``;

export const Comment = styled.div`
  width: 50rem;
  margin: 6rem auto;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 2rem;
`;
export const UserImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
export const CommentUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentNicknameCreatedAt = styled.div`
  padding-left: 1rem;
  width: 35rem;
`;
export const CommentNickname = styled.div``;

export const CommentCreatedAt = styled.div``;

export const CommentContent = styled.div`
  font-size: 1.7rem;
  height: 5rem;
  padding: 1rem;
  & input {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const CommentButtonBox = styled.div`
  width: 15rem;
  margin-left: 8rem;
`;
export const CommentButton = styled.button`
  all: unset;
  width: 4rem;
  height: 3rem;
  text-align: center;
  color: #000;

  &:hover {
    cursor: pointer;
    color: #4d8aa1;
  }
`;

export const CommentBtnDiv = styled.div`
  width: 16rem;
  margin-left: 1rem;
`;

export const CommentForm = styled.div`
  width: 80rem;
  margin: 0 auto;
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
  resize: none;
  width: 80rem;
  height: 10rem;
  border-radius: 1rem;
`;

export const CommentSubmit = styled.div`
  text-align: right;
`;

export const CommentSubmitButton = styled.button`
  all: unset;
  margin-top: 1rem;
  background-color: #000;
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #3b3b3b;
  }
`;
export const CommentEditSubmitBtnBox = styled.div`
  margin-left: 5.2rem;
`;

export const SubCommentEditSubmitBtnBox = styled.div`
  width: 12rem;
  margin-left: 4.5rem;
`;
export const SubCommentEditSubmitButton = styled.button`
  all: unset;
  border-radius: 1rem;
  width: 4rem;
  height: 3rem;
  text-align: center;
  color: #000;
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
    color: #4d8aa1;
  }
`;

export const SubCommentWrapper = styled.div``;

export const SubCommentAddBtn = styled.button`
  all: unset;
  margin-top: 1rem;
  text-align: center;
  padding: 0.2rem;
  width: 9rem;
  border-radius: 1rem;
  background-color: #000;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #3b3b3b;
  }
`;

export const SubCommentBox = styled.div``;

export const Subcomment = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SubCommentImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
export const SubCommentUserAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
export const SubCommentUser = styled.div`
  display: flex;
  gap: 1rem;
`;
export const SubCommentNickname = styled.div``;

export const SubCommentDate = styled.div``;

export const SubCommentContent = styled.div`
  padding: 0.5rem 0 0 2.8rem;
  font-size: 1.7rem;
`;

export const SubCommentButton = styled.button`
  all: unset;
  font-size: 1.3rem;
  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
    color: #4d8aa1;
  }
`;
export const SubCommentTextAreaBox = styled.div``;

export const SubCommentTextArea = styled.textarea`
  width: 100%;
  resize: none;
  margin-top: 1rem;
  height: 5rem;
`;

export const subCommentEditInput = styled.input`
  width: 46.4rem;
  height: 5rem;
  margin-top: 1rem;
`;
export const SubCommentSubmitBtn = styled.button`
  all: unset;
  float: right;
  background-color: #000;
  padding: 0.3rem;
  width: 5rem;
  text-align: center;
  border-radius: 0.3rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: #404040;
    color: #fff;
  }
`;

export const SubCommentNextText = styled.div`
  font-size: 3rem;
  margin-right: 1rem;
`;
