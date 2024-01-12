import { useNavigate } from 'react-router-dom';

const BestSellerGenreSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerGenre/${genre}`);
  };
  return (
    <div>
      <h2>어떤 장르의 책을 읽고 싶나요?</h2>
      <button onClick={() => answerClickHandler('소설')}>소설</button>
      <button onClick={() => answerClickHandler('자기계발')}>자기계발</button>
      <button onClick={() => answerClickHandler('인문학')}>인문학</button>
      <button onClick={() => answerClickHandler('경제경영')}>경제경영</button>
      <button onClick={() => answerClickHandler('만화')}>만화</button>
      <button onClick={() => answerClickHandler('건강')}>건강</button>
      <button onClick={() => answerClickHandler('역사')}>역사</button>
      <button onClick={() => answerClickHandler('에세이')}>에세이</button>
    </div>
  );
};

export default BestSellerGenreSurvey;
