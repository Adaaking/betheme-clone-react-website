import React from 'react'
import { useDispatch } from 'react-redux';
import { menuActions } from '../../state/menu-slice';

const Menu = ( { menu }) => {
  const dispatch = useDispatch();
  
    const {title, items} = menu;
  return (
    <div className='menu-categories'>
        <h1 className='title'>{title}</h1>
        <div className='underline' style={{margin:"1rem 10%"}}></div>
        <div className='menu-item'>
            {items.map((item)=>{
                const {name,price,desc,id,image} = item;
                return <article className='menu-article' key={item.id}>
                   <img src={image} alt={name} />
                   <div className='name-price'>
                     <h1>{name}</h1>
                     <p style={{fontSize:"20px"}}>price : ${price}</p>
                   </div>
                   <button className='menu-btn' onClick={() =>
                    dispatch(menuActions.addOrder({
                      name,
                      price,
                      id
                    }))
                   }>order</button>
                </article>
            })}
        </div>
    </div>
  )
}

export default Menu