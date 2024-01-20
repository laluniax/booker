import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import * as St from './BookerPick.styled';

interface BookerPicks {
  author: string;
  categoryName: string;
  cover: string;
  publisher: string;
  title: string;
  bestRank: number;
  isbn13: string;
}

const BookerPick = () => {
  const [bookerPick, setBookerPick] = useState<BookerPicks[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  const navigate = useNavigate();

  const getaNewBook = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks?page=${page}`,
      );
      setBookerPick((prev) => [...prev, ...response.data.item]);
      setPage((page) => page + 1);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      getaNewBook();
    }
  }, [inView]);

  const GotoDetailPage = (isbn13: string) => {
    navigate(`/aboutBook/${isbn13}`);
  };

  return (
    <St.Section>
      <St.Container>
        <St.Header>
          <h2>북커픽</h2>
        </St.Header>
        <St.Body>
          {bookerPick.map((book) => {
            return (
              <St.BookImageWrapper key={book.bestRank} onClick={() => GotoDetailPage(book.isbn13)}>
                <St.BookGenre>{book.categoryName}</St.BookGenre>
                <St.BookWrapper>
                  <St.BookImg>
                    <img src={book.cover} alt="책 이미지" width={200} height={250} />
                  </St.BookImg>
                  <St.BookIntro>
                    <St.Title>{book.title}</St.Title>
                    <St.AuthWrapper>
                      <St.Author>{book.author}</St.Author>
                      <St.Plot>{book.publisher}</St.Plot>
                    </St.AuthWrapper>
                  </St.BookIntro>
                </St.BookWrapper>
              </St.BookImageWrapper>
            );
          })}
          <div ref={ref} />
        </St.Body>
      </St.Container>
    </St.Section>
  );
};

export default BookerPick;
