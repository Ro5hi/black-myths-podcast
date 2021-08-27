import React from 'react';
import { FeaturedContainer, FeaturedWrapper, FeaturedCard, FeaturedName } from './FeaturedStyles';

const Featured = (Guest1Name, Guest1Photo, Guest2Name, Guest2Photo, Guest3Name, Guest3Photo) => {
    return (
        <FeaturedContainer>
        <FeaturedWrapper>
            <FeaturedCard>
                <FeaturedName> {Guest1Name} </FeaturedName>
            </FeaturedCard>
        </FeaturedWrapper>
    </FeaturedContainer>
    )
};

export default Featured;