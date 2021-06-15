import styled from 'styled-components'

// Info
export const MythContainer = styled.div`
    color: black;
    background: #202020;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const MythWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const MythColumn1 = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const MythColumn2 = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const MythRow = styled.div`
    display: grid;
    grid-ato-columns: minxmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col1' 'col2 col2'` )};
    }
`

export const MythInfoWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const MythHeader = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: red;

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`
export const ImgWrapper = styled.div`
    max-width: 375px;
    height: 100%;
`

export const Img = styled.div`
    width: 25%;
    height: 25%;
    margin 0 0 10px 0;
    padding-right: 0;
`

export const InfoP = styled.p`
    justify-content: center;
    display: flex;
    color: #ffffff;
`

export const First = styled.div`
    color: #ffffff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Second = styled.div`
    color: #ffffff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const MythInfoP = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
`