import styled from 'styled-components';
// import logo from '../../../assets/common/logo.webp';
import profileIcon from '../../../assets/header/profileicon.webp';
import searchIcon from '../../../assets/header/searchicon.webp';

// export const HeaderLogo = styled.div`
//   background: url(${logo});
//   background-size: contain;
//   /* margin-left: 9rem; */
//   max-width: 24rem;
//   height: 5rem;
//   object-fit: fit;

//   cursor: pointer;
// `;

// export const NavbarWrapper = styled.div`
//   align-items: center;
// `;

export const Container = styled.div`
  background-color: #14213d;
  color: #fff;
  width: 100%;
  /* height: 11rem; */
  font-size: 1.5rem;
  /* min-width: 32rem; */
  /* overflow-x: hidden; */
  /* margin: 0 auto; */
`;

export const Wrapper = styled.div`
  background-color: #14213d;
  position: relative;
  /* width: 140rem; */
  max-width: 120rem;
  height: 23rem;
  padding: 2rem;
  margin: 0 auto;
  gap: 5rem;
  align-items: center;
  ${({ theme }) => theme.mediaQuery.sm`
    height: 15rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  display: flex;
  height: 11rem;
  `};
`;
export const SearchWrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  ${({ theme }) => theme.mediaQuery.sm`
    display: none;
  `};
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 12rem;
  height: 2.5rem;
  margin: 1rem auto;
  margin-bottom: 2rem;
  cursor: pointer;
  & img {
    max-width: 12rem;
    height: 2.5rem;
    object-fit: fit;
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaQuery.sm`
      max-width: 24rem;
    height: 5rem;
    margin: 2rem auto;
    & img {
      max-width: 24rem;
      height: 5rem;
      object-fit: fit;
    }
    }
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    margin: 2rem auto;

  `};
`;

export const HeaderUl = styled.ul`
  margin-top: 0.3rem;
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  max-width: 73rem;
  height: 5rem;
  gap: 3rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  justify-content: center;
  height: 2rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  text-align: center;
  font-size: 1.8rem;
  max-width: 73rem;
  margin: 0 auto;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  gap: 3rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  text-align: center;
  font-size: 1.8rem;
  max-width: 73rem;
  margin: 0 auto;
  `};
`;

export const HeaderLi = styled.li`
  & a {
    text-decoration: none;
    color: #fff;

    &:hover {
      cursor: pointer;
      color: #fca311;
    }
  }
`;

export const HeaderSearchMypage = styled.div`
  position: absolute;
  top: 2rem;
  left: 0%;
  display: flex;
  justify-content: space-between;
  width: 90%;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 90%;
  top: 5rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  position: static;
  // position: relative;
  gap: 0%;
  width: 17%;
  padding-left: 10rem;


  //   display: flex;
  //   gap: 3rem;
  // top: 3.5rem;
  // left: 95%;
  `};
`;
export const HeaderBtn = styled.button`
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  /* & img { */
  /* width: 4rem; */
  /* height: 4rem; */
  /* object-fit: cover; */
  /* } */
`;

export const LoginBtn = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 1.8rem;
  font-family: 'GmarketSansMedium';

  &:hover {
    cursor: pointer;
    color: #7fd4f3;
  }
`;

// 검색
export const SearchBox = styled.form`
  position: absolute; // 절대 위치 설정
  left: 5rem;
  top: 0;
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  left: 94rem;
    top: 4.5rem; 
  `};
`;
export const SearchBar = styled.input`
  all: unset;
  padding: 1rem;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid #fff;
  width: 6rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-family: 'GmarketSansMedium';
  font-size: 1.6rem;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #fff;
  width: 15rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
   font-family: 'GmarketSansMedium';
   font-size: 1.6rem;
   padding: 0.5rem;
   border-bottom: 0.1rem solid #fff;
   width: 15rem;
  `};
`;

export const SearchIconImage = styled.div`
  background: url(${searchIcon});
  background-size: contain;
  margin-right: 3rem;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.sm`

  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 5rem;
    height: 5rem;
  `};
`;

export const ProfileIconImage = styled.div`
  background: url(${profileIcon});
  background-size: contain;
  margin-left: -1rem;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.sm`
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 5.3rem;
    height: 5.3rem;
  `};
`;

export const HeaderUserImage = styled.img`
  border-radius: 1rem;
`;

export const Dropdown = styled.div`
  position: absolute;
  /* top: 76%; // 아이콘의 바로 아래 위치
  right: 1.3%; */
  top: 100%;
  right: 0%;
  background-color: #f9f9f9;
  min-width: 160px;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;

  ${({ theme }) => theme.mediaQuery.sm`
  top: 100%;
  right: 1%;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
   top: 76%; 
  right: 1.3%;
  `};
`;

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;
