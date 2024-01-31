import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import Loading from '../../common/loading/Loading';
import * as St from '../BookIntroduction.styled';

interface Bestseller {
  author: string;
  categoryName: string;
  cover: string;
  publisher: string;
  title: string;
  bestRank: number;
  isbn13: number;
}

const BookBestseller = () => {
  const [bestSeller, setBestseller] = useState<Bestseller[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [ref, inView] = useInView({
    threshold: 0.5, // 스크롤이 요소의 50%에 도달했을 때 inView가 true가 됩니다.
  });
  const ITEMS_PER_PAGE = 10;

  const bookBestseller = async (pageNum: number) => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller?page=${pageNum}&limit=${ITEMS_PER_PAGE}`,
      );

      if (response.data.item.length < ITEMS_PER_PAGE) {
        setHasMoreData(false);
      }

      // 현재 페이지에 해당하는 데이터만 추가
      setBestseller((prev) => [
        ...prev,
        ...response.data.item.slice((pageNum - 1) * ITEMS_PER_PAGE, pageNum * ITEMS_PER_PAGE),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bookBestseller(page); // 현재 페이지 데이터 로딩
  }, [page]);

  useEffect(() => {
    if (inView && hasMoreData && !isLoading) {
      setPage((prevPage) => prevPage + 1); // 다음 페이지 로드
    }
  }, [inView, hasMoreData, isLoading]);

  const GotoDetailPage = (isbn13: number) => {
    navigate(`/aboutBook/${isbn13}`);
  };

  return (
    <St.Container>
      <St.Header>
        <St.CategoryTitle>베스트셀러</St.CategoryTitle>
      </St.Header>
      <St.Body>
        {loading ? <Loading /> : null}
        {bestSeller.map((book, i) => {
          return (
            <St.BookCardWrapper key={i} onClick={() => GotoDetailPage(book.isbn13)}>
              {/* <br /> */}
              {/* <St.BookCardWrapper> */}
              <St.BookImg>
                <img src={book.cover} alt="책 이미지" width={230} height={290} />
              </St.BookImg>
              <St.BookIntro>
                <St.Title>{book.title}</St.Title>
                <St.Author>저자 | {book.author}</St.Author>
                <St.Plot>출판사 | {book.publisher}</St.Plot>
              </St.BookIntro>
            </St.BookCardWrapper>
            // </St.BookCardWrapper>
          );
        })}
        <div ref={ref}></div>
      </St.Body>
    </St.Container>
  );
};

export default BookBestseller;
