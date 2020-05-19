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
                <img className="navGif" src={eye} />

                    <h1 className="HotelName"> Copper Blues Motel</h1>
                    <h4 className="font-effect-neon" id="phoneNumber">Tel: 999 000 0099</h4>
                </div>

                <div className="nav-center">
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                        <li>
                            <Link to="/" class="font-effect-neon">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/rooms" class="font-effect-neon">About</Link>
                        </li>
                        <li>
                            <Link href="/.services" class="font-effect-neon">Amenities</Link>
                        </li>
                        <li>
                            <Link to="/rooms" class="font-effect-neon">Events</Link>
                        </li>
                        <li>
                            <Link to="/rooms" class="font-effect-neon">Featured Rooms</Link>
                        </li>
                        <li>
                            <Link to="/rooms" class="font-effect-neon">Find Room</Link>
                        </li>

                    </ul>
                </div>
            </nav >
        );
    }
}