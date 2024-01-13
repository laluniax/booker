import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filteredCategory } from '../../../api/supabase.api';
import { categoryUuid } from '../bookertalkpost/Post';
import * as St from './BookerTalkMain.styled';

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
  // const genreData = {
  //   인문: ['책1', '책2'],
  //   경제경영: ['책3', '책4'],
  //   자기계발: ['책5', '책6'],
  //   정치사회: ['책7', '책8'],
  //   역사문화: ['책9', '책10'],
  //   과학: ['책11', '책12'],
  //   소설: ['책13', '책14'],
  //   시에세이: ['책15', '책16'],
  // };
  // const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [data, setData] = useState<Tablesposts[]>();

  // const GenreClickhandler = (genre: string) => {
  //   setSelectedGenre(genre);
  // };

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

  // const renderSelectedGenre = () =>
  //   selectedGenre && (
  //     <div>
  //       <h2>{selectedGenre}</h2>
  //       <ul>
  //         {genreData[selectedGenre as keyof typeof genreData].map((book) => (
  //           <li key={book}>{book}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

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
        <div>
          <h2></h2>
        </div>
        <St.PostWrapper>
          {/* <St.PostBox>{renderSelectedGenre()}</St.PostBox> */}
          {data?.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  navigation(`/detail/${item.id}`);
                }}>
                <span>{item.title}</span>
                <span>{item.user_id}</span>
                <span>방금 전</span>
              </div>
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
