import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserSessionHandler, sumbitProductHandler } from '../../../api/supabase.api';
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

  const [productImg, setProductImg] = useState<File[]>([]);
  const [tempImg, setTempImg] = useState<string[]>([]);
  const [imgPublicUrl, setImgPublicUrl] = useState<string[]>([]);

  const navigate = useNavigate();

  const gradeArr = ['최상', '상', '중', '하', '최하'];

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setUserId(result.session?.user.id as string);
  };
  const onSubmitProduct = async () => {
    try {
      const result = await sumbitProductHandler({ userId, title, content, price, category, productGrade, productImg });
      navigate(`/product/${result[0].id}`);
    } catch (error) {
      alert('등록 불가');
      console.log('‼️', error);
    }
  };

  const multipleImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (productImg.length > 4) return;
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
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />

      <St.PostLabel>가격 | </St.PostLabel>
      <St.PostInput
        type="number"
        value={price}
        onChange={(e) => {
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

      <br />
      <St.PostLabel>상품 설명 | </St.PostLabel>
      <St.PostTextArea
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
