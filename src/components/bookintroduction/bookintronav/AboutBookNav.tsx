import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as St from './AboutBookNav.styled';

const AboutBookNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string>(location.pathname);

  const CategoryClickHandler = (category: string) => {
    setSelectedCategory(category); // 현재 선택된 카테고리 상태를 업데이트
    navigate(category);
  };
  useEffect(() => {
    setSelectedCategory(location.pathname);
  }, [location]);

  return (
    <St.Container>
      <St.CatrgoryBox>
        <St.Category>
          <St.CategoryList
            // isSelected={selectedCategory === 'Bestseller'}
            className={selectedCategory === '/aboutBook/Bestseller' ? 'active' : ''}
            onClick={() => CategoryClickHandler('/aboutBook/Bestseller')}>
            베스트셀러
          </St.CategoryList>
          <St.CategoryList
            // isSelected={selectedCategory === 'NewBook'}
            className={selectedCategory === '/aboutBook/NewBook' ? 'active' : ''}
            onClick={() => CategoryClickHandler('/aboutBook/NewBook')}>
            신간도서
          </St.CategoryList>
          <St.CategoryList
            // isSelected={selectedCategory === 'BookSpecial'}
            className={selectedCategory === '/aboutBook/BookSpecial' ? 'active' : ''}
            onClick={() => CategoryClickHandler('/aboutBook/BookSpecial')}>
            스페셜
          </St.CategoryList>
          <St.CategoryList
            // isSelected={selectedCategory === 'BookerPick'}
            className={selectedCategory === '/aboutBook/BookerPick' ? 'active' : ''}
            onClick={() => CategoryClickHandler('/aboutBook/BookerPick')}>
            북커픽
          </St.CategoryList>
        </St.Category>
      </St.CatrgoryBox>
    </St.Container>
  );
};

export default AboutBookNav;
