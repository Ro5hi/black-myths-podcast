import React from 'react';
import { MythContainer, First, Second } from './PageStyles';

const Info = () => {
    return (
        <MythContainer id="myth">
            <strong>What is a myth?</strong>
            <p>
                An unfounded or false notion. Example: Racial superiority.
            </p>
            <First>
                <strong>First Episode</strong>
                <p>
                    Done amongst the podcast members only. Usually lightt-hearted with a lot of jokes, highly informative, and fun.
                </p>
            </First>
            <Second>
                <strong>Second Episode</strong>
                <p>
                    An interview with an expert. It is more serious, in-depth, able to frame 
                    the myth in ways we never thought of, and adds more context to the myth.
                </p>
            </Second>
        </MythContainer>
    )
};

export default Info;