import { Outlet } from 'react-router-dom';
import Chat from '../chat/Chat';
import ChatModal from '../chat/ChatModal';
import ScrollToTopButton from '../scrolltotopbutton/ScrollToTopButton';
import * as St from './LayoutStyle';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <>
      <Chat />
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
