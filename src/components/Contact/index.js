import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    SendEmail
} from './ContactStyles';

const Contact = ({ Info, Email }) => {
    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactInfo> { Info } </ContactInfo>
                <SendEmail> { Email } </SendEmail>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact