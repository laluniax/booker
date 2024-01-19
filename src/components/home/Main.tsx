import * as St from './Main.styled';
const Main = () => {
  return (
    <St.Container>
      {/* 배너 들어올 곳  */}
      <br />
      <br />
      <St.Contour />
      {/* 북커톡  */}
      <St.BookerTalkWrapper>
        <St.Titlebox>
          <St.Title>북커톡</St.Title>
          <St.Detail>
            북커들의 이야기
            <St.SeeMoreButton>더보기</St.SeeMoreButton>
          </St.Detail>
        </St.Titlebox>

        <St.CardBox>
          <St.BookerTalkCard>
            <St.BookerTalkCardImage />
            <St.CardTitle>NO. 13 LEGO</St.CardTitle>
            <St.CardContent>제이오에이치</St.CardContent>
          </St.BookerTalkCard>

          <St.BookerTalkCard>
            <St.BookerTalkCardImage />
            <St.CardTitle>NO. 13 LEGO</St.CardTitle>
            <St.CardContent>제이오에이치</St.CardContent>
          </St.BookerTalkCard>

          <St.BookerTalkCard>
            <St.BookerTalkCardImage />
            <St.CardTitle>NO. 13 LEGO</St.CardTitle>
            <St.CardContent>제이오에이치</St.CardContent>
          </St.BookerTalkCard>
        </St.CardBox>
      </St.BookerTalkWrapper>

      {/* 도서소개  */}
      <St.BookIntroWrapper>
        <St.Titlebox>
          <St.Title>도서소개</St.Title>
          <St.Detail>
            꾸준히 사랑받는 작품들
            <St.SeeMoreButton>더보기</St.SeeMoreButton>
          </St.Detail>
        </St.Titlebox>

        <St.CardBox>
          <St.BookIntroCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.BookIntroCard>

          <St.BookIntroCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.BookIntroCard>

          <St.BookIntroCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.BookIntroCard>

          <St.BookIntroCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.BookIntroCard>
        </St.CardBox>
      </St.BookIntroWrapper>

      {/* 중고거래 */}
      <St.MarketWrapper>
        <St.Titlebox>
          <St.Title>중고거래</St.Title>
          <St.Detail>
            신규 입고 상품
            <St.SeeMoreButton>더보기</St.SeeMoreButton>
          </St.Detail>
        </St.Titlebox>

        <St.CardBox>
          <St.MarketProductCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.MarketProductCard>

          <St.MarketProductCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.MarketProductCard>

          <St.MarketProductCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.MarketProductCard>

          <St.MarketProductCard>
            <St.BookImage />
            <St.CardTitle>모순</St.CardTitle>
            <St.CardContent>양귀자 ∙ 쓰다</St.CardContent>
          </St.MarketProductCard>
        </St.CardBox>
      </St.MarketWrapper>

      <St.Contour />

      {/* 독립서점*/}
      <St.IndeBookstoreWrapper>
        <St.IndeBookstorebox>
          <St.IndeBookStoreImage />
          <St.TitleAndContentBox>
            <St.IndeBookStoreTitle>서울에서 가장 힙한 서점 </St.IndeBookStoreTitle>
            <St.IndeBookStoreContent>
              독립서점 인덱스에서는 출판사 편집자에게 주목하는 전시( 주목! 이 출판사 This Is Publisher)를 여는 한편 책을
              매개로 한 토크, 워크 숍, 강좌 등의 프로그램을 진행하는 ‘인덱스 뉴스쿨’도 운영한다.
            </St.IndeBookStoreContent>
          </St.TitleAndContentBox>
        </St.IndeBookstorebox>
      </St.IndeBookstoreWrapper>

      {/* 맞춤추천 */}

      <St.BookRecommendWrapper>
        <St.BookRecommendBox>
          <St.BookRecommendImage />
          <St.TitleAndContentBox>
            {' '}
            <St.BookRecommendTitle>나에게 맞는 책 추천받기</St.BookRecommendTitle>
            <St.BookRecommendContent>
              노래 가사, 영화 대사의 한 줄이 가슴 속 깊이 와 닿을 때가 있습니다. 책을 읽다가도 오래도록 곱씹어 보게되는
              문장이 있으실텐데요, 마음을 울림을 준 문장들을 공유해보면 어떨까요?
            </St.BookRecommendContent>
          </St.TitleAndContentBox>
        </St.BookRecommendBox>
      </St.BookRecommendWrapper>
    </St.Container>
  );
};

export default Main;
{
}
