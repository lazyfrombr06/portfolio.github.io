import React from "react";
import './Resume.css'
import cv from '../../img/cv.pdf'

function Resume(){

    // function download(){
    //     return(
            
    //         <a href={cv}>Resume</a>
    //     )
    // }
    return(
        <div className="resume-cont">

            
            {/* <button className="dwnld-btn" onClick={()=>download()}>Download button</button>  */}

            {/* <img src="../../img/bgco.jpg" alt="path not found" /> */}
            {/* <img src={cv} alt="path not found" /> */}

            <a href={cv} target='_blank'   rel="noopener" className='contact-me-home call-me App'>Resume</a>

        </div>

    );
}

// export default Resume;