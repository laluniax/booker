import { Outlet } from 'react-router-dom';
import AboutBookNav from '../bookintroduction/AboutBookNav';
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
