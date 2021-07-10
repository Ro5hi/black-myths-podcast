import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    ContactInput,
    SendBtn
} from './ContactStyles';

const Contact = ({ Info, Input }) => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo>
                    { Info }
                    <ContactInput> { Input } </ContactInput>
                </ContactInfo>
                <SendBtn> Send </SendBtn>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact