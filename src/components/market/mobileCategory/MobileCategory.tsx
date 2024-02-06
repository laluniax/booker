import { MobileCategoryProps } from '../Market.type';
import * as St from '../MarketList.styled';

const MobileCategory = ({ categoryArr, onClickPostBtn }: MobileCategoryProps) => {
  return (
    <St.MobileCategory>
      <select>
        {categoryArr.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
      <St.MobilePostButton onClick={onClickPostBtn}>글쓰기</St.MobilePostButton>
    </St.MobileCategory>
  );
};

export default MobileCategory;
