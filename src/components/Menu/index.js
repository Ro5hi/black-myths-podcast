import React from 'react'

export default function Menu() {
    return (
        <MenuContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <MenuWrapper>
                <MenuOptions>
                    <MenuLink to ="about">About</MenuLink>
                </MenuOptions>
                <MenuOptions>
                    <MenuLink to ="about">About</MenuLink>
                </MenuOptions>
                <MenuOptions>
                    <MenuLink to ="about">About</MenuLink>
                </MenuOptions>
                <MenuOptions>
                    <MenuLink to ="about">About</MenuLink>
                </MenuOptions>
            </MenuWrapper>
        </MenuContainer>
    )
}
