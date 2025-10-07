import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const AppLayout = () => {

  return (
   <>
   <Nav/>
   <Outlet/>
 
   </>
  )
}

export default AppLayout


// Flow Detail:

// - Admin credentials enter karta hai
// - Backend se JWT token aata hai
// - Token ko context mein store karte hai
// - Token check karke protected routes access dete hai