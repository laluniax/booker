import styled from 'styled-components';
import Icon from '../../assets/common/icon-_caret-right_.webp';

export const Container = styled.div`
  min-height: 77rem;
  display: flex;
  justify-content: center;
  margin-top: 15rem;
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 3rem;
  border-bottom: 0.2rem solid black;
  width: 90rem;
  padding-bottom: 1rem;
  text-align: center;

  & span {
    font-size: 4rem;
  }
`;

export const NickName = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: #fca311;
`;

export const Righticon = styled.div`
  background: url(${Icon});
  background-size: contain;
  width: 2rem;
  height: 3rem;
  margin-top: 0.5rem;
`;

export const BtnContainer = styled.div``;
export const ServeyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  width: 90rem;
`;

export const SurveyContentBox = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const IconAndButtonBox = styled.div`
  display: flex;
  gap: 0.3rem;
  border-bottom: 0.2rem solid transparent;

  &:hover {
    border-bottom: 0.2rem solid #14213d;
    cursor: pointer;
    transition: border-bottom 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;

export const TitleAndImageWrapper = styled.div``;

export const SurveyButton = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  color: #000;
  padding: 1rem;
`;
