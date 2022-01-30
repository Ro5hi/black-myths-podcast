import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Hero 
export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

  @media screen and (max-width: 768px) {
    height: 800px;
    width: 100%;
  }

  @media screen and (max-width: 468px) {
    height: 700px;
    width: 100%;
  }
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
  margin-top: 10%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    min-width: 300px;
    height: auto;
  }

  @media screen and (max-width: 468px) {
    max-width: 100%;
    min-width: 300px;
    height: auto;
  }
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

export const FooterContainer = styled.footer`
  background-color: #0d0909;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;