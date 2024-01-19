import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  color: #fff;
  height: 11rem;
  padding: 2rem;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const Image = styled.img``;

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
  gap: 4rem;
  letter-spacing: 0.1rem;
  /* padding-left: 18rem;
  padding-right: 18rem; */
`;
