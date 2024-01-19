import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filteredCategory, getPostsHandler, getUserSessionHandler } from '../../../api/supabase.api';
import { PostsTypes } from '../../../types/types';
import { formatCreatedAt } from '../../../utils/date';
import { CateGenresTypes, categoryUuid } from '../bookertalkpost/Post';
import * as St from './BookerTalkMain.styled';

const BookerTalkMain = () => {
  const navigation = useNavigate();
  const params = useParams().id;

  const [data, setData] = useState<PostsTypes[]>();
  const [session, setSession] = useState<Session | null>();

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setSession(result.session);
  };

  const getPosts = async () => {
    if (params) {
      const result = await filteredCategory(params as string);
      setData(result.sort((a, b) => b.id - a.id));
    } else {
      const result = await getPostsHandler();
      setData(result.sort((a, b) => b.id - a.id));
    }
  };
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

  // genreUuid를 찾아서 key 역추적
  const findKeyByValue = (obj: CateGenresTypes, genreUuid: string) => {
    for (const key of Object.keys(obj)) {
      if (obj[key] === genreUuid) {
        return key;
      }
    }
  };

  const onClickPostButton = () => {
    if (session) {
      navigation('/bookertalk/write');
    } else if (!session && window.confirm('로그인 페이지로 이동하시겠습니까?')) {
      navigation(`/login`);
      return;
    } else return;
  };

  useEffect(() => {
    getUserSession();
    getPosts();
  }, [params]);

  return (
    <>
      <St.Title>
        {params ? findKeyByValue(categoryUuid, params as string) : 'BOOKER TALK'}
        <St.PostButton onClick={onClickPostButton}>글쓰기</St.PostButton>
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
                <St.PostNickName>
                  {item.users.nickname} | {formatCreatedAt(item.created_at)}
                </St.PostNickName>
              </St.PostListBox>
            );
          })}
        </St.PostListWrapper>
      </St.Container>
    </>
  );
};

export default BookerTalkMain;
