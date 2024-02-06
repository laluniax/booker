import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  deleteCommentHandler,
  getCommentsInfoHandler,
  insertCommentHandler,
  updateCommentHandler,
} from '../../../api/Supabase.api';
import { userSession } from '../../../state/atom/userSessionAtom';
import { CommentTypes } from '../../../types/types';
import SubComment from '../comment/subcomment/SubComment';
import * as St from './Comment.styled';
import { PropsType } from './Comment.type';

const Comment = ({ setCommentsCount }: PropsType) => {
  const [data, setData] = useState<CommentTypes>();
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [commentId, setCommentId] = useState<number>();
  const [inputComment, setInputComment] = useState('');

  const session = useRecoilValue(userSession);

  const params = Number(useParams().id);

  const getCommentsInfo = async () => {
    const result = await getCommentsInfoHandler(params);
    setData(result[0] as CommentTypes);
    setCommentsCount(result[0].comments.length);
  };

  const insertComment = async () => {
    const result = await insertCommentHandler(params, session?.id as string, content);
    getCommentsInfo();
    setContent('');
  };

  const updateComment = async () => {
    const result = await updateCommentHandler(inputComment, commentId as number);
    getCommentsInfo();
    setIsEditing(false);
    setCommentId(undefined);
    setInputComment('');
  };

  const deleteComment = async (commentId: number) => {
    const result = await deleteCommentHandler(commentId);
    getCommentsInfo();
  };

  useEffect(() => {
    getCommentsInfo();
  }, [params]);

  return (
    <St.Container>
      {session ? (
        <St.CommentForm>
          <St.FormUserData>
            <St.UserImg src={session?.user_metadata.user_img || session?.user_metadata.avatar_url} loading="lazy" />
            <St.CommentNickname>
              {session?.user_metadata.full_name ||
                session?.user_metadata.preferred_username ||
                session?.user_metadata.user_name ||
                session?.user_metadata.name}
            </St.CommentNickname>
          </St.FormUserData>
          <St.CommentTextArea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <br />
          <St.CommentSubmit>
            <St.CommentSubmitButton onClick={insertComment}>댓글 작성하기</St.CommentSubmitButton>
          </St.CommentSubmit>
        </St.CommentForm>
      ) : (
        <></>
      )}
      <St.CommentWrapper>
        {data?.comments
          .sort((a, b) => a.id - b.id)
          .map((item, i) => {
            return (
              <St.Comment key={i}>
                <St.CommentUser>
                  {' '}
                  <St.UserImgNicknameCreatedAt>
                    <St.UserImg src={item.users.user_img ?? undefined} loading="lazy" />
                    <St.CommentNicknameCreatedAt>
                      <St.CommentNickname>{item.users.nickname}</St.CommentNickname>
                      <St.CommentCreatedAt>{dayjs(item.created_at).format('MM-DD')}</St.CommentCreatedAt>
                    </St.CommentNicknameCreatedAt>
                  </St.UserImgNicknameCreatedAt>
                  {session?.id === item.user_id ? (
                    <St.CommentBtnDiv>
                      {isEditing ? (
                        <>
                          {item.id === commentId ? (
                            <St.CommentButtonBox>
                              <St.CommentButton
                                onClick={() => {
                                  updateComment();
                                }}>
                                완료
                              </St.CommentButton>
                              <St.CommentButton
                                onClick={() => {
                                  deleteComment(item.id);
                                }}>
                                삭제
                              </St.CommentButton>
                            </St.CommentButtonBox>
                          ) : null}
                        </>
                      ) : (
                        <St.CommentButtonBox>
                          <St.CommentButton
                            onClick={() => {
                              setIsEditing(true);
                              setCommentId(item.id);
                              setInputComment(item.content as string);
                            }}>
                            수정
                          </St.CommentButton>
                          <St.CommentButton
                            onClick={() => {
                              deleteComment(item.id);
                            }}>
                            삭제
                          </St.CommentButton>
                        </St.CommentButtonBox>
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
                <SubComment commentId={item.id} setCommentsCount={setCommentsCount} />
              </St.Comment>
            );
          })}
      </St.CommentWrapper>
    </St.Container>
  );
};

export default Comment;
