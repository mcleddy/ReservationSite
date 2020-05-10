import React, { Component } from 'react';
import gif from "../images/gif/maninwater.gif";
export default class Events extends Component {
    render() {
        return (
            <section className="amenities">
                <div className="amenitiesChunk">
                    <h2 className="font-effect-neon" id="amenitiesHeader">AMENITIES</h2>
                    <img className="amenitiesGif" src={gif}></img>
                    <div id="rightcolumn">
                        <h2 class="font-effect-neon">ROOM AMENITIES</h2>
                        <ul>
                            <li>Green Tea Memory Foam Mattress</li>
                            <li>Retro Fridge</li>
                            <li>Assortment of Pillows, Firm &amp; Fluffy</li>
                            <li>All Natural Hair &amp; Body Products</li>
                            <li>Blackout Curtains</li>
                            <li>Ice cold A/C &amp; quick heat</li>
                            <li>In-Room Hair Dryer</li>
                            <li>McCoy Guidebook</li>
                        </ul>
                        <div class="room-emenit-img">
                        </div>
                    </div>   <div id="leftcolumn">
                        <h3 class="font-effect-neon">HOTEL AMENITIES</h3>
                        <ul>
                            <li>Salt Water Pool &amp; Games</li>
                            <li>Property-wide WiFi</li>
                            <li>Firepit &amp; Water Feature</li>
                            <li>Foosball, Ping Pong, Cornhole &amp; Pinball</li>
                            <li>24-hour Front Desk</li><li>Local Beer &amp; Wine Tastings</li>
                            <li>Complimentary Breakfast</li>
                            <li>Free Room-front Parking</li><li>Lobby Space to Work From</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}