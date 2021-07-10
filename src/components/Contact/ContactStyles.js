import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    background: black;
    height: 800px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 900px;
    }

    @media screen and (max-width: 480px) {
        height: 860px;
    }
`

export const ContactWrapper = styled.div`
    max-width: 700px;
    height: 860px;
    justify-content: center;
`

export const ContactInfo = styled.div`
    margin-top: 100px;
    align-items: center;
    color: white;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 24px;
`

export const ContactInput = styled.div`
    background: white;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    max-width: 600px;
    max-height: 500px;
`

export const ContactForm = styled.input`
    display: block;
    width: 100%;
    height: 100%;
`

export const FormText = styled.textarea`
    background-color: white;
    width: 100%;
    resize: none;
`

export const SendBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`