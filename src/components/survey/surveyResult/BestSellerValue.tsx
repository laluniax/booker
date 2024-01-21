import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bestseller } from '../../../types/types';
import Loading from '../Loading';
import * as St from './SurveyResult.styled';

const BestSellerValue = () => {
  const [bestsellers, setBestsellers] = useState<Bestseller[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Bestseller[]>([]);
  const [loading, setLoading] = useState(false);
  const { genre } = useParams<{ genre?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [genre]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller');
      setBestsellers(result.data.item);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    filterBooksByGenre();
  }, [bestsellers, genre]);

  const filterBooksByGenre = () => {
    if (genre && genre !== 'all') {
      const filtered = bestsellers.filter((book) => {
        if (genre === '성공과행복') {
          return book.title.includes('성공');
        } else if (genre === '지혜') {
          return book.title.includes('지혜');
        }
        return false;
      });
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(bestsellers);
    }
  };

  const surveyList = () => {
    navigate('/survey');
  };

  return (
    <St.Container>
      <St.BackToListBtn onClick={() => surveyList()}>목록 보기</St.BackToListBtn>
      {loading ? <Loading /> : null}
      <St.ResultWrapper>
        {filteredBooks.map((item, idx) => (
          <St.Result key={idx}>
            <St.ResultRank>
              베스트 셀러 <span>{item.bestRank}</span> 위
            </St.ResultRank>
            <St.ResultImgAndInfo>
              <St.ResultImg>
                <img src={item.cover} alt="book img" />
              </St.ResultImg>
              <St.ResultInfo>
                <St.ResultTitle>{item.title}</St.ResultTitle>
                <St.ResultAuthor>저자 | {item.author}</St.ResultAuthor>{' '}
                <St.ResultPublisher>출판사 | {item.publisher}</St.ResultPublisher>
                <St.ResultPubdate>출판일 | {item.pubDate}</St.ResultPubdate>
                <St.ResultDescription>{item.description}</St.ResultDescription>
              </St.ResultInfo>
            </St.ResultImgAndInfo>
          </St.Result>
        ))}
      </St.ResultWrapper>
    </St.Container>
  );
};

export default BestSellerValue;
