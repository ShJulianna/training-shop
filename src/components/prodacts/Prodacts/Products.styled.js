import styled from "styled-components";



export const ProductsStyled = {
    Wrapper: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, 250px);
        grid-template-rows: 1fr 1fr;
        column-gap: 30px;
        row-gap: 30px;
        ${'' /* justify-items: stretch;
        align-items: stretch; */}
        margin: 50px 15vh;
        
        @media screen and (max-width: 768px) {
            margin: 50px 5vh;
        } 
    
    
    `
}