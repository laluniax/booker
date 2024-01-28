import { useNavigate } from 'react-router-dom';
import * as St from '../SurveyQuestionnaire.styled';

const BestSellerNewSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerNew/${genre}`);
    window.scrollTo(0, 0);
  };
  return (
    <St.LongContainer>
      <St.Question>Q1. 어떤 장르의 책을 읽고 싶나요?</St.Question>
      <St.LongAnswer>
        <button onClick={() => answerClickHandler('소설')}>소설</button>
        <button onClick={() => answerClickHandler('자기계발')}>자기계발</button>
        <button onClick={() => answerClickHandler('경제경영')}>경제경영</button>
        <button onClick={() => answerClickHandler('건강')}>건강</button>
        <button onClick={() => answerClickHandler('에세이')}>에세이</button>
      </St.LongAnswer>
    </St.LongContainer>
  );
};

export default BestSellerNewSurvey;
