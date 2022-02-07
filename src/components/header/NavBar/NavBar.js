import React from 'react';
import { NavBarStyled } from './NavBar.styled';
import { MenuItems } from '../MenuItems/MenuItems';
// import { Link } from "react-router-dom";
import vector8 from '../../../images/header/Vector_8.png';
import vector9 from '../../../images/header/Vector_9.png';
import vector10 from '../../../images/header/vector_10.png';
import vector11 from '../../../images/header/Vector_11.png';


export const NavBar = () => {

    return (
        <NavBarStyled.Container>
            <p>CleverShop</p>
            <div> 
                <MenuItems/>
            </div>
            <div>
               <img src={vector8} alt=''/>
               <img src={vector9} alt=''/>
               <img src={vector10} alt=''/>
               <img src={vector11} alt=''/>
            </div>
        </NavBarStyled.Container>
    )
}