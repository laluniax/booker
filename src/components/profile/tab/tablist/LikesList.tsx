import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getLikesPostsListHandler, getLikesProductsListHandler } from '../../../../api/Supabase.api';
import logoImage from '../../../../assets/common/bookerchattingicon.webp';
import { userSession } from '../../../../state/atom/userSessionAtom';
import { PostsLikesTypes, ProductsLikesTypes } from '../../../../types/types';
import Pagination from '../../../common/pagination/Pagination';
import * as St from './TabList.styled';

const LikesList = () => {
  const [postsLikes, setPostsLikes] = useState<PostsLikesTypes[]>([]);
  const [productsLikes, setProductsLikes] = useState<ProductsLikesTypes[]>([]);
  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [currentProductsPage, setCurrentProductsPage] = useState(1);
  const session = useRecoilValue(userSession);

  const navigate = useNavigate();
  const params = useParams().id;

  const filterPostByUserId = async () => {
    const postLikes = await getLikesPostsListHandler(params as string);
    const productLikes = await getLikesProductsListHandler(params as string);
    setPostsLikes(postLikes.sort((a, b) => b.id - a.id));
    setProductsLikes(productLikes.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    params && filterPostByUserId();
  }, [params]);

  return (
    <div>
      <St.TabListTitle>북커톡</St.TabListTitle>
      <St.PostWrapper>
        {postsLikes?.slice((currentPostsPage - 1) * 5, currentPostsPage * 5)?.map((item, i) => {
          return (
            <St.Post key={i} onClick={() => navigate(`/detail/${item.post_id}`)}>
              <St.PostTitle>{item.posts.title}</St.PostTitle>
              <St.PostDate>{dayjs(item.created_at).format('YYYY-MM-DD')}</St.PostDate>
            </St.Post>
          );
        })}
        <Pagination postsPerPage={5} totalPosts={postsLikes?.length ?? 0} paginate={setCurrentPostsPage} />
      </St.PostWrapper>
      {session?.id === params ? (
        <>
          <St.TabListTitle>중고거래</St.TabListTitle>
          <St.ProductWrapper>
            {productsLikes?.slice((currentProductsPage - 1) * 5, currentProductsPage * 5)?.map((item, i) => {
              return (
                <St.Product key={i} onClick={() => navigate(`/product/${item.post_id}`)}>
                  {item.products.product_img && (
                    <St.ProductImg src={item.products.product_img[0] || logoImage} loading="lazy" />
                  )}
                  <St.ProductTitlePrice>
                    <St.ProductTitle>{item.products.title}</St.ProductTitle>
                    <St.ProductPrice>{item.products.price} 원</St.ProductPrice>
                  </St.ProductTitlePrice>
                  <St.ProductDate>
                    {item.products.onsale ? '판매 중' : '판매 완료'} | {dayjs(item.created_at).format('YYYY-MM-DD')}
                  </St.ProductDate>
                </St.Product>
              );
            })}
            <Pagination postsPerPage={5} totalPosts={productsLikes?.length ?? 0} paginate={setCurrentProductsPage} />
          </St.ProductWrapper>
        </>
      ) : null}
    </div>
  );
};

export default LikesList;
