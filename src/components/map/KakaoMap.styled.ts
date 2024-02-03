import styled from 'styled-components';
import mapIndBookStoreImage from '../../assets/indbookstoreimage/mapindbookstoreimage.webp';

export const Container = styled.div``;

export const MapContainer = styled.div`
  width: 120rem;
  display: flex;
`;

export const Map = styled.div`
  width: 60rem;
  position: relative;
`;

export const Title = styled.h1`
  width: 58rem;
  height: 4rem;
  font-size: 4rem;
  margin: 2rem auto;
  color: #14213d;
  font-weight: bold;
  align-items: center;
`;

export const DetailButton = styled.button`
  all: unset;
  font-size: 1.8rem;
  background-color: #fff;
  border: 1px solid #000;
  text-align: center;
  border-radius: 1rem;
  padding: 0.4rem;
  margin-top: 10rem;

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

export const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: white;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const MapIndBookStoreImage = styled.div`
  background: url(${mapIndBookStoreImage});
  background-size: contain;
  width: 7rem;
  height: 7rem;
`;

export const StoreInfoWrapper = styled.div`
  position: relative;
  z-index: 9999;
  background-color: white;
`;

export const SearchWrapper = styled.div`
  position: absolute;
  top: 9rem;
  left: 1rem;
  z-index: 9999;
  width: 23rem;
  height: 30rem;
  background-color: white;
  border-radius: 1rem;
`;

export const SearchForm = styled.form`
  height: 5rem;
  width: 100%;
  background-color: #14213d;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const SearchFormWrapper = styled.div`
  height: 17%;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SearchResultWrapper = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  cursor: pointer;
`;

export const SearchName = styled.p`
  font-size: 16px;
`;

export const SearchList = styled.div`
  height: 82%;
  overflow: scroll;
`;

export const SearchInput = styled.input`
  border: none;
  width: 75%;
  height: 50%;
  border-radius: 1rem;
  padding: 1rem;
  &:focus {
    outline: none;
  }
`;
export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
`;

export const InfoWrapper = styled.div`
  position: relative;
  z-index: 9999;
`;

export const Info = styled.div`
  position: absolute;
  z-index: 9999;
  background-color: white;
  top: -2rem;
  left: -5rem;
  border: 3px solid #14213d;
`;

export const InfoTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #14213d;
  color: white;
  z-index: 999;
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StoreInfo = styled.div`
  padding: 1rem;
`;

export const SearchAdress = styled.p`
  margin-top: 0.5rem;
`;
