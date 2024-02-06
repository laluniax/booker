import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followHandler, followIdListHandler, unFollowHandler } from '../../../api/Supabase.api';
import { userSession } from '../../../state/atom/userSessionAtom';
import * as St from './Follow.styled';
import { FollowProps } from './Follow.type';

const Follow = ({ params, usage }: FollowProps) => {
  const [followId, setFollowId] = useState('');
  const [following, setFollowing] = useState(false); // 팔로잉:거짓 이 기본
  const session = useRecoilValue(userSession);
  const navigate = useNavigate();
  const getFollowId = () => {
    const newFollowId = params + '-' + session?.id;
    setFollowId(newFollowId);
  };

  // 팔로우/언팔로우 판단하기
  const followIdList = async () => {
    const result = await followIdListHandler();
    const filteredResult = result.filter((item) => {
      return item.follow_id === followId;
    });
    if (filteredResult.length > 0) setFollowing(true);
    else setFollowing(false);
  };

  // 팔로우하기
  const onClickFollowBtn = async () => {
    if (!session) {
      if (window.confirm('로그인 페이지로 이동하시겠습니까?')) {
        navigate(`/login`);
        return;
      } else return;
    } else {
      const result = await followHandler(followId, params as string, session?.id as string);
      followIdList();
    }
  };

  // 언팔로우하기
  const onClickUnfollowBtn = async () => {
    const result = await unFollowHandler(followId);
    followIdList();
  };

  const renderFollowBtn = () => {
    switch (usage) {
      case 'userprofile':
        return following ? (
          <St.ProfileBtn onClick={onClickUnfollowBtn}>언팔로우</St.ProfileBtn>
        ) : (
          <St.ProfileBtn onClick={onClickFollowBtn}>팔로우</St.ProfileBtn>
        );
        break;
      case 'post':
        return following ? (
          <St.PostFollowBtn
            onClick={(e) => {
              e.stopPropagation();
              onClickUnfollowBtn();
            }}>
            언팔로우
          </St.PostFollowBtn>
        ) : (
          <St.PostFollowBtn
            onClick={(e) => {
              e.stopPropagation();
              onClickFollowBtn();
            }}>
            팔로우
          </St.PostFollowBtn>
        );
        break;
      case 'product':
        return following ? (
          <St.ProductFollowBtn
            onClick={(e) => {
              e.stopPropagation();
              onClickUnfollowBtn();
            }}>
            언팔로우
          </St.ProductFollowBtn>
        ) : (
          <St.ProductFollowBtn
            onClick={(e) => {
              e.stopPropagation();
              onClickFollowBtn();
            }}>
            팔로우
          </St.ProductFollowBtn>
        );
        break;
    }
  };

  useEffect(() => {
    getFollowId();
  }, [session, params]);

  useEffect(() => {
    followIdList();
  }, [followId]);

  return <>{renderFollowBtn()}</>;
};

export default Follow;
