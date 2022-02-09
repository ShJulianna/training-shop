import styled from "styled-components";



export const HeaderImagesStyled = {
    Wrapper: styled.div`
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        column-gap: 30px;
        row-gap: 30px;
        margin: 32px 15vh;
        
        @media screen and (max-width: 768px) {
            margin: 32px 10px;
        } 

        .main-img::before {
            content: "<";
            background-color: #fff;
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            padding: 10px;
            top: 45%;
            left: 1%;
        }
        .main-img::after {
            content: ">";
            background-color: #fff;
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50px;
            padding: 10px;
            top: 45%;
            right: 1%;
        }
        & img { 
            width: 100%;
        }
        .relative {
            position: relative;
        }
        .absolute {
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
        }    
        & div.second {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 30px;
            row-gap: 20px;
            
            & .four {
                grid-column: 1/3
            }
        
         
    
    
    `
}