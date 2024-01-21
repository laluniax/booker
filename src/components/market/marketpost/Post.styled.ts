import styled from 'styled-components';

export const Container = styled.div`
  padding: 10rem;
  line-height: 4;
`;

export const PostImg = styled.div`
  width: 60rem;
  height: 12rem;
  outline: 0.1rem solid black;
  & img {
    height: 12rem;
    width: 12rem;
    object-fit: cover;
  }
`;
export const PostImgLabel = styled.label``;

export const PostImgInput = styled.input`
  display: none;
`;

export const PostInput = styled.input`
  border: none;
  border-bottom: 0.1rem solid black;
  width: 50rem;
`;

export const PostLabel = styled.label`
  background-color: pink;
  font-size: large;
  width: 7rem;
`;

export const PostCategory = styled.select``;

export const PostGrade = styled.select``;

export const PostOnSale = styled.select``;

export const PostTextArea = styled.textarea`
  resize: none;
  width: 50rem;
`;

export const PostSubmitBtn = styled.button`
  float: right;
`;
