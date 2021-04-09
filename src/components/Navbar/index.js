import React from 'react';
import { Nav, NavContainer, Logo, NavLinks } from './NavStyle'

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <Logo to='/'> BMP </Logo>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;