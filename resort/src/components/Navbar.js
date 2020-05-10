import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight, FaConciergeBell } from 'react-icons/fa';
import heart from "../images/gif/heart.gif";
import water from "../images/gif/maninwater.gif";
import eye from "../images/gif/eye.gif";
import clap from "../images/gif/clapping.gif"
export default class Navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };
    render() {
        return (
            <nav className="navebar">
                <div className="nav-center">
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                      <img className="heart" src={heart}/>   
                      <li>      
                            <Link to="/" class="font-effect-neon">
                               Home
                            </Link>
                        </li>
                        <img className="heart" src={eye}/>   
                        <li>
                            <Link to="/rooms" class="font-effect-neon">Rooms</Link>
                        </li>
                        <img className="heart" src={water}/>   
                        <li>
                            <Link href="/.services" class="font-effect-neon">Amenities</Link>
                        </li>
                        <img className="heart" src={clap}/>   
                        <li>
                            <Link to="/rooms" class="font-effect-neon">Events</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}