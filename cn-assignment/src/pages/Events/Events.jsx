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

    const [cardsDetails,setCardsDetails] = useState([]);
    
    const [mainCategory,setMainCategory] = useState('');
    const [subCategory,setSubCategory] = useState('');
    const [tags,setTags] = useState([]);

    useEffect(() => {
        axios.get('https://api.codingninjas.com/api/v3/event_tags')
        .then((res) => {
            setEventTags(res.data.data.tags)
        }).catch((error) => console.log(error))
    },[])

    useEffect(() => {
        axios.get(`https://api.codingninjas.com/api/v3/events?event_category=${mainCategory}&event_sub_category=${subCategory}&tag_list=${tags}&offset=0`)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
    },[mainCategory])

    const onMainCategory = (e) => {
        // setMainCategory(e.target.value)
        console.log(e.target.value)
    }

    const onSubCategory = (e) => {
        console.log(e.target.value)
    }

    let arr= [];
    const onTags = (e) => {
        arr.push(e.target.value)
        setTags(arr)
        console.log(arr)
    }

    return(
        <>
        <div className='wrapper'>
            <div className="event__background">
                <div className='event__category'>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faCalendarDay} style={{fontSize:'1.2rem'}} />
                        <button className='links' value='ALL_EVENTS' onClick={onMainCategory} >All Events</button>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faLaptopCode} style={{fontSize:'1.2rem'}}  />
                        <button className='links' value='WEBINARS' onClick={onMainCategory}>Webinars</button>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faCode}  style={{fontSize:'1.2rem'}}  />
                        <button className='links' value='CODING_EVENTS' onClick={onMainCategory}>Coding Events</button>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faRoute}  style={{fontSize:'1.2rem'}}  />
                        <button className='links' value='BOOTCAMP_EVENTS' onClick={onMainCategory}>Bootcamp Events</button>
                    </div>
                    <div className='event__category__links'>
                        <FontAwesomeIcon icon={faPlaceOfWorship}  style={{fontSize:'1.2rem'}}  />
                        <button className='links' value='WORKSHOPS' onClick={onMainCategory}>Workshops</button>
                    </div>
                </div>
                <hr/>
            
                <div className='event__sub__category'>
                    <div className='event__category__links'>
                        <button className='links' onClick={onSubCategory} value='Upcoming'>Upcoming</button>
                    </div>
                    <div className='event__category__links'>
                        <button className='links' onClick={onSubCategory} value='Archived'>Archived</button>
                    </div>
                    <div className='event__category__links'>
                        <button className='links' onClick={onSubCategory} value='ALL_TIME_FAVOURITES'>All Time Favorites</button>
                    </div>
                </div>
            </div>
            <div className='taglist'>
                {eventTags && eventTags.map((tag,i) => 
                    <div className='event__category__links tags' key={i}>
                        <button className='links' onClick={onTags} value={tag} >{tag}</button>
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