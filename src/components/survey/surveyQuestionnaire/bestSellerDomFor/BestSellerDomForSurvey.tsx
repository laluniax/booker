import { useNavigate } from 'react-router-dom';
import * as St from '../SurveyQuestionnaire.styled';

const BestSellerDomForSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerDomFor/${genre}`);
  };
  return (
    <St.Container>
      <St.Question>Q1. 어떤 책을 추천받고 싶나요??</St.Question>
      <St.Answer>
        <button onClick={() => answerClickHandler('국내작가도서')}>국내작가도서</button>
      </St.Answer>
      <St.Answer>
        <button onClick={() => answerClickHandler('외국작가도서')}>외국작가도서</button>
      </St.Answer>
    </St.Container>
  );
};

export default BestSellerDomForSurvey;
