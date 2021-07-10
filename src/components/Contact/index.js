import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    SendEmail
} from './ContactStyles';

const Contact = ({ Info, Email }) => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo> { Info } </ContactInfo>
                <SendEmail> { Email } </SendEmail>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact