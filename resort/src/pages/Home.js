import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Events from "../components/Events";
import Amenities from "../components/Amenities"
const home = () => {
    return (
        <>
            <Hero>
            <h1 contenteditable spellcheck="false">Copper Blues Motel</h1>
            </Hero>
        
            <Events/>
            <Amenities/>
            <FeaturedRooms />
        </>
    );
};

export default home;