import { useEffect, useState } from 'react';
import * as St from './MainImgSlide.style';

// 명화
import Famouspainting1 from '../../styles/assets/famouspainitngimages/famouspainting2.png';
import Famouspainting2 from '../../styles/assets/famouspainitngimages/painting1.jpg';
import Famouspainting3 from '../../styles/assets/famouspainitngimages/painting3.jpg';
import Famouspainting4 from '../../styles/assets/famouspainitngimages/painting4.jpg';
const images = [
  { image: Famouspainting1, alt: 'Karina' },
  { image: Famouspainting2, alt: 'Winter' },
  { image: Famouspainting3, alt: 'Jijle' },
  { image: Famouspainting4, alt: 'NingNing' },
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <St.SlideshowContainer>
      <St.PrevButton onClick={handlePrevClick}>
        <St.LeftIcon>prev</St.LeftIcon>
      </St.PrevButton>
      {images.map((image, index) => (
        <St.SlideshowImage
          key={index}
          src={image.image}
          className={index === currentImageIndex ? 'active' : ''}
          alt={image.alt}
        />
      ))}
      <St.NextButton onClick={handleNextClick}>
        <St.RightIcon>next</St.RightIcon>
      </St.NextButton>
    </St.SlideshowContainer>
  );
};

export default ImageSlideshow;
