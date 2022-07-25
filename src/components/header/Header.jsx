import React from 'react'
import './header.css'
import ResumeButton from './ResumeButton'
import Me from '../../assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Riley Shimp</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <ResumeButton/>

        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a> 
      </div>
    </header>
  )
}

export default Header
