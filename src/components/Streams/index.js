import React from 'react';
import {
    StreamContainer,
    StreamWrapper,
    StreamHeadline,
    Spotify,
    Youtube
} from './StreamsStyles';

const Stream = ({ Spotify, Youtube }) => {
    return (
        <StreamContainer>
            <StreamWrapper>
                <StreamHeadline>
                    <StreamSpotify> </StreamSpotify>
                    <StreamYoutube> </StreamYoutube>
                </StreamHeadline>
            </StreamWrapper>
        </StreamContainer>
    )
}

export default Stream