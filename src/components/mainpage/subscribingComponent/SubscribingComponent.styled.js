import styled from 'styled-components';

export const SubscribingComponentStyled = {
    Wrapper: styled.div`
        background: linear-gradient(180deg, #F3F2F2 0%, #DCDBDB 100%);
        height: 580px;
        position: relative;
        height: 580px;

        & div.info {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 532px;
            height: 461px;
            background: #fff;
            z-index: 1;
            
            @media screen and (max-width: 768px) {
                margin: 32px 10px;
                width: 332px;
                height: 300px;
            }
            & p.offer, p.sale{
                margin: 80px auto 20px;
                font-family: Spartan;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 13px;
                letter-spacing: 0.06em;
                text-transform: uppercase;
                text-align: center;
                color: #121212;
                opacity: 0.4;
            }
            & p.sale {
                margin: 0 auto;
                font-size: 26px;
                line-height: 36px;
                opacity: 1;

                & span {
                    color: red;
                }
            }
            & input {
                display: block;
                width: 340px;
                height: 64px;
                background: #F8F8F8;
                border: none;
                margin: 50px auto;
                text-align: center;
                @media screen and (max-width: 768px) {
                    width: 240px;
                    height: 44px;
                    margin: 10px auto;
                }
            }
            & button {
                display: block;
                width: 340px;
                height: 64px;
                background: #121212;
                border: none;
                margin: 0 auto;
                color: #fff;
                @media screen and (max-width: 768px) {
                    width: 240px;
                    height: 44px;
                    margin: 10px auto;
                }
            }
        }
        & div.woman {
            position: absolute;
            left: 10%;
            top: 6%;
            z-index: 100;
            @media screen and (max-width: 768px) {
                left: -20%;
                top: 6%;
                z-index: 0;
            }          
        }
        & div.man {
            position: absolute;
            right: 12%;
            top: 6%;
            z-index: 2;
            @media screen and (max-width: 768px) {
                right: 0;
                top: 6%;
                z-index: 0;
        }

        
`
}




