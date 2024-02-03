import styled from 'styled-components';
import logo from '../../../assets/common/logo.webp';

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const FooterWrapper = styled.div`
  background-color: #14213d;
  top: 0;
  width: 100%;
  height: 20rem;
  padding: 3rem;
  ${({ theme }) => theme.mediaQuery.sm`
  padding: 0rem;
  height: 17rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  height: 20rem; 
  `};
`;

export const FooterContentwrapper = styled.div`
  flex-wrap: wrap;
  max-width: 40rem;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  max-width: 70rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  max-width: 90rem;
  `};
`;

export const LogoImage = styled.div`
  background: url(${logo});
  background-size: contain;
  width: 15rem;
  height: 3rem;
  cursor: pointer;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 5.3rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 22.6rem;
  height: 4.6rem;
  margin-top: 6.3rem;
  `};
`;

export const FooterContentBox = styled.div`
  margin-left: 2rem;
  margin-bottom: 1.3rem;
  margin-top: 2.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
    margin-top: 5.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  margin-top: 7rem;
  `};
`;

export const FooterTitle = styled.div`
  font-size: 2rem;
  font-size: bold;
  color: #fff;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 2.5rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3rem;
  `};
`;

export const FooterContent = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-top: 1rem;
  letter-spacing: 1;
  line-height: 1.3;
  margin-left: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.2rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.4rem;
  `};
`;

export const Copyrightcontent = styled.div`
  color: rgba(79, 79, 79);
  font-size: 1.7rem;
  font-weight: bold;
`;
