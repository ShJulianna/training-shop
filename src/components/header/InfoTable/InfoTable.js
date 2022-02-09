import React from "react";
import { InfoTableStyled } from "./InfoTable.styled";
import vector12 from '../../../images/header/Vector_12.png';


export const InfoTable = () => {

    return (
        <InfoTableStyled.Wrapper>
            <div className="blocks">
                <div>
                    <img src={vector12} alt='img'/>
                </div>
                <div>
                    <p>FREE SHIPPING</p>
                    <p>On all UA order or order above $100</p>
                </div>    
            </div>
            <div className="blocks">
                <div>
                    <img src={vector12} alt='img'/>
                </div>
                <div>
                    <p>30 DAYS RETURN</p>
                    <p>Simply return it within 30 days for an exchange</p>
                </div>  
            </div>
            <div className="blocks">
                <div>
                    <img src={vector12} alt='img'/>
                </div>
                <div>
                    <p>SUPPORT 24/7</p>
                    <p>Contact us 24 hours a day, 7 days a week</p>
                </div>  
            </div>
        </InfoTableStyled.Wrapper>
    )
}