import styled from 'styled-components';
import prev from '../../../assets/common/prevbutton2.webp';

export const Container = styled.div`
  height: auto;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-left: 4rem;
  `};
`;

export const PrevButton = styled.div`
  background: url(${prev});
  background-size: contain;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  margin-left: 2rem;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 6rem;
  height: 6rem;
  margin-left: 0rem;
  `};
`;

export const TitleAndPostWrapper = styled.div`
  margin: 0 auto;
  max-width: 40rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  font-size: 4rem;
  `};
`;

export const Title = styled.div`
  margin-bottom: 2.4rem;
  margin: 0 auto;
  max-width: 40rem;
  padding-bottom: 1rem;
  margin: 2rem;
  border-bottom: 0.2rem solid black;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  font-size: 4rem;
  `};
`;

export const PostUserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 35rem;
  margin-left: 2rem;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQuery.sm`
    max-width: 65rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 85rem;
  `};
`;

export const PostImgNickNameDate = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: 1.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.7rem;
  `};
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
  max-width: 35rem;
  margin: 0 auto;
  line-height: 2;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 65rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 85rem;
  `};
`;

export const ViewerWrapper = styled.div``;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 35rem;
  margin: 0 auto;
  border-bottom: 0.2rem solid #e5e5e5;
  padding-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;

export const PostTags = styled.p`
  font-size: 1.6rem;
  margin-top: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2rem;
  `};
`;

export const LikesWrapper = styled.div`
  padding-top: 2rem;
  margin: 0 auto;
  max-width: 35rem;

  ${({ theme }) => theme.mediaQuery.sm`
  padding-top: 3rem;
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  padding-top: 3rem;
  max-width: 90rem;
  `};
`;

export const TitleAndTagsBox = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfileBox = styled.div`
  position: relative;
  max-width: 30rem;
  height: 20rem;
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 6rem;
  padding-top: 5.7rem;
  border: 0.2rem solid #14213d;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 40rem;
  height: 23rem;
  padding-top: 7rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 55rem;
  height: 25rem;
  `};
`;

export const PostProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
  background-color: #14213d;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: -3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 8rem;
  height: 8rem;
  top: -4rem;
  `};
`;

export const PostProfileNickname = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.6rem;
  font-weight: bold;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.8rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  `};
`;

export const PostProfileIntroText = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 1.2rem;
  color: #828282;
  padding-top: 1rem;
  text-align: center;
  max-width: 20rem;

  ${({ theme }) => theme.mediaQuery.sm`
  padding-top: 1.5rem;
  font-size: 1.4rem;
  max-width: 30rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  padding-top: 2rem;
 font-size: 1.6rem;
   max-width: 50rem;
  `};
`;

export const FollowBtn = styled.button`
  font-family: 'GmarketSansMedium';
  font-size: 1.2rem;
  border: none;
  background-color: #14213d;
  color: white;
  font-weight: bold;
  border-radius: 1.4rem;
  padding: 1rem 2rem;
  margin-top: 1rem;

  &:hover {
    color: #fca311;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  padding: 1.3rem 2rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 2rem;
  `};
`;

export const CommentTitle = styled.h2`
  font-family: 'GmarketSansMedium';
  max-width: 35rem;
  font-size: 2rem;
  font-weight: bold;
  border-top: 1px solid #000;
  padding-top: 1.3rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;
