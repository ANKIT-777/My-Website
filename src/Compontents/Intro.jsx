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
        <div className="i-cons">
          <img src= {Github} alt="" />
          <img src= {LinkedIn} alt="" />
          <img src= {Instagram} alt="" />

        </div> 
        </div>
        <div className="i-right">
          i am right side 
        </div>
        
    </div>
  )
}
 
export default Intro