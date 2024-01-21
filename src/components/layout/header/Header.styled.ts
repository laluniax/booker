import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: black;
  color: #fff;
  height: 11rem;
  padding: 2rem;
  display: flex;
  gap: 5rem;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const ImageWrapper = styled.div`
  width: 30rem;
  height: 5rem;
`;

export const Image = styled.img`
  cursor: pointer;
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
      color: #7fd4f3;
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
  & img {
    width: 4rem;
    height: 4rem;
    /* background-color: white; */
    /* border-radius: 50%; */
    object-fit: cover;
  }
`;

export const LoginBtn = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 1.7rem;

  &:hover {
    cursor: pointer;
    color: #7fd4f3;
  }
`;

export const HeaderLiBox = styled.div`
  /* margin-left: 3rem; */
  margin-top: 0.3rem;
  display: flex;
  font-size: 1.8rem;
  justify-content: center;
  width: 73rem;
  height: 2rem;
  gap: 3rem;
  letter-spacing: 0.1rem;
  /* padding-left: 18rem;
  padding-right: 18rem; */
`;

// 검색
export const SearchBox = styled.form`
  position: absolute; // 절대 위치 설정
  right: 20%;
  top: 48%; // 상위 요소의 아래쪽에 위치
`;
export const SearchBar = styled.input`
  all: unset;
  font-size: 1.5rem;
  border-bottom: 1px solid #fff;
  width: 16rem;
`;
