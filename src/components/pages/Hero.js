import React from 'react';
import { HeroContainer, Background, Logo } from './PageStyles';

const Hero = () => {
    return ( 
        <HeroContainer>
            <Background>
                <Logo>
                    <img src="\images\bmp.png" alt="logo" id="home" />
                </Logo>
            </Background>
        </HeroContainer>
    )
}

export default Hero;