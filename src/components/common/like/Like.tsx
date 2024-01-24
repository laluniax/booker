import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../../../api/supabase.api';
import { useAuth } from '../../../contexts/auth.context';
import * as St from './like.styled';

type LikeProps = {
  postId: number | undefined;
};

const Like = ({ postId }: LikeProps) => {
  const [likes, setLikes] = useState<any[]>([]);
  //likes를 find로 돌려서 like안에 있는 user_id 지금 로그인 한 사용자의 user_id 비교

  const auth = useAuth();
  const currentUserId = auth.session?.profile.id;
  console.log(auth.session);
  // 좋아요 수를 불러오는 함수

  const getLikeCount = useCallback(async () => {
    try {
      const { data, error } = await supabase.from('likes').select('*').eq('post_id', postId);
      setLikes(data || []);
    } catch (error) {
      console.log(error, 'error');
    }
  }, [postId]); // postId를 의존성으로 추가
  const toggleLike = async () => {
    if (!auth.session) return; // 사용자가 로그인하지 않았다면 아무것도 하지 않음

    const existingLike = likes.find((like) => like.user_id === currentUserId);

    try {
      if (existingLike) {
        // 이미 좋아요한 경우, 좋아요 제거
        await supabase.from('likes').delete().match({ id: existingLike.id });
        setLikes(likes.filter((like) => like.id !== existingLike.id)); // UI 업데이트
      } else {
        // 좋아요하지 않은 경우, 좋아요 추가
        const { data, error } = await supabase.from('likes').insert([{ post_id: postId, user_id: currentUserId }]);
        if (data) setLikes([...likes, ...data]); // UI 업데이트
      }
    } catch (error) {
      console.error(error);
    }
    getLikeCount();
  };

  useEffect(() => {
    getLikeCount();
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
