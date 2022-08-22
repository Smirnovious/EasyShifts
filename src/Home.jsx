import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'
import logo from './logo.png'


export const Home = () => {

  
  return (
    <>
    <img src={logo} alt="company logo" className='logo'/>
    <div className='btn-container'>
      <div className='myButton'>
        <NavLink className='btnText' to='/Login'>מנהל</NavLink>
      </div>

      <div className='myButton'>
        <NavLink className='btnText' to='/SubmitShifts'>עובד/אחמ"ש</NavLink>
      </div>
    </div>
    
    
    </>
  )
}
