import { useState } from 'react';
import { sumbitProductForm } from '../../../api/supabase.api';
import * as St from './Form.styled';

const Form = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [productGrade, setProductGrade] = useState('');

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

  const onSubmitHandler = async () => {
    const result = sumbitProductForm({ title, content, price, category, productGrade });
    console.log(result);
  };

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
        {categoryArr.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <select
        value={productGrade}
        onChange={(e) => {
          setProductGrade(e.target.value);
        }}>
        {gradeArr.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <button onClick={onSubmitHandler}>등록하기</button>
    </St.Container>
  );
};

export default Form;
