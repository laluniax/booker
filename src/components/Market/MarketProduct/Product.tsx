import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductHandler } from '../../../api/supabase.api';
import { ListTypes } from '../MarketList';

const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState<ListTypes>();

  const getProduct = async () => {
    const result = await getProductHandler(params.id as string);

    setProduct(result[0]);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div>{product?.title}</div>
      <div>{product?.content}</div>
      <div>{product?.price}</div>
      <div>{product?.product_grade}</div>
    </div>
  );
};

export default Product;
