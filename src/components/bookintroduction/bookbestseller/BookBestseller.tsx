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
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const bookBestseller = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      setLoading(true);
      const response = await axios.get(
        `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller?page=${page}`,
      );
      setBestseller((prev) => [...prev, ...response.data.item]);
      setPage((page) => page + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      bookBestseller();
    }
  }, [inView]);

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
