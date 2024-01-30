import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 30rem;
  height: 70rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 70rem;
  height: 90rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    width: 120rem;
    min-height: 170rem;
    padding: 3rem;
  `};
`;

export const TotalItemWrapper = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  margin-top: 2rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    gap: 3rem;
    margin-top: 7rem;
  `};
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  text-align: center;
  font-size: 2rem;
  width: 30rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid black;
  padding-bottom: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3rem;
  width:70rem;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid black;
  padding-bottom: 1rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
      border-bottom: 0.2rem solid black;
      font-size: 4rem;
      font-weight: 600;
      padding-bottom: 1rem;
      margin-bottom: 5rem;
      width: 120rem;
  `};
`;
export const PostImgWrapper = styled.div`
  display: flex;
  width: 30rem;
  ${({ theme }) => theme.mediaQuery.sm`
  width:70rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
        width: 120rem;
  `};
`;

export const ImgUploadBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.sm`
    // font-size: 3rem;
    // width:70rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  witdh: 120rem;
  `};
`;

export const PostImg = styled.div`
  outline: 0.1rem solid black;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  width: 30rem;
  height: 6rem;

  & img {
    display: grid;
    padding-right: 1rem;
    object-fit: cover;
    width: 6rem;
    height: 6rem;
    padding-right: 1rem;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    width: 70rem;
    height: 15rem;
    & img {
      width: 15rem;
      height: 15rem;
      padding-right: 1rem;
    }
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 90rem;
  height: 25rem;
  & img {
    width: 25rem;
    height: 25rem;
    padding-right: 1rem;
  }
  `};
`;

export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 0.2rem solid #000;
  width: 30rem;
  height: 6rem;
  margin-top: 1rem;
  padding-bottom: 7.5rem;

  ${({ theme }) => theme.mediaQuery.sm`
  width: 70rem;
  height: 20rem;
  margin-top:2rem;
  padding-bottom: 4rem;

`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  height: 33rem;
  margin-top:4rem;
  `};
`;
export const Imgupload = styled.div`
  font-family: 'GmarketSansMedium';
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
    width:70rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  width: 120rem;
  font-weight: bold;
  `};
`;
export const PostImgLabel = styled.label`
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 0.2rem solid #000;
  text-align: center;
  color: #000;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 1.3rem;
  width: 10rem;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    color: #fca311;
    background-color: #14213d;
  }

  &:not(:hover) {
    transition: 0.2s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
      padding: 0.7rem;
      border-radius: 2rem;
      margin-top: 1rem;
      font-size: 1.5rem;
      width: 12rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    padding: 1rem;
    border-radius: 2rem;
    margin-top: 1rem;
    margin-left: 6rem;
    font-size: 2rem;
      width: 15rem;
  `};
`;
export const PostImgInput = styled.input`
  /* display: none; */
  background-color: gray;
  width: 0;
`;
export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  height: 2rem;
  gap: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 70rem;
    height: 5rem;
    gap:2rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  height: 5rem;
  gap:1rem;
  `};
`;
export const PostInput = styled.input`
  font-family: 'GmarketSansMedium';
  border: 0.1rem solid black;
  font-size: 1rem;
  border-radius: 1rem;
  height: 2rem;
  padding: 1rem;
  width: 20rem;
  border-radius: 1rem;
  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.sm`
      font-size: 1.5rem;
      border-radius: 1rem;
      height: 3rem;
      padding: 1rem;
      width: 60rem;
      border-radius: 1rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    width: 82rem;
    border-radius: 2rem;
    font-size: 1.7rem;
    height: 7rem;
    padding: 1rem;
  `};
`;
export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'GmarketSansMedium';
  gap: 1rem;
  width: 30rem;
  height: 2rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  gap:2rem;
  width: 70rem;
  height: 5rem;
  margin-top:0;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    width: 120rem;
    gap:1rem;
    height: 5rem;
    margin-top:3rem;
  `};
`;
export const PostLabel = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  width: 5rem;

  ${({ theme }) => theme.mediaQuery.sm`
        font-size: 1.5rem;
        width: 10rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 2rem;
      width: 20rem;
  `};
`;
export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 30rem;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    gap: 2rem;
    width: 70rem;
    margin-top:0;
`}

  ${({ theme }) => theme.mediaQuery.lg`        
  gap: 2rem;
  width: 120rem;
  margin-top:3rem;
  `};
`;
export const PostCategory = styled.select`
  font-family: 'GmarketSansMedium';
  text-align: center;

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`          font-size: 1.8rem;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  `};
`;

export const PostGrade = styled.select`
  font-family: 'GmarketSansMedium';
  text-align: center;
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  font-size: 1.8rem;
  `};
`;

export const PostOnSale = styled.select`
  text-align: center;

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  font-size: 15px;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  `};
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'GmarketSansMedium';
  gap: 1rem;
  width: 30rem;

  ${({ theme }) => theme.mediaQuery.sm`
  gap:2rem;
  width:70rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  width: 120rem;
  gap:1rem;
  margin-top:-2rem;
  `};
`;

export const PostTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  resize: none;
  padding-top: 0.5rem;
  width: 20rem;
  height: 6rem;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 60rem;
    height: 10rem;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 1rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  width: 82rem;
  height: 30rem;
  padding: 1.3rem;
  font-size: 1.8rem;
  border-radius: 2rem;
  `};
`;

export const PostSubmitBtnBox = styled.div`
  display: flex;
  justify-content: right;
`;

export const PostSubmitBtn = styled.button`
  font-family: 'GmarketSansMedium';
  background-color: #000;
  color: #fff;
  width: 7rem;
  margin-right: 2rem;
  padding: 0.4rem;
  border-radius: 1rem;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    color: #fca311;
    background-color: #14213d;
  }

  &:not(:hover) {
    transition: 0.2s;
  }

  ${({ theme }) => theme.mediaQuery.sm`
    width: 10rem;
    margin-right: 1rem;
    padding: 0.8rem;
    border-radius: 1rem;
    font-size: 1.5rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  width: 15rem;
  margin-right: 12rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 2rem;
  `};
`;
