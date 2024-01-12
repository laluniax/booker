import { useNavigate } from 'react-router-dom';

const BestSellerValueSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerValue/${genre}`);
  };
  return (
    <div>
      <h2>살아감에 있어 꼭 하나를 챙겨야한다면??</h2>
      <button onClick={() => answerClickHandler('성공과행복')}>성공과 행복</button>
      <button onClick={() => answerClickHandler('지혜')}>지혜</button>
    </div>
  );
};

export default BestSellerValueSurvey;