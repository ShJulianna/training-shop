import React from "react";
import vector4 from '../../../images/header/Vector_fb.png';
import vector5 from '../../../images/header/Vector_tw.png';
import vector6 from '../../../images/header/Vector_insta.png';
import vector7 from '../../../images/header/Vector_4.png';
import { RegistrationStringStyled } from "./RegistrationString.styled";


export const RegistrationString = () => {

    return (
        <RegistrationStringStyled.Wrapper>
            <span> BE IN TOUCH WITH US:</span>
            <div className="register">
                <input placeholder="Enter your email"></input>
                <button>Join Us</button>
            </div>
            <div className="imgs">
                <img src={vector4} alt='facebook'/>
                <img src={vector5} alt='twitter'/>
                <img src={vector6} alt='instagram'/>
                <img src={vector7} alt='shadule'/>
            </div>
        </RegistrationStringStyled.Wrapper>
    )
}