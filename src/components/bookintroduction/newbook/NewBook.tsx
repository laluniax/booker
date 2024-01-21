import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import * as St from '../BookIntroduction.styled';

interface NewBooks {
  author: string;
  categoryName: string;
  cover: string;
  publisher: string;
  title: string;
  bestRank: number;
  isbn13: string;
}
const NewBook = () => {
  const [newBook, setNewBook] = useState<NewBooks[]>([]);
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const getaNewBook = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks?page=${page}`,
      );
      setNewBook((prev) => [...prev, ...response.data.item]);
      setPage((page) => page + 1);
    } catch (error) {
      console.error(error);
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
    <St.Container>
      <St.Header>
        <St.CategoryTitle>신간도서</St.CategoryTitle>
      </St.Header>
      <St.Body>
        {newBook.map((book) => {
          return (
            <St.BookCardWrapper key={book.bestRank} onClick={() => GotoDetailPage(book.isbn13)}>
              {/* <St.BookGenre>{book.categoryName}</St.BookGenre> */}
              <St.BookCardWrapper>
                <St.BookImg>
                  <img src={book.cover} alt="책 이미지" width={230} height={290} />
                </St.BookImg>
                <St.BookIntro>
                  <St.Title>{book.title}</St.Title>
                  <St.Author>{book.author}</St.Author>
                  <St.Plot>{book.publisher}</St.Plot>
                </St.BookIntro>
              </St.BookCardWrapper>
            </St.BookCardWrapper>
          );
        })}
        <div ref={ref} />
      </St.Body>
    </St.Container>
  );
};

export default NewBook;
