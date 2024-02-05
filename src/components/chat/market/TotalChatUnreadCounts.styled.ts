import styled from "styled-components";

export const NotificationBadge = styled.span`
  background-color: red;
  color: white;
  vertical-align: super;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // 기타 필요한 스타일 ...
  border-radius: 5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1.2rem;
  width: 1.7rem;
  height: 1.7rem;
  left: 1.5rem;
  top: 3.3rem;

  ${({ theme }) => theme.mediaQuery.sm`
  border-radius: 5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1.2rem;
  width:2.2rem;
  height:2.2rem;
  left:1.5rem;
  top:3.5rem;
  `}

  ${({ theme }) => theme.mediaQuery.lg`
  border-radius: 5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  padding: 0.2em 0.6em;
  font-size: 1.5rem;
  width:3rem;
  height:3rem;
  left:1.5rem;
  top:4.5rem;
  `};
`;
