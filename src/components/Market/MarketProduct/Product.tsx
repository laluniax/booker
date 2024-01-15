import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getProductHandler } from '../../../api/supabase.api';
import { ListTypes } from '../MarketList';
import * as St from '../marketproduct/Product.styled';

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const slideRef = useRef<HTMLUListElement>(null);
  const [product, setProduct] = useState<ListTypes>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  const getProduct = async () => {
    const result = await getProductHandler(params.id as string);
    setProduct(result[0]);
    setSlideLength(result[0].product_img.length);
  };

  const onClickPrevBtn = useCallback(() => {
    if (currentSlide >= 1) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);
  const onClickNextBtn = useCallback(() => {
    if (currentSlide < slideLength - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slideLength]);

  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    if (slideRef.current) slideRef.current.style.marginLeft = `${-currentSlide * 30}rem`;
  }, [currentSlide]);
  return (
    <St.Container>
      <St.Title>중고 거래 상세페이지</St.Title>
      <St.ProductInfo>
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
        <div>
          <St.ProductTitle>{product?.title}</St.ProductTitle>
          <St.ProductCategory>
            <span>카테고리 | </span>
            {product?.category}
          </St.ProductCategory>
          <St.ProductGrade>
            <span>상품 상태 | </span>
            {product?.product_grade}
          </St.ProductGrade>
          <St.ProductPrice>
            {product?.price} <span>원</span>
          </St.ProductPrice>
          <St.ProductBtn>
            <St.ProductLikes>좋아요</St.ProductLikes>
            <St.ProductLikes>대화 시작하기</St.ProductLikes>
          </St.ProductBtn>
          <St.ProductUser
            onClick={() => {
              navigate(`/profile/${product?.user_id}`);
            }}>
            <img />
            {product?.user_id}
          </St.ProductUser>
        </div>
      </St.ProductInfo>
      <St.ProductContent>{product?.content}</St.ProductContent>
    </St.Container>
  );
};

export default Product;
