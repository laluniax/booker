import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';
import { deletePostHandler, deletePostImgStorageHandler, filteredPostId } from '../../api/supabase.api';
import { PostsTypes } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';
import Comment from '../bookertalk/comment/Comment';
import Like from '../common/like/PostsLike';
import * as St from './Detail.styled';

const Detail = () => {
  const params = useParams().id;
  const postId = params ? parseInt(params, 10) : undefined;
  const [data, setData] = useState<PostsTypes>();

  const navigation = useNavigate();

  const getPosts = async () => {
    const result = await filteredPostId(params as string);
    setData(result[0]);
  };

  const parseTags = () => {
    // data.tags가 문자열 배열이라면, 이를 공백으로 구분된 하나의 문자열로 합칩니다.
    if (Array.isArray(data?.tags)) {
      return data?.tags.join(' ');
    }
    // data.tags가 문자열이 아니라면, '태그없음'을 반환합니다.
    return data?.tags;
  };

  const onClickUpdatePostButton = () => {
    // setIsEditing(true);
    if (window.confirm('게시글을 수정하시겠습니까?')) navigation(`/bookertalk/write/${params}`);
  };
  const onClickDeletePostButton = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    await deletePostHandler(params as string);
    if (data?.post_img && data?.post_img.length > 0) await deletePostImgStorageHandler(data?.post_img as string[]);
    navigation(`/bookertalk`);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <St.Container>
      <St.PrevButton
        onClick={() => {
          navigation(`/bookertalk/${data?.genre_id}`);
        }}></St.PrevButton>
      <St.TitleAndPostWrapper>
        <div>
          <St.Title>{data?.title}</St.Title>
          <St.PostUserInfo>
            <St.PostImgNickNameDate>
              <St.PostUserImg
                src={data?.users.user_img ?? undefined}
                onClick={() => navigation(`/profile/${data?.user_id}`)}
              />

              <St.PostUserNickname onClick={() => navigation(`/profile/${data?.user_id}`)}>
                {data?.users.nickname} |
              </St.PostUserNickname>
              <St.PostDate>{formatCreatedAt(data?.created_at as string)}</St.PostDate>
            </St.PostImgNickNameDate>

            <St.PostBtnWrapper>
              <St.EditAndDeleteButton onClick={onClickUpdatePostButton}>수정</St.EditAndDeleteButton>
              <St.EditAndDeleteButton onClick={onClickDeletePostButton}>삭제</St.EditAndDeleteButton>
            </St.PostBtnWrapper>
          </St.PostUserInfo>
        </div>
        <St.PostWrapper>
          <St.ViewerWrapper>{data?.content && <Viewer initialValue={data?.content} />}</St.ViewerWrapper>
        </St.PostWrapper>
        <St.TagsWrapper>
          <St.PostTags>{parseTags()} </St.PostTags>
        </St.TagsWrapper>
        <Like postId={postId} />
      </St.TitleAndPostWrapper>

      <br />
      <br />
      <br />
      <St.CommentTitle>댓글</St.CommentTitle>
      <br />
      <Comment />
    </St.Container>
  );
};

export default Detail;
