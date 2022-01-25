import { StyledNav, StyledLi, StyledUl } from "../Utils/Styled Components/StyledNav";
import { StyledLink } from "../Utils/Styled Components/StyledLink";

const Navigation = () => {
    return (
        <> 
        <StyledNav>
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
        </StyledNav>
        </>
    )
}

export default Navigation;