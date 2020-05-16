import React, {Component} from "react";
import Title from "./Title";
import {RoomContext} from "../context";
import Room from "./Room";
import Loading from "./Loading";
import eye from "../images/gif/eye.gif";
import arrow from "../images/arrow.jpg";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms= rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });
        return (
            <section className="featured-rooms">
   <img src={eye} id="eye1"></img>
   <img src={arrow} id="Arrow2"></img>
           <h2 className="font-effect-neon" id="findYourRoom">FIND YOUR ROOM</h2>   
               <img src={arrow} id="Arrow1"></img>
      <img src={eye} id="eye2"></img>
        
               <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
                <h2 id="fr" className="font-effect-neon">FEATURED ROOMS</h2>
            </section>
        );
    }
}