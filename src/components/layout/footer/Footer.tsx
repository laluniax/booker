import * as St from './FooterStyle';

const Footer = () => {
  return (
    <St.Container>
      <St.FooterWrapper>
        <St.FooterContentwrapper>
          <St.LogoImage />
          <St.FooterContentBox>
            <St.FooterTitle> : 책과 관련된 모든 것</St.FooterTitle>
            <St.FooterContent>
              Until 6 Leader : 천민규 | Deputy Leader / UX / UI Design : 박주원
              <br />
              team member : 강나연 | team member : 김지예
              <br />
              team member : 시병택 | Designer : 팽건우
            </St.FooterContent>
          </St.FooterContentBox>
        </St.FooterContentwrapper>
      </St.FooterWrapper>
    </St.Container>
  );
};

export default Footer;
