import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-in-out;
    background: ${({ primary })} => (primary ? '#FFFFFF' : '#DC143C')};
    padding: ${({ capped })} => (capped ? '14px 28px' : '12px 24px')};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary })} => (primary ? '#FFFFFF' : '#DC143C')};
    
    }
`