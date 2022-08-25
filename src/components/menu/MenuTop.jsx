import React from 'react'
import menu from '../../images/hot_drinks/about_us.jpg'

const MenuTop = () => {
  return (
    <div className='menu-top'>
        <img src={menu} className='menutop-image'/>
        <div className='menu-text'>
          <h1 className='our-menus'>OUR MENUS</h1>
        </div>
    </div>
  )
}

export default MenuTop