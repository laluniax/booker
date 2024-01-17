import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import BookBestseller from '../components/profile1/bookintroduction/BookBestseller/BookBestseller';
// import BookDetailPage from '../components/Profile/BookIntroduction/BookDetailPage/BookDetailPage';
// import BookSpecial from '../components/Profile/BookIntroduction/BookSpecial/BookSpecial';
// import BookerPick from '../components/Profile/BookIntroduction/BookerPick/BookerPick';
// import NewBook from '../components/Profile/BookIntroduction/NewBook/NewBook';
import AboutLayout from '../components/layout/AboutLayout';
import Layout from '../components/layout/Layout';
import AdminChatRoom from '../components/layout/qna/AdminChatRoom';
import BestSellerCheapSurvey from '../components/survey/surveyQuestionnaire/bestSellerCheap/BestSellerCheapSurvey';
import BestSellerCheapSurvey2 from '../components/survey/surveyQuestionnaire/bestSellerCheap/BestSellerCheapSurvey2';
import BestSellerDomForSurvey from '../components/survey/surveyQuestionnaire/bestSellerDomFor/BestSellerDomForSurvey';
import BestSellerGenreSurvey from '../components/survey/surveyQuestionnaire/bestSellerGenre/BestSellerGenreSurvey';
import BestSellerNewSurvey from '../components/survey/surveyQuestionnaire/bestSellerNew/BestSellerNewSurvey';
import BestSellerValueSurvey from '../components/survey/surveyQuestionnaire/bestSellerValue/BestSellerValueSurvey';
import BestSellerCheap from '../components/survey/surveyResult/BestSellerCheap';
import BestSellerDomFor from '../components/survey/surveyResult/BestSellerDomFor';
import BestSellerGenre from '../components/survey/surveyResult/BestSellerGenre';
import BestSellerNew from '../components/survey/surveyResult/BestSellerNew';
import BestSellerValue from '../components/survey/surveyResult/BestSellerValue';
// import Chat from '../components/wishper/Chat';
import AboutBooks from '../pages/AboutBooks';
import BookerTalk from '../pages/BookerTalk';
import BookerTalkDetail from '../pages/BookerTalkDetail';
import BookerTalkPost from '../pages/BookerTalkPost';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Market from '../pages/Market';
import MarketPost from '../pages/MarketPost';
import MarketProduct from '../pages/MarketProduct';
import Profile from '../pages/Profile';
import Survey from '../pages/Survey';
import BookBestseller from '../components/profile1/bookintroduction1/bookbestseller1/BookBestseller';
import NewBook from '../components/profile1/bookintroduction1/newbook1/NewBook';
import BookSpecial from '../components/profile1/bookintroduction1/bookspecial1/BookSpecial';
import BookerPick from '../components/profile1/bookintroduction1/bookerpick1/BookerPick';
import BookDetailPage from '../components/profile1/bookintroduction1/bookdetailpage1/BookDetailPage';
import Chat from '../components/wishper1/Chat';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/c" element={<Chat />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/profile/:id" element={<Profile />} />

          {/* 북커톡 커뮤니티 */}
          <Route path="/bookertalk" element={<BookerTalk />} />
          <Route path="/bookertalk/:id" element={<BookerTalk />} />
          <Route path="/bookertalk/write" element={<BookerTalkPost />} />
          <Route path="/detail/:id" element={<BookerTalkDetail />} />

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
          <Route path="/market/:id" element={<Market />} />
          <Route path="/marketpost" element={<MarketPost />} />
          <Route path="/product/:id" element={<MarketProduct />} />
          {/* Qna 페이지 */}
          <Route path="/chat/:roomId" element={<AdminChatRoom />} />
          {/* 도서소개 페이지  */}
          <Route element={<AboutLayout />}>
            <Route path="/aboutBook/Bestseller" element={<BookBestseller />} />
            <Route path="/aboutBook/NewBook" element={<NewBook />} />
            <Route path="/aboutBook/BookSpecial" element={<BookSpecial />} />
            <Route path="/aboutBook/BookerPick" element={<BookerPick />} />
          </Route>
          {/* 도서 이동 페이지 */}
          <Route path="/aboutBook/:itemId" element={<BookDetailPage />} />
        </Route>

        {/* 로그인/ 회원가입에 헤더 푸터 적용하고 싶으시면 Layout 라우터 태그 안에 넣어주시면 됩니다. */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
