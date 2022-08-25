import React from 'react'
import home4 from '../../../images/web_images/home_coffee2_pic3.jpg'
const Home4 = () => {
  return (
    <div className='home4'>
        <div className='home4-left'>
            <h1>Integer pharetra magna non ante blandit laborotis</h1>
            <div className='underline'></div>
            <p>Liberto pharetra vel. pellentesque lorem aurgue,fermentum nec nibh et,fringilla sollicitudin orci.Interger 
                oharetra magna non ante bladit lobortis. Sed mollis.
            </p>
            <button>SEE MENU CART </button>
        </div>
        <div className='home4-right'>
            <img className='home4-image' src={home4} />
        </div>
    </div>
  )
}

export default Home4