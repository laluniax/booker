import styled, { keyframes } from 'styled-components';
import leftButtonIcon from '../../../assets/common/buttonleft.webp';
import rightButtonIcon from '../../../assets/common/buttonright.webp';

export const SlideshowContainer = styled.div`
  position: relative;
  max-width: 33rem;
  height: 16.4rem;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  grid-column: 1;

  ${({ theme }) => theme.mediaQuery.sm`
    max-width: 52.7rem;
    height: 37rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    max-width:85rem;
    height:51rem;
    margin-left: 2rem;
  `};
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

export const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SlideshowImage = styled.img`
  background-size: contain;
  width: 22rem;
  height: 16.4rem;
  margin: 0 auto;
  object-fit: cover;
  object-position: 50% 40%;
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
    animation: ${fadeInOut} 0.7s ease-in-out;
  }

  ${({ theme }) => theme.mediaQuery.sm`
       width: 52.7rem;
       height:37rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
    width: 85rem;
    height: 51rem;
  `};
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

  ${({ theme }) => theme.mediaQuery.sm`
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;

  &.active {
    z-index: 1;
    opacity: 1;
    transform: scale(1) translateX(0) rotate(0);
    animation: ${slideInLeft} 0.7s ease-in-out;
  }

  ${({ theme }) => theme.mediaQuery.sm`
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  `};
`;

export const LeftIcon = styled.span`
  background: url(${leftButtonIcon}) no-repeat 50%;
  text-indent: -9999px;
  position: absolute;
  top: 42%;
  left: 20%;
  margin-left: -24px;
  margin-top: -8px;
  width: 36px;
  height: 26px;
  font-size: 0;
  background-size: 20px 37px;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 40px;
    height: 40px;
    margin-left: -10px;
    margin-top: -17px;
    background-size: 40px 60px;
    top: 42%;
    left: 50%;
    text-indent: -9999px;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 50px;
  height: 40px;
  margin-left: -10px;
  margin-top: -17px;
  background-size: 40px 60px;
  top: 42%;
  left: 50%
  text-indent: -9999px;;
  `};
`;

export const RightIcon = styled.span`
  background: url(${rightButtonIcon}) no-repeat 50%;
  text-indent: -9999px;
  position: absolute;
  top: 42%;
  left: 50%;
  margin-left: 0px;
  margin-top: -10px;
  width: 36px;
  height: 26px;
  text-indent: -9999px;
  font-size: 0;
  background-size: 20px 37px;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 40px;
    height: 40px;
    top: 42%;
    left: 50%;
    margin-left: -30px;
    margin-top: -17px;
    width: 50px;
    height: 40px;
    text-indent: -9999px;
    font-size: 0;
    background-size: 40px 60px;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
   width: 50px;
   height: 40px;
   top: 42%;
   left: 50%;
   margin-left: -30px;
   margin-top: -17px;
   width: 50px;
   height: 40px;
   text-indent: -9999px;
   font-size: 0;
   background-size: 40px 60px;
  `};
`;
