import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filteredCategory } from '../../../api/supabase.api';
import { categoryUuid } from '../bookertalkpost/Post';
import * as St from './BookerTalkMain.styled';

// post 타입
export type Tablesposts = {
  id: number;
  created_at: string;
  title: string;
  content: string;
  tags: string[];
  user_id: string;
  genre_id: string;
};

const BookerTalkMain = () => {
  const navigation = useNavigate();
  const params = useParams().id;
  const date = new Date();

  const [data, setData] = useState<Tablesposts[]>();

  const renderGenreButtons = () =>
    Object.keys(categoryUuid).map((genre) => (
      <St.GenreButton
        key={genre}
        onClick={() =>
          // GenreClickhandler(genre)
          navigation(`/bookertalk/${categoryUuid[genre]}`)
        }>
        {genre}
      </St.GenreButton>
    ));

  // 포스트의 id랑 똑같은 정보 가져오는 함수
  const getFilteredCategoryPosts = async () => {
    const result = await filteredCategory(params as string);
    setData(result);
  };

  useEffect(() => {
    params && getFilteredCategoryPosts();
  }, [params]);

  return (
    <>
      <St.MainWrapper>
        <St.CategoryWrapper>
          <St.CategoryBox>
            <St.BookRecommendBox>
              <St.Title>도서추천</St.Title>

              <St.GenreButtonbox>{renderGenreButtons()}</St.GenreButtonbox>
            </St.BookRecommendBox>
            <St.FreeTalkBox>
              <St.Title>자유수다</St.Title>
              <St.GenreButtonbox>{renderGenreButtons()}</St.GenreButtonbox>
            </St.FreeTalkBox>
          </St.CategoryBox>
        </St.CategoryWrapper>

        <St.PostWrapper>
          {data?.map((item, i) => {
            return (
              <>
                <div>
                  <h2>{}</h2>
                </div>
                <div
                  key={i}
                  onClick={() => {
                    navigation(`/detail/${item.id}`);
                  }}>
                  <span>{item.title}</span>
                  <span>{item.user_id}</span>
                  <span>{item.created_at}</span>
                </div>
              </>
            );
          })}
        </St.PostWrapper>
      </St.MainWrapper>
      <div>
        <button onClick={() => navigation('/bookertalk/write')}>글 작성</button>
      </div>
    </>
  );
};

export default BookerTalkMain;
