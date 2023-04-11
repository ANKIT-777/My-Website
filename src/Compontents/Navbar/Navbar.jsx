import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                Ankit
            </div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul className='none'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li> 
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar