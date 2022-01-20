import React from "react";
import useAxiosFetch from "../Utils/Hooks/useAxiosFetch";
import { StyledImg, StyledImgContainer, StyledImgText } from "../Utils/Styled Components/StyledImg";
import { StyledH1, StyledTitle, StyledDescription } from "../Utils/Styled Components/StyledText";

export default function RandomPhoto() {

    function getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
      
    let randomDate = getRandomDate(new Date(2012, 0, 1), new Date());
    let dateForApi = randomDate.toISOString().split('T')[0];

    const data = useAxiosFetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${dateForApi}`);
    const imgUrl = data.result.hdurl;


    return (
        <div>
            <StyledH1>Random</StyledH1>
            <StyledH1>Photo of the day: {dateForApi}</StyledH1>
            <StyledImgContainer>
                <StyledImg src={imgUrl} alt="RandomPhoto"></StyledImg>
                <StyledImgText>{data.result.copyright} ®</StyledImgText>
            </StyledImgContainer>
            <StyledTitle>{data.result.title}</StyledTitle>
            <StyledDescription>{data.result.explanation}</StyledDescription>
        </div>
    );
}