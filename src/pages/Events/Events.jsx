import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faRoute } from '@fortawesome/free-solid-svg-icons'
import { faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons'

// components import
import './events.css'
import Card from "../../components/EventsCard/EventsCard";
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';


const Events = () => {
    const [eventTags, setEventTags] = useState('');

    const [mainCategory, setMainCategory] = useState('ALL_EVENTS');
    const [subCategory, setSubCategory] = useState('Upcoming');
    const [tags, setTags] = useState([]);

    const [cards, setCards] = useState([]);


    useEffect(() => {
        axios.get('https://api.codingninjas.com/api/v3/event_tags')
            .then((res) => {
                setEventTags(res.data.data.tags)
            }).catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        axios.get(`https://api.codingninjas.com/api/v3/events?event_category=${mainCategory}&event_sub_category=${subCategory}&tag_list=${tags}&offset=0`)
            .then((res) => setCards(res.data.data.events))
            .catch((error) => console.log(error))
    }, [mainCategory, subCategory])
    console.log('cards...', cards)

    const onMainCategory = (e) => {
        setMainCategory(e.target.value)
        console.log(e.target.value)
    }

    const onSubCategory = (e) => {
        setSubCategory(e.target.value);
        console.log(e.target.value)
    }

    let arr = [];
    const onTags = (e) => {
        arr.push(e.target.value)
        setTags(arr)
        console.log(arr)
    }

    return (
        <>
            <div className='wrapper'>
                <div className="event__background">
                    <div className='event__category'>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: '1.2rem' }} />
                            <button className='links' value='ALL_EVENTS' onClick={onMainCategory} >All Events</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: '1.2rem' }} />
                            <button className='links' value='WEBINAR' onClick={onMainCategory}>Webinars</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faCode} style={{ fontSize: '1.2rem' }} />
                            <button className='links' value='CODING_EVENT' onClick={onMainCategory}>Coding Events</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faRoute} style={{ fontSize: '1.2rem' }} />
                            <button className='links' value='BOOTCAMP_EVENT' onClick={onMainCategory}>Bootcamp Events</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faPlaceOfWorship} style={{ fontSize: '1.2rem' }} />
                            <button className='links' value='WORKSHOP' onClick={onMainCategory}>Workshops</button>
                        </div>
                    </div>
                    <hr />

                    <div className='event__sub__category'>
                        <div className='event__category__links ediv'>
                            <button className='links' onClick={onSubCategory} value='Upcoming'>Upcoming</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <button className='links' onClick={onSubCategory} value='Archived'>Archived</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <button className='links' onClick={onSubCategory} value='ALL_TIME_FAVORITES'>All Time Favorites</button>
                        </div>
                    </div>
                </div>
                <div className='taglist'>
                    {eventTags && eventTags.map((tag, i) =>
                        <div className='event__category__links tags' key={i}>
                            <button className='links' onClick={onTags} value={tag} >{tag}</button>
                        </div>
                    )}
                </div><hr />
                <div className='event__cards'>
                    {cards.length === 0 ? (
                        <h2>No events found</h2>
                    ) : (
                        cards.map((card, i) => (
                            <Card card={card} key={i} />
                        ))
                    )}
                </div>
                <div className='pagination'>
                    <a href="#"><img src={leftArrow} /></a>
                    <div className='pages'>Page 1 of 1</div>
                    <a href="#"><img src={rightArrow} /></a>
                </div>
            </div>
        </>
    )
}

export default Events;