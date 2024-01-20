import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  padding: 5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

export const ProfileWrapper = styled.div`
  background-color: #bcbcbc;
  width: 50rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const ProfileImg = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  width: 20rem;
  line-height: 2;
  text-align: end;
`;

export const ProfileNicknameInput = styled.input`
  border: none;
  border-bottom: 0.1rem solid black;
  background-color: transparent;
  font-size: 1.5rem;
`;

export const ProfileNickname = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ProfileEmail = styled.div``;

export const ProfileLabel = styled.label`
  cursor: pointer;
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

export const ProfileTab = styled.div`
  width: 50rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  & div {
    padding: 1.5rem;
    width: 100%;
    text-align: center;
    border-bottom: 0.2rem solid #bcbcbc;
    cursor: pointer;
    &.active {
      border-bottom: 0.2rem solid black;
    }
  }
`;

export const TabMenu = styled.div``;

export const ProfileContent = styled.div`
  width: 50rem;
  margin: 0 auto;
`;

export const TabListTitle = styled.div`
  font-size: 2rem;
`;

export const PostWraapper = styled.div``;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  cursor: pointer;
`;

export const PostTitle = styled.div``;

export const PostDate = styled.div``;

export const ProductWrapper = styled.div``;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ProductTitle = styled.div``;

export const ProductImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const ProductPrice = styled.div``;

export const ProductDate = styled.div``;

export const FollowWrapper = styled.div``;

export const Follow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FollowImg = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const FollowNickname = styled.div``;
