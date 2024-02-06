import { ProductsTypes } from '../../types/types';

export type CategoryButtonProps = {
  categoryArr: string[];
  params: string | undefined;
};

export type MobileCategoryProps = {
  categoryArr: string[];
  onClickPostBtn: () => void;
};

export type MarketCardProps = {
  currentPosts: ProductsTypes[];
};
