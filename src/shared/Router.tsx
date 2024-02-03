import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { getUserSessionHandler } from '../api/Supabase.api';
import BookDetailPage from '../components/bookintroduction/bookdetailpage/BookDetailPage';
import AdminChat from '../components/chat/qna/chatadmin/AdminChatRoom';
import Layout from '../components/layout/Layout';
import SurveyQuestionnaire from '../components/survey/surveyquestionnaire/SurveyQuestionnaire';
import SurveyResult from '../components/survey/surveyresult/SurveyResult';
import AboutBooks from '../pages/AboutBooks';
import BookerTalk from '../pages/BookerTalk';
import BookerTalkDetail from '../pages/BookerTalkDetail';
import BookerTalkPost from '../pages/BookerTalkPost';
import Home from '../pages/Home';
import IndBookStores from '../pages/IndBookStores';
import Login from '../pages/Login';
import Market from '../pages/Market';
import MarketPost from '../pages/MarketPost';
import MarketProduct from '../pages/MarketProduct';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Survey from '../pages/Survey';

const Router = () => {
  const [session, setSession] = useState<Session | null>();
  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setSession(result.session);
  };

  useEffect(() => {
    getUserSession();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          {/* 북커톡 커뮤니티 */}
          <Route path="/bookertalk" element={<BookerTalk />} />
          <Route path="/bookertalk/:id" element={<BookerTalk />} />
          <Route path="/bookertalk/write" element={<BookerTalkPost />} />
          <Route path="/bookertalk/write/:id" element={<BookerTalkPost />} />
          <Route path="/detail/:id" element={<BookerTalkDetail />} />
          <Route path="/indbookstores" element={<IndBookStores />} />
          {/* 도서 소개 페이지 */}
          <Route path="/aboutbooks" element={<AboutBooks />} />
          {/* 중고책 판매 / 중고책 상세 페이지 */}
          <Route path="/market" element={<Market />} />
          <Route path="/market/:id" element={<Market />} />
          <Route path="/marketpost" element={<MarketPost />} />
          <Route path="/marketpost/:id" element={<MarketPost />} />
          <Route path="/marketproduct" element={<MarketProduct />} />
          <Route path="/product/:id" element={<MarketProduct />} />
          {/* 설문조사 페이지 / 설문조사 질문 페이지 / 설문조사 결과 페이지 */}
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey/:id" element={<SurveyQuestionnaire />} />
          <Route path="/survey/search" element={<SurveyResult />} />
          {/* Qna 페이지 */}
          <Route path="/chat" element={<AdminChat />} />
          {/* 도서소개 페이지  */}
          <Route path="/aboutbook/:id" element={<AboutBooks />} />
          <Route path="/aboutbook/detail/:itemid" element={<BookDetailPage />} />
          {/* 도서 이동 페이지 */}
        </Route>
        {/* 로그인/ 회원가입에 헤더 푸터 적용하고 싶으시면 Layout 라우터 태그 안에 넣어주시면 됩니다. */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
