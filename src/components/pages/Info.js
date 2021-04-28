import React from 'react';
import { MythContainer, MythHeader, MythWrapper, MythInfoWrapper, MythColumn1, MythColumn2, MythRow, First, Second, InfoP, ImgWrapper, Img } from './PageStyles';

const Info = ({id, header1, header2, header3, desc, ep2, ep3, img, alt }) => {
    return (
        <MythContainer id={id} >
            <MythWrapper>
                <MythRow>
                    <MythColumn1>
                        <MythInfoWrapper>
                            <MythHeader header1={header1} />
                                <InfoP desc={desc} />
                            <MythColumn2>
                                <First>
                                    <MythHeader header2={header2} />
                                        <InfoP ep2={ep2} />
                                </First>
                            <Second>
                                <MythHeader header3={header3} />
                                    <InfoP ep3={ep3} />
                            </Second>
                            </MythColumn2>
                        </MythInfoWrapper>
                        <ImgWrapper>
                            <Img img={img} alt={alt} />
                        </ImgWrapper>
                    </MythColumn1>
                </MythRow>
            </MythWrapper>
        </MythContainer>
    )
};

export default Info;