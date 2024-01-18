import axios from 'axios';
import { useEffect, useState } from 'react';
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
  useEffect(() => {
    getaNewBook();
  }, []);

  const navigate = useNavigate();

  const getaNewBook = async () => {
    const response = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks');
    setBookerPick(response.data.item);
  };

  const GotoDetailPage = (isbn13: string) => {
    navigate(`/aboutBook/${isbn13}`);
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
        </St.Body>
      </St.Container>
    </St.Section>
  );
};

export default BookerPick;
