import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BestSellerDomForSurvey from '../components/layout/surveyList/BestSellerDomForSurvey';
import BestSellerGenreSurvey from '../components/layout/surveyList/BestSellerGenreSurvey';
import BestSellerNewSurvey from '../components/layout/surveyList/BestSellerNewSurvey';
import BestSellerValueSurvey from '../components/layout/surveyList/BestSellerValueSurvey';
import BestSellerCheapSurvey from '../components/layout/surveyList/bestSellerCheap/BestSellerCheapSurvey';
import BestSellerCheapSurvey2 from '../components/layout/surveyList/bestSellerCheap/BestSellerCheapSurvey2';
import BestSellerCheap from '../components/layout/surveyResult/BestSellerCheap';
import BestSellerDomFor from '../components/layout/surveyResult/BestSellerDomFor';
import BestSellerGenre from '../components/layout/surveyResult/BestSellerGenre';
import BestSellerNew from '../components/layout/surveyResult/BestSellerNew';
import BestSellerValue from '../components/layout/surveyResult/BestSellerValue';
import AboutBooks from '../pages/AboutBooks';
import BookerTalk from '../pages/BookerTalk';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Market from '../pages/Market';
import MarketProduct from '../pages/MarketProduct';
import Mypage from '../pages/Mypage';
import Register from '../pages/Register';
import Survey from '../pages/Survey';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/bookertalk" element={<BookerTalk />} />
          {/* 도서 소개 페이지 */}
          <Route path="/aboutbooks" element={<AboutBooks />} />
          {/* 중고책 판매 / 중고책 상세 페이지 */}
          <Route path="/market" element={<Market />} />
          <Route path="/marketproduct" element={<MarketProduct />} />
          {/* 설문조사 페이지 / 설문조사 질문 페이지 / 설문조사 결과 페이지 */}
          <Route path="/survey" element={<Survey />} />
          <Route path="/bestSellerCheapSurvey" element={<BestSellerCheapSurvey />} />
          <Route path="/bestSellerCheapSurvey2" element={<BestSellerCheapSurvey2 />} />
          <Route path="/bestSellerDomForSurvey" element={<BestSellerDomForSurvey />} />
          <Route path="/bestSellerGenreSurvey" element={<BestSellerGenreSurvey />} />
          <Route path="/bestSellerNewSurvey" element={<BestSellerNewSurvey />} />
          <Route path="/bestSellerValueSurvey" element={<BestSellerValueSurvey />} />
          <Route path="/bestSellerGenre/:genre" element={<BestSellerGenre />} />
          <Route path="/bestSellerCheap/:genre" element={<BestSellerCheap />} />
          <Route path="/bestSellerDomFor/:genre" element={<BestSellerDomFor />} />
          <Route path="/bestSellerNew/:genre" element={<BestSellerNew />} />
          <Route path="/bestSellerValue/:genre" element={<BestSellerValue />} />
        </Route>

        {/* 로그인/ 회원가입에 헤더 푸터 적용하고 싶으시면 Layout 라우터 태그 안에 넣어주시면 됩니다. */}
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
