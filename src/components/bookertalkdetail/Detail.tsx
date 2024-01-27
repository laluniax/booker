import { Session } from '@supabase/supabase-js';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';
import {
  deletePostHandler,
  deletePostImgStorageHandler,
  filteredPostId,
  followHandler,
  followIdListHandler,
  getUserSessionHandler,
  unFollowHandler,
} from '../../api/supabase.api';
import deleteicon from '../../assets/market/deleteicon.webp';
import editicon from '../../assets/market/editicon.webp';
import { PostsTypes } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';
import Comment from '../bookertalk/comment/Comment';
import PostsLike from '../common/like/PostsLike';
import * as St from './Detail.styled';

const Detail = () => {
  const params = useParams().id;
  const postId = params ? parseInt(params, 10) : undefined;
  const [data, setData] = useState<PostsTypes>();
  const [userSession, setUserSession] = useState<Session | null>(null);
  const [followId, setFollowId] = useState('');
  const [following, setFollowing] = useState(false); // 팔로잉:거짓 이 기본
  const [commentsCount, setCommentsCount] = useState(0);

  const navigation = useNavigate();
  // 포스트 정보 가져오기
  const getPosts = async () => {
    const result = await filteredPostId(params as string);
    setData(result[0]);
  };
  // 유저세션데이터 가져오기
  const getUserData = async () => {
    const session = await getUserSessionHandler();
    const newFollowId = data?.user_id + '-' + session.session?.user.id;
    setUserSession(session.session);
    setFollowId(newFollowId);
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

  // 팔로우/언팔로우 판단하기
  const followIdList = async () => {
    const result = await followIdListHandler();
    const filteredResult = result.filter((item) => {
      return item.follow_id === followId;
    });
    if (filteredResult.length > 0) setFollowing(true);
    else setFollowing(false);
  };
  // 팔로우하기
  const onClickFollowBtn = async () => {
    if (!userSession) {
      if (window.confirm('로그인 페이지로 이동하시겠습니까?')) {
        navigation(`/login`);
        return;
      } else return;
    } else {
      const result = await followHandler(followId, data?.user_id as string, userSession?.user.id as string);
      followIdList();
    }
  };
  // 언팔로우하기
  const onClickUnfollowBtn = async () => {
    const result = await unFollowHandler(followId);
    followIdList();
  };

  useEffect(() => {
    getPosts();
  }, []);
  useEffect(() => {
    getUserData();
  }, [data]);
  useEffect(() => {
    followIdList();
  }, [followId]);
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
              <St.PostUserImg onClick={() => navigation(`/profile/${data?.user_id}`)}>
                <img src={data?.users.user_img ?? undefined} />
              </St.PostUserImg>
              <St.PostUserNickname onClick={() => navigation(`/profile/${data?.user_id}`)}>
                {data?.users.nickname} |
              </St.PostUserNickname>
              <St.PostDate>{formatCreatedAt(data?.created_at as string)}</St.PostDate>
            </St.PostImgNickNameDate>
            {userSession?.user.id === data?.user_id ? (
              <St.PostBtnWrapper>
                <St.EditAndDeleteButton onClick={onClickUpdatePostButton}>
                  <img src={editicon} />
                </St.EditAndDeleteButton>

                <St.EditAndDeleteButton onClick={onClickDeletePostButton}>
                  {' '}
                  <img src={deleteicon} />
                </St.EditAndDeleteButton>
              </St.PostBtnWrapper>
            ) : null}
          </St.PostUserInfo>
        </div>
        <St.PostWrapper>
          <St.ViewerWrapper>{data?.content && <Viewer initialValue={data?.content} />}</St.ViewerWrapper>
        </St.PostWrapper>
        <St.TagsWrapper>
          <St.PostTags>{parseTags()} </St.PostTags>
        </St.TagsWrapper>{' '}
        <St.LikesWrapper>
          <PostsLike postId={postId} />
        </St.LikesWrapper>
      </St.TitleAndPostWrapper>{' '}
      <St.PostProfileBox
        onClick={() => {
          navigation(`/profile/${data?.user_id}`);
        }}>
        <St.PostProfileImg src={data?.users.user_img ?? undefined} />
        <St.PostProfileNickname>{data?.users.nickname}</St.PostProfileNickname>
        <St.PostProfileIntroText>{data?.users.intro_text}</St.PostProfileIntroText>
        {userSession?.user.id === data?.user_id ? (
          <St.FollowBtn>내 프로필</St.FollowBtn>
        ) : (
          <>
            {following ? (
              <St.FollowBtn
                onClick={(e) => {
                  e.stopPropagation();
                  onClickUnfollowBtn();
                }}>
                언팔로우
              </St.FollowBtn>
            ) : (
              <St.FollowBtn
                onClick={(e) => {
                  e.stopPropagation();
                  onClickFollowBtn();
                }}>
                팔로우
              </St.FollowBtn>
            )}
          </>
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
