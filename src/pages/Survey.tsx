import { Link } from 'react-router-dom';

const Survey = () => {
  return (
    <div>
      <Link to="/BestSellerDomForSurvey">🔥Best Seller🔥 요즘 핫한 국내도서 vs 외국도서 추천받기!!</Link>
      <Link to="/BestSellerGenreSurvey">🔥Best Seller🔥 요즘 핫한 원하는 장르의 책 추천받기!!</Link>
      <Link to="/BestSellerNewSurvey">🔥Best Seller🔥 신작, 어디까지 읽어봤니??</Link>
      <Link to="/BestSellerValueSurvey">🔥Best Seller🔥 본인이 추구하는 가치에 걸맞는 책 추천받기!!</Link>
      <Link to="/BestSellerCheapSurvey">🔥Best Seller🔥 텅장러들을 위한 추천 도서!!</Link>
    </div>
  );
};

export default Survey;
