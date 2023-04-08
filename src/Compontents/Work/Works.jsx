import React from 'react'
import './Work.css'
import Lpu from "../../img/lpulogo.png"
import GeekForGeek from "../../img/GeeksforGeeks logo.png"
import Ineuron from "../../img/ineuron-logo.png"
import Coursera from "../../img/coursera logo .png"
import programmingpathsala from "../../img/proglogo.png"




const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Had Training from these</span>
        <span>Companies</span>
        <span>I have made some cool projects which can be showcased here and it would be very clear to you 
       <br />
        Have a look on them  
        </span>
        

        <button className="button s-button "> Hire Me</button> 
        <div className="blur s-blur1" style ={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        
        <div className="right-side"></div>


    </div>
  )
}

export default Works