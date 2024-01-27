import styled from 'styled-components';
import logo from '../../../assets/common/logo.webp';

export const Container = styled.div`
  position: relative;
  /* min-height: 100vh; 화면 높이에 맞춤 */
`;

export const FooterWrapper = styled.div`
  background-color: #14213d;
  position: absolute;
  top: 0;
  width: 100%;
  height: 20rem; /* 푸터 높이 */
`;
export const FooterBox = styled.div`
  width: 100rem;
  margin-left: 20rem;
`;
export const FooterContentwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90rem;
  height: 15rem;
`;

export const FooterContentBox = styled.div`
  margin-left: 2rem;
  margin-bottom: 1.3rem;
  margin-top: 5.9rem;
`;

export const FooterTitle = styled.div`
  font-size: 3rem;
  font-size: bold;
  color: #fff;
`;

export const FooterContent = styled.div`
  font-size: 1.4rem;
  color: #fff;
  margin-left: 2rem;
  margin-top: 1rem;
  letter-spacing: 1;
  line-height: 1.3;
`;

export const LogoImage = styled.div`
  background: url(${logo});
  background-size: contain;
  width: 22.6rem;
  height: 4.6rem;
`;
export const Copyrightcontent = styled.div`
  color: rgba(79, 79, 79);
  font-size: 1.7rem;
  font-weight: bold;
`;
