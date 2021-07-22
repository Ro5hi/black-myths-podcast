import React from 'react';
import {
    StreamContainer,
    StreamWrapper,
    StreamHeadline,
    StreamSpotify,
    StreamYoutube
} from './StreamsStyles';

const Stream = () => {
    return (
        <StreamContainer>
            <StreamWrapper>
                <StreamHeadline>
                    <StreamSpotify> </StreamSpotify>
                    <StreamYoutube> </StreamYoutube>
                    <StreamLibsyn>  </StreamLibsyn>
                </StreamHeadline>
            </StreamWrapper>
        </StreamContainer>
    )
}

export default Stream