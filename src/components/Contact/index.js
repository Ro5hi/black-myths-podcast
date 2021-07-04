import React from 'react';
import {
    ContactContainer,
    ContactWrapper,
    ContactInfo,
    ContactInput,
    SendBtn
} from './ContactStyles';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactInfo>
                    <ContactInput>

                    </ContactInput>
                </ContactInfo>
                <SendBtn> Send </SendBtn>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact