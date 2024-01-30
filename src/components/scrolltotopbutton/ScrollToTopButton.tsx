import React, { useEffect, useState } from 'react';
import * as St from './ScrollToTopButton.styled';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <St.ScrollToTopButton onClick={scrollToTop} $visible={isVisible}>
      up!
    </St.ScrollToTopButton>
  );
};

export default ScrollToTopButton;
