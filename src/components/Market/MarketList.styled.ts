import styled from 'styled-components';

export const Container = styled.div`
`;

export const Title = styled.div`
margin: 5rem 0rem 5rem 25rem;
padding-bottom: 0.5rem;
border-bottom: 0.2rem solid black;
font-size: 1.8rem;
font-weight: 600;
`


export const CategoryProductsWrapper = styled.div`
display: flex;
justify-content: space-between`

export const CategoryWrapper = styled.ul`
width: 20rem;
padding-left: 10rem;
list-style-type: none;
line-height: 1.5;
& li {
    cursor: pointer;
    width: 20rem;
}
`

export const ProductsWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 1rem;
line-height: 1.5;
`

export const ProductCard = styled.div`
width: 13rem;
height: 17rem;
padding: 0.5rem;
border: 0.2rem solid black;
`

export const ProductImg = styled.img`
width: 11rem;
height: 11rem;
`

export const ProductTitle = styled.div`
font-size: 1.5rem;`

export const ProductInfo = styled.div`
display: flex;
justify-content: space-between`

export const ProductPrice = styled.div``

export const ProductLikes = styled.div``

export const PostButton = styled.button`
all: unset;
float: right;
padding: 0.5rem 1rem;
border: 0.2rem solid black;
`