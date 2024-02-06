import styled from 'styled-components';
import mapIndBookStoreImage from '../../assets/indbookstoreimage/mapindbookstoreimage.webp';

export const Container = styled.div``;

export const MapContainer = styled.div`
  width: 40rem;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
  display: flex;
  width: 80rem;
  `};

  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;

`};
`;

export const Map = styled.div`
  width: 30rem;
  position: relative;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 40rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  width: 60rem;
  `};
`;

export const Title = styled.h1`
  font-family: 'GmarketSansMedium';
  width: 58rem;
  height: 4rem;
  font-size: 2rem;
  margin: 2rem auto;
  color: #14213d;
  font-weight: bold;
  align-items: center;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 3.8rem;
  `};
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
  width: 18rem;
  height: 20rem;
  background-color: white;
  border-radius: 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 23rem;
    height: 25rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
    width: 23rem;
    height: 30rem;
  `};
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
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${({ theme }) => theme.mediaQuery.sm`
    margin: 1rem 0;
    padding: 0 1rem;
  `};
`;

export const SearchName = styled.p`
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 1.4rem;
  `};
  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 1.6rem;
  `};
`;

export const SearchList = styled.div`
  height: 82%;
  overflow: scroll;
  margin-top: 2rem;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
