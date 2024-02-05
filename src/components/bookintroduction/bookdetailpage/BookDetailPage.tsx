import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as St from './BookDetailPage.styled';
import { BookDataTypes } from './BookDetailPage.type';

const BookDetailPage = () => {
  const params = useParams();
  const itemId = params.itemid;
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState<BookDataTypes | null>(null);

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

  if (!detailData) {
    return <div>Loading...</div>;
  }

  return (
    <St.Container>
      <St.PrevButton
        onClick={() => {
          navigate(`/aboutbooks`);
        }}></St.PrevButton>
      <St.TitleAndAuthorBox>
        <St.BookTitle>{detailData.title}</St.BookTitle>
        <St.Bookauthor>저자 | {detailData.author}</St.Bookauthor>
      </St.TitleAndAuthorBox>

      <St.BookWrapper>
        <St.InfoHeader>
          <St.BookImage>
            <img src={detailData.cover} width={400} height={600} alt={detailData.title} />
          </St.BookImage>
          <St.BookIntro>
            <St.BookDetailBox>
              <St.Publisher>출판사 | {detailData.publisher}</St.Publisher>
              <St.PubData>출판일 | {detailData.pubDate}</St.PubData>
              <St.Description>{detailData.description}</St.Description>
              <St.EmphasisDescription>주제 분류</St.EmphasisDescription>
              <St.DescriptionLi> {detailData.categoryName}</St.DescriptionLi>
              <St.EmphasisDescription>기본 정보</St.EmphasisDescription>
              <St.DescriptionLi>ISBN : {detailData.isbn13}</St.DescriptionLi>
            </St.BookDetailBox>
          </St.BookIntro>
        </St.InfoHeader>
      </St.BookWrapper>
    </St.Container>
  );
};

export default BookDetailPage;
