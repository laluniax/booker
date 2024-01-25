import styled from 'styled-components';
import Logo from '../../styles/assets/buttonimages/logo.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
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

export const TitleImage = styled.img`
  background: url(${Logo});
  background-size: cover;
  width: 25rem;
  height: 4.4rem;
`;

export const BtnContainer = styled.div``;
export const ServeyContentWrapper = styled.div`
  margin-top: 3rem;
  width: 90rem;
`;

export const SurveyContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
`;

export const TitleAndImageWrapper = styled.div``;

export const SurveyButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 2rem;
  color: #000;
  border: 1px solid #000;
  border-radius: 1rem;
  padding: 1rem;
  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
