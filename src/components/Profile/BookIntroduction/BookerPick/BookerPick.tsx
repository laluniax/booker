import axios from 'axios';
import { useEffect, useState } from 'react';
import * as St from './bookerPick.styled';

interface BookerPicks {
  author: string;
  categoryName: string;
  cover: string;
  description: string;
  title: string;
  bestRank: number;
}

const BookerPick = () => {
  const [bookerPick, setBookerPick] = useState<BookerPicks[]>([]);
  useEffect(() => {
    getaNewBook();
  }, []);
  const getaNewBook = async () => {
    const response = await axios.get('https://port-0-node-express-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks');
    setBookerPick(response.data.item);
  };
  /* 중첩 라우터 , 레이아웃을 하나 만들고  */
  return (
    <St.Section>
      <St.Container>
        <St.Header>
          <h2>북커픽</h2>
        </St.Header>
        <St.Body>
          {bookerPick.map((book) => {
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

export default BookerPick;
