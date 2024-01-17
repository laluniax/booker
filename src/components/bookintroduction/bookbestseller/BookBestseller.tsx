import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as St from './BookIntroduction1.styled';

interface Bestseller {
  author: string;
  categoryName: string;
  cover: string;
  description: string;
  title: string;
  bestRank: number;
  isbn13: string;
}

const BookBestseller = () => {
  const [bestSeller, setBestseller] = useState<Bestseller[]>([]);
  useEffect(() => {
    bookBestseller();
  }, []);

  const navigate = useNavigate();

  console.log(bestSeller);
  const bookBestseller = async () => {
    const response = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller');
    setBestseller(response.data.item);
  };

  const GotoDetailPage = (isbn13: string) => {
    navigate(`/aboutBook/${isbn13}`);
  };

  return (
    <St.Container>
      <St.Header>
        <h2>베스트셀러</h2>
      </St.Header>
      <St.Body>
        {bestSeller.map((book) => {
          return (
            <St.BookImageWrapper key={book.bestRank} onClick={() => GotoDetailPage(book.isbn13)}>
              <St.BookGenre>{book.categoryName}</St.BookGenre>
              <St.BookWrapper>
                <St.BookImg>
                  <img src={book.cover} alt="책 이미지" />
                </St.BookImg>
                <St.BookIntro>
                  <St.Title>{book.title}</St.Title>
                  <St.Plot>{book.description}</St.Plot>
                </St.BookIntro>
              </St.BookWrapper>
            </St.BookImageWrapper>
          );
        })}
      </St.Body>
    </St.Container>
  );
};

export default BookBestseller;
