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
      {tempImg.map((item, i) => {
        //key 추가해줘야 함
        return <img key={i} src={item} alt={item} />;
      })}

      <input type="file" multiple accept="image/*" onChange={multipleImgHandler} />
      <br />

      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label>Content</label>

      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <br />
      <label>Price</label>

      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}>
        {categoryArr.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
      <select
        value={productGrade}
        onChange={(e) => {
          setProductGrade(e.target.value);
        }}>
        {gradeArr.map((item, i) => {
          return <option key={i}>{item}</option>;
        })}
      </select>
      <button onClick={onSubmitProduct}>등록하기</button>
    </St.Container>
  );
};

export default Post;
