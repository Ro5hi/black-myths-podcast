import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    background: #202020;
    height: 800px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 900px;
    }

    @media screen and (max-width: 480px) {
        height: 900;
    }
`

export const ContactWrapper = styled.div`
    max-width: 700px;
    height: 320px;
    justify-content: center;
`

export const ContactInfo = styled.div`
    margin-top: 100px;
    width: 100%;
    align-items: center;
    color: white;
    padding-bottom: 100px;

    font-size: 26px;
    line-height: 25px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 1.0px;
        text-transform: uppercase;
        margin-bottom: 24px;
    }

    @media screen and (max-width: 468px) {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 1.0px;
        text-transform: uppercase;
        margin-bottom: 24px;
    }
`

export const SendEmail = styled.button`
    margin-top: 20px;
    border-radius: 50px;
    height: 45px;
    width: 150px;
    white-space: nowrap;
    outline: none;
    border: none;
    text-decoration: none;
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#FFFFFF' : 'black')};
    padding: ${({ capped }) => (capped ? '14px 28px' : '12px 24px')};
    font-size: ${({ big }) => (big ? '20px' : '16px')};

    &:hover {
        width: 160px;
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'black' : 'red')};
    }

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        border-radius: 50px;
        height: 55px;
        width: 250px;
        white-space: nowrap;
        outline: none;
        border: none;
        text-decoration: none;
    }

    @media screen and (max-width: 480px) {
        margin-top: 20px;
        border-radius: 50px;
        height: 55px;
        width: 250px;
        white-space: nowrap;
        outline: none;
        border: none;
        text-decoration: none;
    }
`