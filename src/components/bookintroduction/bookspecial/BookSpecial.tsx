import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import * as St from './BookSpecial.styled';

interface Special {
  author: string;
  categoryName: string;
  cover: string;
  publisher: string;
  title: string;
  bestRank: number;
  isbn13: string;
}

const BookSpecial = () => {
  const [special, setSpecial] = useState<Special[]>([]);
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const navigate = useNavigate();

  const getSpecial = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/special?page=${page}`);
      setSpecial((prev) => [...prev, ...response.data.item]);
      setPage((page) => page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      getSpecial();
    }
  }, [inView]);

  const GotoDetailPage = (isbn13: string) => {
    navigate(`/aboutBook/${isbn13}`);
  };

  return (
    <St.Section>
      <St.Container>
        <St.Header>
          <h2>스페셜</h2>
        </St.Header>
        <St.Body>
          {special.map((book) => {
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

export default BookSpecial;
