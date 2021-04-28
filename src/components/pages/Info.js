import React from 'react';
import { MythContainer, MythHeader, MythWrapper, MythInfoWrapper, MythColumn1, MythColumn2, MythRow, First, Second, InfoP, ImgWrapper, Img } from './PageStyles';

const Info = () => {
    return (
        <MythContainer id="myth">
            <MythWrapper>
                <MythRow>
                    <MythColumn1>
                        <MythInfoWrapper>
                            <MythHeader />
                                <InfoP />
                            <MythColumn2>
                                <First>
                                    <MythHeader />
                                        <InfoP />
                                </First>
                            <Second>
                                <MythHeader />
                                    <InfoP />
                            </Second>
                            </MythColumn2>
                        </MythInfoWrapper>
                        <ImgWrapper>
                            <Img />
                        </ImgWrapper>
                    </MythColumn1>
                </MythRow>
            </MythWrapper>
        </MythContainer>
    )
};

export default Info;