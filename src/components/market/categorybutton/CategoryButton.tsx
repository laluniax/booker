import { useNavigate } from 'react-router';
import { CategoryButtonProps } from '../Market.type';
import * as St from '../MarketList.styled';

const CategoryButton = ({ categoryArr, params }: CategoryButtonProps) => {
  const navigate = useNavigate();
  return (
    <St.CategoryBtnBox>
      {categoryArr.map((item, i) => (
        <St.CategoryBtn
          key={i}
          onClick={() => navigate(`/market/${i}`)}
          className={i === Number(params) ? 'active' : ''}>
          {item}
        </St.CategoryBtn>
      ))}
    </St.CategoryBtnBox>
  );
};

export default CategoryButton;
