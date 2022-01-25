import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledImg, StyledImgContainer, StyledImgText } from "../Utils/Styled Components/StyledImg";
import { StyledH1, StyledTitle, StyledDescription } from "../Utils/Styled Components/StyledText";
import { StyledIFrame } from "../Utils/Styled Components/StyledIFrame";


export default function PhotoOfTheDay() {
    
    const [data, setData] = useState(null);
    const [video, setVideo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

    useEffect(() => {
        let isMounted = true;
        const getPhoto = async () => {
        setLoading(true);
        setError(false);
        setVideo(false);
        try {
            const response = await axios.get(url);
            if (isMounted){
                if(response.data.media_type === "video"){
                    setVideo(true);
                    setData(response.data);
                }else{
                    setData(response.data);
                }
            }
         } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    getPhoto();

    return () => { isMounted = false };

    }, [])// eslint-disable-line react-hooks/exhaustive-deps



    return (
        <>
        {loading ? (
            <div>
                <p>Loading...</p>
            </div>
        ) : error ? (
            <div>
                <p>An error ocurred while retrieving data, please try again.</p>
            </div>
        ) : video ? (
            <div>
                <StyledH1 data-testid="mainTitle">Video of the day</StyledH1>
                <StyledImgContainer>
                    <StyledIFrame data-testid="img" title={data.title} src={data.url}></StyledIFrame>
                </StyledImgContainer>
                <StyledTitle data-testid="title">{data?.title}</StyledTitle>
                <StyledDescription data-testid="description">{data?.explanation}</StyledDescription>
            </div>
        ) : (
            <div>
                <StyledH1 data-testid="mainTitle">Picture of the day</StyledH1>
                <StyledImgContainer>
                    <StyledImg data-testid="img" src={data?.url}></StyledImg>
                    <StyledImgText>{data?.copyright} ®</StyledImgText>
                </StyledImgContainer>
                <StyledTitle data-testid="title">{data?.title}</StyledTitle>
                <StyledDescription data-testid="description">{data?.explanation}</StyledDescription>
            </div>
        )}
        
        </>
    );
}