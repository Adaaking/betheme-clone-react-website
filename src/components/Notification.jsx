import { Alert } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = ({ type, message}) => {

  return (
    <div>
        <Alert severity={type}>{message}</Alert> 
    </div>
  )
}

export default Notification