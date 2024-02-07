import { Session } from '@supabase/supabase-js';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';
import {
  deletePostHandler,
  deletePostImgStorageHandler,
  filteredPostId,
  getUserSessionHandler,
} from '../../../api/Supabase.api';
import deleteicon from '../../../assets/market/deleteicon.webp';
import editicon from '../../../assets/market/editicon.webp';
import Follow from '../../common/follow/Follow';
import PostsLike from '../../common/like/PostsLike';
import Comment from '../comment/Comment';
import * as St from './Detail.styled';
import { PostsTypes } from './Detail.type';

const Detail = () => {
  const params = useParams().id;
  const postId = params ? parseInt(params, 10) : undefined;
  const [post, setPost] = useState<PostsTypes>();
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [commentsCount, setCommentsCount] = useState(0);

  const navigation = useNavigate();
  // 포스트 정보 가져오기
  const getPosts = async () => {
    const result = await filteredPostId(params as string);
    setPost(result[0]);
  };

  // 유저세션데이터 가져오기
  const getUserData = async () => {
    const session = await getUserSessionHandler();
    const newFollowId = post?.user_id + '-' + session.session?.user.id;
    setUserSession(session.session);
  };

  const parseTags = () => {
    // data.tags가 문자열 배열이라면, 이를 공백으로 구분된 하나의 문자열로 합칩니다.
    if (Array.isArray(post?.tags)) {
      return post?.tags.join(' ');
    }
    // data.tags가 문자열이 아니라면, '태그없음'을 반환합니다.
    return post?.tags;
  };

  const onClickUpdatePostButton = () => {
    if (window.confirm('게시글을 수정하시겠습니까?')) navigation(`/bookertalk/write/${params}`);
  };

  const onClickDeletePostButton = async () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    await deletePostHandler(params as string);
    if (post?.post_img && post?.post_img.length > 0) await deletePostImgStorageHandler(post?.post_img as string[]);
    navigation(`/bookertalk`);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getUserData();
  }, [post]);

  return (
    <St.Container>
      <St.PrevButton
        onClick={() => {
          navigation(`/bookertalk/${post?.genre_id}`);
        }}></St.PrevButton>
      <St.TitleAndPostWrapper>
        <div>
          <St.Title>{post?.title}</St.Title>
          <St.PostUserInfo>
            <St.PostImgNickNameDate>
              <St.PostUserImg onClick={() => navigation(`/profile/${post?.user_id}`)}>
                <img src={post?.users.user_img ?? undefined} alt="img" loading="lazy" />
              </St.PostUserImg>
              <St.PostUserNickname onClick={() => navigation(`/profile/${post?.user_id}`)}>
                {post?.users.nickname} |
              </St.PostUserNickname>
              <St.PostDate>{dayjs(post?.created_at as string).format('YYYY-MM-DD | HH:MM')}</St.PostDate>
            </St.PostImgNickNameDate>
            {userSession?.user.id === post?.user_id ? (
              <St.PostBtnWrapper>
                <St.EditAndDeleteButton onClick={onClickUpdatePostButton}>
                  <img src={editicon} />
                </St.EditAndDeleteButton>

                <St.EditAndDeleteButton onClick={onClickDeletePostButton}>
                  <img src={deleteicon} />
                </St.EditAndDeleteButton>
              </St.PostBtnWrapper>
            ) : null}
          </St.PostUserInfo>
        </div>
        <St.PostWrapper>
          <St.ViewerWrapper>{post?.content && <Viewer initialValue={post?.content} />}</St.ViewerWrapper>
        </St.PostWrapper>
        <St.TagsWrapper>
          <St.PostTags>{parseTags()} </St.PostTags>
        </St.TagsWrapper>{' '}
        <St.LikesWrapper>
          <PostsLike postId={postId} count={true} />
        </St.LikesWrapper>
      </St.TitleAndPostWrapper>{' '}
      <St.PostProfileBox
        onClick={() => {
          navigation(`/profile/${post?.user_id}`);
          window.scrollTo(0, 0);
        }}>
        <St.PostProfileImg src={post?.users.user_img ?? undefined} />
        <St.PostProfileNickname>{post?.users.nickname}</St.PostProfileNickname>
        <St.PostProfileIntroText>{post?.users.intro_text}</St.PostProfileIntroText>
        {userSession?.user.id === post?.user_id ? (
          <St.FollowBtn>내 프로필</St.FollowBtn>
        ) : (
          post?.user_id && <Follow params={post?.user_id as string} usage="post" />
        )}
      </St.PostProfileBox>
      <br />
      <br />
      <br />
      <St.CommentTitle>댓글 {commentsCount}개</St.CommentTitle>
      <br />
      <Comment setCommentsCount={setCommentsCount} />
    </St.Container>
  );
};

export default Detail;
