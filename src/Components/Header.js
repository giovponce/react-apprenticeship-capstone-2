import React from "react";
import { StyledUl, StyledLi } from "../Utils/Styled Components/StyledNav";
import { StyledLink } from "../Utils/Styled Components/StyledLink";

export default function Header() {
    return (
        <div>
            
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">Pic of the day</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/random">Random</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/custom">Custom</StyledLink>
                </StyledLi>
            </StyledUl>
        </div>
    );
}