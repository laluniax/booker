import styled, { keyframes } from 'styled-components';
import leftIcon from '../../styles/assets/left_btn2.png';
import rightIcon from '../../styles/assets/right_btn.png';

export const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; // Use viewport height to fill the entire screen
  margin-top: 80px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  grid-column: 1; // 슬라이드쇼를 첫 번째 열에 배치합니다
  @media (max-width: 768px) {
    display: none; // 작은 화면에서는 열을 쌓습니다
  }

  @media (min-width: 300px) {
    height: 80vh;
  }

  @media (min-width: 1024px) {
    height: 80vh;
  }
`;

export const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1) translateX(-1rem) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0) rotate(0);
  }
`;

export const SlideshowImage = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  object-position: 20% 40%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(1.1) translateX(-1rem) rotate(-5deg);
  transition: all 0.5s ease-in-out;

  &.active {
    z-index: 1;
    opacity: 1;
    transform: scale(1) translateX(0) rotate(0);
    animation: ${fadeInOut} 0.5s ease-in-out;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 53%;
  right: 1.4%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
`;

export const LeftIcon = styled.span`
  background: url(${leftIcon}) no-repeat 50%;
  text-indent: -9999px;
  position: absolute;
  top: 42%;
  left: 50%;
  margin-left: -10px;
  margin-top: -17px;
  width: 50px;
  height: 40px;
  text-indent: -9999px;
  font-size: 0;
  background-size: 40px 60px;
`;

export const RightIcon = styled.span`
  background: url(${rightIcon}) no-repeat 50%;
  text-indent: -9999px;
  position: absolute;
  top: 42%;
  left: 50%;
  margin-left: -30px;
  margin-top: -17px;
  width: 50px;
  height: 40px;
  text-indent: -9999px;
  font-size: 0;
  background-size: 40px 60px;
  border-radius: 80%;
`;
