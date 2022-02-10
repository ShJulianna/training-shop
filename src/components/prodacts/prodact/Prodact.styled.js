import styled from "styled-components";



export const ProdactStyled = {
    Wrapper: styled.div`
        & p {
            margin: 10px 0;
            color: #121212;
        }
        & span {
            font-weight: 700;
            font-size: 14px;
        }
        & div.price {
            display: flex;
            justify-content: space-between;
        }
    `
}