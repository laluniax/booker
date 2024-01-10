import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AboutBooks from '../pages/AboutBooks';
import BookerTalk from '../pages/BookerTalk';
import BookerTalkPost from '../pages/BookerTalkPost';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Market from '../pages/Market';
import MarketProduct from '../pages/MarketProduct';
import Mypage from '../pages/Mypage';
import Register from '../pages/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/mypage" element={<Mypage />} />

          {/* 북커톡 커뮤니티 */}
          <Route path="/bookertalk" element={<BookerTalk />} />
          <Route path="/bookertalk/write" element={<BookerTalkPost />} />

          {/* 도서 소개 페이지 */}
          <Route path="/aboutbooks" element={<AboutBooks />} />
          {/* 중고책 판매 / 중고책 상세 페이지 */}
          <Route path="/market" element={<Market />} />
          <Route path="/marketproduct" element={<MarketProduct />} />
        </Route>

        {/* 로그인/ 회원가입에 헤더 푸터 적용하고 싶으시면 Layout 라우터 태그 안에 넣어주시면 됩니다. */}
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
