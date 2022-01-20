import React from "react";
import useAxiosFetch from "../Utils/Hooks/useAxiosFetch";
import { StyledImg, StyledImgContainer, StyledImgText } from "../Utils/Styled Components/StyledImg";
import { StyledH1, StyledTitle, StyledDescription } from "../Utils/Styled Components/StyledText";

export default function PhotoOfTheDay() {

    const data = useAxiosFetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
    const imgUrl = data.result.hdurl;


    return (
        <div>
        <StyledH1>Photo of the day</StyledH1>
        <StyledImgContainer>
            <StyledImg src={imgUrl} alt="PhotoOfTheDay"></StyledImg>
            <StyledImgText>{data.result.copyright} ®</StyledImgText>
        </StyledImgContainer>
        <StyledTitle>{data.result.title}</StyledTitle>
        <StyledDescription>{data.result.explanation}</StyledDescription>
        </div>
    );
}