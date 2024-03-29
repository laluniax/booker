import { useCallback, useEffect, useRef, useState } from 'react';
import LazyLoad from 'react-lazyload';

import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  deleteXbuttonStorage,
  getProductHandler,
  submitProductHandler,
  updateProductHandler,
  updateProductImgPublicUrlHandler,
  uploadProductImgStorageUrl,
} from '../../../api/Supabase.api';
import { userSession } from '../../../state/atom/userSessionAtom';
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
  const [deleteImg, setDeleteImg] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const session = useRecoilValue(userSession);

  const navigate = useNavigate();
  const params = useParams().id;
  const gradeArr = ['최상', '상', '중', '하', '최하'];

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

  const onSubmitProduct = useCallback(async () => {
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
        // deleteImg에 있는 url제외하고 product table에 넣어주기
        const updateImgUrls = result[0].product_img.concat(imgUrls).filter((item: string) => !deleteImg.includes(item));
        await updateProductImgPublicUrlHandler(updateImgUrls, result[0].id);
        // 기존 이미지 x버튼 눌러서 삭제한 것들 storage에서 지우기
        const deleteUrls = deleteImg.map((url) => {
          const seperate = url.split('/');
          return seperate.slice(-1)[0];
        });
        await deleteXbuttonStorage(params, deleteUrls);
        navigate(`/product/${params}`);
      } else {
        const result = await submitProductHandler({
          userId,
          title,
          content,
          price,
          category,
          productGrade,
          onSale,
        });
        const imgUrls = await uploadProductImgStorageUrl(result[0].id, productImg);
        await updateProductImgPublicUrlHandler(imgUrls, result[0].id);
        navigate(`/product/${result[0].id}`);
      }
      setDeleteImg([]);
    } catch (error) {
      alert('등록 불가');
      console.error('‼️', error);
    }
  }, [title, content, price, params, navigate, deleteImg, category, productGrade, onSale, productImg, userId]);

  const multipleImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files) as File[];
      const updatedImgList = files.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onload = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(updatedImgList).then((images) => {
        setTempImg([...tempImg, ...images]); // 미리보기 이미지 상태 업데이트
        setProductImg([...productImg, ...files]); // 실제 업로드할 이미지 파일 상태 업데이트
      });
    }
  };
  const onClickDeleteBtn = (item: string) => {
    setDeleteImg((prev) => [...prev, item]);
    const newImgs = tempImg.filter((url) => url.startsWith('data:image'));
    const deletedIndex = newImgs.findIndex((url) => url === item);
    if (deletedIndex !== -1) {
      const filteredProductImg = productImg.filter((_, index) => index !== deletedIndex);
      setProductImg(filteredProductImg);
    }
  };

  const sessionHandler = () => {
    if (!session) {
      alert('로그아웃 상태입니다.');
      navigate('/');
      return;
    }
  };
  useEffect(() => {
    params && getProduct();
    setUserId(session?.id as string);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <St.Container>
      <St.Title>상품등록</St.Title>
      <St.Imgupload>상품 이미지는 5개까지 가능합니다.</St.Imgupload>
      <St.ImgUploadBox>
        <St.PostImgLabel htmlFor="img">이미지 업로드</St.PostImgLabel>
        <St.PostImgInput id="img" type="file" multiple accept="image/*" onChange={multipleImgHandler} />
      </St.ImgUploadBox>
      <St.PostWrapper>
        <St.PostImgWrapper height={tempImg.filter((temp) => !deleteImg.includes(temp)).length * 25}>
          {tempImg &&
            tempImg
              .filter((temp) => !deleteImg.includes(temp))
              .map((item, i) => (
                <LazyLoad key={i} height={200} offset={100} once>
                  <St.PostImgCard>
                    <St.PostImg src={item} alt={`Uploaded image ${i}`} />
                    <St.DeleteBtn onClick={() => onClickDeleteBtn(item)}>X</St.DeleteBtn>
                  </St.PostImgCard>
                </LazyLoad>
              ))}
        </St.PostImgWrapper>
      </St.PostWrapper>
      <St.TotalItemWrapper>
        <St.ItemWrapper>
          <St.PostLabel>상품명</St.PostLabel>
          <St.PostInput
            ref={inputRef}
            type="text"
            placeholder="상품명을 입력해주세요"
            maxLength={50}
            value={title}
            onFocus={sessionHandler}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </St.ItemWrapper>
        <St.ItemWrapper>
          <St.PostLabel>가격</St.PostLabel>
          <St.PostInput
            type="text"
            placeholder="가격을 입력해주세요"
            value={price}
            onChange={(e) => {
              const regexValue = e.target.value.replace(/[^0-9]/g, '');
              if (regexValue.length > 8) return;
              setPrice(regexValue);
            }}
          />
        </St.ItemWrapper>
        <St.ItemWrapper>
          <St.PostLabel>카테고리</St.PostLabel>
          <St.PostCategory
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}>
            {categoryArr.map((item, i) => {
              return <option key={i}>{item}</option>;
            })}
          </St.PostCategory>
          <St.PostCategory
            value={productGrade}
            onChange={(e) => {
              setProductGrade(e.target.value);
            }}>
            {gradeArr.map((item, i) => {
              return <option key={i}>{item}</option>;
            })}
          </St.PostCategory>
        </St.ItemWrapper>
        {params && (
          <St.ItemWrapper>
            <St.PostLabel>판매 상태</St.PostLabel>
            <St.PostCategory value={onSale.toString()} onChange={(e) => setOnSale(e.target.value === 'true')}>
              <option value="true">판매 중</option>
              <option value="false">판매 완료</option>
            </St.PostCategory>
          </St.ItemWrapper>
        )}

        <br />
        <St.ItemWrapper>
          <St.PostLabel>상품 설명</St.PostLabel>
          <St.PostTextArea
            placeholder="상품 설명을 입력해주세요"
            maxLength={3000}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </St.ItemWrapper>
        <St.PostSubmitBtnBox>
          <St.PostSubmitBtn onClick={onSubmitProduct}>등록하기</St.PostSubmitBtn>
        </St.PostSubmitBtnBox>
      </St.TotalItemWrapper>
    </St.Container>
  );
};

export default Post;
