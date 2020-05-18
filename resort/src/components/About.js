import React, { Component } from 'react';
import heart from "../images/gif/heart.gif";
export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h2 className="font-effect-neon" id="aboutHeader1">Welcome</h2>     
                <h2 className="font-effect-neon" id="aboutHeader2">Our Story</h2>
                <div className="aboutSection1"></div> 
                <img className="about-gif" src={heart} />
                <div className="aboutSection2"></div>

            </div>
        );
    }
}