import React from 'react'
import './About.css'
// import pythonImg from '../../img/photo,jpg'
import pythonImg from '../../img/python.jpg';
import reactImg from '../../img/react.jpg';
import wordpressImg from '../../img/wordpress.jpg';

function About() {
  return (
    <div className='about-comp'>
      <h1 className='abt-myself'>About Myself:</h1>

      <div className="abt-container">
        <div className="about-box react">
          <h2 className='abt-heading'>React js developer</h2>
          <div className="img-cont">
            <img src={reactImg} alt="react" />
          </div>
          <p className="abt-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laborum beatae iste voluptatum, cum exercitationem velit ab tenetur ipsa optio nostrum non sapiente harum! Doloremque eum nostrum eos ex ullam officiis impedit nihil?</p>
        </div>
        <div className="about-box python">
          <h2 className='abt-heading'>Python developer</h2>
          <div className="img-cont">
            <img src={pythonImg} alt="Python" />
          </div>
          <p className="abt-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laborum beatae iste voluptatum, cum exercitationem velit ab tenetur ipsa optio nostrum non sapiente harum! Doloremque eum nostrum eos ex ullam officiis impedit nihil?</p></div>
        <div className="about-box wordpress">
          <h2 className='abt-heading'>wordpress developer</h2>
          <div className="img-cont">
            <img src={wordpressImg} alt="Word press" />
          </div>
          <p className="abt-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laborum beatae iste voluptatum, cum exercitationem velit ab tenetur ipsa optio nostrum non sapiente harum! Doloremque eum nostrum eos ex ullam officiis impedit nihil?</p></div>
      </div>
    </div>
  )
}

export default About;