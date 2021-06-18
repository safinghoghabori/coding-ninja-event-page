import React,{useEffect,useState} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

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

const Events = () => {
    const [eventTags,setEventTags] = useState('');

    useEffect(() => {
        axios.get('https://api.codingninjas.com/api/v3/event_tags')
        .then((res) => {
            setEventTags(res.data.data.tags)
        }).catch((error) => console.log(error))
    },[])
    return(
        <>
        <div className='wrapper'>
            <div className="event__background">
                <div className='event__category'>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faCalendarDay} style={{fontSize:'1.2rem'}} />
                        <Link to='!#' className='links'>All Events</Link>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faLaptopCode} style={{fontSize:'1.2rem'}}  />
                        <Link to='!#' className='links'>Webinars</Link>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faCode}  style={{fontSize:'1.2rem'}}  />
                        <Link to='!#' className='links'>Coding Events</Link>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faRoute}  style={{fontSize:'1.2rem'}}  />
                        <Link to='!#' className='links'>Bootcamp Events</Link>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faPlaceOfWorship}  style={{fontSize:'1.2rem'}}  />
                        <Link to='!#' className='links'>Workshops</Link>
                    </div>
                </div>
                <hr/>
            
                <div className='event__sub__category'>
                    <div className='event__category__links'>
                        <Link to='!#' className='links'>Upcoming</Link>
                    </div>
                    <div className='event__category__links'>
                        <Link to='!#' className='links'>Archived</Link>
                    </div>
                    <div className='event__category__links'>
                        <Link to='!#' className='links'>All Time Favorites</Link>
                    </div>
                </div>
            </div>
            <div className='taglist'>
                {eventTags && eventTags.map((tag,i) => 
                    <div className='event__category__links tags' key={i}>
                        <Link to='!#' className='links'>{tag}</Link>
                    </div>
                )}
            </div><hr/>
            <div className='event__cards'>
               <Card /><Card /><Card />
            </div>
        </div>
        </>
    )
}

export default Events;