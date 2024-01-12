import styled from "styled-components";


export const MainWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    
`

export const CategoryWrapper = styled.div`
    display:flex;
    width: 50rem;
    align-items:center;
    justify-content:center;
    margin-top: 4rem;
    padding-left: 7rem;
`

export const CategoryBox = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center; 
  width: 10rem; 
  padding: 10px; 
  background: #f5f5f5; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  
    `

export const BookRecommendBox = styled.div`
    margin-bottom: 1rem;
   
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: bold;
`

export const GenreButtonbox = styled.div`
  display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.7rem;
    margin-top: 1rem;
`

export const GenreButton = styled.button`
    all: unset;


    &:hover{
        cursor: pointer;
    }
   
`
export const FreeTalkBox = styled.div`
    margin-top: 1rem;
`
export const PostWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-right: 10rem;
`
export const PostBox = styled.div`
    background-color: green;
    width: 50rem;
    height: 34rem;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
`