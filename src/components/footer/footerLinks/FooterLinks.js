import React from "react";
import vector from '../../../images/Footer/Vector.png';
import vector2 from '../../../images/Footer/Vector2.png';
import vector3 from '../../../images/Footer/Vector3.png';
import vector4 from '../../../images/Footer/Vector4.png';
import { FoolerLinksStyled } from "./FooterLinks.styled";


export const FooterLinks = () => {
    return (
        <FoolerLinksStyled.Wrapper>
            <div className="block">
                <h4>Categories</h4>
                <p>Men</p>
                <p>Women</p>
                <p>Accessories</p>
                <p>Beauty</p>
            </div>
            <div>
                <h4>Infomation</h4>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Blog</p>
                <p>FAQs</p>
            </div>
            <div>
                <h4>Useful links</h4>
                <p>Terms & Conditions</p>
                <p>Returns & Exchanges</p>
                <p>Shipping & Delivery</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <h4>CONTACT US</h4>
                <p className="contacts">
                    <img src={vector2} alt='adress'/>
                    <span>Belarus, Gomel, Lange 17</span>
                </p>
                <p className="contacts">
                    <img src={vector} alt='phone'/>
                    <span>+375 29 100 20 30</span>
                </p>
                <p className="contacts">
                    <img src={vector3} alt='shadule'/>
                    <span>All week 24/7</span>
                </p>
                <p className="contacts">
                    <img src={vector4} alt='shadule'/>
                    <span>info@clevertec.ru</span>
                </p>
            </div>
        </FoolerLinksStyled.Wrapper>
    )
}