import styled from 'styled-components';

export const Container = styled.div``;

export const MapContainer = styled.div`
  width: 120rem;
  display: flex;
`;

export const Map = styled.div`
  width: 60rem;
`;

export const Title = styled.h1`
  width: 58rem;
  height: 4rem;
  font-size: 4rem;
  margin: 2rem auto;
  align-items: center;
`;

export const DetailButton = styled.button`
  all: unset;
  font-size: 1.8rem;
  background-color: #fff;
  margin-top: 0.4rem;
  border: 1px solid #000;
  text-align: center;
  border-radius: 1rem;
  padding: 0.4rem;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #000;
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.5s;
  }
`;
