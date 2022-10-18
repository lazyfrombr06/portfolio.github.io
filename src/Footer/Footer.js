import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (

        <div className='footer-comp App' style={{color:'yellow'}}>


            <hr style={{ backgroundColor: 'white', height: '3px', border: '3px solid black' }} />


            <div className="footer-container">
                <h1 className='greed-footer' >Thanks for Visit My Profile: Have a Great Day</h1>
                

                <div className="quick-link">
                    <ul className='nav-ul-footer'>
                        <h3> Quick Links:</h3>
                        <li>
                            <NavLink className="nav-list-footer" to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-list-footer middle" to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-list-footer" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>

                    <ul className='ul-contact-footer'>
                        <h3>Contact me on:</h3>
                        <li className="contact-me-on">Email: brajeshfrombr06@gmail.com</li>
                        <li className="contact-me-on">Mobile: +917492992502</li>
                        <li className="contact-me-on">Insta: lazyfrombr06</li>
                    </ul>

                    <ul className="quick-msg-ul">
                        <h3>Quick Message:</h3>
                        <li className="quick-msg-li"> <input type='text' placeholder='enter Your email' required='true' /> </li>
                        <li className="quick-msg-li"> <input type='text' placeholder='enter quick msg to send'/></li>
                        <li className="quick-msg-li"> <button className='button-footer'>submit</button> </li>
                    </ul>

                    <ul className="feedback">
                        <h3>Your valuable feedback:</h3>
                        <textarea name="feedback" id="feedback" cols="5" rows="3" placeholder='write your valuable feedback here..'></textarea>
                        <button className='button-footer' onClick={()=>alert('Thanks for your valuable feedback.. Havea a good day !')}>submit</button>
                    </ul>

                    <ul className="search-box-ul">
                        <h3>Search Here in website:</h3>
                        <input type="search" placeholder='Search here ...' style={{padding:'3px'}} /> <button className='button-footer'>Search</button>
                    </ul>
                </div>
                <h3 className="App" style={{paddingBottom:'42px',paddingTop:'30px',fontSize:'1.5rem',textShadow:'black 5px 5px 3px'}}> &copy; Copyright 2022 | Brajesh kumar thakur</h3>
            </div>


        </div>
    )
}

export default Footer