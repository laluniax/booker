import { UserMetadata } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteCommentHandler,
  getCommentsInfoHandler,
  getUserSessionHandler,
  insertCommentHandler,
} from '../../../api/supabase.api';
import * as St from './Comment.styled';

type CommentsTypes = {
  comment_id: number;
  comment_created_at: string;
  comment_post_id: number;
  comment_user_id: string;
  comment_content: string;
  user_email: string;
  user_nickname: string;
  user_img: string;
};

const Comment = () => {
  const [data, setData] = useState<CommentsTypes[]>();
  const [session, setSession] = useState<string | undefined>('');
  const [metaData, setMetaData] = useState<UserMetadata>();
  const [content, setContent] = useState('');
  // const [commentId, setCommentId] = useState<number>();
  const params = Number(useParams().id);

  const getCommentsInfo = async () => {
    const result = await getCommentsInfoHandler(params);
    setData(result);
  };

  const getUserSession = async () => {
    const session = await getUserSessionHandler();
    setSession(session.session?.user.id);
    setMetaData(session.session?.user.user_metadata);
  };

  const insertComment = async () => {
    const result = await insertCommentHandler(params, session as string, content);
    setContent('');
  };

  const updateComment = async () => {
    // const result = await updateCommentHandler(commentId)
  };
  const deleteComment = async (commentId: number) => {
    console.log(commentId);
    const result = await deleteCommentHandler(commentId as number);
    console.log(result);
  };

  useEffect(() => {
    getCommentsInfo();
    getUserSession();
  }, [params]);
  return (
    <St.Container>
      <St.CommentWrapper>
        {data?.map((item, i) => {
          return (
            <St.Comment key={i}>
              <St.CommentUser>
                <St.UserImg src={item.user_img} />
                <St.CommentNicknameCreatedAt>
                  <St.CommentNickname>{item.user_nickname}</St.CommentNickname>
                  <St.CommentCreatedAt>{item.comment_created_at}</St.CommentCreatedAt>
                </St.CommentNicknameCreatedAt>

                {session === item.comment_user_id ? (
                  <St.CommentBtnDiv>
                    <button
                      onClick={() => {
                        // setCommentId(item.comment_id);
                        updateComment();
                      }}>
                      수정
                    </button>
                    <button
                      onClick={() => {
                        // setCommentId(item.comment_id);
                        deleteComment(item.comment_id);
                      }}>
                      삭제
                    </button>
                  </St.CommentBtnDiv>
                ) : (
                  <St.CommentBtnDiv></St.CommentBtnDiv>
                )}
              </St.CommentUser>
              <St.CommentContent>{item.comment_content}</St.CommentContent>
            </St.Comment>
          );
        })}
      </St.CommentWrapper>
      <St.CommentForm>
        <St.FormUserData>
          <St.UserImg src={metaData?.user_img} />
          <div>{metaData?.full_name}</div>
        </St.FormUserData>
        <St.CommentTextArea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <br />
        <St.CommentSubmit>
          <button onClick={insertComment}>댓글 작성하기</button>
        </St.CommentSubmit>
      </St.CommentForm>
    </St.Container>
  );
};

export default Comment;
