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

const Contact = ({ Info, Input }) => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo>
                    { Info }
                    <ContactInput> { Input } </ContactInput>
                </ContactInfo>
                <FormSend> Send Message </FormSend>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact