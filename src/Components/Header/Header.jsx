import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css"

const Header = () => {
  return (
    <div className="holder">
        <header className="header">
          <Navbar/>
          
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Search for the book your looking for ,hope you can find it we have lot of Titles. Best books some do not have covers but you will still find some information according to your search Good Luck!</p>
                <SearchForm />
            </div>
        </header>
        
    </div>
  )
}

export default Header