import React from 'react';
import Button from '../Button';
import { 
    AboutContainer,
    MythWrapper,
} from './PageStyles'

const About = () => {
    return (
        <AboutContainer>
            <MythWrapper>
                An Informative, conversational show analyzing popular myths about Black culture from a sociopolitical and cultural nature.<br/>
                TLDR: "We just be debunking the bullshit that be said about Black people."
            </MythWrapper>
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