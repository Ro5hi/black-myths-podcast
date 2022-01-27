import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaSpotify
  } from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
 } from './PageStyles'; 

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Black Myths Podcast 2022</SocialLogo>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.twitter.com/'
                  target='_blank'
                  aria-label='Twitter'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Spotify'>
                  <FaSpotify />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    )
}

export default Footer