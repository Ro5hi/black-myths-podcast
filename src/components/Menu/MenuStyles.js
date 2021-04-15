import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';


export const MenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`


export const MenuWrapper = styled.div``

export const MenuItem = styled.div``

export const MenuLink = styled.div``

export const MenuBtnWrap = styled.div`
    color: #ffffff;
`

export const MenuBtnLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #ffffff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`