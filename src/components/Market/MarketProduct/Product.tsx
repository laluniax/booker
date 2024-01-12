import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductHandler } from '../../../api/supabase.api';
import { ListTypes } from '../MarketList';
import * as St from './Product.styled';

const Product = () => {
  const params = useParams();
  const slideRef = useRef<HTMLUListElement>(null);
  const [product, setProduct] = useState<ListTypes>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  const getProduct = async () => {
    const result = await getProductHandler(params.id as string);
    setProduct(result[0]);
    setSlideLength(result.length);
  };

  const prevBtnValidation = useCallback(() => {
    return currentSlide >= 1;
  }, [currentSlide]);
  const nextBtnValidation = useCallback(() => {
    return currentSlide < slideLength - 1;
  }, [currentSlide, slideLength]);

  const onClickPrevBtn = useCallback(() => {
    if (!prevBtnValidation()) return;
    setCurrentSlide((prev) => prev - 1);
  }, [prevBtnValidation]);
  const onClickNextBtn = useCallback(() => {
    if (!nextBtnValidation()) return;
    setCurrentSlide((prev) => prev + 1);
  }, [nextBtnValidation]);

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    if (slideRef.current) slideRef.current.style.marginLeft = `${-currentSlide * 20}rem`;
  }, [currentSlide]);
  return (
    <St.Container>
      <St.SliderWrapper>
        {/* 이미지 슬라이드로 할 지, 클릭 시 커지는 것으로 할 지 */}
        <St.SliderUl ref={slideRef}>
          {product?.product_img?.map((img, i) => (
            <St.SliderLi key={i}>
              <img src={img} />
            </St.SliderLi>
          ))}
        </St.SliderUl>
        <St.SliderBtn onClick={onClickPrevBtn} className="prev">
          〈
        </St.SliderBtn>
        <St.SliderBtn onClick={onClickNextBtn} className="next">
          〉
        </St.SliderBtn>
      </St.SliderWrapper>
      <div>{product?.title}</div>
      <div>{product?.content}</div>
      <div>{product?.price}</div>
      <div>{product?.product_grade}</div>
    </St.Container>
  );
};

export default Product;
