import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as St from './bookDetailPage.styled';

interface BookData {
  title: string;
  categoryName: string;
  author: string;
  cover: string;
  description: string;
  pubDate: string;
  publisher: string;
  isbn13: string;
}

const BookDetailPage = () => {
  const { itemId } = useParams();
  const [detailData, setDetailData] = useState<BookData[]>([]);

  useEffect(() => {
    getBooks();
  }, []);
  const navigate = useNavigate();
  const getBooks = async () => {
    const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/search?isbn=${itemId}`);

    setDetailData(response.data.aladinData.item);
  };

  return (
    <St.Container>
      {detailData.map((book) => {
        return (
          <>
            <St.Category>{detailData[0].categoryName}</St.Category>
            <St.BookWrapper>
              <St.Bookinfo>
                <St.BookTitle>{detailData[0].title}</St.BookTitle>
                <St.BookImage>
                  <img src={detailData[0].cover} alt={detailData[0].title} />
                </St.BookImage>
              </St.Bookinfo>
              <St.BookIntro>
                <St.Bookauthor>{detailData[0].author}</St.Bookauthor>
                <St.Publisher>{detailData[0].publisher}</St.Publisher>
                <St.Description>{detailData[0].description}</St.Description>
                <St.PubData>출간일:{detailData[0].pubDate}</St.PubData>
              </St.BookIntro>
            </St.BookWrapper>
          </>
        );
      })}
      {/* */}
    </St.Container>
  );
};

export default BookDetailPage;
