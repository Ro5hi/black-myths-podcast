import React from 'react';
import { MythContainer, MythHeader, MythWrapper, MythInfoWrapper, MythColumn1, MythColumn2, MythRow, ImgWrap, First, Second, InfoP } from './PageStyles';

const Info = () => {
    return (
        <MythContainer id="myth">
            <MythWrapper>
                <MythRow>
                    <MythColumn1>
                        <MythInfoWrapper>
                            <MythHeader>What is a myth?</MythHeader>
                                <InfoP>An unfounded or false notion. Example: Racial superiority.</InfoP>
                            <MythColumn2>
                                <First>
                                    <MythHeader>First Episode</MythHeader>
                                        <InfoP>Done amongst the podcast members only. Usually lightt-hearted with a lot of jokes, highly informative, and fun.</InfoP>
                                </First>
                            <Second>
                                <MythHeader>Second Episode</MythHeader>
                                    <InfoP>An interview with an expert. It is more serious, in-depth, able to frame the myth in ways we never thought of, and adds more context to the myth.</InfoP>
                            </Second>
                            </MythColumn2>
                            <ImgWrap>
                                
                            </ImgWrap>
                        </MythInfoWrapper>
                    </MythColumn1>
                </MythRow>
            </MythWrapper>
        </MythContainer>
    )
};

export default Info;