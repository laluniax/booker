import { Outlet } from 'react-router-dom';
import * as St from './AboutLayout.styled';
import AboutBookNav from '../bookintroduction/AboutBookNav';

const AboutLayout = () => {
  return (
    <St.Section>
      <AboutBookNav />
      <Outlet />
    </St.Section>
  );
};

export default AboutLayout;
