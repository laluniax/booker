import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  color: #fff;
  height: 10rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
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
    background-color: white;
    border-radius: 50%;
    object-fit: cover;
  }
`;
