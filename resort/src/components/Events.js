import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import clap from "../images/gif/clapping.gif"
export default class Events extends Component {
    render() {
        return (
            <div className="events">
                <div className="slantedDivA"> 
                    <div className="eventCards">
                        <div className="cards1">
                            <div className="topCard">
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content. Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>            
                            <h2 className="font-effect-neon" id="eventsHeader">Events</h2>

                            <div className="topCard">
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>                           
                             <img className="events-gif" src={clap}/>   
                        </div>
                        
                        <div className="cards2">
                            <div className="bottomCard">
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="bottomCard">
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                            </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}