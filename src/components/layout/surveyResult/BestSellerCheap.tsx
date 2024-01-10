import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Bestseller = {
  bestRank: number;
  title: string;
  author: string;
  cover: string;
  pubDate: string;
  description: string;
  categoryName: string;
  priceStandard: number;
};

const BestSellerCheap = () => {
  const [bestsellers, setBestsellers] = useState<Bestseller[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Bestseller[]>([]);
  const { genre } = useParams<{ genre?: string }>();

  useEffect(() => {
    fetchData();
  }, [genre]);
  console.log(genre);
  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/bestseller');
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
      const filtered = bestsellers.filter((book) => book.categoryName.includes(genre));
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

export default BestSellerCheap;
