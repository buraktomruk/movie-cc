import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Carousel from "../components/Carousel";
import Divider from '@mui/material/Divider';


const HomePage = () => {
    const [list, setList] = useState([]);
    const [topRatedList, setTopRatedList] = useState([]);
    const [upcomingList, setUpcomingList] = useState([]);


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {

                setList(res.data.results);
            });

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {

                setTopRatedList(res.data.results);
            });

            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {

                setUpcomingList(res.data.results);
            });

    }, [])

    const convertList = (list) => {
        return list.length > 0 ?
        list.map((item) => ({
            label: item.original_title,
            description: item.overview
        })) : [];
    };

    const listMap = convertList(list);

    const topRatedListMap = convertList(topRatedList);

    const upcomingListMap = convertList(upcomingList);




    return (
        <>
            <h1>Home Page</h1>
            {listMap.length > 0 &&
                <>
                    <h3>Trending Movies</h3>
                    <Carousel steps={listMap} list={list} />
                </>
            }
            {topRatedList.length > 0 &&
                <>
                    <h3>Top Rated Movies</h3>
                    <Carousel steps={topRatedListMap} list={topRatedList} />
                </>
            }
            {upcomingList.length > 0 &&
                <>
                    <h3>Upcoming Movies</h3>
                    <Carousel steps={upcomingListMap} list={upcomingList} />
                </>
            }


        </>

    );
}


export default HomePage;