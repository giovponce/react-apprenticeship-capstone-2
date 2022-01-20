import { useEffect, useState} from 'react';
import axios from 'axios';

const useAxiosFetch = (url, search) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const getPhoto = async () => {
        try {
            const response = await axios.get(url);
            const data = await response.data;
            setResult(data);
         } catch (error) {
            console.error(error);
        }
    };

    getPhoto();

    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return {  result }
}

export default useAxiosFetch;