import React, { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getCategoryProductListHandler, getProductListHandler } from '../../api/Supabase.api';
import { userSession } from '../../state/atom/userSessionAtom';
import { ProductsTypes } from '../../types/types';
import Pagination from '../common/pagination/Pagination';
import * as St from './MarketList.styled';
import { categoryArr } from './marketpost/Post';

const CategoryButton = lazy(() => import('./categorybutton/CategoryButton'));
const MarketProductsCard = React.memo(lazy(() => import('./marketproductscard/MarketProductsCard')));
const MobileCategory = lazy(() => import('./mobileCategory/MobileCategory'));

const MarketList = () => {
  const [list, setList] = useState<ProductsTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const session = useRecoilValue(userSession);
  const navigate = useNavigate();
  const params = useParams().id;
  const category = categoryArr[Number(params)];

  const getProductList = useCallback(async () => {
    let result: ProductsTypes[] = [];
    if (params) {
      result = await getCategoryProductListHandler(category);
    } else {
      result = await getProductListHandler();
    }
    // 불변성 유지 및 불필요한 업데이트 방지
    setList((prevList) => {
      const sortedResult = result.sort((a, b) => b.id - a.id);
      return JSON.stringify(prevList) !== JSON.stringify(sortedResult) ? sortedResult : prevList;
    });
  }, [category, params]);
  const onClickPostBtn = useCallback(() => {
    if (session) {
      navigate('/marketpost');
    } else if (window.confirm('로그인 페이지로 이동하시겠습니까?')) {
      navigate(`/login`);
    }
    window.scrollTo(0, 0);
  }, [navigate, session]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  // useMemo를 사용하여 현재 페이지의 게시물 계산 최적화
  const currentPosts = useMemo(() => {
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    return list.slice(indexOfFirst, indexOfLast);
  }, [list, currentPage, postsPerPage]);

  return (
    <St.Container>
      <St.CategoryWrapper>
        <St.CategoryTitle onClick={() => navigate(`/market`)}>카테고리</St.CategoryTitle>
        <Suspense fallback={<div>Loading categories...</div>}>
          <CategoryButton categoryArr={categoryArr} params={params} />
        </Suspense>
      </St.CategoryWrapper>
      <St.ContentsWrapper>
        <St.Title>
          {category ? category : '중고거래'}
          <St.PostButton onClick={onClickPostBtn}>글쓰기</St.PostButton>
        </St.Title>
        <St.Contour />
        <Suspense fallback={<div>Loading mobile category...</div>}>
          <MobileCategory categoryArr={categoryArr} onClickPostBtn={onClickPostBtn} />
        </Suspense>
        <Suspense fallback={<div>Loading products...</div>}>
          <MarketProductsCard currentPosts={currentPosts} />
        </Suspense>
        <St.PaginationWrapper>
          <Pagination postsPerPage={postsPerPage} totalPosts={list.length} paginate={setCurrentPage} />
        </St.PaginationWrapper>
      </St.ContentsWrapper>
    </St.Container>
  );
};

export default React.memo(MarketList);
