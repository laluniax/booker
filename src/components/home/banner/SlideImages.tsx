// 명화
import { useEffect, useState } from 'react';
import Famouspainting1 from '../../../styles/assets/mainpageslideimages/famouspainting1.jpg';
import Famouspainting2 from '../../../styles/assets/mainpageslideimages/famouspaintingimage6.jpg';
import Famouspainting3 from '../../../styles/assets/mainpageslideimages/mainfamouspainting.jpg';
import Famouspainting4 from '../../../styles/assets/mainpageslideimages/mainfamouspainting2.jpg';
import Famouspainting5 from '../../../styles/assets/mainpageslideimages/mainfamouspainting3.jpg';
import Famouspainting6 from '../../../styles/assets/mainpageslideimages/mainfamouspainting4.jpg';
import * as St from './SlideImages.styled';

const images = [
  { image: Famouspainting1, alt: 'Famouspainting1' },
  { image: Famouspainting2, alt: 'Famouspainting2' },
  { image: Famouspainting3, alt: 'Famouspainting3' },
  { image: Famouspainting4, alt: 'Famouspainting4' },
  { image: Famouspainting5, alt: 'Famouspainting5' },
  { image: Famouspainting6, alt: 'Famouspainting6' },
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
