import React from 'react'
import centerImage from "../../../images/web_images/home_coffee2_pic4.png"
const About5 = () => {
  return (
    <div className='about5'>
        <div className='empty'></div>
        <div className='about5-center'>
            <h1>Join to Coffee Company Today!</h1>
            <hr className='underline'/>
            <p>Pellentesque lorem augue, fermentum nec nibh et, fringilla sollicitudin orci. Integer pharetra magna non ante blandit lobortis. Sed mollis.</p>
            <button className='about5-btn'>SEND YOUR CV</button>
        </div>
        <div className='about5-image'>
            <img src={centerImage} />
        </div>
    </div>
  )
}

export default About5