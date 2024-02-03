import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'tui-color-picker/dist/tui-color-picker.css';
import {
  filteredPostId,
  getUserSessionHandler,
  submitPostListHandler,
  updatePostHandler,
  uploadImageFile,
} from '../../../api/Supabase1.api';
import * as St from './Post.styled';
import { CateGenresTypes, CategoriesTypes, HookCallbackType } from './Post.type';

export const categoryUuid: CateGenresTypes = {
  '도서추천 / 인문': 'a249535a-b19a-4fb4-bcd9-0788e780a2ac',
  '도서추천 / 경제 • 경영': 'f979619a-91c3-4584-9880-1c5b137735dd',
  '도서추천 / 자기계발': '3c5d132b-1ca6-430d-a467-4315a2d86618',
  '도서추천 / 정치 • 사회': 'b2ba785c-a0e7-45f3-b4f5-db225628d60c',
  '도서추천 / 역사 • 문화': '27e1c66f-f7a5-483e-be92-a8338874df80',
  '도서추천 / 과학': '4e0930d6-9cad-40f9-8aa9-591e882ffd31',
  '도서추천 / 소설': '355e40c7-0337-4527-a5da-3fd6aef50246',
  '도서추천 / 시 • 에세이': 'e3a14e02-e941-4f40-b289-9fa9242f3f63',
  '자유수다 / 인문': '7c6121b1-5306-4505-9812-9dffffcc7df8',
  '자유수다 / 경제 • 경영': '3f8ad6c4-650d-4b10-893d-b8f0d896ba8a',
  '자유수다 / 자기계발': 'ee4907e4-96e6-4466-84eb-dee2d92e846c',
  '자유수다 / 정치 • 사회': 'd05c87c7-4bd7-4399-aea1-8455ee100c8e',
  '자유수다 / 역사 • 문화': '7ed8ff18-38e3-4b55-8deb-df647c3d050a',
  '자유수다 / 과학': 'fe970b37-ed0e-4a9d-8683-660b74275558',
  '자유수다 / 소설': '8114a2cd-d916-4f38-a735-83815ecb0b83',
  '자유수다 / 시 • 에세이': '15c0651c-47e5-45e7-91c6-f244443a9123',
};

