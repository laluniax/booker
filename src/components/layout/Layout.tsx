import { Outlet } from 'react-router-dom';
import * as St from './LayoutStyle';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <St.Container>
        <Outlet />
      </St.Container>
      <Footer />
    </>
  );
};

export default Layout;
