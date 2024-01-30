import { useCallback, useEffect, useState } from 'react';
import { Productlike, getLikeCountP, supabase } from '../../../api/supabase.api';
import coloredheart from '../../../assets/common/heavy_black_heart.webp';
import heartbold from '../../../assets/common/icon-_heart_white.webp';
import { useAuth } from '../../../contexts/auth.context';
import { LikeProps } from '../../../types/types';
import * as St from './like.styled';

const ProductsLike = ({ postId, count }: LikeProps) => {
  const [likes, setLikes] = useState<any[]>([]);
  const auth = useAuth();
  const currentUserId = auth.session?.profile.id;

  const getLikeCounts = useCallback(async () => {
    try {
      const likesData = await getLikeCountP(postId);
      setLikes(likesData || []);
    } catch (error) {
      console.log(error, 'error');
    }
  }, [postId]);

  const toggleLike = async () => {
    if (!auth.session) return;

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
      {/* <button onClick={toggleLike}>
        {likes.some((like) => like.user_id === currentUserId) ? '좋아요 해제' : '좋아요'}
      </button> */}
      <St.HeartButton
        onClick={(e) => {
          e.stopPropagation();
          toggleLike();
        }}>
        {/* {likes.some((like) => like.user_id === currentUserId) ? '좋아요 해제' : '좋아요'} */}
        {likes.some((like) => like.user_id === currentUserId) ? <img src={coloredheart} /> : <img src={heartbold} />}
      </St.HeartButton>
      {count ? <St.CountLike>{likes.length}</St.CountLike> : null}
    </St.Container>
  );
};

export default ProductsLike;
