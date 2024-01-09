import { useEffect, useState } from 'react';
import { getUserSessionHandler, sumbitProductHandler } from '../../../api/supabase.api';
import * as St from './Post.styled';

const Post = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('건강/취미');
  const [productGrade, setProductGrade] = useState('최상');

  const categoryArr = [
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
  const gradeArr = ['최상', '상', '중', '하', '최하'];

  const getUserSession = async () => {
    const result = await getUserSessionHandler();
    setUserId(result.session?.user.id as string);
  };
  const onSubmitProduct = async () => {
    const result = sumbitProductHandler({ userId, title, content, price, category, productGrade });
  };
  useEffect(() => {
    getUserSession();
  }, []);
  return (
    <St.Container>
      <input type="file" />
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
