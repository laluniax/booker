import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getProductHandler,
  getUserSessionHandler,
  sumbitProductHandler,
  updateProductHandler,
  updateProductImgPublicUrlHandler,
  uploadProductImgStorageUrl,
} from '../../../api/supabase.api';
import * as St from './Post.styled';

export const categoryArr = [
  '건강/취미',
  '경제경영',
  '고등학교참고서',
  '고전',
  '과학',
  '대학교재',
  '만화',
  '사전/기타',
  '사회과학',
  '소설/시/희곡',
  '수험서/자격증',
  '어린이',
  '에세이',
  '여행',
  '역사',
  '예술/대중문화',
  '외국어',
  '요리/살림',
  '유아',
  '인문학',
  '자기계발',
  '잡지',
  '전집/중고전집',
  '종교/역학',
  '좋은부모',
  '중학교참고서',
  '청소년',
  '초등학교참고서',
  '컴퓨터/모바일',
];

const Post = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('건강/취미');
  const [productGrade, setProductGrade] = useState('최상');
  const [onSale, setOnSale] = useState(true);
  const [productImg, setProductImg] = useState<File[]>([]);
  const [tempImg, setTempImg] = useState<string[]>([]);

  const navigate = useNavigate();
  const params = useParams().id;

  const gradeArr = ['최상', '상', '중', '하', '최하'];

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setUserId(result.session?.user.id as string);
  };

  const getProduct = async () => {
    const result = await getProductHandler(params as string);
    setUserId(result[0].user_id);
    setTitle(result[0].title);
    setContent(result[0].content);
    setPrice(result[0].price);
    setCategory(result[0].category);
    setProductGrade(result[0].product_grade);
    setTempImg(result[0].product_img);
  };
  const onSubmitProduct = async () => {
    if (title === '' || content === '' || price === '') {
      alert('입력되지 않은 항목이 있습니다.');
      return;
    }
    try {
      if (params) {
        const result = await updateProductHandler(
          { userId, title, content, price, category, productGrade, onSale },
          params as string,
        );
        const imgUrls = await uploadProductImgStorageUrl(result[0].id, productImg);
        await updateProductImgPublicUrlHandler(imgUrls.imgUrls, result[0].id);
        const updateImgUrls = result[0].product_img.concat(imgUrls.imgUrls);
        await updateProductImgPublicUrlHandler(updateImgUrls, result[0].id);
        navigate(`/product/${params}`);
      } else {
        const result = await sumbitProductHandler({
          userId,
          title,
          content,
          price,
          category,
          productGrade,
          onSale,
        });
        const imgUrls = await uploadProductImgStorageUrl(result[0].id, productImg);
        await updateProductImgPublicUrlHandler(imgUrls.imgUrls, result[0].id);
        navigate(`/product/${result[0].id}`);
      }
    } catch (error) {
      alert('등록 불가');
      console.log('‼️', error);
    }
  };

  const multipleImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tempImg.length > 4) {
      alert('이미지는 5개까지 등록 가능합니다.');
      return;
    }

    if (e.target.files) {
      const imgList = Array.from(e.target.files);
      setProductImg((prevImgList) => [...prevImgList, ...imgList]);
      const imgUrl: string[] = [];
      for (let i = 0; i < imgList.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(imgList[i]);
        reader.onloadend = () => {
          imgUrl[i] = reader.result as string;
          setTempImg((prevImgUrl) => [...prevImgUrl, ...imgUrl]);
        };
      }
    }
  };
  useEffect(() => {
    getUserSession();
    params && getProduct();
  }, []);

  return (
    <St.Container>
      <St.PostImg>
        {tempImg.map((item, i) => {
          //key 추가해줘야 함
          return <img key={i} src={item} alt={item} />;
        })}
      </St.PostImg>
      <St.PostImgLabel htmlFor="img">이미지 업로드</St.PostImgLabel>
      <St.PostImgInput id="img" type="file" multiple accept="image/*" onChange={multipleImgHandler} />
      <br />

      <St.PostLabel>상품명 | </St.PostLabel>
      <St.PostInput
        type="text"
        placeholder="상품명을 입력해주세요"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />

      <St.PostLabel>가격 | </St.PostLabel>
      <St.PostInput
        type="number"
        placeholder="00"
        value={price}
        onChange={(e) => {
          if (e.target.value.length > 8) return;
          setPrice(e.target.value);
        }}
      />
      <br />
      <St.PostCategory
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}>
        {categoryArr.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </St.PostCategory>
      <St.PostGrade
        value={productGrade}
        onChange={(e) => {
          setProductGrade(e.target.value);
        }}>
        {gradeArr.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </St.PostGrade>
      {params ? (
        <>
          <St.PostLabel>판매 상태</St.PostLabel>
          <St.PostOnSale value={onSale.toString()} onChange={(e) => setOnSale(e.target.value === 'true')}>
            <option value="true">판매 중</option>
            <option value="false">판매 완료</option>
          </St.PostOnSale>
        </>
      ) : (
        <></>
      )}
      <br />
      <St.PostLabel>상품 설명 | </St.PostLabel>
      <St.PostTextArea
        placeholder="상품 설명을 입력해주세요"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <br />
      <St.PostSubmitBtn onClick={onSubmitProduct}>등록하기</St.PostSubmitBtn>
    </St.Container>
  );
};

export default Post;
