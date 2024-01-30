import styled from 'styled-components';

interface ScrollToTopButtonProps {
  $visible: boolean;
}

export const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  position: fixed;
  bottom: 14rem;
  right: 4.7rem;
  background-color: #14213d;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 5.5rem;
  height: 5.5rem;
  padding: 1.5rem;
  cursor: pointer;
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  transition: background-color 0.3s ease;
  z-index: 20;
  font-size: 1.8rem;
  transition: 0.3s;

  &:hover {
    color: #fca311;
    transition: 0.3s;
    width: 6.2rem;
    height: 6.2rem;
    font-size: 2.3rem;
  }

  &::before {
    transition: 0.4s;
  }
  /* 버튼 내부에 텍스트로 화살표 표시 */
  &::after {
    font-size: 10px;
  }
`;
