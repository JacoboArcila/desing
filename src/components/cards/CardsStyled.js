import styled from "styled-components";

export const Container = styled.div`
`

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.cardColor || ""};
    transition: all 0.1s ease;

    .vacio {
        background-color: red;
        border-radius: 30px;
        border: 5px solid green;
    }

    &:hover {
        color: red;
        background-color: ${props => props.cardColorHover || ""};
        cursor: ${props => props.cardCursor || ""};
    }

`

export const H1 = styled.h1`
    color: rgba(0,0,0,0.5);
    font-size: 60px;
`