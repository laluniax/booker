import axios from 'axios';
import { useEffect, useState } from 'react';

type Bestseller = {
  bestRank: number;
  title: string;
  bestDuration: string;
  author: string;
  cover: string;
  pubDate: string;
  publisher: string;
};

const Home = () => {
  const [bestseller, setBestseller] = useState<Bestseller[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8080/bestseller');

    setBestseller(result.data.item);
  };

  console.log(bestseller);

  return (
    <div>
      {bestseller.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.bestRank}</h2>
            <h3>{item.title}</h3>
            <img src={item.cover} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
