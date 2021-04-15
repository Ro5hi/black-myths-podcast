import React from 'react';
import {
    MenuContainer,
    MenuWrapper,
    MenuItem,
    MenuLink,
    MenuBtnWrap,
    MenuBtnLink,
    CloseIcon,
    Icon,
} from './MenuStyles';

export default function Menu() {
    return (
        <MenuContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <MenuItem>
                    <MenuLink to ="about">About</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to ="myth">Team</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to ="team">Team</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to ="featured">Featured</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to ="contact">Contact</MenuLink>
                </MenuItem>
                <MenuBtnWrap>
                    <MenuBtnLink to="/stream">Stream</MenuBtnLink>
                </MenuBtnWrap>
            </MenuWrapper>
        </MenuContainer>
    )
}
