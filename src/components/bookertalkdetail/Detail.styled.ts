import styled from 'styled-components';
import Prev from '../../styles/assets/buttonimages/prev2.png';
export const Container = styled.div`
  min-height: 100rem;
`;

export const TitleAndPostWrapper = styled.div``;
export const DetailPostWrapper = styled.div``;
export const Title = styled.div`
  margin-left: 15rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
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

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90rem;
  margin: 0 auto;
`;
export const TitleAndTagsBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PostTitle = styled.div`
  font-size: 3rem;
`;
export const PostUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103rem;
  margin-left: 16em;
  justify-content: space-between;
`;

export const EditAndDeleteButton = styled.button`
  all: unset;
  font-size: 1.6rem;
  margin-left: 2rem;

  &:hover {
    cursor: pointer;
    color: #69b4cf;
    font-weight: bold;
  }
`;

export const PostImgNickNameDate = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.6rem;
`;
export const PostUserImg = styled.img`
  width: 3ren;
  height: 3rem;
`;
export const PostUserNickname = styled.div``;
export const PostDate = styled.p``;
export const PostBtnWrapper = styled.div``;

export const PostTags = styled.p`
  font-size: 2rem;
`;
export const ViewerWrapper = styled.p``;

export const CommentTitle = styled.h2`
  width: 105rem;
  font-size: 2rem;
  font-weight: bold;
  border-top: 1px solid #000;
  padding-top: 1rem;
  margin-left: 15rem;
`;

export const PrevButton = styled.div`
  background: url(${Prev});
  background-size: contain;
  width: 6rem;
  height: 6rem;
  border-radius: 2rem;

  cursor: pointer;
`;
