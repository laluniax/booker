import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filteredCategory, getPostsHandler, getUserSessionHandler } from '../../../api/supabase.api';
import { PostsTypes } from '../../../types/types';
import { formatCreatedAt } from '../../../utils/date';
import Pagination from '../../common/pagination/Pagination';
import { CateGenresTypes, categoryUuid } from '../bookertalkpost/Post';
import * as St from './BookerTalkMain.styled';

const BookerTalkMain = () => {
  const navigation = useNavigate();
  const params = useParams().id;

  const [data, setData] = useState<PostsTypes[]>();
  const [session, setSession] = useState<Session | null>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;

  // 장르 버튼을 눌렀을 때 색을 변경하기 위한 상태 입니다.
  const [selectedGenre, setSelectedGenre] = useState<null | string>(null);

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
        <St.GenreButton
          key={genre}
          className={categoryUuid[genre] === params ? 'active' : ''}
          onClick={() => {
            setSelectedGenre(genre); // 선택된 장르 상태를 업데이트해서 색 변경
            navigation(`/bookertalk/${categoryUuid[genre]}`);
          }}>
          {genre.slice(7)}
        </St.GenreButton>
      ));

  const freeTalkButtonHandler = () =>
    Object.keys(categoryUuid)
      .slice(8, 16)
      .map((genre) => (
        <St.GenreButton
          className={categoryUuid[genre] === params ? 'active' : ''}
          key={genre}
          onClick={() => {
            setSelectedGenre(genre); // 선택된 장르 상태를 업데이트해서 색 변경
            navigation(`/bookertalk/${categoryUuid[genre]}`);
          }}>
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

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = data?.slice(indexOfFirst, indexOfLast);

  return (
    <St.Container>
      <St.CategoryWrapper>
        <St.CategoryBox>
          <St.CategoryTopTitle
            onClick={() => {
              navigation(`/bookertalk`);
            }}>
            카테고리
          </St.CategoryTopTitle>
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

      <St.ContentWrapper>
        <St.Title>
          {params ? findKeyByValue(categoryUuid, params as string) : '북커톡'}
          <St.PostButton onClick={onClickPostButton}>글쓰기</St.PostButton>
        </St.Title>
        <St.MobilePostCateWrapper>
          <St.MobileCategoryWrapper>
            <select onChange={(e) => navigation(`/bookertalk/${categoryUuid[e.target.value]}`)}>
              {Object.keys(categoryUuid).map((item, i) => {
                return <option key={i}>{item}</option>;
              })}
            </select>
          </St.MobileCategoryWrapper>
          <St.MobilePostButton onClick={onClickPostButton}>글쓰기</St.MobilePostButton>
        </St.MobilePostCateWrapper>
        <St.PostListWrapper>
          {currentPosts?.map((item, i) => {
            return (
              <St.PostListBox
                key={i}
                onClick={() => {
                  navigation(`/detail/${item.id}`);
                }}>
                <St.PostTitle>{item.title}</St.PostTitle>
                <St.PostNicknameDate>
                  <St.PostNickName>{item.users.nickname}</St.PostNickName>
                  <St.PostDate>{formatCreatedAt(item.created_at)}</St.PostDate>
                </St.PostNicknameDate>
              </St.PostListBox>
            );
          })}
          <St.PaginationWrapper>
            <Pagination postsPerPage={postsPerPage} totalPosts={data?.length ?? 0} paginate={setCurrentPage} />
          </St.PaginationWrapper>
        </St.PostListWrapper>
      </St.ContentWrapper>
    </St.Container>
  );
};

export default BookerTalkMain;
