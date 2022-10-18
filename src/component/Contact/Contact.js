import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='App contact-page'>
      
      <h1 className='fill-form-text'>Hello guys, Fill the form for contact me</h1>

      <form action="" className='form'>
        <input type="text" name='name' className='input-name inpbox' placeholder='Your Name Here...' />
        <input type="text" name='email' className='input-name inpbox' placeholder='Your Email Here...' />
        <input type="text" name='mobile' className='input-name inpbox' placeholder='Your Mobile no. Here...' />
        <input type="text" name='Name' className='input-name inpbox' placeholder='Your text Here...' />
        <button className="submit-button">Submit</button>
      </form>

      <div className="my-detail">
        <div className="you-can-also"> You can also get me on:</div>
        <div className="contact-email"><span className='head'>Email :</span> brajeshfrombr06@gmail.com</div>
        <div className="contact-number"><span className='head'>Mobile :</span> <a href="tel:+917492992502" className='click-to-call'> +91 7492992502 </a> </div>
      </div>
    </div>
  )
}

export default Contact;