import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width :'100%'}}/>
        <div className="f-content">
            <span>an2ki4t5s@gmai.com</span>
            <div className="f-icons">
              <a href="https://www.instagram.com/axshvlogs2.0/"><Insta color= 'white' size= '3rem'/></a>
                
                <a href="https://www.facebook.com/ankitwill.back/"><Facebook color= 'white' size= '3rem' /></a>
               <a href="https://github.com/ANKIT-777"><Github color= 'white' size= '3rem'/></a> 
            </div>
        </div>
    </div>
  )
}

export default Footer