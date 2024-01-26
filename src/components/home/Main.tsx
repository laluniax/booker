import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLatestProductListHandler } from '../../api/supabase.api';
import defaultImg from '../../assets/profile/defaultprofileimage.webp';
import { Bestseller, BooksInfoTypes, ProductsTypes } from '../../types/types';
import Loading from '../survey/Loading';
import * as St from './Main.styled';
import SlideImages from './banner/SlideImages';

const Main = () => {
  const navigate = useNavigate();
  const [bestSeller, setBestSeller] = useState<Bestseller>();
  const [newbook, setNewbook] = useState<BooksInfoTypes>();
  const [bookSpecial, setBookSpecial] = useState<BooksInfoTypes>();
  const [bookerPick, setBookerPick] = useState<BooksInfoTypes>();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [productsList, setProductsList] = useState<ProductsTypes[]>([]);

  const getBookIntroduction = async () => {
    // 베스트셀러
    try {
      setLoading1(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller`);
      setBestSeller(response.data.item[0]);
      setLoading1(false);
    } catch (error) {
      console.log(error);
    }
    // 신간도서
    try {
      setLoading2(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks`);
      setNewbook(response.data.item[0]);
      setLoading2(false);
    } catch (error) {
      console.log(error);
    }
    // 스페셜
    try {
      setLoading3(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/special`);
      setBookSpecial(response.data.item[0]);
      setLoading3(false);
    } catch (error) {
      console.log(error);
    }
    // 북커들의 선택
    try {
      setLoading4(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/BlogBest`);
      setBookerPick(response.data.item[0]);
      setLoading4(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getProductList = async () => {
    const products = await getLatestProductListHandler();
    setProductsList(products.sort((a, b) => b.id - a.id));
  };

  useEffect(() => {
    getBookIntroduction();
    getProductList();
  }, []);
  return (
    <>
      <St.Container>
        {/* 배너 들어올 곳  */}
        <St.BannerWrapper>
          <St.BannerBookIntroBox>
            <St.BannerBookImage />
            <St.BannerBookIntro>
              <St.TodayBook>오늘의 책</St.TodayBook>
              <St.BannerBookTitle>해방의 밤</St.BannerBookTitle>
            </St.BannerBookIntro>
          </St.BannerBookIntroBox>

          <St.BannerRecommendBox>
            <SlideImages />
            {/* <St.BannerRecommendImage /> */}
            <St.BannerRecommendTitleBox>
              <St.BannerRecommendTitle
                onClick={() => {
                  navigate(`/bookertalk`);
                }}>
                당신의 이름을 지어다가 며칠은 먹었다 라는 책이 요즘 재미있더라구요!
              </St.BannerRecommendTitle>
            </St.BannerRecommendTitleBox>
          </St.BannerRecommendBox>
        </St.BannerWrapper>

        <St.Contour />

        {/* 북커톡  */}
        <St.BookerTalkWrapper>
          <St.Titlebox>
            <St.Title>북커톡</St.Title>
            <St.Detail>북커들의 이야기</St.Detail>
          </St.Titlebox>

          <St.CardBox>
            <St.BookerTalkCard>
              <St.BookerTalkCardImage
                onClick={() => {
                  navigate(`/bookertalk/a249535a-b19a-4fb4-bcd9-0788e780a2ac`);
                  window.scrollTo(0, 0);
                }}
              />
              <St.CardTitle>책 추천 받습니다.</St.CardTitle>
              <St.CardContent>져져젼님</St.CardContent>
            </St.BookerTalkCard>

            <St.BookerTalkCard>
              <St.BookerTalkCardImage2
                onClick={() => {
                  navigate(`/bookertalk/3c5d132b-1ca6-430d-a467-4315a2d86618`);
                  window.scrollTo(0, 0);
                }}
              />
              <St.CardTitle2>언어의 온도 추천합니다.</St.CardTitle2>
              <St.CardContent>강낭콩님</St.CardContent>
            </St.BookerTalkCard>

            <St.BookerTalkCard>
              <St.BookerTalkCardImage3
                onClick={() => {
                  navigate(`/bookertalk/8114a2cd-d916-4f38-a735-83815ecb0b83`);
                  window.scrollTo(0, 0);
                }}
              />
              <St.CardTitle3>에세이 책 추천 5권 공유합니다.</St.CardTitle3>
              <St.CardContent>Respect님</St.CardContent>
            </St.BookerTalkCard>

            <St.BookerTalkCard>
              <St.BookerTalkCardImage4
                onClick={() => {
                  navigate(`/bookertalk/15c0651c-47e5-45e7-91c6-f244443a9123`);
                  window.scrollTo(0, 0);
                }}
              />
              <St.CardTitle4>IT 관련 책 추천 받습니다.</St.CardTitle4>
              <St.CardContent>규갓님</St.CardContent>
            </St.BookerTalkCard>
          </St.CardBox>
        </St.BookerTalkWrapper>

        {/* 도서소개  */}
        <St.BookIntroWrapper>
          <St.Titlebox>
            <St.Title>도서소개</St.Title>
            <St.Detail>꾸준히 사랑받는 작품들</St.Detail>
          </St.Titlebox>
          <St.CategoryBox>
            <St.BookIntroCategory>베스트셀러</St.BookIntroCategory>
            <St.BookIntroCategory>신간도서</St.BookIntroCategory>
            <St.BookIntroCategory>스페셜</St.BookIntroCategory>
            <St.BookIntroCategory>북커들의 선택 </St.BookIntroCategory>
          </St.CategoryBox>

          <St.CardBox>
            <St.BookIntroCard
              onClick={() => {
                navigate(`/aboutbook/bestseller`);
              }}>
              <St.BookImage>
                {loading1 ? <Loading /> : null}
                <img src={bestSeller?.cover} />
              </St.BookImage>
              <St.BookIntroCardTitle>{bestSeller?.title}</St.BookIntroCardTitle>
              <St.BookIntroCardContent>{bestSeller?.author}</St.BookIntroCardContent>
            </St.BookIntroCard>

            <St.BookIntroCard
              onClick={() => {
                navigate(`/aboutbook/newbook`);
              }}>
              <St.BookImage>
                {loading2 ? <Loading /> : null}
                <img src={newbook?.cover} />
              </St.BookImage>
              <St.BookIntroCardTitle>{newbook?.title}</St.BookIntroCardTitle>
              <St.BookIntroCardContent>{newbook?.author}</St.BookIntroCardContent>
            </St.BookIntroCard>

            <St.BookIntroCard
              onClick={() => {
                navigate(`/aboutbook/bookspecial`);
              }}>
              <St.BookImage>
                {loading3 ? <Loading /> : null}
                <img src={bookSpecial?.cover} />
              </St.BookImage>
              <St.BookIntroCardTitle>{bookSpecial?.title}</St.BookIntroCardTitle>
              <St.BookIntroCardContent>{bookSpecial?.author}</St.BookIntroCardContent>
            </St.BookIntroCard>

            <St.BookIntroCard
              onClick={() => {
                navigate(`/aboutbook/bookerpick`);
              }}>
              {' '}
              <St.BookImage>
                {loading4 ? <Loading /> : null}
                <img src={bookerPick?.cover} />
              </St.BookImage>
              <St.BookIntroCardTitle>{bookerPick?.title}</St.BookIntroCardTitle>
              <St.BookIntroCardContent>{bookerPick?.author}</St.BookIntroCardContent>
            </St.BookIntroCard>
          </St.CardBox>
        </St.BookIntroWrapper>

        {/* 중고거래 */}
        <St.MarketWrapper>
          <St.Titlebox>
            <St.Title>중고거래</St.Title>
            <St.Detail>신규 입고 상품을 모았습니다.</St.Detail>
          </St.Titlebox>

          <St.CardBox>
            {productsList.map((item, i) => {
              return (
                <St.MarketProductCard
                  key={i}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}>
                  <St.MarketProductImage>
                    <img src={(item.product_img && item.product_img[0]) || defaultImg} />
                  </St.MarketProductImage>
                  <St.ProductTitle>{item.title}</St.ProductTitle>
                  <St.ProductPrice>₩ {item.price}</St.ProductPrice>
                  {/* <St.ProductContent>{item.users.nickname}님</St.ProductContent> */}
                </St.MarketProductCard>
              );
            })}
            {/* <St.MarketProductCard>
              <St.MarketProductImage />
              <St.ProductTitle>푸바오 책 팝니다.</St.ProductTitle>
              <St.ProductPrice>₩ 12,000</St.ProductPrice>
              <St.ProductContent>OO님</St.ProductContent>
            </St.MarketProductCard>

            <St.MarketProductCard>
              <St.MarketProductImage2 />
              <St.ProductTitle>쇼펜하우어 소품집 판매</St.ProductTitle>
              <St.ProductPrice> ₩ 20,000</St.ProductPrice>
              <St.ProductContent>OO님</St.ProductContent>
            </St.MarketProductCard>

            <St.MarketProductCard>
              <St.MarketProductImage3 />
              <St.ProductTitle>집중력 높여주는 책 판매</St.ProductTitle>
              <St.ProductPrice>₩ 13,000</St.ProductPrice>
              <St.ProductContent>OO님</St.ProductContent>
            </St.MarketProductCard>

            <St.MarketProductCard>
              <St.MarketProductImage4 />
              <St.ProductTitle>죽음이 물었다,어떻게 살거냐고 책 팝니다.</St.ProductTitle>
              <St.ProductPrice>₩ 19,000</St.ProductPrice>
              <St.ProductContent>OO님</St.ProductContent>
            </St.MarketProductCard> */}
          </St.CardBox>
        </St.MarketWrapper>

        <St.Contour />

        {/* 독립서점*/}
        <St.IndBookStoreWrapper>
          <St.IndBookStorebox
            onClick={() => {
              navigate('/indBookStores');
              window.scrollTo(0, 0);
            }}>
            <St.IndBookStoreImage />
            <St.TitleAndContentBox>
              <St.IndBookAndRecommnedTitle>서울에서 가장 힙한 서점 </St.IndBookAndRecommnedTitle>
              <St.IndBookAndRecommnedContent>
                독립서점 인덱스에서는 출판사 편집자에게 주목하는 전시( 주목! 이 출판사 This Is Publisher)를 여는 한편
                책을 매개로 한 토크, 워크 숍, 강좌 등의 프로그램을 진행하는 ‘인덱스 뉴스쿨’도 운영한다.
              </St.IndBookAndRecommnedContent>
            </St.TitleAndContentBox>
          </St.IndBookStorebox>
        </St.IndBookStoreWrapper>

        {/* 맞춤추천 */}

        <St.BookRecommendWrapper>
          <St.BookRecommendBox
            onClick={() => {
              navigate('/survey');
              window.scrollTo(0, 0);
            }}>
            <St.BookRecommendImage />
            <St.TitleAndContentBox>
              <St.IndBookAndRecommnedTitle>나에게 맞는 책 추천받기</St.IndBookAndRecommnedTitle>
              <St.IndBookAndRecommnedContent>
                노래 가사, 영화 대사의 한 줄이 가슴 속 깊이 와 닿을 때가 있습니다. 책을 읽다가도 오래도록 곱씹어
                보게되는 문장이 있으실텐데요, 마음을 울림을 준 문장들을 공유해보면 어떨까요?
              </St.IndBookAndRecommnedContent>
            </St.TitleAndContentBox>
          </St.BookRecommendBox>
        </St.BookRecommendWrapper>
      </St.Container>
    </>
  );
};

export default Main;
