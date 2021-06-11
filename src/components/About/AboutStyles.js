import styled from 'styled-components'

// About 
export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    background: #ffffff;

    @media screen and (max-width: 768px) {
        padding: 75px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 900px;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
`

export const TextWrapper = styled.div`
    max-width: 500px;
    padding-top: 0;
    padding-bottom: 75px;
`