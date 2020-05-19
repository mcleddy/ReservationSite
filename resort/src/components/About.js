import React, { Component } from 'react';
import heart from "../images/gif/heart.gif";
export default class About extends Component {
    render() {
        return (
            <div className="about">
                <h2 className="font-effect-neon" id="aboutHeader1">Welcome</h2>     
                <h2 className="font-effect-neon" id="aboutHeader2">Our Story</h2>
                <div className="aboutSection1">
                    <h2 className="aboutTextBold">Lorem ipsum dolor</h2>
                    <h3 className="aboutText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>
                    </div> 
                <img className="about-gif" src={heart} />
                <div className="aboutSection2">
                <h2 className="aboutTextBold2">Lorem ipsum dolor</h2>
                    <h3 className="aboutText2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>
                
                </div>

            </div>
        );
    }
}