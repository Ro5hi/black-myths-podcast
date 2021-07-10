import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    ContactInput,
    ContactForm,
    FormText,
    SendBtn
} from './ContactStyles';

const Contact = ({ Info, Input, SendBtn }) => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo>
                    { Info }
                    <ContactInput> { Input } </ContactInput>
                </ContactInfo>
                <SendBtn> { SendBtn } </SendBtn>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact