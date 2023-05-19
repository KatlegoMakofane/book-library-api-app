import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Homes from './Home.css'

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <div className="name">
           Created by @Katlego Makofane 
       </div>
    </main>
    
  )
}

export default Home