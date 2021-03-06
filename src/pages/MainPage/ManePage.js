import React from "react";
import { HeaderImages } from "../../components/header/HeaderImages/HeaderImages";
import { InfoTable } from "../../components/header/InfoTable/InfoTable";
import { WomenProdacts } from "../../components/prodacts/Prodacts/WomenProdacts";
import { MenProdacts } from "../../components/prodacts/Prodacts/MenProdacts";
import { AdditionalComponents } from "../../components/mainpage/additionalComponent/AdditionalComponent";
import { SubscribingComponent } from "../../components/mainpage/subscribingComponent/SubscribingComponent";
import { ThematicBlock } from "../../components/mainpage/thematicBlock/ThematicBlock";
import { RegistrationString } from "../../components/footer/register/RegisterationString.js";
import { FooterLinks } from "../../components/footer/footerLinks/FooterLinks";
import { PayInformation } from "../../components/footer/PayInformation/PayInfomation";


export const MainPage = () => {

    return (
        <>
            <HeaderImages/>
            <InfoTable/>
            <WomenProdacts/>
            <MenProdacts/>
            <AdditionalComponents/>
            <SubscribingComponent/>
            <ThematicBlock/>
            <RegistrationString/>
            <FooterLinks/>
            <PayInformation/>
        </>
    )
}