import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import cv from '../../img/cv.pdf'
import { FaDownload } from "react-icons/fa";

function Nav() {
  return (
    <div className='nav-container'>
        
        <ul className='nav-ul'>
            <li>
                <NavLink className="nav-list" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-list middle" to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className="nav-list" to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink className="nav-list middle" to='/blog'>Blog</NavLink>
            </li>
            <li>
                <a href={cv} target='_blank'   rel="noopener" className='nav-list '>Resume <FaDownload style={{color:'green'}}/></a>
            </li>
            <li>
                <NavLink className="nav-list middle  singIn" to='/logIn' >Sign In</NavLink>
            </li>
        </ul>

    </div>
  )
}

export default Nav;