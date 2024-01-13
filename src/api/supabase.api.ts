import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// 회원가입 핸들러
export const signupHandler = async (email: string, password: string, nickname: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: nickname,
        user_img: 'https://ywwmsridviznotzmkver.supabase.co/storage/v1/object/public/user_img/default_img/React.png',
      },
    },
  });
  return { data, error };
};

// 로그인 핸들러
export const signinHandler = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// 소셜 로그인 핸들러(Github)
export const githubLoginHandler = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      queryParams: {
        // 사용자의 동의 없이도 장기간(오프라인)에 걸쳐 데이터에 액세스할 수 있도록 하는 옵션입니다.
        access_type: 'offline',
        // 사용자에게 동의를 강제로 요청하는데 사용됨
        prompt: 'consent',
      },
    },
  });
  return { data, error };
};

// 소셜 로그인 핸들러(Google)
export const googleLoginHandler = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        // 사용자의 동의 없이도 장기간(오프라인)에 걸쳐 데이터에 액세스할 수 있도록 하는 옵션입니다.
        access_type: 'offline',
        // 사용자에게 동의를 강제로 요청하는데 사용됨
        prompt: 'consent',
      },
    },
  });
  return { data, error };
};

// 로그아웃 핸들러
export const signoutHandler = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};

// 유저 세션 가져오기
export const getUserSessionHandler = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data;
};

// 유저 정보 가져오기
export const getUserDataHandler = async (params: string) => {
  const { data, error } = await supabase.from('users').select('*').eq('id', params);
  if (error) throw error;
  return data;
};

// export const updateUserNinknameHandler = async (nickname: string, id: string) => {
//   const { data, error } = await supabase.from('users').update({ nickname: nickname }).eq('id', id).select();
//   if (error) throw error;
//   return data;
// };

// 유저 정보 수정하기 (닉네임 - auth 변경되면 users테이블 자동으로 업데이트 됨)
export const updateUserAuthNicknameHandler = async (nickname: string) => {
  const { data, error } = await supabase.auth.updateUser({ data: { full_name: nickname } });
  if (error) throw error;
  return data;
};
export const updateUserAuthUserImgHandler = async (userImg: string) => {
  const { data, error } = await supabase.auth.updateUser({ data: { user_img: userImg } });
  if (error) throw error;
  return data;
};
// 유저 정보 수정하기 (이미지 - storage에 저장)
export const uploadUserImgHandler = async (params: string, userImg: File) => {
  const { data, error } = await supabase.storage.from('user_img').upload(`${params}/${params}`, userImg);
  if (error) throw error;
  return data;
};

// storage 파일 비우기
export const deleteUserImgHandler = async (params: string) => {
  const { data, error } = await supabase.storage.from('user_img').remove([`${params}/${params}`]);
  if (error) throw error;
  return data;
};

// storage에서 public URL 받아오기
export const getPublicUrlHandler = (params: string) => {
  const { data } = supabase.storage.from('user_img').getPublicUrl(`${params}/${params}`);
  return data;
};

type ProductTypes = {
  userId: string;
  title: string;
  content: string;
  price: string;
  category: string;
  productGrade: string;
};

// 상품 등록하기
export const sumbitProductHandler = async ({ userId, title, content, price, category, productGrade }: ProductTypes) => {
  const { data, error } = await supabase
    .from('products')
    .insert([{ user_id: userId, product_img: '', title, content, price, category, product_grade: productGrade }])
    .select();
  if (error) throw error;
  return data;
};

// 상품 읽어오기 (market list 사용)
export const getProductListHandler = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
};

// 상품 읽어오기 (params 이용 - product detail 사용)
export const getProductHandler = async (id: string) => {
  const { data, error } = await supabase.from('products').select('*').eq('id', id);
  if (error) throw error;
  return data;
};

type PostTypes = {
  title: string;
  content: string;
  tags: string[];
  category: string;
  genre: string;
  userId: string;
};

// 북커톡 글 작성 완료시 데이터 등록하기
export const submitPostListHandler = async ({ title, content, tags, category, genre, userId }: PostTypes) => {
  const { data, error } = await supabase.from('posts').insert([{ userId, title, content, tags, category, genre }]);
  if (error) throw error;
  return data;
};
