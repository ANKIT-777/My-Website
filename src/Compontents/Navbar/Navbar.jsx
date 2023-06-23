import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
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
                    <Link spy = {true} to = 'Navbar' smooth ={true} >
                    <li>Home</li>
                    </Link>
                    <Link spy = {true} to = 'Services' smooth ={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy = {true} to = 'Experience' smooth ={true} >
                    <li>Experience</li>
                    </Link>
                    <Link spy = {true} to = 'Portfolio' smooth ={true}>
                    <li>Portfolio</li>
                    </Link>
                    
                </ul>
            </div>
            <a href="https://github.com/ANKIT-777">
            <button className="button">
                Contact
            </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar