import styled from 'styled-components';

export const ProfileBtn = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 1rem;
  margin-top: 3rem;
  cursor: pointer;
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
