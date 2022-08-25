import React from 'react'
import { useSelector } from 'react-redux'
import Orders from './Orders'
import Menus from './Menus'
import MenuTop from './MenuTop'

const AllMenus = () => {
  const showorder = useSelector(state => state.menu.showOrder)
  return (
    <>
    <MenuTop />
    <Menus />
    {showorder && <Orders /> }
    </>
  )
}

export default AllMenus