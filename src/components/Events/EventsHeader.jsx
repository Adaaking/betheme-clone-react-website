import React from 'react'
import event from '../../images/web_images/home_coffee2_blog2.jpg';
const EventsHeader = () => {
  return (
    <div className='event-header'>
        <img src={event} />
        <div className='event-text'>
            <h1>Events</h1>
        </div>
    </div>
  )
}

export default EventsHeader