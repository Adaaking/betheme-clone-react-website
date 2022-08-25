import React from 'react'
import about1 from '../../../images/hot_drinks/forabout.jpg'

const About1 = () => {
  return (
    <div className='about'>
        <img className='about-bg' src={about1} />
        <div className='about-overlay'>
            <h1>About Coffee</h1>
        </div>
        <div className='line'></div>
    </div>
  )
}

export default About1