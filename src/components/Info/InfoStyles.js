import styled from 'styled-components'

// Info
export const MythContainer = styled.div`
    background: #202020;
    height: 100vh;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }

    @media screen and (max-width: 468px) {
        height: 100vhpx;
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
    padding: 0 15px;
    justify-content: center;
`

export const MythColumn1 = styled.div`
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 0 25px;
    grid-area: col1;
`

export const MythInfoWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const MythRow = styled.div`
    display: grid;
    grid-ato-columns: minxmax(auto, 1fr);
    align-items: center;
`

export const MythHeader = styled.div`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: white;

     @media screen and (max-width: 468px) {
      font-size: 30px;
     }
`

export const Description = styled.div`
    margin-top: 24px;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 55px;

    @media screen and (max-width: 768px) {
        margin-top: 24px;
        font-size: 20px;
        color: #ffffff;
    }

    @media screen and (max-width: 468px) {
        margin-top: 24px;
        font-size: 25px;
        color: #ffffff;
    }
`

export const First = styled.div`
    color: #ffffff;
    font-size: 54px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 468px) {
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        letter-spacing: 1.0px;
        font-size: 25px;
    }
`

export const Second = styled.div`
    color: #ffffff;
    font-size: 54px;
    line-height: 30px;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 468px) {
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`