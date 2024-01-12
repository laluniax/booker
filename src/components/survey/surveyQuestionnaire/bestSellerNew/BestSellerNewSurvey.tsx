import { useNavigate } from 'react-router-dom';

const BestSellerNewSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerNew/${genre}`);
  };
  return (
    <div>
      <h2>어떤 장르의 책을 읽고 싶나요?</h2>
      <button onClick={() => answerClickHandler('소설')}>소설</button>
      <button onClick={() => answerClickHandler('자기계발')}>자기계발</button>
      <button onClick={() => answerClickHandler('경제경영')}>경제경영</button>
      <button onClick={() => answerClickHandler('건강')}>건강</button>
      <button onClick={() => answerClickHandler('에세이')}>에세이</button>
    </div>
  );
};

export default BestSellerNewSurvey;
