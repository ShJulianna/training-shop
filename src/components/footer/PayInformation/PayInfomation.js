import React from "react";
import stripe from '../../../images/Footer/Stripe.png';
import aes from '../../../images/Footer/AES.png';
import paypal from '../../../images/Footer/paypal.png';
import visa from '../../../images/Footer/visa.png';
import mastercard from '../../../images/Footer/mastercard.png';
import discover from '../../../images/Footer/discover.png';
import express from '../../../images/Footer/Aexpress.png';
import { PayInformationStyled } from "./PayInfomation.styled";


export const PayInformation = () => {

    return (
        <PayInformationStyled.Wrapper>
            <span>Copyright © 2032 all rights reserved:</span>
            <div className="register">
                <img src={stripe} alt='stripe'/>
                <img src={aes} alt='aes'/>
                <img src={paypal} alt='paypal'/>
                <img src={visa} alt='visa'/>
                <img src={mastercard} alt='mastercard'/>
                <img src={discover} alt='discover'/>
                <img src={express}s alt='express'/>
            </div>
            <div className="imgs">
                <span>Clevertec.ru/training</span>
            </div>
        </PayInformationStyled.Wrapper>
    )
}