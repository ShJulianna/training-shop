import styled from "styled-components";



export const PayInformationStyled = {
    Wrapper: styled.div`
        padding: 0 15vh;
        display: flex;
        justify-content: space-between;
        background: #F8F8F8;
        height: 56px;
        align-items: center;
        
        @media screen and (max-width: 768px) {
            padding: 0 5vh;
            height: 80px;
        }
        & span {
            color: #121212;
            opacity: 0.8;
            font-family: Spartan;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.06em;
            
        }
        & img {
            margin-left: 10px;
        }
    `
}