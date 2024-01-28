import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 170rem;
  padding: 3rem;
`;

export const TotalItemWrapper = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 5rem;
`;
export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
  padding-bottom: 1rem;
  margin-bottom: 5rem;

  width: 100%;
  text-align: center;
`;
export const PostImgWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ImgUploadBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.4rem;
`;

export const PostImg = styled.div`
  width: 90rem;
  height: 40rem;
  outline: 0.1rem solid black;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;

  & img {
    display: grid;
    width: 18.75rem;
    height: 18.75rem;
    padding-right: 1rem;
    object-fit: cover;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45rem;
  border-bottom: 0.2rem solid #000;
`;
export const Imgupload = styled.div`
  font-family: 'GmarketSansMedium';
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
`;
export const PostImgLabel = styled.label`
  font-size: 2rem;
  border-bottom: 0.2rem solid #000;
  width: 15rem;
  text-align: center;
  color: #000;
  padding: 1rem;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    color: #fca311;
    background-color: #14213d;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;
export const PostImgInput = styled.input`
  /* display: none; */
  background-color: gray;
  width: 0;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const PostInput = styled.input`
  font-family: 'GmarketSansMedium';
  border: 0.1rem solid black;
  width: 82rem;
  border-radius: 2rem;
  font-size: 1.7rem;
  height: 7rem;
  padding: 1rem;
  &:focus {
    outline: none;
  }
`;
export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'GmarketSansMedium';
`;
export const PostLabel = styled.label`
  font-size: 2rem;
  width: 20rem;
  text-align: center;
  font-weight: bold;
`;
export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
export const PostCategory = styled.select`
  font-family: 'GmarketSansMedium';
  font-size: 1.8rem;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
`;

export const PostGrade = styled.select`
  font-size: 15px;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
`;

export const PostOnSale = styled.select`
  font-size: 15px;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'GmarketSansMedium';
`;
export const PostTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  resize: none;
  width: 82rem;
  height: 30rem;
  padding: 1.3rem;
  font-size: 1.8rem;
  border-radius: 2rem;
`;

export const PostSubmitBtnBox = styled.div`
  display: flex;
  justify-content: right;
`;

export const PostSubmitBtn = styled.button`
  font-family: 'GmarketSansMedium';
  font-size: 2rem;
  background-color: #000;
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
  width: 15rem;
  margin-right: 12rem;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    color: #fca311;
    background-color: #14213d;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;
