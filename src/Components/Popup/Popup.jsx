import React from 'react';
import { Login } from '../Login/Login';
import { Signup } from '../Signup/Signup';
 
export const Popup = ({ openPage, setOpenPage, confirmPage }) => {
  return (
    <div>
        { openPage && (confirmPage === 'login' || confirmPage === 'signup') ? ( confirmPage === 'login' ? <Login setOpenPage={setOpenPage}/> : <Signup setOpenPage={setOpenPage}/>) : null }
    </div>
  )
}
