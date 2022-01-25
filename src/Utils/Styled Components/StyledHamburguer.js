import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkForHamburguer = styled(Link)`
    text-decoration: none;
`;

export const StyledUlForHamburguer = styled.ul`
    position: absolute;
    width: 50%;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #484848;
    list-style-type: none;   
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    flex-flow: column;
    
    &li{
      padding: 10px 0;
      font-size: 22px;
    }
`;

export const StyledSpanForHamburguer = styled.span`
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: white;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
`;

export const StyledInputForHamburguer = styled.input`
    display: block;
   width: 40px;
   height: 32px;
   position: absolute;
   top: -7px;
   left: -5px;
   cursor: pointer;
   opacity: 0;
   z-index: 2; 
   -webkit-touch-callout: none;
`;

export const StyledHamburguerContainer = styled.div`
    display: block;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 2%;
    position: relative;
    // top: 50px;
    // left: 50px;
    // z-index: 1;
    // -webkit-user-select: none;
    // user-select: none;
    background-color: #333;


    ${StyledLinkForHamburguer} {
        text-decoration: none;
        color: white;
        font-family: sans-serif;
        font-size: 1.2rem;
        text-transform: capitalize;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: #00bcd4;
        }
    }

    ${StyledLinkForHamburguer}:hover{
        color: #00bcd4;
    }

    ${StyledSpanForHamburguer}:first-child{
      transform-origin: 0% 0%;
    }

    ${StyledSpanForHamburguer}:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    ${StyledInputForHamburguer}:checked ~ ${StyledSpanForHamburguer} {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }

    ${StyledInputForHamburguer}:checked ~ ${StyledSpanForHamburguer}:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    ${StyledInputForHamburguer}:checked ~ ${StyledSpanForHamburguer}:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -1px);
    }

    ${StyledInputForHamburguer}:checked ~ ul {
        transform: none;
    }
`;
