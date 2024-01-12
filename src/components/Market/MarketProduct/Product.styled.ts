import styled from 'styled-components';

export const Container = styled.div`
min-width: 80rem;
max-width: 80rem;
margin: 0 auto;`;

export const SliderWrapper = styled.div`
width: 20rem;
height: 20rem;
overflow: hidden;
position: relative;
`

export const SliderUl = styled.ul`
display: flex;`;

export const SliderLi = styled.li`
& img {
width: 20rem;
height: 20rem;
}
`;

export const SliderBtn = styled.button`
background-color: #bcbcbc;
position: absolute;
width: 2rem;
top: 50%;
&.prev {
    background-color: pink;
    left: 1rem;
}
&.next {
    right: 1rem;
}
`