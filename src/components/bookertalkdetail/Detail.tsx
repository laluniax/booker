import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';
import { filteredPostId } from '../../api/supabase.api';
import { Tablesposts } from '../bookertalk/bookertalkmain/BookerTalkMain';
import Comment from '../bookertalk/comment/Comment';
import * as St from './Detail.styled';

const Detail = () => {
  const params = useParams().id;
  const [data, setData] = useState<Tablesposts>();
  const [isLogin, setIsLogin] = useState(false);
  const [isEdting, setIsEditing] = useState(false);
  const toastRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [tag, setTag] = useState('');

  const setContentHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const markdownContent = toastRef.current?.getInstance().getMarkdown();
  };

  const getPosts = async () => {
    const result = await filteredPostId(params as string);
    setData(result[0]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const parseTags = () => {
    // data.tags가 문자열 배열이라면, 이를 공백으로 구분된 하나의 문자열로 합칩니다.
    if (Array.isArray(data?.tags)) {
      return data?.tags.join(' ');
    }
    // data.tags가 문자열이 아니라면, '태그없음'을 반환합니다.
    return data?.tags;
  };

  return (
    <St.Container>
      <St.Title>BOOKER TALK</St.Title>

      {isEdting ? (
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
      ) : (
        // 뷰 모드일 때 렌더링할 내용
        <div>
          <St.TitleAndTagsBox>
            <St.PostTitle>{data?.title}</St.PostTitle>
            <St.PostTags>{parseTags()} </St.PostTags>
          </St.TitleAndTagsBox>
          <button
            onClick={() => {
              setIsEditing(true);
            }}>
            수정
          </button>
          <button>삭제</button>
          <St.ViewerWrapper>{data?.content && <Viewer initialValue={data?.content} />}</St.ViewerWrapper>

          <Comment />
        </div>
      )}
    </St.Container>
  );
};

export default Detail;
