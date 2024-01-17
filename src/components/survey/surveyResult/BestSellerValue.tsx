import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bestseller } from '../../../types/types';

const BestSellerValue = () => {
  const [bestsellers, setBestsellers] = useState<Bestseller[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Bestseller[]>([]);
  const { genre } = useParams<{ genre?: string }>();

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

  return (
    <div>
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

export default BestSellerValue;
