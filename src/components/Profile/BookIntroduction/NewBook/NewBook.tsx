import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as St from './newBook.styled';

interface NewBooks {
  author: string;
  categoryName: string;
  cover: string;
  description: string;
  title: string;
  bestRank: number;
  itemId: number;
}
const NewBook = () => {
  const [newBook, setNewBook] = useState<NewBooks[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getaNewBook();
  }, []);
  const getaNewBook = async () => {
    const response = await axios.get('https://port-0-node-express-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks');
    setNewBook(response.data.item);
  };
  console.log(newBook);

  const GotoDetailPage = (itemId: number) => {
    navigate(`/aboutBook/${itemId}`);
  };
  return (
    <St.Section>
      <St.Container>
        <St.Header>
          <h2>신간도서</h2>
        </St.Header>
        <St.Body>
          {newBook.map((book) => {
            return (
              <St.BookImageWrapper key={book.bestRank} onClick={() => GotoDetailPage(book.itemId)}>
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

export default NewBook;
