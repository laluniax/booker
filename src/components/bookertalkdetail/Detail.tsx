import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';
import { deletePostHandler, deletePostImgStorageHandler, filteredPostId } from '../../api/supabase.api';
import { PostsTypes } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';
import Comment from '../bookertalk/comment/Comment';
import * as St from './Detail.styled';

const Detail = () => {
  const params = useParams().id;
  const [data, setData] = useState<PostsTypes>();
  const [isEdting, setIsEditing] = useState(false);
  const toastRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [tag, setTag] = useState('');

  const navigation = useNavigate();

  const setContentHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const markdownContent = toastRef.current?.getInstance().getMarkdown();
  };

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
      <St.Title>BOOKER TALK</St.Title>
      <St.PostWrapper>
        {/* {isEdting ? (
          // 편집 모드일 때 렌더링할 내용
          <div>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <select value={genre}></select>

            <Editor initialValue={data?.content || ''} ref={toastRef} />
            <button
              onClick={() => {
                setIsEditing(false);
              }}>
              저장
            </button>
            <button>취소</button>
            <button
              onClick={(e) => {
                setContentHandler(e);
              }}>
              테스트
            </button>
          </div>
        ) : ( */}

        <div>
          <St.PostTitle>{data?.title}</St.PostTitle>
          <St.PostUserInfo>
            <St.PostImgNickNameDate>
              <St.PostUserImg src={data?.users.user_img ?? undefined} />
              <St.PostUserNickname>{data?.users.nickname}</St.PostUserNickname>
              <St.PostDate>{formatCreatedAt(data?.created_at as string)}</St.PostDate>
            </St.PostImgNickNameDate>
            <St.PostBtnWrapper>
              <button onClick={onClickUpdatePostButton}>수정</button>
              <button onClick={onClickDeletePostButton}>삭제</button>
            </St.PostBtnWrapper>
          </St.PostUserInfo>
          <St.ViewerWrapper>{data?.content && <Viewer initialValue={data?.content} />}</St.ViewerWrapper>
          <St.PostTags>{parseTags()} </St.PostTags>
          <Comment />
          <button
            onClick={() => {
              navigation(`/bookertalk/${data?.genre_id}`);
            }}>
            목록 보기
          </button>
        </div>
      </St.PostWrapper>
    </St.Container>
  );
};

export default Detail;
