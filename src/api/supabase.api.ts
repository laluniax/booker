import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);

// 회원가입 함수 (삭제 예정)
export const signupHandler = async (email: string, password: string, nickname: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: nickname,
          avatar_img: '',
        },
      },
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

type ProductTypes = {
  title: string;
  content: string;
  price: string;
  category: string;
  productGrade: string;
};

// 상품 등록하기
export const sumbitProductForm = async ({ title, content, price, category, productGrade }: ProductTypes) => {
  const { data, error } = await supabase
    .from('products')
    .insert([{ product_img: '', title, content, price, category, product_grade: productGrade }])
    .select();
  return data;
};
