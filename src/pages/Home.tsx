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
  const [newbooks, setNewbooks] = useState<Bestseller[]>([]);
  const [special, setSpecial] = useState<Bestseller[]>([]);
  const [blogBest, setBlogBest] = useState<Bestseller[]>([]);

  useEffect(() => {
    fetchData();
    newBook();
    bookData();
    // blog();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8080/bestseller');
    setBestseller(result.data.item);
  };

  const newBook = async () => {
    const result = await axios.get('http://localhost:8080/newbooks');
    setNewbooks(result.data.item);
  };

  const bookData = async () => {
    const result = await axios.get('http://localhost:8080/special');
    setSpecial(result.data.item);
  };

  // const blog = async () => {
  //   const result = await axios.get('http://localhost:8080/BlogBest');
  //   setBlogBest(result.data.item);
  // };

  return (
    <>
      {/* 베스트셀러 */}
      <div style={{ display: 'flex' }}>
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
      {/* 신간 */}
      <div style={{ display: 'flex' }}>
        {newbooks.map((item, idx) => {
          return (
            <div key={idx}>
              <h2>{item.bestRank}</h2>
              <h3>{item.title}</h3>
              <img src={item.cover} alt="" />
            </div>
          );
        })}
      </div>
      {/* 스페셜 */}
      <div style={{ display: 'flex' }}>
        {special.map((item, idx) => {
          return (
            <div key={idx}>
              <h2>{item.bestRank}</h2>
              <h3>{item.title}</h3>
              <img src={item.cover} alt="" />
            </div>
          );
        })}
      </div>
      {/* 블로그베스트 */}
      <div style={{ display: 'flex' }}>
        {blogBest.map((item, idx) => {
          return (
            <div key={idx}>
              <h2>{item.bestRank}</h2>
              <h3>{item.title}</h3>
              <img src={item.cover} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
