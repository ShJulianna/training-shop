import styled from "styled-components";



export const AdditionalComponentsStyled = {

    Wrapper: styled.div`
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(350px, 1fr) );
        column-gap: 30px;
        row-gap: 30px;
        margin: 100px 15vh;
        
        @media screen and (max-width: 768px) {
            margin: 32px 10px;
        } 
        & img {
            width: 100%;
        }
        & .relative {
            position: relative;
        }
        & .absolute {
            position: absolute;
            left: 50%;
            top: 50%;
            background: #fff;
            border-radius: 3px;
            transform: translate(-50%,-50%);
            padding: 20px 24px;

            & p {
                
                text-transform: uppercase; 
            }
    
    `
}