import React from "react";
import { CATEGORYITEMS } from "../../../constants/CategoryItems";
import { ProdactsMenuStyled } from "./ProdactsMenu.styled";

export const ProdactMenu = ({logo}) => {

    return (
        <ProdactsMenuStyled.Wrapper>
            <img src={logo} alt='img'/>
            <div>
                {
                    CATEGORYITEMS.map(({name, id}) =>
                        <span key={id}> {name}</span>
                    )
                }
            </div>

        </ProdactsMenuStyled.Wrapper>
    )
}