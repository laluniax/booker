import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getCategoryProductListHandler, getProductListHandler } from '../../api/Supabase.api';
import { userSession } from '../../state/atom/userSessionAtom';
import { ProductsTypes } from '../../types/types';
import Pagination from '../common/pagination/Pagination';
import * as St from './MarketList.styled';
import { categoryArr } from './marketpost/Post';

const MarketList = () => {
  const [list, setList] = useState<ProductsTypes[]>([]);
  //페이지네이션 state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const session = useRecoilValue(userSession);

  const navigate = useNavigate();
  const params = useParams().id;
  const category = categoryArr[Number(params)];

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = list?.slice(indexOfFirst, indexOfLast);

  const CategoryButton = lazy(() => import('./categorybutton/CategoryButton'));
  const MarketProductsCard = lazy(() => import('./marketproductscard/MarketProductsCard'));
  const MobileCategory = lazy(() => import('./mobileCategory/MobileCategory'));

  const getProductList = useCallback(async () => {
    if (params) {
      const result = await getCategoryProductListHandler(category);
      setList(result.sort((a, b) => b.id - a.id));
    } else {
      const result = await getProductListHandler();
      setList(result.sort((a, b) => b.id - a.id));
    }
  }, [category, params]);

  const onClickPostBtn = useCallback(() => {
    session ? navigate('/marketpost') : window.confirm('로그인 페이지로 이동하시겠습니까?') && navigate(`/login`);
    window.scrollTo(0, 0);
  }, [navigate, session]);

  useEffect(() => {
    getProductList();
  }, [params]);

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
export default MarketList;
