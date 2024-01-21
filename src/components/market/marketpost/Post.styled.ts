import styled from 'styled-components';

export const Container = styled.div`
  padding: 10rem;
  line-height: 4;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  position: relative;
`;
export const Title = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 5rem;

  width: 100%;
  text-align: center;
`;
export const PostImgWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const PostImg = styled.div`
  width: 75rem;
  height: 18.75rem;
  outline: 0.1rem solid black;
  position: relative;
  overflow: hidden;
  & img {
    width: 18.75rem;
    height: 18.75rem;
    padding-right: 1rem;
    object-fit: cover;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Imgupload = styled.div`
  font-size: 2rem;
  font-weight: bold;
  width: 20rem;
`;
export const PostImgLabel = styled.label`
  cursor: pointer;
  font-size: 1.3rem;
`;
export const PostImgInput = styled.input`
  display: none;
`;
export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const PostInput = styled.input`
  border: none;
  border-bottom: 0.1rem solid black;
  width: 80rem;
  &:focus {
    outline: none;
  }
`;
export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const PostLabel = styled.label`
  font-size: large;
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
  font-size: 15px;
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
`;
export const PostTextArea = styled.textarea`
  resize: none;
  width: 80rem;
`;

export const PostSubmitBtn = styled.button`
  position: absolute;
  bottom: 5rem;
  right: 10rem;

  font-size: 2rem;
  background-color: #000;
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
  width: 15rem;
`;
