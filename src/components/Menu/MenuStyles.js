import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-scroll';

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

export const MenuWrapper = styled.div`
    color: #ffffff;
`

export const SideMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px)
        grid-template-rows: repeat(6, 60px);
`

export const MenuLink= styled(LinkS)`
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
        color: red;
        transition: 0.2s ease-in-out;
    }
`

export const MenuBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export  const MenuBtnLink = styled(LinkR)`
    border-radius: 80px;
    background: red;
    white-space: nowrap;
    padding: 26px 34px;
    color: white;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: black;
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