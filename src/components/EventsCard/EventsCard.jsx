import React from "react";
import registerImg from "../../images/registerImg.png";

// reactstrap
import { Card } from 'react-bootstrap'

// components import
import './eventcard.css'

const EventsCard = ({ card }) => {
    const { card_tags, cover_picture, start_time, end_time, event_start_time, event_end_time, fees, id, name, registered_users, registration_end_time, registration_status, seats_filled, short_desc, venue } = card;

    // formatted date and time
    const e_start_time = new Date(start_time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })

    console.log(new Date(end_time))

    return (
        <>

            <Card style={{ width: '25rem', height: 'fit-content' }} className='card'>
                <Card.Img variant="top" src={cover_picture} className='cardImg' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='card-short-desc'>
                        {short_desc}
                        {card_tags && !card_tags.length == 0 && (
                            <div className='sub__tags'>
                                {card_tags && card_tags.map((tag, i) => (
                                    <div className='sub__tags__detail' key={i}>{tag}</div>
                                ))}
                            </div>
                        )}
                    </Card.Text>
                    <hr />
                    <Card.Title className='sub__details'>
                        <div className='sub__details__info'>
                            <p>Starts On</p>
                            <span>{e_start_time}</span>
                        </div>
                        <div className='sub__details__info'>
                            <p>Entry Fee</p>
                            <span>Free</span>
                        </div>
                        <div className='sub__details__info'>
                            <p>Venue</p>
                            <span>{venue}</span>
                        </div>
                    </Card.Title>
                    <hr />
                    <div className='card__footer'>
                        <p className='bottom__text'>Hurry up! <b>{seats_filled == 0 ? 'Be the first to register' : `${seats_filled} people already registered.`} </b></p>
                        <img src={registerImg} alt='register image' />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default EventsCard;