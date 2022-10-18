import React from 'react'
import './Home.css'
import logo from '../../img/photo.jpg';
import { NavLink } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import cv from '../../img/cv.pdf'

function Home() {
  return (
    <div>

      <div className="container">

        <div className="intro">

          <div className="intro-text">

            <h3 className='im'>Hello, I'm</h3>
            <h1 className='name'>Brajesh kumar</h1>
            <h3 className='bio'><FaHandPointRight style={{ color: 'yellow' }} /> Web designer  <br /><FaHandPointRight style={{ color: 'yellow' }} /> React developer  <br /><FaHandPointRight style={{ color: 'yellow' }} /> Wordpress Developer</h3>

            <NavLink className="contact-me contact-me-home home-contact" to='/contact'>Contact Me <FaHandsHelping className='red-color' /></NavLink>

            <a href="tel:+917492992502" className='contact-me-home home-contact call-me'>Call me <FaPhoneAlt className='red-color' /></a>

            <a href={cv} target='_blank' rel="noopener" className='contact-me-home home-contact call-me resume'>Resume <FaDownload className='red-color' /></a>

            <h4 className='social-media'>Cheak on my:

              <a className='instagram-icon social-media-icon' href="https://google.com" target='_blank'>
                <FaInstagram />
              </a>

              <a className='facebook-icon social-media-icon' href="https://www.facebook.com/profile.php?id=100069865824869" target='_blank'>
                <FaFacebookSquare />
              </a>

              <a className='whatsapp-icon social-media-icon' href="https://google.com" target='_blank'>
                <FaWhatsapp />
              </a>

            </h4>

          </div>

          <div className="img-container">
            <img src={logo} alt="nothing" />
          </div>

        </div>

      </div>


    </div>
  )
}

export default Home;