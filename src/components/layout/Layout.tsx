import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as St from './LayoutStyle';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <>
      <Header searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <St.Container>
        <Outlet />
      </St.Container>
      <Footer />
    </>
  );
};

export default Layout;
