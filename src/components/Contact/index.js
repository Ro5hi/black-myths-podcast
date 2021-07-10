import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    ContactInput,
    ContactForm,
    FormText,
    FormSend
} from './ContactStyles';

const Contact = ({ Info }) => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo> { Info } </ContactInfo>
                    <ContactInput type="text" />
                <FormSend> Send Message </FormSend>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact