import React from 'react';
import { FeaturedContainer, FeaturedWrapper, FeaturedCard, FeaturedName, FeaturedPhoto } from './FeaturedStyles';

const Featured = ({ Guest1Name, Guest1Photo, Guest2Name, Guest2Photo, Guest3Name, Guest3Photo }) => {
    return (
        <FeaturedContainer id="featured">
            <FeaturedWrapper>
                <FeaturedCard>
                    <FeaturedPhoto> <img src="\images\guests\drjj.jpg" alt="JoyJames" /> </FeaturedPhoto>
                    <FeaturedName> {Guest1Name} </FeaturedName>
                </FeaturedCard>
                <FeaturedCard>
                    <FeaturedPhoto> <img src="\images\guests\glenf.jpg" alt="GlenFord" /> </FeaturedPhoto>
                    <FeaturedName> {Guest2Name} </FeaturedName>
                </FeaturedCard>
                <FeaturedCard>
                    <FeaturedPhoto> <img src="\images\guests\r_m.png" alt="RasulMowatt" /> </FeaturedPhoto>
                    <FeaturedName> {Guest3Name} </FeaturedName>
                </FeaturedCard>
            </FeaturedWrapper>
        </FeaturedContainer>
    )
};

export default Featured;