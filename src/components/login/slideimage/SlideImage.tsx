import { useEffect, useState } from 'react';
import loginImage1 from '../../../assets/loginimage/loginimage1.webp';
import loginImage2 from '../../../assets/loginimage/loginimage2.webp';
import loginImage3 from '../../../assets/loginimage/loginimage3.webp';
import loginImage4 from '../../../assets/loginimage/loginimage4.webp';
import * as St from './SlideImage.styled';

const images = [
  { image: loginImage1, alt: 'loginimage1' },
  { image: loginImage2, alt: 'loginimage2' },
  { image: loginImage3, alt: 'loginimage3' },
  { image: loginImage4, alt: 'loginimage4' },
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <St.SlideshowContainer>
      {images.map((image, index) => (
        <St.SlideshowImage
          key={index}
          src={image.image}
          className={index === currentImageIndex ? 'active' : ''}
          alt={image.alt}
        />
      ))}
    </St.SlideshowContainer>
  );
};

export default ImageSlideshow;
