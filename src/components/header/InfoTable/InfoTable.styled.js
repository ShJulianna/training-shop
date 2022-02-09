import styled from "styled-components";


export const InfoTableStyled = {
    Wrapper: styled.div`
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
        column-gap: 35px;
        row-gap: 30px;
        margin: 0 15vh;
        padding-bottom: 30px;
        border-bottom: 2px solid #F8F8F8; 
        
        @media screen and (max-width: 768px) {
            margin: 0 10px;
        } 
    
        & div.blocks {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
        }
        & p {
            font-size:12px;
        }
        
    `
}