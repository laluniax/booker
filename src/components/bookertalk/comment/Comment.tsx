import * as St from './Comment.styled';
const Comment = () => {
  return (
    <St.Container>
      <St.CommentWrapper></St.CommentWrapper>
      <St.CommentForm>
        <St.CommentInput />
        <St.CommentSubmitBtn>댓글 작성하기</St.CommentSubmitBtn>
      </St.CommentForm>
    </St.Container>
  );
};

export default Comment;
