import React from 'react'
import { Navbar } from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (<>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  )
}
