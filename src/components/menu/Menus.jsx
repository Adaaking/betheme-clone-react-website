import React from 'react'
import Menu from './Menu'
import { useSelector } from 'react-redux';

const Menus = () => {
  const menus = useSelector(state => state.menu.menuItems);
  return (
    <div className='menus'>
      <div className='menus-top-text'>
        <h1>OUR-MENUS</h1>
        <div className='underline'></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quo at voluptates, expedita provident cum eius tempora, veniam quibusdam, error 
          molestiae alias ducimus placeat distinctio consequatur ut officiis facere earum fugit.</p>
      </div>
      {menus.map((menu,index) => (
        <Menu menu = {menu} key={index}/>
      ))}
      <div className='menus-bottom'>
        <h1>Enjoy your life with Us</h1>
        <div className='underline'></div>
      </div>
    </div>
  )
}

export default Menus