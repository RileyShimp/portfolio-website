import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/rileyshimp/" target="_ blank"> <BsLinkedin/></a>
      <a href="https://github.com/RileyShimp" target="_ blank"> <FaGithub/> </a>
    </div>
  )
}

export default HeaderSocials