import React from 'react';
import { MythContainer, 
        MythWrapper,
        MythRow, 
        MythColumn1, 
        MythInfoWrapper, 
        MythHeader, 
        First, 
        Second, 
        Description, 
        } from './InfoStyles';

const Info = ({ id, header1, header2, header3, img, desc, ep2, ep3 }) => {
    return (
        <MythContainer id={id} >
            <MythWrapper>
                <MythRow>
                   <MythColumn1>
                         <MythInfoWrapper>
                            <MythHeader>{header1}</MythHeader>
                            <Description>{desc}</Description>
                            <First>{header2}</First>
                            <Description>{ep2}</Description>
                            <Second>{header3}</Second>
                            <Description>{ep3}</Description>
                        </MythInfoWrapper>
                    </MythColumn1>
                </MythRow>
            </MythWrapper>
        </MythContainer>
    )
};

export default Info;