const Post = () => {
  const navigation = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>('');
  const [genres, setGenres] = useState('');
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [userId, setUserId] = useState('');
  const [postImg, setPostImg] = useState<string[]>([]);
  const params = useParams().id;

  // 토스트 에디터
  const toastRef = useRef<Editor>(null);

  //  카테고리
  const categories = {
    자유수다: ['인문', '경제 • 경영', '자기계발', '정치 • 사회', '역사 • 문화', '과학', '소설', '시 • 에세이'],
    도서추천: ['인문', '경제 • 경영', '자기계발', '정치 • 사회', '역사 • 문화', '과학', '소설', '시 • 에세이'],
  };

  // 유저 세션 가져오기
  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setUserId(result.session?.user.id as string);
  };

  const getPost = async () => {
    const result = await filteredPostId(params as string);
    setTitle(result[0].title);
    setTagList(result[0].tags);
    setPostImg(result[0].post_img);
    toastRef.current?.getInstance().setMarkdown(result[0].content);
  };

  const categoryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  // 장르
  const genreChangeHander = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenres(e.target.value);
  };

  // 태그
  const onChangeTagItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagItem(e.target.value);
  };

  // 엔터키를 눌렀을 때 태그 제출
  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length !== 0 && e.key === 'Enter') {
      e.preventDefault();
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    // '#' 기호를 제거한 후 다시 추가
    let formattedTagItem = `#${tagItem.replace(/^#/, '')}`;
    // 중복 태그가 없는 경우에만 추가
    if (!tagList.includes(formattedTagItem)) {
      const updateTagList = [...tagList, formattedTagItem];
      setTagList(updateTagList);
    }
    setTagItem('');
  };

  // 태그 삭제 버튼
  const DeleteTagItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const deleteTagItem = target.parentElement?.firstChild?.textContent; // 타입 안전성 확보
    if (deleteTagItem) {
      const filteredTagList = tagList.filter((tagItem) => tagItem !== deleteTagItem);
      setTagList(filteredTagList);
    }
  };

  // 아래는 이미지 url을 가져오기 위한 과정입니다.
  const onUploadImage = async (blob: Blob | File, callback: HookCallbackType) => {
    const data = await uploadImageFile(blob as File);
    setPostImg((prev) => [...prev, data.postImg]);
    const url = data.publicUrl.publicUrl;
    callback(url, 'alt text');
    return false;
  };

  // 폼 제출 핸들러
  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = toastRef.current?.getInstance().getMarkdown();
    const combined = `${category} / ${genres}`;
    const genreUuid = categoryUuid[combined];
    if (title === '' || content === '' || content === '내용을 입력해주세요 !' || genreUuid === undefined) {
      alert('입력되지 않은 내용이 있습니다');
      return;
    }
    if (window.confirm('게시글을 등록하시겠습니까?')) {
      const newPost = { userId, title, content, tags: tagList, genreUuid, postImg };
      if (params) {
        const result = await updatePostHandler(newPost, params);
        navigation(`/detail/${params}`);
      } else {
        const result = await submitPostListHandler(newPost);
        navigation(`/detail/${result[0].id}`);
      }
      setTitle('');
      setTagList([]);
    } else return;
  };

  useEffect(() => {
    getUserSession();
    params && getPost();
  }, [params]);

  return (
    <St.Container>
      <St.FormWrapper>
        <St.Form
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}>
          <St.TitleInputBox>
            <St.TitleInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              autoComplete="off"
              id="title"
            />
          </St.TitleInputBox>
          <St.TagWrapper>
            {/* 태그기능 */}
            {tagList &&
              tagList.length > 0 &&
              tagList.map((tagItem, index) => {
                return (
                  <St.tagItem key={index}>
                    <St.TagContent>{tagItem}</St.TagContent>
                    <St.DeleteTagButton
                      onClick={(e) => {
                        DeleteTagItem(e);
                      }}>
                      X
                    </St.DeleteTagButton>
                  </St.tagItem>
                );
              })}
            <St.TagInputBox>
              <St.TagInput
                value={tagItem}
                onChange={(e) => {
                  onChangeTagItem(e);
                }}
                placeholder="태그를 입력해주세요."
                type="text"
                autoComplete="off"
                tabIndex={2}
                onKeyPress={onKeyPressHandler}
              />
            </St.TagInputBox>
          </St.TagWrapper>
          <St.CategoryAndGenreBox>
            <St.CategorySelect value={category} onChange={categoryChangeHandler}>
              <St.CategoryOption value="">카테고리를 선택해주세요</St.CategoryOption>
              {Object.keys(categories).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </St.CategorySelect>
            {category && categories[category as keyof CategoriesTypes] && (
              <St.GenreSelect value={genres} onChange={genreChangeHander}>
                <St.GenreOption value="">장르를 선택해주세요</St.GenreOption>
                {categories[category as keyof CategoriesTypes].map((genre: string, index: number) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </St.GenreSelect>
            )}
          </St.CategoryAndGenreBox>
          <St.EditorBox>
            <Editor
              initialValue=""
              previewStyle="vertical"
              height="600px"
              initialEditType="wysiwyg"
              useCommandShortcut={false}
              language="ko-KR"
              ref={toastRef}
              hooks={{
                addImageBlobHook: onUploadImage,
              }}
            />
          </St.EditorBox>
          <St.SubmitButtonBox>
            <St.SubmitButton type="submit">게시하기</St.SubmitButton>
          </St.SubmitButtonBox>
        </St.Form>
      </St.FormWrapper>{' '}
    </St.Container>
  );
};

export default Post;
