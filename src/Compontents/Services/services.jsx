import React from 'react'
import './services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"; 
import Card from '../Card/card';

const Services = () => {
  return (
    <div className="services">
        {/*left side*/}
        <div className="awesome">
        <span>My Awesome</span>
        <span>Sevices</span>
        <span>I have made some cool projects which can be showcased here and it would be very clear to you 
       <br />
        Have a look on them  
        </span>
        <a>

        <button className="button s-button "> Download CV</button>

        </a>
        
        <div className="blur s-blur1" style ={{background: "#ABF1FF94"}}></div>


        </div>
        {/*right side*/}
        <div className="cards">
        <div style={{left : '14rem' 
        }}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figma,Sketch ,Photshop,Adobe,Adobe xd"}
            />
        </div>
        {/*services card */}
        <div style={{ top: "12rem",  left : "-4rem" }}>
          <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html,Css,JavaScript,React"}
          
          />
        </div>

        <div style={{ top: "19rem",  left : "12rem" }}>
        <Card
        emoji={Humble}
        heading={"UI/UX"}
        detail={"Html,Css,JavaScript,React"}

        />
        
        </div>
        </div>
  

    </div>
  )
}

export default Services