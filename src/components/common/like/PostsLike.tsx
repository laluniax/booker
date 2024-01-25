import { useCallback, useEffect, useState } from 'react';
import { getLikeCount, like, supabase } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import { LikeProps } from '../../../types/types';
import * as St from './like.styled';

const Like = ({ postId }: LikeProps) => {
  const [likes, setLikes] = useState<any[]>([]);

  const auth = useAuth();
  const currentUserId = auth.session?.profile.id;
  // 좋아요 수를 불러오는 함수

  const getLikeCounts = useCallback(async () => {
    try {
      const likesData = await getLikeCount(postId);
      setLikes(likesData || []);
    } catch (error) {
      console.log(error, 'error');
    }
  }, [postId]); // postId를 의존성으로 추가
  const toggleLike = async () => {
    if (!auth.session) return;

    const existingLike = likes.find((like) => like.user_id === currentUserId);

    try {
      if (existingLike) {
        // 이미 좋아요한 경우, 좋아요 제거
        await supabase.from('likes').delete().match({ id: existingLike.id });
        setLikes(likes.filter((like) => like.id !== existingLike.id));
      } else {
        // 좋아요하지 않은 경우, 좋아요 추가

        const userLike = await like(postId, currentUserId);
        if (userLike) setLikes([...likes, ...userLike]);
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
      <St.CountLike>{likes.length}</St.CountLike>
      <button onClick={toggleLike}>
        {likes.some((like) => like.user_id === currentUserId) ? '좋아요 해제' : '좋아요'}
      </button>
    </St.Container>
  );
};

export default Like;