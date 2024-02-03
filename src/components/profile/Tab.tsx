import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  filterPostsByUserIdHandler,
  filterProductsByUserIdHandler,
  getFollowListHandler,
  getLikesPostsListHandler,
  getLikesProductsListHandler,
  unFollowHandler,
} from '../../api/Supabase.api';
import logoImage from '../../assets/common/bookerchattingicon.webp';
import { FollowsTypes, PostsLikesTypes, ProductsLikesTypes, Tables } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';
import Pagination from '../common/pagination/Pagination';
import EditProfile from './EditProfile';
import * as St from './Tab.styled';

type Props = {
  userSession: Session | null;
  userData: Tables<'users'> | undefined;
};

const Tab = ({ userSession, userData }: Props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState('1');
  const [postsList, setPostsList] = useState<Tables<'posts'>[]>();
  const [productsList, setProductsList] = useState<Tables<'products'>[]>();
  const [followList, setFollowList] = useState<FollowsTypes[]>([]);
  const [postsLikes, setPostsLikes] = useState<PostsLikesTypes[]>([]);
  const [productsLikes, setProductsLikes] = useState<ProductsLikesTypes[]>([]);
  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const [currentProductsPage, setCurrentProductsPage] = useState(1);
  const params = useParams().id;
  const filterPostByUserId = async () => {
    const posts = await filterPostsByUserIdHandler(userData?.id as string);
    const products = await filterProductsByUserIdHandler(userData?.id as string);
    const postLikes = await getLikesPostsListHandler(params as string);
    const productLikes = await getLikesProductsListHandler(params as string);
    setPostsLikes(postLikes.sort((a, b) => b.id - a.id));
    setProductsLikes(productLikes.sort((a, b) => b.id - a.id));
    setPostsList(posts.sort((a, b) => b.id - a.id));
    setProductsList(products.sort((a, b) => b.id - a.id));
  };

  // 팔로우 목록 불러오기
  const getFollowList = async () => {
    const result = await getFollowListHandler(params as string);
    setFollowList(result.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    setActive('1');
  }, [params]);

  useEffect(() => {
    userData && filterPostByUserId();
    userSession && getFollowList();
  }, [userSession, userData]);

  return (
    <St.TabWrapper>
      <St.ProfileTab>
        <St.TabMenu
          onClick={() => {
            setActive('1');
          }}
          className={active === '1' ? 'active' : ''}>
          내가 쓴 글
        </St.TabMenu>
        <St.TabMenu
          onClick={() => {
            setActive('2');
          }}
          className={active === '2' ? 'active' : ''}>
          팔로우 목록
        </St.TabMenu>
        <St.TabMenu
          onClick={() => {
            setActive('3');
          }}
          className={active === '3' ? 'active' : ''}>
          좋아요한 글
        </St.TabMenu>
        {userSession?.user.id === userData?.id && (
          <St.TabMenu
            onClick={() => {
              setActive('4');
            }}
            className={active === '4' ? 'active' : ''}>
            프로필 수정하기
          </St.TabMenu>
        )}
      </St.ProfileTab>
      <St.ProfileContent>
        {active === '1' && (
          <div>
            <St.TabListTitle>북커톡</St.TabListTitle>
            <St.PostWrapper>
              {postsList?.slice((currentPostsPage - 1) * 5, currentPostsPage * 5)?.map((item, i) => {
                return (
                  <St.Post key={i} onClick={() => navigate(`/detail/${item.id}`)}>
                    <St.PostTitle>{item.title}</St.PostTitle>
                    <St.PostDate>{formatCreatedAt(item.created_at)}</St.PostDate>
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
                      {item.onsale ? '판매 중' : '판매 완료'} | {formatCreatedAt(item.created_at)}
                    </St.ProductDate>
                  </St.Product>
                );
              })}
              <Pagination postsPerPage={5} totalPosts={productsList?.length ?? 0} paginate={setCurrentProductsPage} />
            </St.ProductWrapper>
          </div>
        )}
        {active === '2' && (
          <St.FollowWrapper>
            {followList?.map((item, i) => {
              return (
                <St.Follow
                  key={i}
                  onClick={() => {
                    navigate(`/profile/${item.follow_to}`);
                    window.scrollTo(0, 0);
                  }}>
                  <St.FollowImgAndNickNameBox>
                    <St.FollowImg src={item.users.user_img ?? undefined} />
                    <St.FollowNickname>{item.users.nickname}</St.FollowNickname>
                  </St.FollowImgAndNickNameBox>
                  {params === userSession?.user.id ? (
                    <St.UnfollowBtn
                      onClick={async (e) => {
                        e.stopPropagation();
                        await unFollowHandler(item.follow_id as string);
                        getFollowList();
                      }}>
                      팔로우 취소하기
                    </St.UnfollowBtn>
                  ) : (
                    <></>
                  )}
                </St.Follow>
              );
            })}
          </St.FollowWrapper>
        )}
        {active === '3' && (
          <div>
            <St.TabListTitle>북커톡</St.TabListTitle>
            <St.PostWrapper>
              {postsLikes?.slice((currentPostsPage - 1) * 5, currentPostsPage * 5)?.map((item, i) => {
                return (
                  <St.Post key={i} onClick={() => navigate(`/detail/${item.post_id}`)}>
                    <St.PostTitle>{item.posts.title}</St.PostTitle>
                    <St.PostDate>{formatCreatedAt(item.posts.created_at as string)}</St.PostDate>
                  </St.Post>
                );
              })}
              <Pagination postsPerPage={5} totalPosts={postsLikes?.length ?? 0} paginate={setCurrentPostsPage} />
            </St.PostWrapper>
            {userSession?.user.id === params ? (
              <>
                <St.TabListTitle>중고거래</St.TabListTitle>
                <St.ProductWrapper>
                  {productsLikes?.slice((currentProductsPage - 1) * 5, currentProductsPage * 5)?.map((item, i) => {
                    return (
                      <St.Product key={i} onClick={() => navigate(`/product/${item.post_id}`)}>
                        {item.products.product_img && <St.ProductImg src={item.products.product_img[0] || logoImage} />}
                        <St.ProductTitlePrice>
                          <St.ProductTitle>{item.products.title}</St.ProductTitle>
                          <St.ProductPrice>{item.products.price} 원</St.ProductPrice>
                        </St.ProductTitlePrice>
                        <St.ProductDate>
                          {item.products.onsale ? '판매 중' : '판매 완료'} | {formatCreatedAt(item.created_at)}
                        </St.ProductDate>
                      </St.Product>
                    );
                  })}
                  <Pagination
                    postsPerPage={5}
                    totalPosts={productsLikes?.length ?? 0}
                    paginate={setCurrentProductsPage}
                  />
                </St.ProductWrapper>
              </>
            ) : null}
          </div>
        )}
        {active === '4' && <EditProfile />}
      </St.ProfileContent>
    </St.TabWrapper>
  );
};

export default Tab;
