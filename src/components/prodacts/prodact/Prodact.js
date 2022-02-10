import React from "react";
import { ProdactStyled } from "./Prodact.styled";


export const Product = ({imgSrc, text, newPrice, stars}) => {
    return (
        <ProdactStyled.Wrapper>
            <div>
                <img src={imgSrc} alt='img'/>
            </div>
            <p>{text}</p>
            <div className="price">
                <span>{newPrice}</span>
                <img src={stars} alt='stars'/>
            </div>
        </ProdactStyled.Wrapper>
    )
}

