import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from '../../common/loading/Loading';
import * as St from './SurveyResult.styled';
import { BestsellerTypes } from './SurveyResult.type';

const SurveyResult = () => {
  // 카테고리 별로 api 가져왔으니 선택하여 사용하시면 됩니다.
  const [bestsellers, setBestsellers] = useState<BestsellerTypes[]>([]);
  const [newbooks, setNewbooks] = useState<BestsellerTypes[]>([]);
  const [special, setSpecial] = useState<BestsellerTypes[]>([]);
  const [bookerpick, setBookerpick] = useState<BestsellerTypes[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BestsellerTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search')?.split('/');
  const question = keyword && keyword[0];
  const genre = keyword && keyword[1];
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      switch (question) {
        case 'domfor':
        case 'genre':
        case 'new':
        case 'price':
        case 'pricenovel':
          setLoading(true);
          const resultBestseller = await axios.get(
            'https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller',
          );
          setBestsellers(resultBestseller.data.item);
          setLoading(false);
          break;
        case 'newbooks':
          setLoading(true);
          const resultNew = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks');
          setNewbooks(resultNew.data.item);
          setLoading(false);
          break;
        case 'special':
          setLoading(true);
          const resultSpecial = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/special');
          setSpecial(resultSpecial.data.item);
          setLoading(false);
          break;
        case 'bookertalk':
          setLoading(true);
          const resultBlogbest = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/BlogBest');
          setBookerpick(resultBlogbest.data.item);
          setLoading(false);
          break;
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const filteringDomforHandler = () => {
    if (genre && genre !== 'all') {
      switch (question) {
        case 'domfor':
          const filteredDomfor = bestsellers.filter((book) => {
            if (genre === '국내작가도서') {
              return (
                !book.author.includes('옮긴이') &&
                !book.categoryName.includes('외국어') &&
                !book.categoryName.includes('자격증') &&
                !book.categoryName.includes('어린이')
              );
            } else if (genre === '외국작가도서') {
              return (
                book.author.includes('옮긴이') &&
                !book.categoryName.includes('외국어') &&
                !book.categoryName.includes('자격증') &&
                !book.categoryName.includes('어린이')
              );
            }
            return false;
          });
          setFilteredBooks(filteredDomfor);
          break;
        case 'genre':
          const filteredGenre = bestsellers.filter((book) => book.categoryName.includes(genre));
          setFilteredBooks(filteredGenre);
          break;
        case 'new':
          const filteredNew = bestsellers.filter((book) => book.categoryName.includes(genre));
          setFilteredBooks(filteredNew);
          break;
        case 'price':
          const filteredPrice = bestsellers.filter((book) => book.categoryName.includes(genre));
          setFilteredBooks(filteredPrice);
          break;
        case 'pricenovel':
          const filteredPricenovel = bestsellers.filter((book) => book.categoryName.includes(genre));
          setFilteredBooks(filteredPricenovel);
          break;
        default:
          break;
      }
    } else {
      setFilteredBooks(bestsellers);
    }
  };

  const surveyList = () => {
    navigate('/survey');
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    filteringDomforHandler();
  }, [bestsellers]);

  return (
    <St.Container>
      <St.BackToListBtn onClick={() => surveyList()}></St.BackToListBtn>
      {loading ? (
        <Loading />
      ) : (
        <St.ResultWrapper>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item, idx) => (
              <St.Result key={idx}>
                {item.bestRank ? (
                  <St.ResultRank>
                    베스트셀러 <p>{item.bestRank}</p>위
                  </St.ResultRank>
                ) : null}
                <St.ResultImgAndInfo>
                  <St.ResultImg>
                    <img src={item.cover} alt="book img" loading="lazy" />
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
            ))
          ) : (
            <St.NoResultWrapper>
              <St.ResultTitle>아쉽게도 맞춤추천 결과가 없습니다😭</St.ResultTitle>
            </St.NoResultWrapper>
          )}
        </St.ResultWrapper>
      )}
    </St.Container>
  );
};

export default SurveyResult;
