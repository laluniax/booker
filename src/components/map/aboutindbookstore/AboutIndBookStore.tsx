import * as St from './AboutIndBookStore.styled';

const AboutIndBookStore = () => {
  return (
    <St.Color>
      <St.Container>
        <br />
        <br />
        <br />
        <St.TitleAndContentWrapper>
          <St.Title>독립서점이 무엇일까요?</St.Title>

          <St.Content>
            - <St.EmphasisContent>독립서점</St.EmphasisContent>은 대규모 자본이나 큰 유통망에 의존하지 않고 ,
            <St.EmphasisContent> 서점 주인의 개인적인 취향에 따라 꾸며진 작은 서점</St.EmphasisContent>을 의미해요!
            <br />
            독립서점들은 기존 서점이 사용하는 한국십진분류표(KDC)를 기준으로 서가를 구분하지 않으며,
            <br />* 기성 출판사가 아닌
            <St.EmphasisContent>소규모 출판사에서 출판한 독립출판서적도 판매</St.EmphasisContent> 해요 !
            <St.CoutourBox>
              <St.Contour2 />
            </St.CoutourBox>
            <St.Title>독립서점은 왜 계속 증가하고 있을까요?</St.Title>
            <St.Content>
              2000년대 후반부터 독립서점의 수는 계속 증가하고 있어요. <br />
              온라인 서점의 성장과 미디어 매체를 통한 콘텐츠 소비가 커지는 가운데, <br />
              <St.EmphasisContent>
                * 독립서점은 대형서점과 차별화된 특성을 바탕으로 더욱 활성화되고 있습니다!
              </St.EmphasisContent>
              <br /> 심지어 코로나 불황 속에서도 독립서점의 개체수가 5년 사이 무려 6배로 증가한 것으로 나타났어요!
            </St.Content>
          </St.Content>
        </St.TitleAndContentWrapper>

        <St.ImageWrapper>
          <St.ImageBox>
            <St.TrendImage1 />
            <St.TrendImage2 />
          </St.ImageBox>
          <St.TrendImage3 />
        </St.ImageWrapper>

        <St.CoutourBox>
          <St.Contour />
        </St.CoutourBox>

        <St.TitleAndContentWrapper>
          <St.Title>독립서점의 매력이 뭘까요?</St.Title>
          <St.Content>
            독립서점은 대체로 소유주의 개인적인 취향과 가치관을 반영해요.
            <br /> 이로 인해<St.EmphasisContent> 각 서점은 독특한 주제나 분위기를 가지며,</St.EmphasisContent> <br />
            <St.EmphasisContent>특정 장르나 희귀한 책들을 전문적으로 취급하는 경우가 많다</St.EmphasisContent>는 매력이
            있어요!
            <br /> 또한, 독립서점은 지역 커뮤니티와 밀접한 관계를 맺으며, 지역 문화의 일부로 자리잡는 경우가 많습니다!
          </St.Content>
          <St.IndeBookStoreImageBox>
            <St.IndeBookStoreImages1 />
            <St.IndeBookStoreImages2 />
          </St.IndeBookStoreImageBox>

          <br />
          <St.CoutourBox>
            <St.Contour />
          </St.CoutourBox>

          <St.AboutIndeTitle>독립서점의 장점은 무엇일까요?</St.AboutIndeTitle>
          <St.SubTitle>1. 커뮤니티와의 상호작용</St.SubTitle>
          <St.Content>
            많은 독립서점들은 단순한 책 판매 장소를 넘어서,
            <St.EmphasisContent>커뮤니티 센터나 문화 공간으로도 사용이 가능해요 ! </St.EmphasisContent>
            <br />
            이들은 독서 모임, 작가와의 만남, 문화 예술 관련 행사 등을 주최함으로써 지역사회의 문화적 활동에 기여합니다
            🫂
          </St.Content>
          <St.SubTitle> 2. 지역 경제에의 기여</St.SubTitle>
          <St.Content>
            독립서점은 지역 경제에도 긍정적인 영향을 미치고 있어요. <br />
            이들은 지역 사회 내에서 일자리를 창출하고, 지역 내에서
            <St.EmphasisContent> 소비되는 자본의 일부를 지역에 재투자</St.EmphasisContent> 하는 역할을 합니다.
            <br />
          </St.Content>
          <St.SubTitle> 3. 독립출판과의 연계</St.SubTitle>
          <St.Content>
            많은 독립서점들이 대형 출판사의 베스트셀러뿐만 아니라,
            <St.EmphasisContent> 독립출판물이나 소규모 출판사의 책들을 취급합니다.</St.EmphasisContent>
            <br />
            이를 통해 다양성을 증진하고,
            <St.EmphasisContent>신진 작가나 비주류 주제의 책들에 대한 접근성을 높입니다.</St.EmphasisContent> <br />
          </St.Content>
          <St.SubTitle> 4. 지속 가능성과 환경 보호 </St.SubTitle>
          <St.Content>
            일부 독립서점은 <St.EmphasisContent>친환경적인 운영 방식을 채택</St.EmphasisContent>하고 있어요 ! <br />
            이는 재활용 종이 사용, 에너지 효율적인 조명과 장비 사용 등을 통해 실현됩니다.
          </St.Content>
        </St.TitleAndContentWrapper>
      </St.Container>
    </St.Color>
  );
};

export default AboutIndBookStore;
