import React from 'react';
import { 
        Logo, 
        Nav, 
        NavContainer, 
        NavMenu, 
        NavLink, 
        NavItem, 
        MobileIcon, } from './NavStyle'
import { FaBars } from 'react-icons/fa' 

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo to='/'> BMP </Logo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about">About</NavLink>
                    </NavItem>
                </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar;