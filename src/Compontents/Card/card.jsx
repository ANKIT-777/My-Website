import React from 'react'
import './card.css' 

const card = ({emoji,heading,detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading} </span>
        <span>{detail}</span>
        <a href="https://github.com/ANKIT-777">
        <button className="button">Learn More</button>
        </a>
    </div>
  )
}

export default card 