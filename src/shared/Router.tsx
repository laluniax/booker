import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AboutBooks from '../pages/AboutBooks';
import BookerTalk from '../pages/BookerTalk';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Market from '../pages/Market';
import MarketPost from '../pages/MarketPost';
import MarketProduct from '../pages/MarketProduct';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/bookertalk" element={<BookerTalk />} />
          {/* 도서 소개 페이지 */}
          <Route path="/aboutbooks" element={<AboutBooks />} />
          {/* 중고책 판매 / 중고책 상세 페이지 */}
          <Route path="/market" element={<Market />} />
          <Route path="/marketpost" element={<MarketPost />} />
          <Route path="/product/:id" element={<MarketProduct />} />
        </Route>

        {/* 로그인/ 회원가입에 헤더 푸터 적용하고 싶으시면 Layout 라우터 태그 안에 넣어주시면 됩니다. */}
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
