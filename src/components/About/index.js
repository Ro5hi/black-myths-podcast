import React from 'react';
import { 
    AboutContainer,
    AboutWrapper,
    TextWrapper,
    TextHeading,
    TextSubtitle
} from './AboutStyles'

const About = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <TextWrapper>
                    <TextHeading>
                        An informative, conversational show analyzing popular myths about Black culture from a sociopolitical and cultural nature.
                    </TextHeading>
                    <TextSubtitle>
                        TLDR, we just be debunking the bullshit that be said about Black people.
                    </TextSubtitle>
                </TextWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;