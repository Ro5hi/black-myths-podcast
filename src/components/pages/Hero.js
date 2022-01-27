import React from 'react';
import { HeroContainer, Background, Logo } from './PageStyles';
import logo from '../../imgs/bmp.png';

const Hero = () => {
    return ( 
        <HeroContainer>
            <Background>
                <Logo img src={logo} alt="logo">
                    <img src={logo} alt="logo" id="home" />
                </Logo>
            </Background>
        </HeroContainer>
    )
}

export default Hero;