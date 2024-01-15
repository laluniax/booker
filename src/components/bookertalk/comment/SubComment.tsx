import { useState } from 'react';
import * as St from './Comment.styled';

const SubComment = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [content, setContent] = useState('');
  return (
    <St.SubCommentWrapper>
      {toggleOpen ? (
        <>
          <St.SubCommentAddBtn
            onClick={() => {
              setToggleOpen(false);
            }}>
            답글 숨기기
          </St.SubCommentAddBtn>
          <St.SubCommentTextArea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <St.SubCommentSubmitBtn>등록</St.SubCommentSubmitBtn>
        </>
      ) : (
        <St.SubCommentAddBtn
          onClick={() => {
            setToggleOpen(true);
          }}>
          답글 입력하기
        </St.SubCommentAddBtn>
      )}
    </St.SubCommentWrapper>
  );
};

export default SubComment;
