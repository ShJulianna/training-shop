import styled from "styled-components";





export const RegistrationStringStyled = {
    Wrapper: styled.div`
        padding: 0 15vh;
        display: flex;
        justify-content: space-between;
        margin: 162px 0 0;
        background: #121212;
        height: 56px;
        align-items: center;
        
        @media screen and (max-width: 768px) {
            padding: 0 5vh;
            height: 80px;
        }
        & span {
            color: #fff;
            font-family: Spartan;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
        }
        & div.register {
            width: 50%;
        }
        & input {   
            width: 78%;
            height: 32px;
            background: #FFFFFF;
            opacity: 0.2;
            border: none;
            text-align: center;
            margin-right: 10px;

            @media screen and (max-width: 768px) {
                width: 120px;
            }
        }
        & button {
            
            width: 18%;
            height: 32px;
            background: #121212;
            border: 1px solid #fff;
            color: #fff;
            
            @media screen and (max-width: 768px) {
                width: 120px;
            }
        }
        & img {
            margin-left: 10px;
        }
    `
}