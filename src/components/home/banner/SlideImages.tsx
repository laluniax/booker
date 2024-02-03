// 명화
import { useEffect, useState } from 'react';
import SlideImage1 from '../../../assets/mainimage/slideimage1.webp';
import SlideImage2 from '../../../assets/mainimage/slideimage2.webp';
import SlideImage3 from '../../../assets/mainimage/slideimage3.webp';
import SlideImage4 from '../../../assets/mainimage/slideimage4.webp';
import SlideImage5 from '../../../assets/mainimage/slideimage5.webp';
import SlideImage6 from '../../../assets/mainimage/slideimage6.webp';
import * as St from './SlideImages.styled';

const images = [
  { image: SlideImage1, alt: 'SlideImage1' },
  { image: SlideImage2, alt: 'SlideImage2' },
  { image: SlideImage3, alt: 'SlideImage3' },
  { image: SlideImage4, alt: 'SlideImage4' },
  { image: SlideImage5, alt: 'SlideImage5' },
  { image: SlideImage6, alt: 'SlideImage6' },
];

const SlideImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const PrevClickhandler = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const NextClickhandler = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(NextClickhandler, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <St.SlideshowContainer>
      <St.PrevButton onClick={PrevClickhandler}>
        <St.LeftIcon>Left</St.LeftIcon>
      </St.PrevButton>
      {images.map((image, index) => (
        <St.SlideshowImage
          key={index}
          src={image.image}
          className={index === currentImageIndex ? 'active' : ''}
          alt={image.alt}
        />
      ))}
      <St.NextButton onClick={NextClickhandler}>
        <St.RightIcon>next</St.RightIcon>
      </St.NextButton>
    </St.SlideshowContainer>
  );
};

export default SlideImages;
