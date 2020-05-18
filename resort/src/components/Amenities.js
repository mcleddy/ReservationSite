import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import pool from "../images/pool.jpg"
import roompic from "../images/hotelroom.jpg";
import barPic from "../images/bar.jpg";
import lobbyPic from "../images/lobby.jpg";
import bathroomPic from "../images/bathroom.jpg";
export default class Amenities extends Component {
    render() {
        return (
            <section className="amenities">

                <div className="amSec1">
                    <div className="font-effect-neon" id="amenitiesHeader">Amenities</div>
                    <div className="list">
                        <h2>Salt Water Pool & Games</h2>
                        <br></br>
                        <h2>Complimentary Breakfast</h2>
                        <br></br>
                        <h2>24-Hour Front Desk</h2>
                        <br></br>
                        <h2>Local Beer & Wine Tastings</h2>
                        <br></br>
                        <h2>Lobby Space To Work From</h2>
                    </div>
                </div>
                <div className="amSec">
                             <div className="font-effect-neon" id="roomAmenitiesHeader">Room Amenities</div>   
                             <div className="list">
                        <h3>Memory Foam Mattresses</h3>
                        <br></br>
                        <h3>60" TVs</h3>
                        <br></br>
                          <h3>Complimentary Local Guidebook</h3> 
                        <br></br>
                        <h3>Powerful A/C & Heating</h3>
                        <br></br>
                     
                    </div>
                </div>
                <div className="cards">

                        <h2 className="listitem">Free Room-Front Parking</h2>
                        <h2 className="listitemRight">Fitness Center</h2>
                        <h2 className="listitemRight">Foosball, Ping Pong & Cornhole</h2>
                    <div className="card1">
                        <img className="poolPic" src={pool} />
                    </div>
                    <div className="card2">
                        <img className="roompic" src={roompic} />
                    </div>
                    <div className="card3">
                        <img className="barPic" src={barPic} />
                    </div>
                    <div className="card4">
                        <img className="lobbyPic" src={lobbyPic} />
                    </div>
                    <div className="card5">
                        <img className="bathroomPic" src={bathroomPic} />
                    </div>
                </div>
            </section>
        );
    }
}