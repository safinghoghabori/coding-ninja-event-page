import React from "react";
import registerImg from "../../images/registerImg.png";

// reactstrap
import { Card } from 'react-bootstrap'
import { Button } from "react-bootstrap";

// components import
import eventImg1 from '../../images/eventImg1.jpg'
import eventImg2 from '../../images/eventImg2.jpg'
import eventImg3 from '../../images/eventImg3.jpg'
import './eventcard.css'

const EventsCard = () => {
    return (

        <Card style={{ width: '25rem', minHeight: '30rem' }} className='card'>
            <Card.Img variant="top" src={eventImg3} />
            <Card.Body>
                <Card.Title>Roadmap to Crack Placements & Internships | Bundelkhand Institute Of Engineering and Technology</Card.Title>
                <Card.Text>
                    Give your career a head-start and know how you can get closer to your dream job by refining your coding skills.
                    <div className='sub__tags'>
                        <div className='sub__tags__detail'>Campus Event</div>
                        <div className='sub__tags__detail'>Career Guidance</div>
                        <div className='sub__tags__detail'>Interview Preparation</div>
                    </div>
                </Card.Text>
                <hr />
                <Card.Title className='sub__details'>
                    <div className='sub__details__info'>
                        <p>Starts On</p>
                        <span>02:00 PM, 14 JUN 2021</span>
                    </div>
                    <div className='sub__details__info'>
                        <p>Entry Fee</p>
                        <span>Free</span>
                    </div>
                    <div className='sub__details__info'>
                        <p>Venue</p>
                        <span>Online</span>
                    </div>
                </Card.Title>
                <hr />
                <div className='card__footer'>
                    <p className='bottom__text'>Hurry up! <b>45 people</b> already registered.</p>
                    <img src={registerImg} alt='register image' />
                </div>
            </Card.Body>
        </Card>
    )
}

export default EventsCard;