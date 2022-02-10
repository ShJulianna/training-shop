import React from "react";
import { ProductsStyled } from "./Products.styled";
import { Product } from "../prodact/Prodact";
import { ProdactMenu } from "../ProdactsMenu/ProdactsMenu";
import { ProdactsFooter } from "../ProdactsFooter/ProdactsFooter";
import { MENPRODACTS } from "../../../constants/Prodacts";
import logoMen from '../../../images/Prodacts/MEN.png';


export const MenProdacts = () => {
    return (
        <>
            <ProdactMenu logo={logoMen}/>
            <ProductsStyled.Wrapper>
                {
                    MENPRODACTS.map(({id, imgSrc, text, newPrice, stars}) => 
                        <Product key={id} imgSrc={imgSrc} text={text} newPrice={newPrice} stars={stars}/>
                    )
                }
            </ProductsStyled.Wrapper>
            <ProdactsFooter/>
        </>
    )
}
