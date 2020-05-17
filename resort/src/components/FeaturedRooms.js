import React, {Component} from "react";
import Title from "./Title";
import {RoomContext} from "../context";
import Room from "./Room";
import Loading from "./Loading";
import eye from "../images/gif/eye.gif";
import arrow from "../images/arrow.jpg";
export default class FeaturedRooms extends Component {
    render() {
       
        return (
            <section className="featured-rooms">
                <h2 >FEATURED ROOMS</h2>
            </section>
        );
    }
}