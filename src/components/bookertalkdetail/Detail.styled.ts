import styled from 'styled-components';
import prev from '../../assets/common/prevbutton2.webp';
export const Container = styled.div`
  min-height: 100rem;
  margin-left: 4rem;
`;

export const PrevButton = styled.div`
  background: url(${prev});
  background-size: contain;
  width: 6rem;
  height: 6rem;
  border-radius: 2rem;
  cursor: pointer;
`;

export const TitleAndPostWrapper = styled.div``;

export const Title = styled.div`
  margin-bottom: 2.4rem;
  margin: 0 auto;
  width: 90rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
`;

export const PostUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103rem;
  margin-left: 16rem;
  justify-content: space-between;
`;

export const PostImgNickNameDate = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 1.7rem;
`;
export const PostUserImg = styled.div`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  cursor: pointer;
  & img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const PostUserNickname = styled.div`
  cursor: pointer;
`;

export const PostDate = styled.p``;

export const PostBtnWrapper = styled.div``;

export const EditAndDeleteButton = styled.button`
  all: unset;
  font-size: 1.6rem;
  margin-left: 2rem;
  & img {
    width: 2.5rem;
  }
  &:hover {
    cursor: pointer;
    color: #69b4cf;
    font-weight: bold;
  }
`;
export const PostWrapper = styled.div`
  width: 90rem;

  margin: 0 auto;
  line-height: 2;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
  margin-bottom: 2rem;
`;
export const ViewerWrapper = styled.div``;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90rem;
  margin: 0 auto;
`;
export const PostTags = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
`;

export const LikesWrapper = styled.div`
  padding: 4rem 15rem 0 15rem;
`;

export const TitleAndTagsBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfileBox = styled.div`
  position: relative;
  width: 55rem;
  height: 23rem;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 6rem;
  padding-top: 6rem;
  border: 0.2rem solid #14213d;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 2rem;
`;

export const PostProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: -4rem;
`;

export const PostProfileNickname = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const PostProfileIntroText = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.6rem;
  color: #828282;
  padding-top: 2rem;
  text-align: center;
`;

export const FollowBtn = styled.button`
  font-family: 'GmarketSansMedium';
  border: none;
  background-color: #14213d;
  color: white;
  font-weight: bold;
  border-radius: 1.4rem;
  padding: 1.3rem 2rem;
  margin-top: 2rem;

  &:hover {
    color: #fca311;
  }
`;

export const CommentTitle = styled.h2`
  font-family: 'GmarketSansMedium';
  width: 92rem;
  font-size: 2rem;
  font-weight: bold;
  border-top: 1px solid #000;
  padding-top: 1.3rem;
  margin: 0 auto;
`;
