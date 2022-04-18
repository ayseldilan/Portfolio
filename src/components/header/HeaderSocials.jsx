import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aysel-dilan-bulut/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/ayseldilan" target="blank"><FaGithub/></a>
        <a href="https://twitter.com/dilan_coding" target="blank"><BsTwitter/></a>
        
        
        
    </div>
  )
}

export default HeaderSocials