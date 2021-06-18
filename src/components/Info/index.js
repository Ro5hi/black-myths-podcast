import React from 'react';
import { MythContainer, 
        MythWrapper, 
        MythRow, 
        MythColumn1, 
        MythInfoWrapper, 
        MythHeader, 
        MythColumn2, 
        First, 
        Second, 
        Description, 
        } from './InfoStyles';

const Info = ({ id, header1, header2, header3, desc, ep2, ep3 }) => {
    return (
        <MythContainer id={id} >
            <MythWrapper>
                <MythRow>
                   <MythColumn1>
                         <MythInfoWrapper>
                            <MythHeader>{header1}</MythHeader>
                            <Description>{desc}</Description>
                        </MythInfoWrapper>
                    </MythColumn1>
                </MythRow>
                    <MythColumn2>
                        <First>{header2}</First>
                        <Description>{ep2}</Description>
                        <Second>{header3}</Second>
                        <Description>{ep3}</Description>
                    </MythColumn2>
            </MythWrapper>
        </MythContainer>
    )
};

export default Info;