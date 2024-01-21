import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 74%;
  margin-left: 3rem;
`;
export const Header = styled.header`
  font-size: 64px;
`;
export const CategoryTitle = styled.div`
  border-bottom: 2px solid #000;
  padding-bottom: 1rem;
  font-size: 5rem;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
  padding: 20px;
`;
export const BookCardWrapper = styled.div`
  border-bottom: 1px solid #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 1rem;
  width: 33rem;

  &:hover {
    cursor: pointer;
    padding: 2rem;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;
export const BookGenre = styled.h3`
  font-size: 14px;
`;

export const BookImg = styled.div``;
export const BookIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Title = styled.h4`
  font-size: 3rem;
  width: 32rem;
  margin-top: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.span`
  white-space: nowrap;
  width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
`;
export const Plot = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
`;

export const BookWrapper = styled.div`
  display: flex;
`;
