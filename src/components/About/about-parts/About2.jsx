import React from 'react'
import about from '../../../images/web_images/home_coffee2_about1.jpg'
const About2 = () => {
  return (
    <div className='about2'>
        <div className='about2-left'>
            <h1>Class aptent taciti sociosqu torquent</h1>
            <div className='underline'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus.</p>
            <p>Curabitur rutrum porta dui eget mollis. Nullam lacinia dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
        </div>
        <div className='about2-image'>
            <img className='about2-img' src={about} />
        </div>
    </div>
  )
}

export default About2