import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type PostTypes = {
  title: string;
  content: string;
  tags: string[];
  category: string;
  genre: string;
};

type Categories = {
  자유수다: string[];
  도서추천: string[];
};

const Post = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>('');
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState('');
  const [tagItem, setTagItem] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [postList, setPostList] = useState<PostTypes[]>([]);

  //  카테고리
  const categories = {
    자유수다: ['인문', '경제 • 경영', '자기계발', '정치 • 사회', '역사 • 문화', '과학', '소설', '시 • 에세이'],
    도서추천: ['인문', '경제 • 경영', '자기계발', '정치 • 사회', '역사 • 문화', '과학', '소설', '시 • 에세이'],
  };

  const categoryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  // 장르
  const genreChangeHander = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
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
  const navigation = useNavigate();

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== '' && content.trim() !== '') {
      const newPost = {
        title,
        content,
        tags: tagList,
        category,
        genre,
      };

      setPostList([...postList, newPost]);

      setTitle('');
      setContent('');
      setTagList([]);

      // navigation('/bookertalk');
      console.log(postList);
    } else {
      alert('제목과 내용, 카테고리는 필수로 작성해주세요.');
    }
  };

  useEffect(() => {
    console.log(postList);
  }, [postList]);

  return (
    <form
      onSubmit={(e) => {
        formSubmitHandler(e);
      }}>
      <div>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          autoComplete="off"
          id="title"
        />
        <div>
          <select value={category} onChange={categoryChangeHandler}>
            <option value="">카테고리 선택</option>
            {Object.keys(categories).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        {category && categories[category as keyof Categories] && (
          <div>
            <select value={genre} onChange={genreChangeHander}>
              <option value="">장르 선택</option>
              {categories[category as keyof Categories].map((genre: string, index: number) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          {/* 태그기능 */}
          {tagList.map((tagItem, index) => {
            return (
              <div key={index}>
                <span>{tagItem}</span>
                <button
                  onClick={(e) => {
                    DeleteTagItem(e);
                  }}>
                  X
                </button>
              </div>
            );
          })}
          <input
            value={tagItem}
            onChange={(e) => {
              onChangeTagItem(e);
            }}
            placeholder="태그를 입력하세요"
            type="text"
            autoComplete="off"
            tabIndex={2}
            onKeyPress={onKeyPressHandler}
          />
        </div>
      </div>
      <div>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="당신의 이야기를 적어보세요. . ."
          id="comment"
          type="text"
          autoComplete="off"
        />
      </div>

      <div>
        <button type="submit">작성완료</button>
      </div>
    </form>
  );
};

export default Post;
