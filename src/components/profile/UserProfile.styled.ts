import styled from 'styled-components';

export const Container = styled.div`
  height: 180vh;
`;

export const Title = styled.div`
  /* padding: 5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700; */

  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
  margin: 0 0 5rem 30rem;
`;

export const ProfileWrapper = styled.div`
  /* background-color: #bcbcbc; */
  width: 90rem;
  height: 30rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const ProfileImg = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  width: 30rem;
  line-height: 2;
  text-align: end;
`;
export const ProfileNicknameEmail = styled.div`
  height: 10rem;
`;

export const ProfileNicknameInput = styled.input`
  border: none;
  border-bottom: 0.1rem solid black;
  background-color: transparent;
  font-size: 2rem;
`;

export const ProfileNickname = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const ProfileEmail = styled.div`
  font-size: 1.5rem;
`;

export const ProfileLabel = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const ProfileImgInput = styled.input`
  display: none;
`;

export const ProfileBtn = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem;
  margin-top: 3rem;
  cursor: pointer;
`;

// Tab styled

export const TabWrapper = styled.div`
  height: 100vh;
`;

export const ProfileTab = styled.div`
  width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: #bcbcbc;
  & div {
    padding: 1.5rem;
    width: 100%;
    text-align: center;
    border-bottom: 0.2rem solid #bcbcbc;
    cursor: pointer;
    &.active {
      border-bottom: 0.2rem solid black;
      color: black;
    }
  }
`;

export const TabMenu = styled.div``;

export const ProfileContent = styled.div`
  width: 80rem;
  margin: 0 auto;
`;

export const TabListTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin: 5rem 0 2rem 0;
`;

export const PostWraapper = styled.div``;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;
`;

export const PostTitle = styled.div``;

export const PostDate = styled.div``;

export const ProductWrapper = styled.div``;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;
`;
export const ProductTitlePrice = styled.div`
  width: 60rem;
  line-height: 2;
`;
export const ProductTitle = styled.div``;

export const ProductImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

export const ProductPrice = styled.div``;

export const ProductDate = styled.div`
  font-size: 1.3rem;
`;

export const FollowWrapper = styled.div`
  width: 50rem;
  margin: 0 auto;
  margin-top: 5rem;
`;

export const Follow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #bcbcbc;
  font-size: 1.5rem;
  padding: 1.5rem 0;
  cursor: pointer;
`;

export const FollowImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const FollowNickname = styled.div`
  font-size: 1.8rem;
  width: 30rem;
`;
export const UnfollowBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #bcbcbc;
`;
