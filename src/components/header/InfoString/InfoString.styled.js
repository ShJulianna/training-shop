import styled from 'styled-components';


export const InfoStringStyled = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #F8F8F8;
        padding: 0 15vh 0 15vh;
        background-color: rgb(0,0,0);
        color: white;
        font-family: Spartan;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 12px;
        min-height: 24px;
        
        @media screen and (max-width: 768px) {
            padding: 0 10px;
            } 
        & div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            & div {
                margin-right: 10px;
            }
            & img {
                margin: 0 10px;
                weight: 10.5px;
            }
        }
        
`
}
