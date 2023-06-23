import React from 'react'
import './Intro.css'  
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Instagram from '../img/instagram.png';
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import boy from '../img/newankit.png'
import thumbup from '../img/thumbup.png'
import Crown from '../img/crown.png'
import glassesimoji from '../img/glassesimoji.png'
import FloatingDiv from './FloatingDiv/floatingdiv';

import { themeContext } from '../Context';
import { useContext } from 'react';




  

const Intro = () => {

 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color: darkMode? 'white': ''}} >Hy! I Am</span>
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
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt=""/>
          <img src={glassesimoji} alt="" />
          <div style={{top:'-4%',left:'68%'}}
          className='floatind-div '>
            <FloatingDiv image = {Crown} txt1='Data' txt2='Scientist'/>
          </div>
          <div style={{top: '18rem', left: '0rem'}}
          className='floatind-div '>
            <FloatingDiv image={thumbup} txt1 = 'Competitive' txt2 = 'Coding' />
          </div>
          <div className='blur' style={{bacground : "rgb (238 210 255"}}></div>
          <div className='blue' 
          style={{
            bacground : '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left : '-9rem'
            }}></div>
        </div>     
    </div>
  )
}
 
export default Intro