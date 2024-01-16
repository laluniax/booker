import { createClient } from '@supabase/supabase-js';
import { nanoid } from 'nanoid';

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
  productImg: File[];
};

// 상품 등록하기
export const sumbitProductHandler = async ({
  userId,
  title,
  content,
  price,
  category,
  productGrade,
  productImg,
}: ProductTypes) => {
  const { data, error } = await supabase
    .from('products')
    .insert([{ user_id: userId, title, content, price, category, product_grade: productGrade }])
    .select();
  if (data) {
    const productId = data[0]?.id;
    await uploadProductImgStorageUrl(productId, productImg);
  }

  if (error) throw error;
  return data;
};

// 상품 사진 storage에 저장 후 url까지 받아오는 함수
export const uploadProductImgStorageUrl = async (productId: string, productImg: File[]) => {
  const uploadImg = productImg.map(async (item) => {
    const imgName = nanoid();
    const { data, error } = await supabase.storage.from('product_img').upload(`${productId}/${imgName}`, item);
    if (error) throw error;
    return data;
  });
  const imgUrl = await Promise.all(uploadImg);
  const imgUrls = getPublicUrlsHandler(imgUrl);
  await updateProductImgPublicUrlHandler(imgUrls, productId);
};
// storage에 있는 상품 사진 publicUrl로 불러오는 함수
const getPublicUrlsHandler = (imgUrl: { path: string }[]) => {
  const imgUrls = imgUrl.map((item) => {
    const { data } = supabase.storage.from('product_img').getPublicUrl(`${item.path}`);
    return data.publicUrl;
  });
  return imgUrls;
};
// 테이블에 publicUrls 받아온 배열 업데이트하는 함수
const updateProductImgPublicUrlHandler = async (imgUrls: string[], productId: string) => {
  const { data, error } = await supabase.from('products').update({ product_img: imgUrls }).eq('id', productId).select();
  if (error) throw error;
  return data;
};

// 상품 읽어오기 (market list 사용)
export const getProductListHandler = async () => {
  const { data, error } = await supabase.from('products').select('*');
  if (error) throw error;
  return data;
};
// 상품 읽어오기 (params category 사용)
export const getCategoryProductListHandler = async (category: string) => {
  const { data, error } = await supabase.from('products').select('*').eq('category', category);
  if (error) throw error;
  return data;
};

// 상품 읽어오기 (params 이용 - product detail 사용)
export const getProductHandler = async (id: string) => {
  const { data, error } = await supabase.from('products').select('*').eq('id', id);
  if (error) throw error;
  return data;
};

export type PostTypes = {
  title: string;
  content: string;
  tags: string[];
  userId: string;
  genreUuid: string;
};

// 북커톡 게시판 글 작성 완료시 데이터 등록하는 함수입니다.
export const submitPostListHandler = async ({ title, content, tags, userId, genreUuid }: PostTypes) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ user_id: userId, title, content, tags, genre_id: genreUuid }])
    .select();

  if (error) throw error;
  return data;
};

// 포스트의 genre_id와 같은 데이터를 불러오는 함수입니다.
export const filteredCategory = async (params: string) => {
  const { data, error } = await supabase.from('posts').select('*').eq('genre_id', params);
  if (error) throw error;
  return data;
};

// 포스트의 id랑 똑같은 정보 가져오는 함수입니다.
export const filteredPostId = async (params: string) => {
  const { data, error } = await supabase.from('posts').select('*').eq('id', params);
  if (error) throw error;
  return data;
};
// userId로 posts 풀러오는 함수(profile)
export const filterPostsByUserIdHandler = async (userId: string) => {
  const { data, error } = await supabase.from('posts').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
};
// userId로 products 불러오는 함수(profile)
export const filterProductsByUserIdHandler = async (userId: string) => {
  const { data, error } = await supabase.from('products').select('*').eq('user_id', userId);
  if (error) throw error;
  return data;
};

// comment 불러오는 함수 (해당 postId에 따른 댓글 불러오기)
// export const filterCommentHandler = async (postId: number) => {
//   const { data, error } = await supabase.from('comments').select('*').eq('post_id', postId);
//   if (error) throw error;
//   return data;
// };

// comments 정보 가져오는 함수(댓글)
export const getCommentsInfoHandler = async (postId: number) => {
  const { data, error } = await supabase.from('posts').select('*,comments(*,users(*))').eq('id', postId);
  if (error) throw error;
  return data;
};

// comment 추가하는 함수
export const insertCommentHandler = async (postId: number, userId: string, content: string) => {
  const { data, error } = await supabase.from('comments').insert([{ post_id: postId, user_id: userId, content }]);
  if (error) throw error;
  return data;
};

// comment 업데이트하는 함수
export const updateCommentHandler = async (content: string, commentId: number) => {
  const { data, error } = await supabase.from('comments').update({ content: content }).eq('id', commentId).select();
  if (error) throw error;
  return data;
};

// comment 삭제하는 함수 (클릭하면 댓글 아이디 받아서 해당 댓글 삭제하기)
export const deleteCommentHandler = async (commentId: number) => {
  const { error } = await supabase.from('comments').delete().eq('id', commentId);
  if (error) throw error;
};

// comments 정보 가져오는 함수(대댓글)
export const getSubCommentsInfoHandler = async (commentId: number) => {
  const { data, error } = await supabase.from('comments').select('*,subcomments(*,users(*))').eq('id', commentId);
  if (error) throw error;
  return data;
};

// subcomments 추가하는 함수
export const insertSubCommentHandler = async (commentId: number, userId: string, content: string) => {
  const { data, error } = await supabase
    .from('subcomments')
    .insert([{ comment_id: commentId, user_id: userId, content }])
    .select();
};
// subcomments 업뎃하는 함수
export const updateSubCommentHandler = async (content: string, subCommentId: number) => {
  const { data, error } = await supabase
    .from('subcomments')
    .update({ content: content })
    .eq('id', subCommentId)
    .select();
  if (error) throw error;
  return data;
};

// subcomments 삭제하는 함수
export const deleteSubCommentHandler = async (subCommentId: number) => {
  const { error } = await supabase.from('subcomments').delete().eq('id', subCommentId);
  if (error) throw error;
};
