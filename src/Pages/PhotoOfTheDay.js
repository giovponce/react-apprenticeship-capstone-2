import React from "react";
import Picture from "../Components/Picture";

export default function PhotoOfTheDay() {
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;

    return (
        <>
            <Picture url={url}/>
        </>
    );
}