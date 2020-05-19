import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import clap from "../images/gif/clapping.gif";
import event1 from "../images/event1.jpg";
import event2 from "../images/event2.jpg";
import event3 from "../images/event3.jpg";
import event4 from "../images/event4.jpg";
export default class Events extends Component {
    render() {
        return (
            <div className="events">
                <div className="slantedDivA">
                    <div className="eventCards">

                        <div className="Card1">
                            <Card>
                                <Card.Img className="eventImg" variant="top" src={event1} />
                                <Card.Body>
                                    <Card.Title className="eventTitle">Soccer Mommy</Card.Title>
                                    <Card.Title className="eventTime">Friday September 12, 2020  @7pm</Card.Title>
                                    <h4 className="eventDescription">Some quick example text to build on the card title and make up the bulk </h4>

                                </Card.Body>
                            </Card>     <Button className="getTickets" variant="primary">Get Tickets</Button>
                        </div>
                        <h2 className="font-effect-neon" id="eventsHeader">Upcoming Events</h2>

                        <div className="Card2">
                            <Card>
                                <Card.Img className="eventImg" variant="top" src={event2} />
                                <Card.Body>
                                    <Card.Title className="eventTitle">Mitski</Card.Title>
                                    <Card.Title className="eventTime">Friday October 2, 2020  @8pm</Card.Title>
                                    <h4 className="eventDescription">Some quick example text to build on the card title and make up the bulk </h4>
                                    <Button className="getTickets" variant="primary">Get Tickets</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <img className="events-gif" src={clap} />

                        <div className="Card3">
                            <Card>
                                <Card.Img className="eventImg" variant="top" src={event3} />
                                <Card.Body>
                                    <Card.Title className="eventTitle">Alabama Shakes</Card.Title>
                                    <Card.Title className="eventTime">Saturday October 25, 2020  @7:30pm</Card.Title>
                                    <h4 className="eventDescription">Lorem ipsum dolor sit amet, consectetur adiSome quick example text to build on the card title and make up the bulk </h4>
                                    <Button className="getTickets" variant="primary">Get Tickets</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="Card4">
                            <Card>
                                <Card.Img className="eventImg" variant="top" src={event4} />
                                <Card.Body>
                                    <Card.Title className="eventTitle">Santigold</Card.Title>
                                    <Card.Title className="eventTime">Friday November 4th, 2020  @8pm</Card.Title>
                                    <h4 className="eventDescription">Lorem ipsum dolor sit amet, consectetur adiSome quick example text to build on the card title and make up the bulk </h4>
                                    <Button className="getTickets" variant="primary">Get Tickets</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}