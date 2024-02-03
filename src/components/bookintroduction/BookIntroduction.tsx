import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loading from '../common/loading/Loading';
import * as St from './BookIntroduction.styled';
import { BestsellerTypes } from './BookIntroduction.type';

const BookIntroduction = () => {
  const [bookLists, setBookLists] = useState<BestsellerTypes[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [title, setTitle] = useState('베스트셀러');
  const [url, setUrl] = useState(
    `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller?page=${page}&limit=10`,
  );
  const [ref, inView] = useInView({
    threshold: 0.5, // 스크롤이 요소의 50%에 도달했을 때 inView가 true가 됩니다.
  });
  const ITEMS_PER_PAGE = 10;
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams().id;
  const [selectedCategory, setSelectedCategory] = useState<string>(location.pathname);
  const CategoryClickHandler = (category: string) => {
    setSelectedCategory(category); // 현재 선택된 카테고리 상태를 업데이트
    navigate(category);
  };

  const getBookCategory = () => {
    switch (params) {
      case 'bestseller':
        setUrl(
          `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller?page=${page}&limit=${ITEMS_PER_PAGE}`,
        );
        setTitle('베스트셀러');
        break;
      case 'newbook':
        setUrl(
          `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks?page=${page}&limit=${ITEMS_PER_PAGE}`,
        );
        setTitle('신간도서');

        break;
      case 'bookspecial':
        setUrl(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/special?page=${page}&limit=${ITEMS_PER_PAGE}`);
        setTitle('스페셜');

        break;
      case 'bookerpick':
        setUrl(
          `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/BlogBest?page=${page}&limit=${ITEMS_PER_PAGE}`,
        );
        setTitle('북커픽');
        break;
    }
  };

  const getBookList = async (pageNum: number) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url as string);
      if (response.data.item.length < ITEMS_PER_PAGE) {
        setHasMoreData(false);
      }
      // 현재 페이지에 해당하는 데이터만 추가
      setBookLists((prev) => [
        ...prev,
        ...response.data.item.slice((pageNum - 1) * ITEMS_PER_PAGE, pageNum * ITEMS_PER_PAGE),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const GotoDetailPage = (isbn13: number) => {
    navigate(`/aboutbook/detail/${isbn13}`);
  };

  useEffect(() => {
    getBookList(page); // 현재 페이지 데이터 로딩
  }, [page]);

  useEffect(() => {
    getBookCategory();
    getBookList(page); // 현재 페이지 데이터 로딩
    setPage(1);
  }, [params]);

  useEffect(() => {
    setBookLists([]); // 리스트 초기화
    getBookList(page); // 새 URL로 데이터 로딩
  }, [url]);

  useEffect(() => {
    if (inView && hasMoreData && !isLoading) {
      setPage((prevPage) => prevPage + 1); // 다음 페이지 로드
    }
  }, [inView, hasMoreData, isLoading]);

  return (
    <St.Container>
      <St.CategoryWrapper>
        <St.CatrgoryBox>
          <St.Category>
            <St.CategoryList
              className={selectedCategory === '/aboutbook/bestseller' ? 'active' : ''}
              onClick={() => CategoryClickHandler('/aboutbook/bestseller')}>
              베스트셀러
            </St.CategoryList>
            <St.CategoryList
              className={selectedCategory === '/aboutbook/newbook' ? 'active' : ''}
              onClick={() => CategoryClickHandler('/aboutbook/newbook')}>
              신간도서
            </St.CategoryList>
            <St.CategoryList
              // isSelected={selectedCategory === 'BookSpecial'}
              className={selectedCategory === '/aboutbook/bookspecial' ? 'active' : ''}
              onClick={() => CategoryClickHandler('/aboutbook/bookspecial')}>
              스페셜
            </St.CategoryList>
            <St.CategoryList
              // isSelected={selectedCategory === 'BookerPick'}
              className={selectedCategory === '/aboutbook/bookerpick' ? 'active' : ''}
              onClick={() => CategoryClickHandler('/aboutbook/bookerpick')}>
              북커픽
            </St.CategoryList>
          </St.Category>
        </St.CatrgoryBox>
      </St.CategoryWrapper>
      <St.BookintroWrapper>
        <St.Header>
          <St.CategoryTitle>{title}</St.CategoryTitle>
        </St.Header>
        <St.Body>
          {isLoading ? <Loading /> : null}
          {bookLists.map((book, i) => {
            return (
              <St.BookCardWrapper key={i} onClick={() => GotoDetailPage(book.isbn13)}>
                <St.BookCardWrapper>
                  <St.BookImg>
                    <img src={book.cover} alt="책 이미지" width={230} height={290} />
                  </St.BookImg>
                  <St.BookIntro>
                    <St.Title>{book.title}</St.Title>
                    <St.Author>저자 | {book.author}</St.Author>
                    <St.Plot>출판사 | {book.publisher}</St.Plot>
                  </St.BookIntro>
                </St.BookCardWrapper>
              </St.BookCardWrapper>
            );
          })}
          <div ref={ref}></div>
        </St.Body>
      </St.BookintroWrapper>
    </St.Container>
  );
};

export default BookIntroduction;
