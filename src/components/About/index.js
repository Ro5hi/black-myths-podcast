import React from 'react';
import { 
    AboutContainer,
    AboutWrapper,
    TextWrapper,
    TextHeading,
    TextSubtitle
} from './AboutStyles'

const About = ({id, heading, subtitle}) => {
    return (
        <AboutContainer id={id}>
            <AboutWrapper>
                <TextWrapper>
                    <TextHeading>
                        {heading}
                    </TextHeading>
                    <TextSubtitle>
                        {subtitle}
                    </TextSubtitle>
                </TextWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;