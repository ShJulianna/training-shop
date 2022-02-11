import styled from "styled-components";


export const ThematicBlockStyled = {
    Wrapper: styled.div`
        & div.header {
            margin: 50px 15vh;
            display: flex;
            justify-content: space-between;
        }
        & div.imgs {
            display: grid;
            grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
            column-gap: 30px;
            row-gap: 30px;
            margin: 50px 15vh;
            
            @media screen and (max-width: 768px) {
                margin: 32px 10px;
            } 
            & img {
                width: 100%;
            }
        }
        & div.block {
            position: relative;
            
            & div.info {
                position: absolute;
                width: 80%;
                left: 25px;
                top: 220px;
                background: #fff;

                & h4 {
                    margin: 24px 16px 12px;
                    font-family: Spartan;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 22px;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    color: #121212; 
                }
                & p {
                    margin: 0 16px 50px;
                    font-family: Spartan;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 22px;
                    color: #121212;
                    opacity: 0.8;
                }

        }
        
    `
}