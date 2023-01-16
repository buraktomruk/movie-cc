import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const DetailPage = (props) => {
    const [list, setList] = useState([]);
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {


    }, [])

    const goToHome = () => {
        navigate('/');
      }

    return (
        <>
            <h1>Detail Page</h1>
            {state.data && 
            <ul>
                <li><span style={{fontWeight: 'bold'}}>Original Title: </span>{state.data.original_title}</li>
                <li><span style={{fontWeight: 'bold'}}>Original Language: </span>{state.data.original_language}</li>
                <li><span style={{fontWeight: 'bold'}}>Description: </span>{state.data.overview}</li>
                <li><span style={{fontWeight: 'bold'}}>Popularity: </span>{state.data.popularity}</li>
                <li><span style={{fontWeight: 'bold'}}>Release date: </span>{state.data.release_date}</li>
                <li><span style={{fontWeight: 'bold'}}>Vote Average: </span>{state.data.vote_average}</li>
                <li><span style={{fontWeight: 'bold'}}>Vote Count: </span>{state.data.vote_count}</li>
            </ul>
            }
            <Button onClick={goToHome}>Go Back</Button>

        </>

    );
}


export default DetailPage;