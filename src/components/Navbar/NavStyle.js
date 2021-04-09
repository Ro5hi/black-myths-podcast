import styled from 'styled-components'
import { Link as LinkD } from 'react-scroll'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000000;
    display: flex;
    position: sticky;
    font-size: 1rem;
    height: 100px;
    width: 100%;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px) {
        transition: 0.6s all ease;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const Logo = styled(LinkD)`
    color: #ffffff;
    display: flex;
    justify-self: flex-start;
    margin-left: 24px;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`

export const NavLinks = styled(LinkS)`
    color: #ffffff;
    display: flex;
    cursor: pointer;
    height: 100%;
    align-items: center;
    text-decoration: none;

    &..active {
        border-bottom: 5px solid #dc143c
    }
`