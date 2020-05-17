import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Events from "../components/Events.js";
import Amenities from "../components/Amenities";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import About from "../components/About";
const home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Amenities />
            <Events />
            <FeaturedRooms />
            <Footer />
            <Footer2 />
        </>
    );
};

export default home;