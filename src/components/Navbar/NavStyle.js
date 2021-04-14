import styled from 'styled-components'
import { Link as LinkD } from 'react-scroll'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkA } from 'react-scroll'
import { Link as LinkB } from 'react-scroll'

export const Nav = styled.nav`
    background: #000000;
    display: flex;
    position: sticky;
    font-size: 1rem;
    height: 100px;
    width: 100%;
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
margin-left: 22px;
align-items: center;
font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
cursor: pointer;
`

export const NavLink = styled(LinkA)`
    color: #ffffff;
    display: flex;
    align-items: center;;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid #8b0000;
    }
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
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
    
export const NavItem = styled.li`
    height: 80px;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkB)`
    border-radius: 50px;
    background: red;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: black;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 20px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #ffffff;
    }
`