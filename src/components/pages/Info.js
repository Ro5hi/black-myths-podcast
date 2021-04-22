import React from 'react';
import { MythContainer, MythHeader, MythWrapper, MythColumn, First, Second, InfoP } from './PageStyles';

const Info = () => {
    return (
        <MythContainer id="myth">
            <MythWrapper>
                <MythColumn>
                    <MythHeader>What is a myth?</MythHeader>
                        <InfoP>An unfounded or false notion. Example: Racial superiority.</InfoP>
                    <First>
                        <MythHeader>First Episode</MythHeader>
                            <InfoP>Done amongst the podcast members only. Usually lightt-hearted with a lot of jokes, highly informative, and fun.</InfoP>
                    </First>
                    <Second>
                        <MythHeader>Second Episode</MythHeader>
                            <InfoP>An interview with an expert. It is more serious, in-depth, able to frame the myth in ways we never thought of, and adds more context to the myth.</InfoP>
                    </Second>
                </MythColumn>
            </MythWrapper>
        </MythContainer>
    )
};

export default Info;