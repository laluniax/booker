import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100rem;
  margin-bottom: 10rem;
`;
export const FormWrapper = styled.div`
  margin-top: 10rem;
`;

export const Form = styled.form`
  width: 100%;
  min-height: 37rem;
`;

export const TitleInputBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 10rem;
`;

export const TitleInput = styled.input`
  all: unset;
  font-size: 30px;
  border-bottom: 4px solid #000;
  padding-bottom: 1rem;
  width: 70%;
  text-align: left;
`;

export const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.8rem;
  margin-top: 1rem;
  white-space: pre-line;
  flex-wrap: wrap;
`;

// 태그 입력 후 엔터 눌렀을 때 나타남
export const Tagbox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  -webkit-box-align: center;
  align-items: center;
  min-height: 2rem;
  margin-right: 0.75rem;
  transition: all 0.125s ease-in 0s;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

export const tagItem = styled.div`
  font-family: 'GmarketSansMedium';
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #14213d;
  color: #fff;
  max-width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

export const TagContent = styled.span`
  letter-spacing: 1px;
`;

export const DeleteTagButton = styled.button`
  all: unset;
  text-align: center;
  padding: 0.4rem;
  font-size: 1.6rem;
  margin-left: 0.4rem;
  margin-bottom: 0.2rem;
  padding-bottom: 1px;
  color: #fca311;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    padding: 0.5rem;
    transition: 0.2s;
    color: red;
    font-weight: bold;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;

// 태그 인풋
export const TagInputBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: left;
  text-align: left;
  white-space: pre-line;
  flex-wrap: wrap;
`;

export const TagInput = styled.input`
  all: unset;
  display: inline-flex;
  width: 20rem;
  height: auto;
  background: transparent;
  font-size: 20px;
  outline: none;
  line-height: 4rem;
  min-width: 8rem;
  cursor: text;
  margin-left: 2rem;
`;

export const CategoryAndGenreBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const CategorySelect = styled.select`
  font-family: 'GmarketSansMedium';

  font-size: 15px;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
`;

export const CategoryOption = styled.option`
  font-family: 'GmarketSansMedium';
`;

export const GenreSelect = styled.select`
  font-family: 'GmarketSansMedium';
  font-size: 15px;
  width: 23rem;
  height: 4rem;
  text-align: center;
  border-radius: 1rem;
`;

export const GenreOption = styled.option``;

// 내용 작성
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentInput = styled.textarea`
  all: unset;
  width: 71rem;
  height: 100%;
  font-size: 2.5rem;
  margin-top: 3rem;
`;

export const SubmitButtonBox = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  justify-content: right;
  height: 6rem;
  margin-top: 1rem;
  align-items: center;
`;

export const SubmitButton = styled.button`
  all: unset;
  font-size: 2rem;
  background-color: #14213d;
  padding: 1rem;
  width: 15rem;
  height: 2.5rem;
  text-align: center;
  margin-right: 1rem;
  border-radius: 1rem;
  color: #fca311;

  &:hover {
    cursor: pointer;
    background-color: #1f3563;
  }
`;
