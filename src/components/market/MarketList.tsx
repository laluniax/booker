import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryProductListHandler, getProductListHandler, getUserSessionHandler } from '../../api/supabase.api';
import { ProductsTypes } from '../../types/types';
import Pagination from '../common/pagination/Pagination';
import * as St from './MarketList.styled';
import { categoryArr } from './marketpost/Post';

const MarketList = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [list, setList] = useState<ProductsTypes[]>([]);

  const navigate = useNavigate();
  const params = useParams().id;
  const category = categoryArr[Number(params)];

  //페이지네이션 state
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
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

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = list?.slice(indexOfFirst, indexOfLast);

  return (
    <St.Container>
      <St.CategoryProductsWrapper>
        <St.CategoryWrapper>
          <St.CategoryBox>
            <St.CategoryTitle
              onClick={() => {
                navigate(`/market`);
              }}>
              카테고리
            </St.CategoryTitle>
            <St.CategoryBtnBox>
              {categoryArr.map((item, i) => (
                <St.CategoryBtn
                  key={i}
                  onClick={() => navigate(`/market/${i}`)}
                  className={i === Number(params) ? 'active' : ''}>
                  {item}
                </St.CategoryBtn>
              ))}
            </St.CategoryBtnBox>
          </St.CategoryBox>
        </St.CategoryWrapper>{' '}
        <St.ContentsWrapper>
          <St.Title>
            {category ? category : '중고거래'}
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
          </St.Title>
          <St.ProductsWrapper>
            {currentPosts.map((item, i) => {
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
                    <St.ProductImg>
                      <img src={(item.product_img && item.product_img[0]) ?? undefined} />
                    </St.ProductImg>
                  )}

                  <St.ProductTitle>{item.title}</St.ProductTitle>
                  <St.ProductInfo>
                    <St.ProductPrice>{item.price} 원</St.ProductPrice>
                    <St.ProductLikes>♥️</St.ProductLikes>
                  </St.ProductInfo>
                  {item.onsale ? null : <St.Onsale>판매 완료</St.Onsale>}
                </St.ProductCard>
              );
            })}
          </St.ProductsWrapper>
          <St.PaginationWrapper>
            <Pagination postsPerPage={postsPerPage} totalPosts={list.length} paginate={setCurrentPage} />
          </St.PaginationWrapper>
        </St.ContentsWrapper>
      </St.CategoryProductsWrapper>
    </St.Container>
  );
};

export default MarketList;
