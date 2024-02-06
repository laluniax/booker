import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filterPostsByUserIdHandler, filterProductsByUserIdHandler } from '../../../../api/Supabase.api';
import { Tables } from '../../../../api/Supabase.type';
import logoImage from '../../../../assets/common/bookerchattingicon.webp';
import Pagination from '../../../common/pagination/Pagination';
import * as St from './TabList.styled';

const PostsList = () => {
  const [postsList, setPostsList] = useState<Tables<'posts'>[]>();
  const [productsList, setProductsList] = useState<Tables<'products'>[]>();
  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [currentProductsPage, setCurrentProductsPage] = useState(1);

  const params = useParams().id;
  const navigate = useNavigate();

  const filterPostByUserId = async () => {
    const posts = await filterPostsByUserIdHandler(params as string);
    const products = await filterProductsByUserIdHandler(params as string);
    setPostsList(posts.sort((a, b) => b.id - a.id));
    setProductsList(products.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    params && filterPostByUserId();
  }, [params]);

  return (
    <div>
      <St.TabListTitle>북커톡</St.TabListTitle>
      <St.PostWrapper>
        {postsList?.slice((currentPostsPage - 1) * 5, currentPostsPage * 5)?.map((item, i) => {
          return (
            <St.Post key={i} onClick={() => navigate(`/detail/${item.id}`)}>
              <St.PostTitle>{item.title}</St.PostTitle>
              <St.PostDate>{dayjs(item.created_at).format('YYYY-MM-DD')}</St.PostDate>
            </St.Post>
          );
        })}
        <Pagination postsPerPage={5} totalPosts={postsList?.length ?? 0} paginate={setCurrentPostsPage} />
      </St.PostWrapper>
      <St.Contour />
      <St.TabListTitle>중고거래</St.TabListTitle>
      <St.ProductWrapper>
        {productsList?.slice((currentProductsPage - 1) * 5, currentProductsPage * 5)?.map((item, i) => {
          return (
            <St.Product key={i} onClick={() => navigate(`/product/${item.id}`)}>
              {item.product_img && <St.ProductImg src={item.product_img[0] || logoImage} />}
              <St.ProductTitlePrice>
                <St.ProductTitle>{item.title}</St.ProductTitle>
                <St.ProductPrice>{item.price} 원</St.ProductPrice>
              </St.ProductTitlePrice>
              <St.ProductDate>
                {item.onsale ? '판매 중' : '판매 완료'} | {dayjs(item.created_at).format('YYYY-MM-DD')}
              </St.ProductDate>
            </St.Product>
          );
        })}
        <Pagination postsPerPage={5} totalPosts={productsList?.length ?? 0} paginate={setCurrentProductsPage} />
      </St.ProductWrapper>
    </div>
  );
};

export default PostsList;
