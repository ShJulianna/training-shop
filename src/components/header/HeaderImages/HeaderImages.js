import React from "react";
import ImgSRC from '../../../images/header/Rectangle.png';
import ImgSRC1 from '../../../images/header/Rectangle1.png';
import ImgSRC2 from '../../../images/header/Rectangle2.png';
import ImgSRC3 from '../../../images/header/Rectangle3.png';
import { HeaderImagesStyled } from "./HeaderImages.styled";





export const HeaderImages = () =>  {

    return (
        <HeaderImagesStyled.Wrapper>
            <div  className='relative main-img'>
                <img className='one' src={ImgSRC} alt=""/>
                <div className="absolute">
                    <p>BANNER</p>
                    <p>your Title text </p>
                </div>
            </div>
            <div className="second">
                <div className='relative'>
                    <img  src={ImgSRC1} alt=""/>
                    <div className="absolute">
                        <p>Women</p>
                    </div>
                </div>
                <div className='relative'>
                    <img  src={ImgSRC2} alt=""/>
                    <div className="absolute">
                        <p>men</p>
                    </div>
                </div>
                <div className='four relative' >
                    <img src={ImgSRC3} alt=""/>
                    <div className="absolute">
                       <p>Accessories</p>
                    </div>
                </div>
            </div>
        </HeaderImagesStyled.Wrapper>
    )
}