import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledImg, StyledImgContainer, StyledImgText } from "../Utils/Styled Components/StyledImg";
import { StyledH1, StyledTitle, StyledDescription } from "../Utils/Styled Components/StyledText";
import { StyledIFrame } from "../Utils/Styled Components/StyledIFrame";


export default function RandomPhoto() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [video, setVideo] = useState(false);


    function getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
      
    const randomDate = getRandomDate(new Date(2012, 0, 1), new Date());
    const dateForApi = randomDate.toISOString().substring(0, 10);

    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=`;

    useEffect(() => {
        let isMounted = true;

        const getPhoto = async () => {
        setLoading(true);
        setError(false);
        const newUrl = url + dateForApi;
        setVideo(false);
        try {
            const response = await axios.get(newUrl);
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
                <StyledH1>Random</StyledH1>
                <StyledH1>Video of the day: {data?.date}</StyledH1>
                <StyledImgContainer>
                    <StyledIFrame data-testid="img" title={data.title} src={data.url}></StyledIFrame>
                </StyledImgContainer>
                <StyledTitle>{data?.title}</StyledTitle>
                <StyledDescription>{data?.explanation}</StyledDescription>
            </div>
        ) : (
            <div>
                <StyledH1>Random</StyledH1>
                <StyledH1>Photo of the day: {data?.date}</StyledH1>
                <StyledImgContainer>
                    <StyledImg data-testid="img" src={data?.url}></StyledImg>
                    <StyledImgText>{data?.copyright} ®</StyledImgText>
                </StyledImgContainer>
                <StyledTitle>{data?.title}</StyledTitle>
                <StyledDescription>{data?.explanation}</StyledDescription>
            </div>
        )}
        
        </>
    );
}