import React from 'react';
import { 
    AboutContainer,
    AboutWrapper,
    TextWrapper
} from './AboutStyles'

const About = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <TextWrapper>
                    <TextLine>
                        An Informative, conversational show analyzing popular myths about Black culture from a sociopolitical and cultural nature.<br/>
                        TLDR: "We just be debunking the bullshit that be said about Black people."
                    </TextLine>
                </TextWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;