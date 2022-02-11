import React from "react";
import img1 from '../../../images/MainPage/3.png';
import img2 from '../../../images/MainPage/4.png';
import img3 from '../../../images/MainPage/5.png';
import { ThematicBlockStyled } from "./ThematicBlock.styled";

export const ThematicBlock = () => {

    return (
        <ThematicBlockStyled.Wrapper>
            <div className="header">
                <span>LATEST FROM BLOG</span>
                <span>SEE ALL</span>
            </div>
            <div className="imgs">
                <div className="block">
                    <img src={img1} alt='img'></img>
                    <div className="info">
                        <h4>The Easiest Way to Break</h4>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
                <div className="block">
                    <img src={img2} alt='img'></img>
                    <div className="info">
                        <h4>Wedding Season</h4>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
                <div className="block">
                    <img src={img3} alt='img'></img>
                    <div className="info">
                        <h4>Recent Favorites On Repeat</h4>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                    </div>
                </div>
            </div>
            
        </ThematicBlockStyled.Wrapper>
    )
}