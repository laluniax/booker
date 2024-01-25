import styled from 'styled-components';
import logo from '../../../assets/common/logo.webp';
import profileIcon from '../../../assets/header/profileicon.webp';
import searchIcon from '../../../assets/header/searchicon.webp';

export const SearchIconImage = styled.div`
  background: url(${searchIcon});
  background-size: contain;
  margin-right: 3rem;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
`;

export const ProfileIconImage = styled.div`
  background: url(${profileIcon});
  background-size: contain;
  margin-left: -1rem;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
`;

export const HeaderLogo = styled.div`
  background: url(${logo});
  background-size: contain;
  margin-left: 9rem;
  width: 24rem;
  height: 5rem;

  cursor: pointer;
`;

export const Container = styled.div`
  background-color: #14213d;
  color: #fff;
  height: 11rem;
  font-size: 1.5rem;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 140rem;
  height: 11rem;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  gap: 5rem;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 30rem;
  height: 5rem;
`;

export const NavbarWrapper = styled.div`
  align-items: center;
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 3rem;
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

export const HeaderLiBox = styled.div`
  margin-top: 0.3rem;
  display: flex;
  font-size: 1.8rem;
  justify-content: center;
  width: 73rem;
  height: 2rem;
  gap: 3rem;
  letter-spacing: 0.1rem;
`;

// 검색
export const SearchBox = styled.form`
  position: absolute; // 절대 위치 설정
  right: 17%;
  top: 38%; // 상위 요소의 아래쪽에 위치
`;
export const SearchBar = styled.input`
  all: unset;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #fff;
  width: 15rem;
`;

export const HeaderUserImage = styled.img`
  border-radius: 1rem;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 76%; // 아이콘의 바로 아래 위치
  right: 1%;
  background-color: #f9f9f9;
  min-width: 160px;
  border: 1px solid #ddd;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
