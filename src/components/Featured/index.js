import React from 'react';
import { FeaturedContainer, FeaturedWrapper, FeaturedCard, FeaturedPhoto } from './FeaturedStyles';

const Featured = ({ data }) => {
    return (
        <FeaturedContainer id="featured">
            <FeaturedWrapper>
            {data.map((guest, index) => {
                    return (
                        <FeaturedCard key={index}>
                            <FeaturedPhoto>
                                <img src={guest.img} alt="guests" />
                            </FeaturedPhoto>
                        </FeaturedCard>
                    )
                })}
            </FeaturedWrapper>
        </FeaturedContainer>
    )
};

export default Featured;