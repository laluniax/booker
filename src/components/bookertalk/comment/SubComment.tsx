import { useState } from 'react';
import {
  deleteSubCommentHandler,
  getSubCommentsInfoHandler,
  insertSubCommentHandler,
  updateSubCommentHandler,
} from '../../../api/supabase.api';
import { SubCommentTypes } from '../../../types/types';
import { foramtCreatedAt } from '../../../utils/date';
import * as St from './Comment.styled';

type Props = {
  commentId: number | undefined;
  session: string | undefined;
};

const SubComment = ({ commentId, session }: Props) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [content, setContent] = useState('');
  const [data, setData] = useState<SubCommentTypes>();
  const [isEditing, setIsEditing] = useState(false);
  const [inputSubComment, setInputSubComment] = useState('');
  const [subCommentId, setSubCommentId] = useState<number>();

  const getSubCommentsInfo = async () => {
    const result = await getSubCommentsInfoHandler(commentId as number);
    setData(result[0]);
  };

  const insertSubComment = async () => {
    const result = await insertSubCommentHandler(commentId as number, session as string, content);
    getSubCommentsInfo();
    setContent('');
  };

  const updateSubComment = async () => {
    const result = await updateSubCommentHandler(inputSubComment, subCommentId as number);
    // setContent('');
    getSubCommentsInfo();
    setIsEditing(false);
    setSubCommentId(undefined);
    setInputSubComment('');
  };

  const deleteSubComment = async (subCommentId: number) => {
    const result = await deleteSubCommentHandler(subCommentId);
    getSubCommentsInfo();
  };

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
          <St.SubCommentBox>
            {data?.subcomments
              .sort((a, b) => a.id - b.id)
              .map((item, i) => {
                return (
                  <St.Subcomment key={i}>
                    <div> ┗ </div>
                    <div>
                      <St.SubCommentUserAndBtn>
                        <St.SubCommentUser>
                          <St.SubCommentImg src={item.users.user_img ?? undefined} />
                          <St.SubCommentNickname>{item.users.nickname} | </St.SubCommentNickname>
                          <St.SubCommentDate>{foramtCreatedAt(item.created_at)}</St.SubCommentDate>
                        </St.SubCommentUser>
                        {session === item.user_id ? (
                          <St.CommentBtnDiv>
                            {isEditing ? (
                              <>
                                {item.id === subCommentId ? (
                                  <>
                                    <button
                                      onClick={() => {
                                        updateSubComment();
                                      }}>
                                      완료
                                    </button>
                                    <button
                                      onClick={() => {
                                        deleteSubComment(item.id);
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
                                    setIsEditing(true);
                                    setSubCommentId(item.id);
                                    setInputSubComment(item.content as string);
                                  }}>
                                  수정
                                </button>
                                <button
                                  onClick={() => {
                                    deleteSubComment(item.id);
                                  }}>
                                  삭제
                                </button>
                              </>
                            )}
                          </St.CommentBtnDiv>
                        ) : (
                          <St.CommentBtnDiv></St.CommentBtnDiv>
                        )}
                      </St.SubCommentUserAndBtn>
                      <St.SubCommentContent>
                        {item.id === subCommentId ? (
                          <input
                            value={inputSubComment}
                            onChange={(e) => {
                              setInputSubComment(e.target.value);
                            }}
                          />
                        ) : (
                          item.content
                        )}
                      </St.SubCommentContent>
                    </div>
                  </St.Subcomment>
                );
              })}
          </St.SubCommentBox>

          <St.SubCommentTextArea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <St.SubCommentSubmitBtn onClick={insertSubComment}>등록</St.SubCommentSubmitBtn>
        </>
      ) : (
        <St.SubCommentAddBtn
          onClick={() => {
            setToggleOpen(true);
            getSubCommentsInfo();
          }}>
          답글 입력하기
        </St.SubCommentAddBtn>
      )}
    </St.SubCommentWrapper>
  );
};

export default SubComment;
