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
  line-height: 4;
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
  cursor: pointer;
`;

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

export const ProfileContent = styled.div`
  width: 50rem;
  margin: 0 auto;
`;
