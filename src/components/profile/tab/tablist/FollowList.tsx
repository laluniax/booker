import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getFollowListHandler, unFollowHandler } from '../../../../api/Supabase.api';
import logoImage from '../../../../assets/common/bookerchattingicon.webp';
import { userSession } from '../../../../state/atom/userSessionAtom';
import { FollowsTypes } from '../../../../types/types';
import * as St from './TabList.styled';

const FollowList = () => {
  const [followList, setFollowList] = useState<FollowsTypes[]>([]);
  const session = useRecoilValue(userSession);
  console.log(followList);
  const params = useParams().id;
  const navigate = useNavigate();

  // 팔로우 목록 불러오기
  const getFollowList = async () => {
    const result = await getFollowListHandler(params as string);
    setFollowList(result.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    params && getFollowList();
  }, [params]);

  return (
    <St.FollowWrapper>
      {followList.length > 0 ? (
        followList?.map((item, i) => {
          return (
            <St.Follow
              key={i}
              onClick={() => {
                navigate(`/profile/${item.follow_to}`);
                window.scrollTo(0, 0);
              }}>
              <St.FollowImgAndNickNameBox>
                <St.FollowImg src={(item.users.user_img || logoImage) ?? undefined} alt="profile" />
                <St.FollowNickname>{item.users.nickname}</St.FollowNickname>
              </St.FollowImgAndNickNameBox>
              {params === session?.id ? (
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
        })
      ) : (
        <St.NoFollowList>팔로우 목록이 존재하지 않습니다.</St.NoFollowList>
      )}
    </St.FollowWrapper>
  );
};

export default FollowList;
