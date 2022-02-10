import React from "react";
import img1 from '../../../images/MainPage/1.png';
import img2 from '../../../images/MainPage/2.png';
import { AdditionalComponentsStyled } from "./AdditionalComponent.styled";


export const AdditionalComponents = () => {

    return (
        <AdditionalComponentsStyled.Wrapper>
            <div  className='relative main-img'>
                <img src={img1} alt=""/>
                <div className="absolute">
                    <p>New Season</p>
                    <p>lookbook collection</p>
                </div>
            </div>
            <div  className='relative main-img'>
                <img src={img2} alt=""/>
                <div className="absolute">
                    <p>Sale</p>
                    <p>Get UP to 50% off</p>
                </div>
            </div>

        </AdditionalComponentsStyled.Wrapper>
    )
}