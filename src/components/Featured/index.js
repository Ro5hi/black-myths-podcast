import React from 'react';
import { FeaturedContainer, FeaturedWrapper, FeaturedCard, FeaturedName, FeaturedPhoto } from './FeaturedStyles';

const Featured = ({ Guest1Name, Guest1Photo, Guest2Name, Guest2Photo, Guest3Name, Guest3Photo }) => {
    return (
        <FeaturedContainer id="featured">
        <FeaturedWrapper>
            <FeaturedCard>
                <FeaturedPhoto> </FeaturedPhoto>
                <FeaturedName> {Guest1Name} </FeaturedName>
            </FeaturedCard>
        </FeaturedWrapper>
    </FeaturedContainer>
    )
};

export default Featured;