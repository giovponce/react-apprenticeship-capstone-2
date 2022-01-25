import React, { useEffect, useReducer} from 'react';
import axios from 'axios';
import {StyledImg, StyledImgContainer, StyledImgText} from '../Utils/Styled Components/StyledImg';
import {StyledH1, StyledTitle, StyledDescription} from '../Utils/Styled Components/StyledText';
import {StyledIFrame} from '../Utils/Styled Components/StyledIFrame';

export default function Picture({ date, url, errorMsg }) {

    const initialState = {
        data: null,
        loading: false,
        error: false,
        video: false
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch(action.type){
           case 'FETCH_INIT':
                return {
                    ...state,
                    loading: true,
                    error: false,
                    video: false
                } 
            case 'FETCH_SUCCESS':
                return {
                    ...state,
                    loading: false,
                    data: action.payload
                }
            case 'FETCH_FAILURE':
                return {
                    ...state,
                    loading: false,
                    error: true
                }
            case 'SET_VIDEO':
                return {
                    ...state,
                    video: true
                }
            default:

        }
    }

    useEffect(() => {
        let isMounted = true;

        const getPhoto = async () => {
            dispatch({type: 'FETCH_INIT'});
            try {
                const response = await axios.get(url);
                if (isMounted){
                    if(response.data.media_type === "video"){
                        dispatch({type: 'SET_VIDEO'});
                        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
                    }else{
                        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
                    }
                }
            } catch (error) {
                dispatch({type: 'FETCH_FAILURE'});
            }
        };

        getPhoto();

        return () => { isMounted = false };

    }, [date])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <>  
            {state.loading ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : state.error ? (
                <div>
                    <p>An error ocurred while retrieving data, please try again.</p>
                </div>
            ) : errorMsg ? (
                <div>
                    <p>{errorMsg}</p>
                </div>
            ) : (
            <div>
                {state.video ? (
                    <>
                        <StyledH1 data-testid="title">Video of the day: {state?.data?.date}</StyledH1>
                        <StyledImgContainer>
                            <StyledIFrame data-testid="img" title={state?.data.title} src={state?.data.url}></StyledIFrame>
                        </StyledImgContainer>
                    </>
                ):(
                    <>
                        <StyledH1 data-testid="title">Photo of the day: {state?.data?.date}</StyledH1>
                        <StyledImgContainer>
                            <StyledImg data-testid="img" src={state.data?.url}></StyledImg>
                            <StyledImgText>{state?.data?.copyright} ®</StyledImgText>
                        </StyledImgContainer>
                    </>
                )}
                
                <StyledTitle>{state?.data?.title}</StyledTitle>
                <StyledDescription data-testid="description">{state?.data?.explanation}</StyledDescription>
            </div>
        
        )}
        
        </>
    );

}
