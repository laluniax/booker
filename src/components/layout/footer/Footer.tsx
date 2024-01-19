import * as St from './FooterStyle';

const Footer = () => {
  return (
    <St.FooterWrapper>
      <St.FooterContentwrapper>
        <St.LogoBox>
          <St.Logo />
        </St.LogoBox>

        <St.FooterContentBox>
          <p>Until 6</p>
          <p>Leader : 천민규 </p>
          <p></p>
        </St.FooterContentBox>
      </St.FooterContentwrapper>
      <St.Copyrightcontent>ⓒ 2024 Until 6 final project All rights reserved</St.Copyrightcontent>
    </St.FooterWrapper>
  );
};

export default Footer;
