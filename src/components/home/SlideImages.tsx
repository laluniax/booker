// 명화

import Famouspainting1 from '../../styles/assets/famouspainitngimages/famouspainting2.png';
import Famouspainting2 from '../../styles/assets/famouspainitngimages/painting1.jpg';
import Famouspainting3 from '../../styles/assets/famouspainitngimages/painting3.jpg';
import Famouspainting4 from '../../styles/assets/famouspainitngimages/painting4.jpg';

const images = [
  { image: Famouspainting1, alt: 'Famouspainting1' },
  { image: Famouspainting2, alt: 'Famouspainting2' },
  { image: Famouspainting3, alt: 'Famouspainting3' },
  { image: Famouspainting4, alt: 'Famouspainting4' },
];

const SlideImages = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  // };

  // const handleNextClick = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  // };

  // useEffect(() => {
  //   const interval = setInterval(handleNextClick, 5000);

  //   return () => clearInterval(interval);
  // }, []);
  return <div>SlideImages</div>;
};

export default SlideImages;
