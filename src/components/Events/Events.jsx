import React from 'react'
import { useSelector } from 'react-redux'
import Event from './Event';

const Events = () => {
    const events  = useSelector(state => state.event.events);
  return (
    <div className='events'>
        {events.map((event,index) =>(
            <Event event={event} key={index}/>
        ))}
    </div>
  )
}

export default Events