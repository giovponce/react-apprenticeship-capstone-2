import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    font-size: 1.2rem;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #00bcd4;
    }
`;