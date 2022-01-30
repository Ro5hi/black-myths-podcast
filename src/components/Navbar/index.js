import React from 'react';
import { 
        Logo, 
        Nav, 
        NavContainer, 
        NavMenu, 
        NavLink, 
        NavItem, 
        NavBtn,
        NavBtnLink,
        MobileIcon, } from './NavStyle'
import { FaBars } from 'react-icons/fa' 

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo to='/'> BMP </Logo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="myth">Myth</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="featured">Featured</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="team">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="contact">Contact</NavLink>
                    </NavItem>
                </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/https://open.spotify.com/show/70RdUs6GHCWmOlFvceGglf">Tune In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar;