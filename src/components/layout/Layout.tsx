import { Outlet } from 'react-router-dom';
import ChatModal from '../chat/ChatModal';
import ScrollToTopButton from '../scrolltotopbutton/ScrollToTopButton';
import * as St from './LayoutStyle';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <St.Container>
        <Outlet />
        <ScrollToTopButton />
        <ChatModal />
      </St.Container>
      <Footer />
    </>
  );
};

export default Layout;
