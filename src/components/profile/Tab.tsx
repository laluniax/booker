import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  filterPostsByUserIdHandler,
  filterProductsByUserIdHandler,
  getFollowListHandler,
  unFollowHandler,
} from '../../api/supabase.api';
import { FollowsTypes, Tables } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';
import * as St from './UserProfile.styled';

type Props = {
  userSession: string | undefined;
  userData: Tables<'users'> | undefined;
};

const Tab = ({ userSession, userData }: Props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState('1');
  const [postsList, setPostsList] = useState<Tables<'posts'>[]>();
  const [productsList, setProductsList] = useState<Tables<'products'>[]>();
  const [followList, setFollowList] = useState<FollowsTypes[]>([]);

  const params = useParams().id;

  const filterPostByUserId = async () => {
    const posts = await filterPostsByUserIdHandler(userData?.id as string);
    const products = await filterProductsByUserIdHandler(userData?.id as string);
    setPostsList(posts);
    setProductsList(products);
  };
  // 팔로우 목록 불러오기
  const getFollowList = async () => {
    const result = await getFollowListHandler(params as string);
    setFollowList(result);
  };

  // const onClickUnfollowBtn = async () => {
  //   const result = await unFollowHandler();
  // };

  useEffect(() => {
    userData && filterPostByUserId();
    userSession && getFollowList();
  }, [userSession, userData]);

  return (
    <div>
      {' '}
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
      </St.ProfileTab>
      <St.ProfileContent>
        {/* 여기서 스위치를 써도 좋을듯..? */}
        {active === '1' && (
          <div>
            <St.TabListTitle>북커톡</St.TabListTitle>
            <St.PostWraapper>
              {postsList?.map((item, i) => {
                return (
                  <St.Post key={i} onClick={() => navigate(`/detail/${item.id}`)}>
                    <St.PostTitle>{item.title}</St.PostTitle>
                    <St.PostDate>{formatCreatedAt(item.created_at)}</St.PostDate>
                  </St.Post>
                );
              })}
            </St.PostWraapper>
            <St.TabListTitle>중고거래</St.TabListTitle>
            <St.ProductWrapper>
              {productsList?.map((item, i) => {
                return (
                  <St.Product key={i} onClick={() => navigate(`/product/${item.id}`)}>
                    {item.product_img && <St.ProductImg src={item.product_img[0]} />}
                    <div>
                      <St.ProductTitle>{item.title}</St.ProductTitle>
                      <St.ProductPrice>{item.price}</St.ProductPrice>
                    </div>
                    <St.ProductDate>{formatCreatedAt(item.created_at)}</St.ProductDate>
                  </St.Product>
                );
              })}
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
                  }}>
                  <St.FollowImg src={item.users.user_img ?? undefined} />
                  <St.FollowNickname>{item.users.nickname}</St.FollowNickname>
                  {params === userSession ? (
                    <button
                      onClick={async (e) => {
                        e.stopPropagation();
                        await unFollowHandler(item.follow_id as string);
                        getFollowList();
                      }}>
                      팔로우 취소하기
                    </button>
                  ) : (
                    <></>
                  )}
                </St.Follow>
              );
            })}
          </St.FollowWrapper>
        )}
        {active === '3' && <div>좋아요한 글</div>}
      </St.ProfileContent>
    </div>
  );
};

export default Tab;
