import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const NavbarWrapper = styled.div`
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 1rem;
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
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & img {
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
  }
`;
