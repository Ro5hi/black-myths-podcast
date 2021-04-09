import React from 'react';
import { Nav, NavContainer, Logo, NavLinks } from './NavStyle'

const NaviBar = () => {
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

export default Navibar;