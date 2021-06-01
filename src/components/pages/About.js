import React from 'react';
import Button from '../Button';

const About = () => {
    return (
        <AboutContainer>
            <TextWrapper>
                An Informative, conversational show analyzing popular myths about Black culture from a sociopolitical and cultural nature.<br/>
                TLDR: "We just be debunking the bullshit that be said about Black people."
            </TextWrapper>
            <Button 
                to='team'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                >
                    Podcast Team
                </Button>
        </AboutContainer>
    )
}

export default About;