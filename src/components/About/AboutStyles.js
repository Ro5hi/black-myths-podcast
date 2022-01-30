import styled from 'styled-components'

// About 
export const AboutContainer = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    background: black;

    @media screen and (max-width: 768px) {
        padding: 25px 0;
    }

    @media screen and (max-width: 468px) {
        padding: 25px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
`

export const TextWrapper = styled.div`
    max-width: 800px;
    padding-top: 75px;
    padding-bottom: 75px;

    @media screen and (max-width: 768px) {
        padding: 25px 0;
    }
`

export const TextHeading = styled.div`
    color: white;
    font-size: 40px;
    letter-spacing: 2.0px;
    margin-bottom: 32px;

    @media screen and (max-width: 768px) {
        letter-spacing: 1.0px;
        font-size: 20px;
    }

    @media screen and (max-width: 468px) {
        letter-spacing: 1.0px;
        font-size: 25px;
    }
`

export const TextSubtitle = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: bold;
    color: red;

    @media screen and (max-width: 768px) {
        letter-spacing: 1.0px;
        font-size: 25px;
    }

    @media screen and (max-width: 468px) {
        letter-spacing: 1.0px;
        font-size: 25px;
    }
`