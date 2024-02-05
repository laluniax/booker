import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { getLatestProductListHandler, getPostsLikesListHandler, getUserSessionHandler } from '../../api/Supabase.api';
import bookerTalkImage1 from '../../assets/mainimage/bookertalkimage1.webp';
import bookerTalkImage2 from '../../assets/mainimage/bookertalkimage2.webp';
import bookerTalkImage3 from '../../assets/mainimage/bookertalkimage3.webp';
import bookerTalkImage4 from '../../assets/mainimage/bookertalkimage4.webp';
import defaultImg from '../../assets/profile/defaultprofileimage.webp';
import { userSession } from '../../state/atom/userSessionAtom';
import { ProductsTypes } from '../../types/types';
import Loading from '../common/loading/Loading';
import * as St from './Main.styled';
import { BestsellerTypes, BooksInfoTypes, PostsListLikesTypes } from './Main.type';
import SlideImages from './banner/SlideImages';

const Main = () => {
  const navigate = useNavigate();
  const [postsList, setPostsList] = useState<PostsListLikesTypes[]>([]);
  const [bestSeller, setBestSeller] = useState<BestsellerTypes>();
  const [newbook, setNewbook] = useState<BooksInfoTypes>();
  const [bookSpecial, setBookSpecial] = useState<BooksInfoTypes>();
  const [bookerPick, setBookerPick] = useState<BooksInfoTypes>();
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [productsList, setProductsList] = useState<ProductsTypes[]>([]);
  const bookerTalkImages = [bookerTalkImage1, bookerTalkImage2, bookerTalkImage3, bookerTalkImage4];
  const [session, setSession] = useRecoilState(userSession);

  const getPostsList = async () => {
    const posts = await getPostsLikesListHandler();
    setPostsList(posts.sort((a, b) => b.post_likes.length - a.post_likes.length).slice(0, 4));
  };

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
    getPostsList();
    getBookIntroduction();
    getProductList();
  }, []);

  useEffect(() => {
    const getUserSession = async () => {
      const data = await getUserSessionHandler();
      // console.log('login user session data => ', data);
      setSession(data.session?.user);
    };
    getUserSession();
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
          <St.BookerTalkCardBox>
            {postsList.map((item, i) => {
              return (
                <St.BookerTalkCard key={i}>
                  <St.BookerTalkCardImage
                    $backgroundimage={bookerTalkImages[i % bookerTalkImages.length]}
                    onClick={() => {
                      navigate(`/detail/${item.id}`);
                      window.scrollTo(0, 0);
                    }}
                  />
                  <St.BookIntroTitleAndContent>
                    <St.CardTitle>{item.title}</St.CardTitle>
                    <St.CardContent>{item.users.nickname}</St.CardContent>
                  </St.BookIntroTitleAndContent>
                </St.BookerTalkCard>
              );
            })}
          </St.BookerTalkCardBox>
        </St.BookerTalkWrapper>
        {/* 도서소개  */}
        <St.BookIntroWrapper>
          <St.Titlebox>
            <St.Title>도서소개</St.Title>
            <St.Detail>꾸준히 사랑받는 작품들</St.Detail>
          </St.Titlebox>
          <St.BookIntroCardBox>
            <St.BookIntroBox>
              <St.CategoryBox>
                <St.BookIntroCategory>베스트셀러</St.BookIntroCategory>
              </St.CategoryBox>
              <St.BookIntroCard
                onClick={() => {
                  navigate(`/aboutbook/bestseller`);
                }}>
                {loading1 ? <Loading /> : null}
                <St.BookImage>
                  <img src={bestSeller?.cover} />
                </St.BookImage>
                <St.BookIntroTitleAndContent>
                  <St.BookIntroCardTitle>{bestSeller?.title}</St.BookIntroCardTitle>
                  <St.BookIntroCardContent>{bestSeller?.author}</St.BookIntroCardContent>
                </St.BookIntroTitleAndContent>
              </St.BookIntroCard>
            </St.BookIntroBox>
            <St.BookIntroBox>
              <St.CategoryBox>
                <St.BookIntroCategory>신간도서</St.BookIntroCategory>
              </St.CategoryBox>
              <St.BookIntroCard
                onClick={() => {
                  navigate(`/aboutbook/newbook`);
                }}>
                {loading2 ? <Loading /> : null}
                <St.BookImage>
                  <img src={newbook?.cover} />
                </St.BookImage>
                <St.BookIntroTitleAndContent>
                  <St.BookIntroCardTitle>{newbook?.title}</St.BookIntroCardTitle>
                  <St.BookIntroCardContent>{newbook?.author}</St.BookIntroCardContent>
                </St.BookIntroTitleAndContent>
              </St.BookIntroCard>
            </St.BookIntroBox>
            <St.BookIntroBox>
              <St.CategoryBox>
                <St.BookIntroCategory>스페셜</St.BookIntroCategory>
              </St.CategoryBox>{' '}
              <St.BookIntroCard
                onClick={() => {
                  navigate(`/aboutbook/bookspecial`);
                }}>
                {loading3 ? <Loading /> : null}
                <St.BookImage>
                  <img src={bookSpecial?.cover} />
                </St.BookImage>
                <St.BookIntroTitleAndContent>
                  <St.BookIntroCardTitle>{bookSpecial?.title}</St.BookIntroCardTitle>
                  <St.BookIntroCardContent>{bookSpecial?.author}</St.BookIntroCardContent>
                </St.BookIntroTitleAndContent>
              </St.BookIntroCard>
            </St.BookIntroBox>
            <St.BookIntroBox>
              <St.CategoryBox>
                <St.BookIntroCategory>북커들의 선택</St.BookIntroCategory>
              </St.CategoryBox>
              <St.BookIntroCard
                onClick={() => {
                  navigate(`/aboutbook/bookerpick`);
                }}>
                {loading4 ? <Loading /> : null}
                <St.BookImage>
                  <img src={bookerPick?.cover} />
                </St.BookImage>
                <St.BookIntroTitleAndContent>
                  <St.BookIntroCardTitle>{bookerPick?.title}</St.BookIntroCardTitle>
                  <St.BookIntroCardContent>{bookerPick?.author}</St.BookIntroCardContent>
                </St.BookIntroTitleAndContent>
              </St.BookIntroCard>
            </St.BookIntroBox>
          </St.BookIntroCardBox>
        </St.BookIntroWrapper>
        {/* 중고거래 */}
        <St.MarketWrapper>
          <St.Titlebox>
            <St.Title>중고거래</St.Title>
            <St.Detail>신규 입고 상품을 모았습니다.</St.Detail>
          </St.Titlebox>
          <St.MarketCardBox>
            {productsList.map((item, i) => {
              return (
                <St.MarketProductCard
                  key={i}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    window.scrollTo(0, 0);
                  }}>
                  <St.MarketProductImage>
                    <img src={(item.product_img && item.product_img[0]) || defaultImg} />
                  </St.MarketProductImage>
                  <St.ProductContentBox>
                    <St.ProductTitle>{item.title}</St.ProductTitle>
                    <St.ProductPrice>₩ {item.price}</St.ProductPrice>
                    <St.ProductContent>{item.users.nickname}님</St.ProductContent>
                  </St.ProductContentBox>
                </St.MarketProductCard>
              );
            })}
          </St.MarketCardBox>
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
