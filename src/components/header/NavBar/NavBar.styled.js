import styled from 'styled-components';

export const NavBarStyled = {
    Container: styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #F8F8F8;
        padding:  0 15vh 0 15vh;
        background-color: rgb(255,255,255);
        color: black;
        font-family: Playfair Display SC;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 31,99px;
        min-height: 66px;
        
        @media screen and (max-width: 768px) {
            padding: 0 10px;
        } 
        & img {
           width: 14px;
           padding-left: 30px;
       }
        
`
}
