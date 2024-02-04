import { Outlet } from 'react-router-dom';
import ChatModal from '../chat/ChatModal';
import ScrollToTopButton from '../common/scrolltotopbutton/ScrollToTopButton';
import * as St from './Layout.styled';
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
