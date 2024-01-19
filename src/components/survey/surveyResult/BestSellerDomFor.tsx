import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bestseller } from '../../../types/types';

const BestSellerDomFor = () => {
  const [bestsellers, setBestsellers] = useState<Bestseller[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Bestseller[]>([]);
  const { genre } = useParams<{ genre?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [genre]);
  console.log(genre);
  const fetchData = async () => {
    try {
      const result = await axios.get('https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller');
      setBestsellers(result.data.item);
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
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(bestsellers);
    }
  };

  const surveyList = () => {
    navigate('/survey');
  };

  return (
    <div>
      <button onClick={() => surveyList()}>목록보기</button>
      {filteredBooks.map((item, idx) => (
        <div key={idx}>
          <h2>{item.bestRank}</h2>
          <h3>{item.title}</h3>
          <h3>{item.author}</h3>
          <h3>{item.pubDate}</h3>
          <h3>{item.description}</h3>
          <img src={item.cover} alt="book img" />
        </div>
      ))}
    </div>
  );
};

export default BestSellerDomFor;
