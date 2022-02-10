import React from "react";
import imgMan from '../../../images/MainPage/man.png';
import imgWoman from '../../../images/MainPage/woman.png';
import { SubscribingComponentStyled } from "./SubscribingComponent.styled";

export const SubscribingComponent = () => {
    return (
        <SubscribingComponentStyled.Wrapper>
            <div className="woman">
                <img src={imgWoman} alt=''/>
            </div>
            <div className="info">
                <p className="offer">Special Offer</p>
                <p className="sale">Subscribe</p>
                <p className="sale">And<span> Get 10% Off</span></p>
                <input placeholder="Enter your email"></input>
                <button>Subscribe</button>
            </div>
            <div className="man">
                <img src={imgMan} alt=''/>
            </div>
        </SubscribingComponentStyled.Wrapper>
    )
}