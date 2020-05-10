import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
import water from "../images/gif/maninwater.gif"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    };
    render() {
        return (
            <section className="services">

                <div class="estrellas inverso font-effect-neon">
                    <span >A</span>
                    <span >M</span>
                    <span >E</span>
                    <span>N</span>
                    <span>I</span>
                    <span>T</span>
                    <span>I</span>
                    <span>E</span>
                    <span>S</span>
                </div>
                <div >
                    <img className="amenitiesGif" src={water}></img>
                </div>
                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>

            </section>
        );
    }
}