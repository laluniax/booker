import styled from 'styled-components';

export const Container = styled.div`
  min-height: 180rem;
`;

export const Title = styled.div`
  width: 90rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 5rem;
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

export const ProfileImgWrapper = styled.div`
  text-align: center;
`;

export const ProfileImg = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  width: 40rem;
  line-height: 2;
  text-align: end;
`;
export const ProfileNicknameEmail = styled.div`
  height: 10rem;
`;

export const ProfileNickname = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

export const ProfileEmail = styled.div`
  font-size: 1.5rem;
`;

export const ProfileIntroText = styled.div`
  padding-top: 2rem;
  font-size: 1.6rem;
`;

// export const ProfileBtn = styled.button`
//   background-color: black;
//   color: white;
//   border: none;
//   padding: 1rem;
//   margin-top: 3rem;
//   cursor: pointer;
// `;
