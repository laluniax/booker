import { Outlet } from 'react-router-dom';
import AboutBookNav from '../profile1/bookintroduction1/AboutBookNav';
import * as St from './AboutLayout.styled';

const AboutLayout = () => {
  return (
    <St.Section>
      <AboutBookNav />
      <Outlet />
    </St.Section>
  );
};

export default AboutLayout;
