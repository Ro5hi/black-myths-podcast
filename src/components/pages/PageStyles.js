import styled from 'styled-components';

// Hero 
export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const Background = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const Logo = styled.div`
    justify-content: center;
    display: flex;
`

export const InfoP = styled.p`
    justify-content: center;
    display: flex;
    color: #ffffff;
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

//Footer
export const FooterContainer = styled.div`
    background-color: black;
`

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 200px;
    margin: 0 auto;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
      }
`

export const FooterText = styled.div`
    color: white;
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 32px;
`

export const FooterLinks = styled.div`
`