import axios from 'axios';
import { useEffect, useState } from 'react';
import AboutBookNav from '../AboutBookNav';
import * as St from './bookIntroduction.styled';

interface Bestseller {
  author: string;
  categoryName: string;
  cover: string;
  description: string;
  title: string;
  bestRank: number;
}

const BookBestseller = () => {
  const [bestSeller, setBestseller] = useState<Bestseller[]>([]);
  useEffect(() => {
    bookBestseller();
  }, []);

  const bookBestseller = async () => {
    const response = await axios.get('https://port-0-node-express-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller');
    setBestseller(response.data.item);
  };

  return (
    <St.Section>
      <AboutBookNav />
      <St.Container>
        <St.Header>
          <h2>베스트셀러</h2>
        </St.Header>
        <St.Body>
          {bestSeller.map((book) => {
            return (
              <St.BookImageWrapper key={book.bestRank}>
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
    </St.Section>
  );
};

export default BookBestseller;
