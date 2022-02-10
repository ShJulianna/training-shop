import styled from "styled-components";




export const ProdactsMenuStyled = {
    Wrapper: styled.div`
        display: flex;
        justify-content: space-between;
        margin: 100px 15vh 0;
        
        @media screen and (max-width: 768px) {
            margin: 50px 5vh;
        } 

        & span {
            padding: 0 15px;
            color: #121212;
            opacity: 0.6;
            font-family: Spartan;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 13px;
            text-align: right;
            letter-spacing: 0.06em;
        }
    `
}