import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
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
