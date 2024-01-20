import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as St from './BookDetailPage.styled';

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
  const params = useParams();
  console.log(params);
  const itemId = params.itemid;
  const [detailData, setDetailData] = useState<BookData | null>(null);

  console.log(typeof detailData);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get(
        `https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/search?isbn=${itemId}`,
      );
      setDetailData(response.data.aladinData.item[0]);
    } catch (error) {
      console.error('Failed to fetch book data:', error);
    }
  };
  console.log(detailData);
  if (!detailData) {
    return <div>Loading...</div>;
  }

  return (
    <St.Container>
      <St.Category>{detailData.categoryName}</St.Category>
      <St.BookWrapper>
        <St.Bookinfo>
          <St.BookTitle>{detailData.title}</St.BookTitle>
          <St.BookImage>
            <img src={detailData.cover} alt={detailData.title} />
          </St.BookImage>
        </St.Bookinfo>
        <St.BookIntro>
          <St.Bookauthor>{detailData.author}</St.Bookauthor>
          <St.Publisher>{detailData.publisher}</St.Publisher>
          <St.Description>{detailData.description}</St.Description>
          <St.PubData>출간일:{detailData.pubDate}</St.PubData>
        </St.BookIntro>
      </St.BookWrapper>
    </St.Container>
  );
};

export default BookDetailPage;
