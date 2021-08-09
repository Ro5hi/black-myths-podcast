import React from 'react';
import {
    StreamContainer,
    StreamWrapper,
    StreamHeadline,
    StreamSpotify,
    StreamYoutube,
    StreamLibsyn
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