import styled from 'styled-components';

export const InfoStringStyled = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #F8F8F8;
        padding: 0 85px;
        background-color: rgb(0,0,0);
        color: white;
        font-family: Spartan;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 12px;
        min-height: 24px;
        
        & div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            & div {
                margin-right: 10px;
            }
            & img {
                margin-left: 10px;
                weight: 10.5px;
            }
        }
        
`
}
