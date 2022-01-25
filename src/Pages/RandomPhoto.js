import React from "react";
import { StyledH1 } from "../Utils/Styled Components/StyledText";
import Picture from "../Components/Picture";

export default function RandomPhoto() {

    function getRandomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
      
    const randomDate = getRandomDate(new Date(2012, 0, 1), new Date());
    const date = randomDate.toISOString().substring(0, 10);

    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;

    return (
        <>  
            <div>
                <StyledH1>Random</StyledH1>
                <Picture date={date} url={url}/>
            </div>
        
        </>
    );
}