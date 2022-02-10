import React from "react";
import { WOMENPRODACTS } from "../../../constants/Prodacts";
import { Product } from "../prodact/Prodact";
import { ProductsStyled } from "./Products.styled";
import { ProdactMenu } from "../ProdactsMenu/ProdactsMenu";
import { ProdactsFooter } from "../ProdactsFooter/ProdactsFooter";
import logoWomen from '../../../images/Prodacts/WOMEN.png';

export const WomenProdacts = () => {
    return (
        <>
            <ProdactMenu logo={logoWomen}/>
            <ProductsStyled.Wrapper>
                {
                    WOMENPRODACTS.map(({id, imgSrc, text, newPrice, stars}) => 
                        <Product key={id} imgSrc={imgSrc} text={text} newPrice={newPrice} stars={stars}/>
                    )
                }
            </ProductsStyled.Wrapper>
            <ProdactsFooter/>
        </>
    )
}