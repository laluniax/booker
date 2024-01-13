import { useNavigate } from 'react-router-dom';
import * as St from '../SurveyQuestionnaire.styled';

const BestSellerCheapSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    if (genre === '소설') {
      navigate(`/bestSellerCheapSurvey2`);
    } else {
      navigate(`/bestSellerCheap/${genre}`);
    }
  };
  return (
    <St.Container>
      <h2>어떤 장르의 책을 읽고 싶나요??</h2>
      <button onClick={() => answerClickHandler('인문학')}>인문학</button>
      <button onClick={() => answerClickHandler('자기계발')}>자기계발</button>
      <button onClick={() => answerClickHandler('소설')}>소설</button>
      <button onClick={() => answerClickHandler('만화')}>만화</button>
      <button onClick={() => answerClickHandler('경제경영')}>경제경영</button>
      <button onClick={() => answerClickHandler('한국시')}>한국시</button>
    </St.Container>
  );
};

export default BestSellerCheapSurvey;
