import { useEffect, useState } from "react";

import karinaImg from "./karina.jpg";
import WinterImg from "./winter.jpg";
import JijelImg from "./Jijel.jpg";
import NingNingImg from "./NingNing.jpg";
import * as St from "./MainImgSlide.style"

const images = [
  { image: karinaImg, alt: "Karina" },
  { image: WinterImg, alt: "Winter" },
  { image: JijelImg, alt: "Jijle" },
  { image: NingNingImg, alt: "NingNing" },
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