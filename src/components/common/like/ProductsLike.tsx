import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Productlike, getLikeCountP, supabase } from '../../../api/Supabase.api';
import coloredheart from '../../../assets/common/heavy_black_heart.webp';
import heartbold from '../../../assets/common/icon-_heart_white.webp';
import { userSession } from '../../../state/atom/userSessionAtom';
import * as St from './Like.styled';
import { LikeProps } from './Like.type';

const ProductsLike = ({ postId, count }: LikeProps) => {
  const [likes, setLikes] = useState<any[]>([]);
  // const auth = useAuth();
  const session = useRecoilValue(userSession);
  const currentUserId = session?.id;
  const getLikeCounts = useCallback(async () => {
    try {
      const likesData = await getLikeCountP(postId);
      setLikes(likesData || []);
    } catch (error) {
      console.log(error, 'error');
    }
  }, [postId]);

  const toggleLike = async () => {
    if (!session) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    const existingLike = likes.find((like) => like.user_id === currentUserId);
    try {
      if (existingLike) {
        // 기존 좋아요 제거
        await supabase.from('product_likes').delete().match({ id: existingLike.id });
        setLikes(likes.filter((like) => like.id !== existingLike.id));
      } else {
        // 새로운 좋아요 추가
        const userLike = await Productlike(postId, currentUserId);
        if (userLike) {
          setLikes([...likes, ...userLike]);
        }
      }
    } catch (error) {
      console.error(error);
    }
    getLikeCounts();
  };
  useEffect(() => {
    getLikeCounts();
  }, []);

  return (
    <St.Container>
      <St.HeartButton
        className={count ? '' : 'marketlist'}
        onClick={(e) => {
          e.stopPropagation();
          toggleLike();
        }}>
        {likes.some((like) => like.user_id === currentUserId) ? (
          <img src={coloredheart} loading="lazy" alt="coloredheart" />
        ) : (
          <img src={heartbold} loading="lazy" alt="heartbold" />
        )}
      </St.HeartButton>
      {count ? <St.CountLike>{likes.length}</St.CountLike> : null}
    </St.Container>
  );
};

export default ProductsLike;
