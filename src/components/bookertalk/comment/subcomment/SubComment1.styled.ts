import styled from 'styled-components';

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
export const SubCommentNextText = styled.div`
  font-size: 3rem;
  margin-right: 1rem;
`;

export const SubComment = styled.div`
  width: 100%;
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
export const SubCommentImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
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

export const CommentBtnDiv = styled.div`
  /* width: 16rem; */
  margin-left: 1rem;
`;
export const CommentEditSubmitBtnBox = styled.div``;
export const SubCommentEditSubmitBtnBox = styled.div`
  /* width: 12rem; */
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

export const SubCommentEditInput = styled.textarea`
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
