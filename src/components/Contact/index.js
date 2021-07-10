import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    ContactInput,
    FormSend
} from './ContactStyles';

const Contact = ({ Info }) => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo> { Info } </ContactInfo>
                <ContactInput />
                <FormSend> Send Message </FormSend>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact