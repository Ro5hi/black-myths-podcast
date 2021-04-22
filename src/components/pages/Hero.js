import React from 'react';
import PageStyles from './PageStyles';
import styled from 'styled-components';

const Hero = () => {
    return ( 
        <HeroContainer>
            <Background>
                <Logo>
                    <img src="/images/bmp.png" alt="logo" id="home"></img>
                </Logo>
            </Background>
        </HeroContainer>
    )
}

export default Hero;