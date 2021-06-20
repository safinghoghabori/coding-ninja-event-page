import React, { useEffect, useState } from "react";
import axios from 'axios'

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
import Tags from "../../components/Tags/Tags";

let arr = [];

const Events = () => {
    const [eventTags, setEventTags] = useState('');

    const [mainCategory, setMainCategory] = useState('ALL_EVENTS');
    const [subCategory, setSubCategory] = useState('Upcoming');
    const [tags, setTags] = useState({ arr: [] });
    const [tagsCombinedString, setTagsCombinedString] = useState('')

    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get('https://api.codingninjas.com/api/v3/event_tags')
            .then((res) => {
                setEventTags(res.data.data.tags)
            }).catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        axios.get(`https://api.codingninjas.com/api/v3/events?event_category=${mainCategory}&event_sub_category=${subCategory}&tag_list=${tagsCombinedString}&offset=0`)
            .then((res) => setCards(res.data.data.events))
            .catch((error) => console.log(error))
    }, [mainCategory, subCategory, tags])

    const [activeState, setActiveState] = useState('')
    const onMainCategory = (e) => {
        setActiveState('')
        setMainCategory(e.target.value)
        setActiveState(e.target.value)
    }


    const onSubCategory = (e) => {
        setSubCategory(e.target.value);
    }

    //check if tags are already selected
    const onTags = (e) => {
        if (arr.length > 0) {
            let count = 0;
            arr.forEach(element => {
                if (element === e.target.innerText) {
                    count++;

                    const index = arr.indexOf(e.target.innerText);
                    if (index > -1) {
                        arr.splice(index, 1);
                    }
                }
            });
            if (count === 0) {
                arr.push(e.target.innerText);
            }
        } else {
            arr.push(e.target.innerText);
        }
        setTags({ arr })
        console.log('arr...', arr)
        console.log('tags...', tags)
        stringOperations();
    }

    // convert object into strings
    const stringOperations = () => {
        const arrStrings = tags.arr;
        const combinedString = arrStrings.filter((str) => {
            return str
        }).join(', ')
        setTagsCombinedString(combinedString)
    }

    return (
        <>
            <div className='wrapper'>
                <div className="event__background">
                    <div className='event__category'>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faCalendarDay} style={{ fontSize: '1.2rem' }} />
                            <button className={activeState === 'ALL_EVENTS' ? 'links tags__bg' : 'links'} value='ALL_EVENTS' onClick={onMainCategory} >All Events</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: '1.2rem' }} />
                            <button className={activeState === 'WEBINAR' ? 'links tags__bg' : 'links'} value='WEBINAR' onClick={onMainCategory}>Webinars</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faCode} style={{ fontSize: '1.2rem' }} />
                            <button className={activeState === 'CODING_EVENT' ? 'links tags__bg' : 'links'} value='CODING_EVENT' onClick={onMainCategory}>Coding Events</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faRoute} style={{ fontSize: '1.2rem' }} />
                            <button className={activeState === 'BOOTCAMP_EVENT' ? 'links tags__bg' : 'links'} value='BOOTCAMP_EVENT' onClick={onMainCategory}>Bootcamp Events</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <FontAwesomeIcon icon={faPlaceOfWorship} style={{ fontSize: '1.2rem' }} />
                            <button className={activeState === 'WORKSHOP' ? 'links tags__bg' : 'links'} value='WORKSHOP' onClick={onMainCategory}>Workshops</button>
                        </div>
                    </div>
                    <hr />

                    <div className='event__sub__category'>
                        <div className='event__category__links ediv'>
                            <button className='sub__links' onClick={onSubCategory} value='Upcoming'>Upcoming</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <button className='sub__links' onClick={onSubCategory} value='Archived'>Archived</button>
                        </div>
                        <div className='event__category__links ediv'>
                            <button className='sub__links' onClick={onSubCategory} value='ALL_TIME_FAVORITES'>All Time Favorites</button>
                        </div>
                    </div>
                </div>
                <div className='taglist'>
                    {eventTags && eventTags.map((tag, i) =>
                        <Tags key={i} tag={tag} onClick={(e) => onTags(e)} />
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
                    <a href='#!'><img src={leftArrow} alt='left arrow' /></a>
                    <div className='pages'>Page 1 of 1</div>
                    <a href='#!'><img src={rightArrow} alt='right arrow' /></a>
                </div>
            </div>
        </>
    )
}

export default Events;