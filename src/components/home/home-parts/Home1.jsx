import React from 'react'
import home5 from '../../../images/hot_drinks/forHome5.jpg';
import card from '../../../images/hot_drinks/card-image.png'

const Home1 = () => {
  return (
    <div className='home'>
      <img className='home-image' src={home5}/>
      <div className='home-text'>
        <span className='ethiopia'>A real ethiopian cafe</span>
        <div className='bold-text'>
          <span>Discover the</span>
          <span>taste of real</span>
          <span>coffee</span>
        </div>
        <button className='home-btn'>MEET US</button>
      </div>
      <div className='line'></div>
      <div>
        <div className='card'>
          <img src={card} />
        </div>
      </div>
    </div>
  )
}

export default Home1
