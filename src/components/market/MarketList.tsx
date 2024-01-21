import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryProductListHandler, getProductListHandler, getUserSessionHandler } from '../../api/supabase.api';
import { ProductsTypes } from '../../types/types';
import * as St from './MarketList.styled';
import { categoryArr } from './marketpost/Post';

const MarketList = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [list, setList] = useState<ProductsTypes[]>([]);

  console.log(list);

  const navigate = useNavigate();
  const params = useParams().id;
  const category = categoryArr[Number(params)];

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    console.log(result);
    setSession(result.session);
  };

  const getProductList = async () => {
    if (params) {
      const result = await getCategoryProductListHandler(category);
      setList(result.sort((a, b) => b.id - a.id));
    } else {
      const result = await getProductListHandler();
      setList(result.sort((a, b) => b.id - a.id));
    }
  };

  useEffect(() => {
    getUserSession();
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
                className={item.onsale ? '' : 'soldout'}
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}>
                {item.product_img?.length === 0 ? (
                  <St.LogoImg>
                    <img src={`${process.env.PUBLIC_URL}/images/common/logo.png`} alt="logo" />
                  </St.LogoImg>
                ) : (
                  <St.ProductImg src={(item.product_img && item.product_img[0]) ?? undefined} />
                )}

                <St.ProductTitle>{item.title}</St.ProductTitle>
                <St.ProductInfo>
                  <St.ProductPrice>{item.price} 원</St.ProductPrice>
                  <St.ProductLikes>♥️ 10</St.ProductLikes>
                </St.ProductInfo>
                {item.onsale ? null : <St.Onsale>판매 완료</St.Onsale>}
              </St.ProductCard>
            );
          })}
        </St.ProductsWrapper>
      </St.CategoryProductsWrapper>
      <St.PostButton
        onClick={() => {
          {
            session
              ? navigate('/marketpost')
              : window.confirm('로그인 페이지로 이동하시겠습니까?') && navigate(`/login`);
          }
        }}>
        글쓰기
      </St.PostButton>
    </St.Container>
  );
};

export default MarketList;
