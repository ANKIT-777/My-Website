import React from 'react'
import './Intro.css'  
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Instagram from '../img/instagram.png'; 
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am</span>
            <span>Ankit Sharma</span>
            <span>
                I'm a 3rd-year B.Tech CS student at LPU 
                with practical coding experience and a
                strong interest in Data Science
            </span>
        </div>

        <button className=" button i-button">Hire me</button>
        
        <div className="i-icons">
          <a href='https://github.com/ANKIT-777' target="_blank">
          <img src= {Github} alt="" />
          </a>
         <a href="https://www.linkedin.com/in/ankit176/"  target="_blank" > 
         <img src= {LinkedIn} alt="" />
         </a>
         <a href="https://www.instagram.com/axshvlogs2.0/" target="_blank">
         <img src= {Instagram} alt="" />
         </a>
  
          

        </div> 

        </div>
        <div className="i-right">
          i am right side 
        </div>
        
    </div>
  )
}
 
export default Intro