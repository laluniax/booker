import styled from 'styled-components';

export const ChatModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #14213d; // 사용자 정보 섹션의 백그라운드 색상
  padding: 0.8rem;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
  padding: 0.8rem;
  width:45rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  width:48rem;
  `};
`;

// 개인 채팅 모달 닫기 버튼
export const CloseButton = styled.button`
  all: unset;
  color: white;
  margin-left: 0.5rem;
  & img {
    width: 1.1rem;
    height: 1.8rem;
  }

  &:hover {
    cursor: pointer;
    color: #fca311;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  & img{
    width:1.3rem;
    height:2rem;
  }
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  & img{
    width:1.3rem;
    height:2rem;
  }
  `};
`;

export const PrevIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const ImgNicknameWrapper = styled.div`
  margin-left: 11rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-left: 18rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-left: 20rem;
  `};
`;

export const UserImage = styled.img`
  border-radius: 50%; // 원형으로 만들기
  object-fit: cover; // 이미지 비율 유지
  width: 3.6rem; // 유저 이미지 크기 조절
  height: 3.6rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 3.8rem; // 유저 이미지 크기 조절
  height: 3.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 4rem; // 유저 이미지 크기 조절
  height: 4rem;
  `};
`;

export const ProductImage = styled.img`
  width: 4.5rem; // 물품 이미지 크기 조절
  height: 4.5rem;
  margin-left: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 5rem; // 물품 이미지 크기 조절
  height: 5rem;
  margin-left:0.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 6rem; // 물품 이미지 크기 조절
  height: 6rem;
  margin-left:0.5rem;
  border-radius:1rem;
  `};
`;

export const ChatRoomUserNickname = styled.div`
  font-weight: bold;
  color: white;
  font-size: 1rem;
  margin-top: 0.2rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  margin-top:0.3rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  margin-top:0.5rem;
  `};
`;

export const ProductInfoSection = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(252, 163, 17, 0.3); // 백그라운드 색상 지정
  border-radius: 1rem;
  cursor: pointer;
  width: 29rem;
  height: 5rem;
  margin: 0.8rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 42.5rem;
  height: 6rem;
  margin: 0.8rem auto;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 10px;
  width: 45rem;
  height: 8rem;
  margin: 1rem auto;
  `};
`;

export const ProductTitleProduct = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'GmarketSansMedium';
  margin-left: 1rem;
`;

export const ProductTitle = styled.span`
  // 제품 제목을 위한 스타일 추가
  font-size: 1.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 22rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.3rem;
  width:34rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.5rem;
  width:35rem;
  `};
`;

export const ProductPrice = styled.span`
  // 제품 가격을 위한 스타일 추가
  margin-top: 0.6rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 0.8rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 1rem;
  `};
`;
