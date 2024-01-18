import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryProductListHandler, getProductListHandler } from '../../api/supabase.api';
import * as St from './MarketList.styled';
import { categoryArr } from './marketpost/Post';

export type ListTypes = {
  id: string;
  category: string;
  title: string;
  content: string;
  created_at: string;
  product_img: string[];
  price: string;
  user_id: string;
  product_grade: string;
};

const MarketList = () => {
  const [list, setList] = useState<ListTypes[]>([]);
  const navigate = useNavigate();
  const params = useParams().id;
  const category = categoryArr[Number(params)];

  const getProductList = async () => {
    if (params) {
      const result = await getCategoryProductListHandler(category);
      setList(result);
    } else {
      const result = await getProductListHandler();
      setList(result);
    }
  };

  useEffect(() => {
    getProductList();
  }, [params]);

  return (
    <St.Container>
      <St.Title>{category ? category : '중고거래'}</St.Title>
      <St.CategoryProductsWrapper>
        <St.CategoryWrapper>
          <St.CategoryBox>
            {categoryArr.map((item, i) => (
              <St.CategoryBtn key={i} onClick={() => navigate(`/market/${i}`)}>
                {item}
              </St.CategoryBtn>
            ))}
          </St.CategoryBox>
        </St.CategoryWrapper>
        <St.ProductsWrapper>
          {list.map((item, i) => {
            return (
              <St.ProductCard
                key={i}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}>
                <St.ProductImg src={item.product_img[0]} />
                <St.ProductTitle>{item.title}</St.ProductTitle>
                <St.ProductInfo>
                  <St.ProductPrice>{item.price} 원</St.ProductPrice>
                  <St.ProductLikes>♥️ 10</St.ProductLikes>
                </St.ProductInfo>
              </St.ProductCard>
            );
          })}{' '}
        </St.ProductsWrapper>
      </St.CategoryProductsWrapper>
      <St.PostButton
        onClick={() => {
          navigate('/marketpost');
        }}>
        글쓰기
      </St.PostButton>
    </St.Container>
  );
};

export default MarketList;
