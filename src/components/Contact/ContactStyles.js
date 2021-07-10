import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    background: #202020;
    height: 800px;
    height: 100%;
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
    height: 500px;
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

export const ContactInput = styled.input`
    background: white;
    display: flex;
    width: 100%;
    height: 100px;
    padding: 40px;
    border: none; 
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
`

export const FormSend = styled.button`
    margin-top: 20px;
    color: white;
    border-radius: 50px;
    height: 45px;
    width: 150px;
    white-space: nowrap;
    outline: none;
    border: none;
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#FFFFFF' : '#DC143C')};
    padding: ${({ capped }) => (capped ? '14px 28px' : '12px 24px')};
    font-size: ${({ big }) => (big ? '20px' : '16px')};

    &:hover {
        width: 160px;
        transition: all 0.2s ease-in-out;
        color: black;
        background: ${({ primary }) => (primary ? '#DC143C' : '#FFFFFF')};
    }
`