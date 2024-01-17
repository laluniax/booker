import { useNavigate } from 'react-router-dom';
import * as St from './aboutBookNav.styled';

const AboutBookNav = () => {
  const navigate = useNavigate();

  const bestSeller = () => {
    navigate('/aboutBook/Bestseller');
  };

  const newBook = () => {
    navigate('/aboutBook/NewBook');
  };

  const special = () => {
    navigate('/aboutBook/BookSpecial');
  };

  const BookerPick = () => {
    navigate('/aboutBook/BookerPick');
  };

  return (
    <St.Container>
      <St.Menu>
        <St.MenuList onClick={bestSeller}>베스트셀러</St.MenuList>
        <St.MenuList onClick={newBook}>신간도서</St.MenuList>
        <St.MenuList onClick={special}>스페셜</St.MenuList>
        <St.MenuList onClick={BookerPick}>북커픽</St.MenuList>
      </St.Menu>
    </St.Container>
  );
};

export default AboutBookNav;
