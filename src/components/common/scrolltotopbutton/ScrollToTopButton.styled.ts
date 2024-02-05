import styled from 'styled-components';

interface ScrollToTopButtonProps {
  $visible: boolean;
}

export const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  position: fixed;
  background-color: #14213d;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  transition: background-color 0.3s ease;
  z-index: 20;
  transition: 0.3s;
  margin-bottom: 3rem;
  width: 3.5rem;
  height: 3.5rem;
  bottom: 10rem;
  right: 3.5rem;
  font-size: 1.2rem;
  padding: 1.5rem;

  &:hover {
    color: #fca311;
    transition: 0.3s;
    width: 3.8rem;
    height: 3.8rem;
    font-size: 1.4rem;
  }

  &::before {
    transition: 0.4s;
  }
  /* 버튼 내부에 텍스트로 화살표 표시 */
  &::after {
    font-size: 10px;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  width: 4rem;
  height: 4rem;
  bottom: 11rem;
  right: 4rem;
  font-size: 1.6rem;
  padding: 1.5rem;

  &:hover {
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2rem;
  }
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 5.5rem;
  height: 5.5rem;
  bottom: 14rem;
  right: 4.7rem;
  font-size: 1.8rem;
  padding: 1.5rem;

  &:hover {
    width: 6.2rem;
    height: 6.2rem;
    font-size: 2.3rem;
  }
  `};
`;
