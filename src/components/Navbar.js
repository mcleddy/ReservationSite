import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eye from "../images/gif/eye.gif";
export default class Navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };
    render() {
        return (
            <nav className="navbar">
                <div className="navbarTop">
                <img className="navGif" src={eye} alt="eye" />

                    <h1 className="HotelName"> Copper Blues Motel</h1>
                    <h4 className="font-effect-neon" id="phoneNumber">Tel: 999 000 0099</h4>
                </div>

                <div className="nav-center">
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                        <li>
                            <Link to="/#hero" className="font-effect-neon">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href="/#about" className="font-effect-neon">About</a>
                        </li>
                        <li>
                            <a href="/#amenities" className="font-effect-neon">Amenities</a>
                        </li>
                        <li>
                            <a href="/#events" className="font-effect-neon">Events</a>
                        </li>
                        <li>
                            <a href="/#featuredRooms" className="font-effect-neon">Featured Rooms</a>
                        </li>
                        <li>
                            <Link to="/rooms" className="font-effect-neon">Find Room</Link>
                        </li>

                    </ul>
                </div>
            </nav >
        );
    }
}