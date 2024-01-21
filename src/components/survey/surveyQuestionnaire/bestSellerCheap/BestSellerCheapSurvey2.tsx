import { useNavigate } from 'react-router-dom';
import * as St from '../SurveyQuestionnaire.styled';

const BestSellerCheapSurvey2 = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerCheap/${genre}`);
  };
  return (
    <St.Container>
      <St.Question>Q2. 어떤 소설을 읽고 싶나요??</St.Question>
      <St.Answer>
        <button onClick={() => answerClickHandler('아일랜드소설')}>아일랜드소설</button>
      </St.Answer>
      <St.Answer>
        <button onClick={() => answerClickHandler('한국소설')}>한국소설</button>
      </St.Answer>

      <St.Answer>
        <button onClick={() => answerClickHandler('영미소설')}>영미소설</button>
      </St.Answer>

      <St.Answer>
        <button onClick={() => answerClickHandler('일본소설')}>일본소설</button>
      </St.Answer>
    </St.Container>
  );
};

export default BestSellerCheapSurvey2;
