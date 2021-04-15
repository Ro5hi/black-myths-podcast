import React from 'react';
import {
    MenuContainer,
    SideMenu,
    MenuWrapper,
    MenuLink,
    MenuBtnWrap,
    MenuBtnLink,
    CloseIcon,
    Icon,
} from './MenuStyles';

const Menu = ({ isOpen, toggle }) => {
    return (
        <MenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <SideMenu>
                    <MenuLink to ="about">
                        About
                    </MenuLink>
                    <MenuLink to ="myth">
                        Myth
                    </MenuLink>
                    <MenuLink to ="team">
                        Team
                    </MenuLink>
                    <MenuLink to ="featured">
                        Featured
                    </MenuLink>
                    <MenuLink to ="contact">
                        Contact
                    </MenuLink>
                    <MenuBtnWrap>
                        <MenuBtnLink to="/stream">Stream</MenuBtnLink>
                    </MenuBtnWrap>
                </SideMenu>
            </MenuWrapper>
        </MenuContainer>
    )
}

export default Menu