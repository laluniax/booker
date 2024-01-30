import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { followHandler, followIdListHandler, getUserSessionHandler, unFollowHandler } from '../../../api/supabase.api';
import * as St from './Follow.styled';

type FollowProps = {
  params: string | undefined;
  usage: string;
};
const Follow = ({ params, usage }: FollowProps) => {
  const [followId, setFollowId] = useState('');
  const [following, setFollowing] = useState(false); // 팔로잉:거짓 이 기본
  const [userSession, setUserSession] = useState<Session | null>(null);
  //   console.log(userSession);
  // console.log(followId);
  // console.log(following);

  const navigate = useNavigate();

  const getUserData = async () => {
    const session = await getUserSessionHandler();
    setUserSession(session.session);
  };
  const getFollowId = () => {
    const newFollowId = params + '-' + userSession?.user.id;
    setFollowId(newFollowId);
  };

  // 팔로우/언팔로우 판단하기
  const followIdList = async () => {
    const result = await followIdListHandler();
    console.log(result);
    console.log(followId);
    const filteredResult = result.filter((item) => {
      return item.follow_id === followId;
    });
    console.log(filteredResult);
    if (filteredResult.length > 0) setFollowing(true);
    else setFollowing(false);
  };
  // 팔로우하기
  const onClickFollowBtn = async () => {
    if (!userSession) {
      if (window.confirm('로그인 페이지로 이동하시겠습니까?')) {
        navigate(`/login`);
        return;
      } else return;
    } else {
      const result = await followHandler(followId, params as string, userSession?.user.id as string);
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
    getUserData();
    // followIdList();
  }, []);
  // useEffect(() => {
  //   getFollowId();
  // }, [userSession]);
  useEffect(() => {
    getFollowId();
  }, [userSession, params]);
  useEffect(() => {
    followIdList();
  }, [followId]);

  return <>{renderFollowBtn()}</>;
};

export default Follow;
