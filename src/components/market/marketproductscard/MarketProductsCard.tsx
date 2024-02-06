import dayjs from 'dayjs';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router';
import ProductsLike from '../../common/like/ProductsLike';
import { MarketCardProps } from '../Market.type';
import * as St from '../MarketList.styled';

const MarketProductsCard = ({ currentPosts }: MarketCardProps) => {
  const navigate = useNavigate();
  return (
    <St.ProductsWrapper>
      {currentPosts.map((item, i) => {
        return (
          <St.ProductCard
            key={i}
            className={item.onsale ? '' : 'soldout'}
            onClick={() => {
              navigate(`/product/${item.id}`);
              window.scrollTo(0, 0);
            }}>
            <LazyLoad height={200} offset={200}>
              {item.product_img?.length === 0 ? (
                <St.LogoImage />
              ) : (
                <St.ProductImg>
                  <img
                    src={(item.product_img && item.product_img[0]) ?? undefined}
                    width={200}
                    height={260}
                    loading="lazy"
                    alt="상품이미지"
                  />
                </St.ProductImg>
              )}
            </LazyLoad>

            <St.CardTitleAndContentBox>
              <St.TitleLikes>
                <St.ProductTitle>{item.title}</St.ProductTitle>
                <ProductsLike postId={item.id} count={false} />
              </St.TitleLikes>
              <St.ProductInfo>
                <St.ProductPrice>{item.price} 원</St.ProductPrice>
                <St.ProductCreatedAt>{dayjs(item.created_at).format('MM-DD')}</St.ProductCreatedAt>
              </St.ProductInfo>
            </St.CardTitleAndContentBox>
            {item.onsale ? null : <St.Onsale>판매 완료</St.Onsale>}
          </St.ProductCard>
        );
      })}
    </St.ProductsWrapper>
  );
};

export default MarketProductsCard;
