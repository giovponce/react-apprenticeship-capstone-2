import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledInput } from "../Utils/Styled Components/StyledInput";
import { StyledTitle, StyledDescription } from "../Utils/Styled Components/StyledText";
import { StyledImgContainer, StyledImg, StyledImgText } from "../Utils/Styled Components/StyledImg";
import { StyledIFrame } from "../Utils/Styled Components/StyledIFrame";

export default function CustomDatePhoto() {

    let initDate = {
        target: {
            value: "2022-01-19"
        }
    }

    const [date, setDate] = useState(initDate);
    const [data, setData] = useState(null);
    const [video, setVideo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=`;

    useEffect(() => {
        const getPhoto = async () => {
        setLoading(true);
        setError(false);
        setVideo(false);
        const newUrl = url + date.target.value;
        try {
            const response = await axios.get(newUrl);
            console.log(response.data);
            if(response.data.media_type === "video"){
                setVideo(true);
                setData(response.data);
            }else{
                setData(response.data);
            }
         } catch (error) {
            setError(true);
            // setErrorMessage(error.message);
        }
        setLoading(false);
    };

    getPhoto();

    }, [date])// eslint-disable-line react-hooks/exhaustive-deps

    const preSetDate = (e) => {
        console.log(e.target.value);
        setDate(e);
        let today = new Date().toISOString().substring(0, 10);
        if(e.target.value > today) {
            setError(true);
            setErrorMessage('The selected date is in the future, please select today or a date in the past.');
        }
    }

    if(!data) {
        return(
            <div>
                <StyledInput type="date" id="date" value={date.target.value} onChange={preSetDate}></StyledInput>
            </div>
        )
    }

    if(loading) {
        return(
            <div>
                <p>loading...</p>
            </div>
        )
    }

    if(error) {
        return(
            <div>
                 <StyledInput type="date" id="date" value={date.target.value} selected={date} onChange={preSetDate}></StyledInput>
                <p>{errorMessage}</p>
            </div>
        )
    }

    return (
        <>
        {video ? (
            <div>
                <StyledInput type="date" id="date" value={date.target.value} selected={date} onChange={preSetDate} />
                <br/><br/>
                <StyledImgContainer>
                    <StyledIFrame title={data.title} src={data.url}></StyledIFrame>
                </StyledImgContainer>
                <StyledTitle>{data?.title}</StyledTitle>
                <StyledDescription>{data?.explanation}</StyledDescription>
            </div>
        ) : (
            <div>
                <StyledInput type="date" id="date" value={date.target.value} selected={date} onChange={preSetDate} />
                <br/><br/>
                <StyledImgContainer>
                    <StyledImg src={data?.url} alt="CustomDatePhoto"></StyledImg>
                    <StyledImgText>{data?.copyright} ®</StyledImgText>
                </StyledImgContainer>
                <StyledTitle>{data?.title}</StyledTitle>
                <StyledDescription>{data?.explanation}</StyledDescription>
            </div>
        )}
        
        </>
    );
}