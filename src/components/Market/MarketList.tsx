import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductListHandler } from '../../api/supabase.api';

export type ListTypes = {
  id: string;
  category: string;
  title: string;
  content: string;
  created_at: string;
  product_img: string;
  price: string;
  user_id: string;
  product_grade: string;
};

const MarketList = () => {
  const [list, setList] = useState<ListTypes[]>([]);
  console.log(list);
  const navigate = useNavigate();

  const getProductList = async () => {
    const result = await getProductListHandler();
    setList(result);
  };

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <>
      <div>MarketList</div>
      <button
        onClick={() => {
          navigate('/marketpost');
        }}>
        글 쓰기
      </button>
      {list.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: '0.2rem solid pink' }}
            onClick={() => {
              navigate(`/product/${item.id}`);
            }}>
            <div>title: {item.title}</div>
            <div>content: {item.content}</div>
            <div>price: {item.price}</div>
            <div>category: {item.category}</div>
            <div>grade: {item.product_grade}</div>
          </div>
        );
      })}
    </>
  );
};

export default MarketList;
