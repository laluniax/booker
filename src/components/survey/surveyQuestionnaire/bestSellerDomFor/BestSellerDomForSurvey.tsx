import { useNavigate } from 'react-router-dom';

const BestSellerDomForSurvey = () => {
  const navigate = useNavigate();

  const answerClickHandler = (genre: string) => {
    navigate(`/bestSellerDomFor/${genre}`);
  };
  return (
    <div>
      <h2>어떤 책을 추천받고 싶나요??</h2>
      <button onClick={() => answerClickHandler('국내작가도서')}>국내작가도서</button>
      <button onClick={() => answerClickHandler('외국작가도서')}>외국작가도서</button>
    </div>
  );
};

export default BestSellerDomForSurvey;
