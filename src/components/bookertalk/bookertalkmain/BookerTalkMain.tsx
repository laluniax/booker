import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filteredCategory } from '../../../api/supabase.api';
import { foramtCreatedAt } from '../../../utils/date';
import { CateGenresTypes, categoryUuid } from '../bookertalkpost/Post';
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

  const recommendButtonHandler = () =>
    Object.keys(categoryUuid)
      .slice(0, 8)
      .map((genre) => (
        <St.GenreButton key={genre} onClick={() => navigation(`/bookertalk/${categoryUuid[genre]}`)}>
          {genre.slice(7)}
        </St.GenreButton>
      ));

  const freeTalkButtonHandler = () =>
    Object.keys(categoryUuid)
      .slice(8, 16)
      .map((genre) => (
        <St.GenreButton key={genre} onClick={() => navigation(`/bookertalk/${categoryUuid[genre]}`)}>
          {genre.slice(7)}
        </St.GenreButton>
      ));

  // 포스트의 id랑 똑같은 정보 가져오는 함수
  const getFilteredCategoryPosts = async () => {
    const result = await filteredCategory(params as string);
    setData(result);
  };

  // genreUuid를 찾아서 key 역추적
  const findKeyByValue = (obj: CateGenresTypes, genreUuid: string) => {
    for (const key of Object.keys(obj)) {
      if (obj[key] === genreUuid) {
        return key;
      }
    }
  };

  useEffect(() => {
    params && getFilteredCategoryPosts();
  }, [params]);

  return (
    <>
      <St.Title>
        {params ? findKeyByValue(categoryUuid, params as string) : 'BOOKER TALK'}
        <St.PostButton onClick={() => navigation('/bookertalk/write')}>글쓰기</St.PostButton>
      </St.Title>
      <St.Container>
        <St.CategoryWrapper>
          <St.CategoryBox>
            <St.BookRecommendBox>
              <St.CategoryTitle>도서추천</St.CategoryTitle>

              <St.GenreButtonbox>{recommendButtonHandler()}</St.GenreButtonbox>
            </St.BookRecommendBox>
            <St.FreeTalkBox>
              <St.CategoryTitle>자유수다</St.CategoryTitle>
              <St.GenreButtonbox>{freeTalkButtonHandler()}</St.GenreButtonbox>
            </St.FreeTalkBox>
          </St.CategoryBox>
        </St.CategoryWrapper>
        <St.PostListWrapper>
          {data?.map((item, i) => {
            return (
              <St.PostListBox
                key={i}
                onClick={() => {
                  navigation(`/detail/${item.id}`);
                }}>
                <St.PostTitle>{item.title}</St.PostTitle>
                {/* <span>{item.user_id}</span> */}
                {/* <St.PostContent>{item.content}</St.PostContent> */}
                <St.PostNickName>닉네임 | {foramtCreatedAt(item.created_at)}</St.PostNickName>
              </St.PostListBox>
            );
          })}
        </St.PostListWrapper>
      </St.Container>
    </>
  );
};

export default BookerTalkMain;
