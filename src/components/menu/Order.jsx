import React from 'react'
import { useDispatch } from 'react-redux'
import { menuActions } from '../../state/menu-slice';

const Order = ({ order }) => {
    const dispatch = useDispatch()
    const {id,name, quantity,totalPrice,price} = order;
    console.log(price);
    const handleIncrease = () => {
        dispatch(menuActions.addOrder({
            name,
            price,
            id,
        }))
    }
  return (
    <div className='orders'>
        <h1>{name}</h1>
        <p>quantity: {quantity}</p>
        <p>totalPrice: ${totalPrice}</p>
        <button onClick={() => dispatch(menuActions.removeItem(name))}>-</button>
        <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Order