import styled from 'styled-components';

//고객센터 채팅내역
export const UserItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  cursor: pointer;
  margin: 0 auto;
  width: 25rem;
  height: 4.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #e9e9e9;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width: 36rem;
  height: 4.5rem;
  margin-bottom: 0.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 40rem;
  height: 6rem;
  margin-bottom: 1rem;
  `};
`;

export const AlarmUserWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 0.7rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 4rem;
  height: 4rem;
  margin-left:1rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 4rem;
  height: 4rem;
  `};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 15rem;
  margin-left: 0.5rem; // 오른쪽에 있는 물품 이미지와의 간격

  ${({ theme }) => theme.mediaQuery.sm`
  width: 22rem;
  margin-left: 0.5rem; // 오른쪽에 있는 물품 이미지와의 간격
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  margin-left: 0.5rem; // 오른쪽에 있는 물품 이미지와의 간격
  `};
`;

export const NicknameMessageTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 22rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 25rem;
  `};
`;

export const ChatListUserNickname = styled.div`
  font-weight: bold;
  color: black;
`;

export const MessageTime = styled.div`
  font-size: 1rem;
  margin-right: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.1rem;
  margin-right: 1rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.1rem;
  `};
`;

export const UserLastMessage = styled.div`
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 15rem;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  margin-top:0.5rem;
  width:22rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.2rem;
  margin-top:0.5rem;
  width:25rem;
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

//중고거래 문구
export const ChatContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-bottom: -1rem;
  margin-top: 1rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 2rem;
  `};
`;

export const ChatContentTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  width: 25rem;
  height: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-weight: bold;
  font-size: 1.4rem;
  width: 40rem;
  height: 2rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-weight: bold;
  font-size: 1.6rem;
  width: 40rem;
  height: 2rem;
  `};
`;

export const ChatContent = styled.div`
  text-align: center;
  font-size: 1.1rem;
  width: 25rem;
  height: 1.1rem;
  margin: -0.3rem auto;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  width: 40rem;
  height: 1.5rem;
  margin: 0.5rem auto;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.4rem;
  width: 40rem;
  height: 1.5rem;
  margin: 1rem auto;
  `};
`;

export const AlarmDetail = styled.span`
  background-color: red;
  color: white;
  vertical-align: super;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  // 기타 필요한 스타일 ...
  border-radius: 9999px; // 원형 모양
  margin-left: -1.5rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  left: 1rem;
  top: 0.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  border-radius: 9999px; // 원형 모양
  margin-left: -1.5rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1rem;
  width:1.7rem;
  height:1.7rem;
  left:1rem;
  top:0.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 9999px; // 원형 모양
  margin-left: -1.5rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1rem;
  width:1.7rem;
  height:1.7rem;
  left:1rem;
  top:0.3rem;
  `};
`;

// 채팅 리스트
export const ChatListWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem auto;
  font-size: 1.1rem;
  width: 25rem;
  height: auto;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 2rem;
  font-size: 1.2rem;
  width:40rem;
  height:auto;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 3rem;
  font-size: 1.3rem;
  width:40rem;
  height:auto;
  `};
`;
