import React from "react";
import CV from '../images/cv.pdf'


function BTN(){
    return (
        <div className="BTN">
            <a href={CV} download className="btn" >Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    );
}

export default BTN;