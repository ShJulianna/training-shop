import React from 'react';
import { InfoStringStyled } from './InfoString.styled';
import vector from '../../../images/header/Vector_1.png';
import vector2 from '../../../images/header/Vector_2.png';
import vector3 from '../../../images/header/Vector_3.png';
import vector4 from '../../../images/header/Vector_fb.png';
import vector5 from '../../../images/header/Vector_tw.png';
import vector6 from '../../../images/header/Vector_insta.png';
import vector7 from '../../../images/header/Vector_4.png';

export const InfoString = () => {

    return (
        <InfoStringStyled.Container>
            <div>
                <div>
                    <img src={vector} alt='phone'/>
                    <span>+375 29 100 20 30</span>
                </div>
                <div>
                    <img src={vector2} alt='adress'/>
                    <span>Belarus, Gomel, Lange 17</span>
                </div>
                <div>
                    <img src={vector3} alt='shadule'/>
                    <span>All week 24/7</span>
                </div>
            </div>
            <div>
                <img src={vector4} alt='facebook'/>
                <img src={vector5} alt='twitter'/>
                <img src={vector6} alt='instagram'/>
                <img src={vector7} alt='shadule'/>
            </div>

        </InfoStringStyled.Container>
    )
}