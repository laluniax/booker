import { UserMetadata } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteCommentHandler,
  getCommentsInfoHandler,
  getUserSessionHandler,
  insertCommentHandler,
  updateCommentHandler,
} from '../../../api/supabase.api';
import { CommentTypes } from '../../../types/types';
import { foramtCreatedAt } from '../../../utils/date';
import * as St from './Comment.styled';
import SubComment from './SubComment';

const Comment = () => {
  const [data, setData] = useState<CommentTypes>();
  const [session, setSession] = useState<string | undefined>('');
  const [metaData, setMetaData] = useState<UserMetadata>();
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [commentId, setCommentId] = useState<number>();
  const [inputComment, setInputComment] = useState('');
  const params = Number(useParams().id);

  const getCommentsInfo = async () => {
    const result = await getCommentsInfoHandler(params);
    setData(result[0] as CommentTypes);
    console.log(result[0]);
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
    const result = await updateCommentHandler(inputComment, commentId as number);
    console.log(result);
    getCommentsInfo();
    setIsEditing(false);
    setCommentId(undefined);
    setInputComment('');
  };
  const deleteComment = async (commentId: number) => {
    console.log(commentId);
    const result = await deleteCommentHandler(commentId);
    console.log(result);
  };

  useEffect(() => {
    getCommentsInfo();
    getUserSession();
  }, [params]);
  return (
    <St.Container>
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
      <St.CommentWrapper>
        {data?.comments
          .sort((a, b) => a.id - b.id)
          .map((item, i) => {
            return (
              <St.Comment key={i}>
                <St.CommentUser>
                  <St.UserImg src={item.users.user_img ?? undefined} />
                  <St.CommentNicknameCreatedAt>
                    <St.CommentNickname>{item.users.nickname}</St.CommentNickname>
                    <St.CommentCreatedAt>{foramtCreatedAt(item.created_at)}</St.CommentCreatedAt>
                  </St.CommentNicknameCreatedAt>

                  {session === item.user_id ? (
                    <St.CommentBtnDiv>
                      {isEditing ? (
                        <>
                          {item.id === commentId ? (
                            <>
                              <button
                                onClick={() => {
                                  // setCommentId(item.comment_id);
                                  updateComment();
                                }}>
                                완료
                              </button>
                              <button
                                onClick={() => {
                                  // setCommentId(item.comment_id);
                                  deleteComment(item.id);
                                }}>
                                삭제
                              </button>
                            </>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              // setCommentId(item.comment_id);
                              // updateComment();
                              setIsEditing(true);
                              setCommentId(item.id);
                              setInputComment(item.content as string);
                            }}>
                            수정
                          </button>
                          <button
                            onClick={() => {
                              // setCommentId(item.id);
                              deleteComment(item.id);
                            }}>
                            삭제
                          </button>
                        </>
                      )}
                    </St.CommentBtnDiv>
                  ) : (
                    <St.CommentBtnDiv></St.CommentBtnDiv>
                  )}
                </St.CommentUser>
                <St.CommentContent>
                  {item.id === commentId ? (
                    <input
                      value={inputComment}
                      onChange={(e) => {
                        setInputComment(e.target.value);
                      }}
                    />
                  ) : (
                    item.content
                  )}
                </St.CommentContent>
                <SubComment commentId={item.id} session={session} />
              </St.Comment>
            );
          })}
      </St.CommentWrapper>
    </St.Container>
  );
};

export default Comment;
