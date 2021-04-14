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
                    <NavItem>
                        <NavLink to="myth">Myth</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="team">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="featured">Featured</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="contact">Contact</NavLink>
                    </NavItem>
                </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar;