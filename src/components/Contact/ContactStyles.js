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
    align-items: center;
    color: white;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 24px;
`

export const ContactInput = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 400px;
    max-height: 400px;
`

export const SendBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`