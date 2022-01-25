import { StyledMobileNav, StyledLi } from "../Utils/Styled Components/StyledNav";
import { StyledInputForHamburguer, StyledUlForHamburguer, StyledSpanForHamburguer, StyledHamburguerContainer, StyledLinkForHamburguer } from "../Utils/Styled Components/StyledHamburguer";

const MobileNavigation = () => {
    return (
        <>
        <StyledMobileNav>
            <StyledHamburguerContainer>
                <StyledInputForHamburguer type="checkbox"></StyledInputForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledSpanForHamburguer></StyledSpanForHamburguer>
                <StyledUlForHamburguer>
                    <StyledLi>
                        <StyledLinkForHamburguer to="/">Pic of the day</StyledLinkForHamburguer>
                    </StyledLi>
                    <StyledLi>
                        <StyledLinkForHamburguer to="/random">Random</StyledLinkForHamburguer>
                    </StyledLi>
                    <StyledLi>
                        <StyledLinkForHamburguer to="/custom">Custom</StyledLinkForHamburguer>
                    </StyledLi>
                </StyledUlForHamburguer>
            </StyledHamburguerContainer>
        </StyledMobileNav>
        </>
        
    )
}

export default MobileNavigation;