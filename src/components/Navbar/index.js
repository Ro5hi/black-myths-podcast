import React from 'react';
import { Nav, NavContainer, Logo } from './NavStyle'

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
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar;