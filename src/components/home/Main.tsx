import { useNavigate } from 'react-router-dom';
import * as St from './Main.styled';
const Main = () => {
  const navigate = useNavigate();
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
            <St.BannerRecommendImage />
            <St.BannerRecommendTitleBox>
              <St.BannerRecommendTitle>
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
              <St.BookerTalkCardImage />
              <St.CardTitle>책 추천 받습니다.</St.CardTitle>
              <St.CardContent>줜님</St.CardContent>
            </St.BookerTalkCard>

            <St.BookerTalkCard>
              <St.BookerTalkCardImage2 />
              <St.CardTitle2>언어의 온도 추천합니다.</St.CardTitle2>
              <St.CardContent>강낭콩님</St.CardContent>
            </St.BookerTalkCard>

            <St.BookerTalkCard>
              <St.BookerTalkCardImage3 />
              <St.CardTitle3>에세이 책 추천 5권 공유합니다.</St.CardTitle3>
              <St.CardContent>Respect님</St.CardContent>
            </St.BookerTalkCard>

            <St.BookerTalkCard>
              <St.BookerTalkCardImage4 />
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
            <St.BookIntroCard>
              <St.BookImage />
              <St.BookIntroCardTitle>나는 메트로폴리탄 미술관의 경비원입니다.</St.BookIntroCardTitle>
              <St.BookIntroCardContent>패트릭 브링리 </St.BookIntroCardContent>
            </St.BookIntroCard>

            <St.BookIntroCard>
              <St.BookImage2 />
              <St.BookIntroCardTitle>새로쓴 로스쿨 형법</St.BookIntroCardTitle>
              <St.BookIntroCardContent>이재상</St.BookIntroCardContent>
            </St.BookIntroCard>

            <St.BookIntroCard>
              <St.BookImage3 />
              <St.BookIntroCardTitle>달빛조각사</St.BookIntroCardTitle>
              <St.BookIntroCardContent>남희성</St.BookIntroCardContent>
            </St.BookIntroCard>

            <St.BookIntroCard>
              <St.BookImage4 />
              <St.BookIntroCardTitle>로스쿨 형법사례 답안작성 입문</St.BookIntroCardTitle>
              <St.BookIntroCardContent>이재상</St.BookIntroCardContent>
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
            <St.MarketProductCard>
              <St.MarketProductImage />
              <St.ProductTitle>푸바오 책 팝니다.</St.ProductTitle>
              <St.ProductPrice>₩ 12,000₩</St.ProductPrice>
              <St.ProductContent>OO님</St.ProductContent>
            </St.MarketProductCard>

            <St.MarketProductCard>
              <St.MarketProductImage2 />
              <St.ProductTitle>쇼펜하우어 소품집 판매</St.ProductTitle>
              <St.ProductPrice>₩ 20,000</St.ProductPrice>
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
            </St.MarketProductCard>
          </St.CardBox>
        </St.MarketWrapper>

        <St.Contour />

        {/* 독립서점*/}
        <St.IndeBookstoreWrapper>
          <St.IndeBookstorebox>
            <St.IndeBookStoreImage />
            <St.TitleAndContentBox>
              <St.IndeBookAndRecommnedTitle>서울에서 가장 힙한 서점 </St.IndeBookAndRecommnedTitle>
              <St.IndeBookAndRecommnedContent>
                독립서점 인덱스에서는 출판사 편집자에게 주목하는 전시( 주목! 이 출판사 This Is Publisher)를 여는 한편
                책을 매개로 한 토크, 워크 숍, 강좌 등의 프로그램을 진행하는 ‘인덱스 뉴스쿨’도 운영한다.
              </St.IndeBookAndRecommnedContent>
            </St.TitleAndContentBox>
          </St.IndeBookstorebox>
        </St.IndeBookstoreWrapper>

        {/* 맞춤추천 */}

        <St.BookRecommendWrapper>
          <St.BookRecommendBox>
            <St.BookRecommendImage />
            <St.TitleAndContentBox>
              <St.IndeBookAndRecommnedTitle>나에게 맞는 책 추천받기</St.IndeBookAndRecommnedTitle>
              <St.IndeBookAndRecommnedContent>
                노래 가사, 영화 대사의 한 줄이 가슴 속 깊이 와 닿을 때가 있습니다. 책을 읽다가도 오래도록 곱씹어
                보게되는 문장이 있으실텐데요, 마음을 울림을 준 문장들을 공유해보면 어떨까요?
              </St.IndeBookAndRecommnedContent>
            </St.TitleAndContentBox>
          </St.BookRecommendBox>
        </St.BookRecommendWrapper>
      </St.Container>
    </>
  );
};

export default Main;
{
}
