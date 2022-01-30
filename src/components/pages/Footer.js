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
                <SocialIconLink href='https://www.facebook.com/blackmythspod/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='https://www.instagram.com/blackmythspod/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='https://www.youtube.com/watch?v=zVyTz3_1P-8' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href='https://twitter.com/blackmythspod'
                  target='_blank'
                  aria-label='Twitter'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='https://open.spotify.com/show/70RdUs6GHCWmOlFvceGglf' target='_blank' aria-label='Spotify'>
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