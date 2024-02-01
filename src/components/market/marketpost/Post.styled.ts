import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 35rem;
  height: 100%;
  gap: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
  max-width: 80rem;
  height: 90rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
    max-width: 120rem;
    min-height: 170rem;
  `};
`;

export const Title = styled.div`
  font-family: 'GmarketSansMedium';
  font-weight: 600;
  text-align: center;
  font-size: 2.7rem;
  max-width: 35rem;
  margin-bottom: 1rem;
  border-bottom: 0.2rem solid black;
  padding-bottom: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
  font-size: 3rem;
  max-width:80rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 4rem;
      padding-bottom: 1rem;
      margin-bottom: 5rem;
      max-width: 120rem;
  `};
`;

export const Imgupload = styled.div`
  font-family: 'GmarketSansMedium';
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.6rem;
  width: 35rem;

  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 1.8rem;
    width:80rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  font-size: 2rem;
  width: 120rem;
  font-weight: bold;
  `};
`;

export const ImgUploadBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 35rem;
  ${({ theme }) => theme.mediaQuery.sm`
    font-size: 3rem;
    width:80rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
    witdh: 120rem;
  `};
`;

export const PostImgLabel = styled.label`
  font-family: 'GmarketSansMedium';
  font-weight: bold;
  margin-bottom: 1rem;
  border-bottom: 0.2rem solid #000;
  text-align: center;
  color: #000;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  width: 11rem;
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
      font-size: 1.8rem;
      width: 13rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
    font-size: 2rem;
      width: 15rem;
  `};
`;
export const PostImgInput = styled.input`
  display: none;
  background-color: gray;
  width: 0;
`;

export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 0.2rem solid #000;
  width: 35rem;
  margin-top: 1rem;
  padding-bottom: 4rem;
  ${({ theme }) => theme.mediaQuery.sm`
  width: 80rem;
  height: 20rem;
  margin-top:2rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  height: 33rem;
  margin-top:4rem;
  `};
`;

export const PostImgWrapper = styled.div<{ height: number }>`
  outline: 0.1rem solid black;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  width: 25rem;
  height: ${({ height }) => `${height}rem`};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 80rem;
    height: 15rem;
    flex-direction: row;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  height: 25rem;
  `};
`;

export const PostImgCard = styled.div`
  position: relative;
`;

export const PostImg = styled.img`
  object-fit: cover;
  width: 25rem;
  height: 25rem;
  padding: 0.5rem 0;
  &:last-child {
    padding-bottom: 0;
  }
  ${({ theme }) => theme.mediaQuery.sm`
      width: 16.2rem;
      height: 15rem;
      padding: 0;
      padding-right: 1rem;

  `};
  ${({ theme }) => theme.mediaQuery.lg`
      width: 24.2rem;
      height: 25rem;
  `};
`;

export const DeleteBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: none;
  border-radius: 50%;
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 1.5rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  ${({ theme }) => theme.mediaQuery.sm`
    top: 0.5rem;
    right: 1.5rem;
  `};
`;

export const TotalItemWrapper = styled.div`
  font-family: 'GmarketSansMedium';
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;

  ${({ theme }) => theme.mediaQuery.sm`
`}

  ${({ theme }) => theme.mediaQuery.lg`
    gap: 3rem;
    margin-top: 7rem;
  `};
`;
export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  gap: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 80rem;
    gap: 2rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
  width: 120rem;
  gap:1rem;
  `};
`;

export const PostLabel = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  width: 8rem;

  ${({ theme }) => theme.mediaQuery.sm`
      font-size: 1.8rem;
      width: 10rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`
      font-size: 2rem;
      width: 20rem;
  `};
`;

export const PostInput = styled.input`
  width: 25rem;
  height: 4rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
  font-family: 'GmarketSansMedium';
  font-size: 1.6rem;
  padding: 1rem;

  &:focus {
    outline: none;
  }
  ${({ theme }) => theme.mediaQuery.sm`
    width: 65rem;
    height: 5rem;
    font-size: 1.8rem;
    border-radius: 1.5rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`
    width: 82rem;
    height: 7rem;
    font-size: 2rem;
    border-radius: 2rem;

  `};
`;

export const PostCategory = styled.select`
  font-family: 'GmarketSansMedium';
  text-align: center;
  border: 0.15rem solid black;
  font-size: 1.4rem;
  width: 12rem;
  height: 3rem;
  border-radius: 1rem;
  ${({ theme }) => theme.mediaQuery.sm`
    width: 18rem;
    height: 3.5rem;
  font-size: 1.6rem;
`}
  ${({ theme }) => theme.mediaQuery.lg`          
  font-size: 1.8rem;
  width: 23rem;
  height: 4rem;
  border-radius: 1rem;
  margin-right: 1rem;
  `};
`;

export const PostTextArea = styled.textarea`
  font-family: 'GmarketSansMedium';
  resize: none;
  width: 25rem;
  height: 10rem;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 1rem;

  ${({ theme }) => theme.mediaQuery.sm`
    width: 65rem;
    height: 20rem;
    padding: 1rem;
    font-size: 1.8rem;
    border-radius: 1rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  width: 82rem;
  height: 30rem;
  padding: 1.3rem;
  font-size: 2rem;
  border-radius: 2rem;
  `};
`;

export const PostSubmitBtnBox = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mediaQuery.sm`
  justify-content: right;
  `};
`;

export const PostSubmitBtn = styled.button`
  font-family: 'GmarketSansMedium';
  background-color: #000;
  color: #fff;
  width: 12rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  margin-top: 2rem;

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
    width: 12rem;
    margin-right: 1rem;
    padding: 0.8rem;
    border-radius: 1rem;
    font-size: 1.8rem;
`}

  ${({ theme }) => theme.mediaQuery.lg`            
  width: 15rem;
  margin-right: 12rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 2rem;
  `};
`;
