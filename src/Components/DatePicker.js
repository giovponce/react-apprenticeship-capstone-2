import React, { useContext } from 'react';
import { StyledInput } from '../Utils/Styled Components/StyledInput';
import { DateContext } from '../Context/DateContext';

export default function DatePicker() {
  
    const { day, setDate } = useContext(DateContext);
  
    function handleChange (e) {
        e.preventDefault();
        setDate(e.target.value);
    }

    return <div>
        <StyledInput type="date" value={day} id="date" onChange={handleChange} />
    </div>;
}
