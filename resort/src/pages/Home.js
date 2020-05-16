import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Events from "../components/Events";
import Amenities from "../components/Amenities"
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2"
const home = () => {
    return (
        <>
            <Hero>
            <h1 contenteditable spellcheck="false">Copper Blues Motel</h1>
            </Hero>     
            <Events/>
            <Amenities/>
            <FeaturedRooms />
            <Footer/>
            <Footer2/>
        </>
    );
};

export default home;