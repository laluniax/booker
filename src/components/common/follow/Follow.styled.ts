import styled from 'styled-components';

export const ProfileBtn = styled.button`
  background-color: #fca311;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  text-align: center;
  font-family: 'GmarketSansMedium';
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: #000;
  font-size: 1.4rem;
  padding: 0.6rem;
  &:hover {
    cursor: pointer;
    transform: scale(1);
    transition: 0.3s;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.3s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    padding: 1rem;
    text-align: center;
    font-weight: bold;
      font-size: 1.7rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 2.5rem;

    `};
`;

export const ProductFollowBtn = styled.button`
  font-family: 'GmarketSansMedium';
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  width: 8rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #fca311;
    transform: scale(1.1);
    transition: 0.1s;
  }

  &:active {
    transform: scale(0.9);
    transition: 0.1s;
  }

  &:not(:hover) {
    transition: 0.1s;
  }
`;

export const PostFollowBtn = styled.button`
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
