import { Outlet } from 'react-router-dom';
import ChatModal from '../../components/qna/ChatModal';
import * as St from './LayoutStyle';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <St.Container>
        <Outlet />
        <ChatModal />
      </St.Container>
      <Footer />
    </>
  );
};

export default Layout;
