import styled from "styled-components";



export const FoolerLinksStyled = {
    Wrapper: styled.div`
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        column-gap: 30px;
        row-gap: 30px;
        margin: 40px 15vh;

        @media screen and (max-width: 768px) {
            margin: 40px 10px;
        } 
        & img {
            width: 14px;
        }
        & p {
            margin: 8px 0;
            font-family: Spartan;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 34px;
            color: #121212;
            opacity: 0.8;
        }

    `
}