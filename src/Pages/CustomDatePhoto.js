import React, { useState } from "react";
import { StyledInput } from "../Utils/Styled Components/StyledInput";
import Picture from "../Components/Picture";


export default function CustomDatePhoto() {

    const initDate = "2022-01-19";
    
    const [date, setDate] = useState(initDate);
    const [errorMsg, setErrorMessage] = useState("");

    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`;

    const preSetDate = (e) => {
        let today = new Date().toISOString().substring(0, 10);
        if(e.target.value > today) {
            setErrorMessage('The selected date is in the future, please select today or a date in the past.');
        }else{
            setDate(e.target.value);
        }
    }

    return (
        <>
            <div>
                <StyledInput type="date" id="date" data-testid="date-input" value={date} selected={date} onChange={preSetDate} />
                <br/><br/>
                <Picture date={date} url={url} errorMsg={errorMsg}/>
            </div>
        </>
    );
}