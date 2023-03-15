import React from "react";
import './About.css';
import me_img from "./images/rupesh4.jpeg";
import { MdSchool } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function About() {
    return (
        <section id="about" >
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">

                <div className="about_me_container">
                    <div className="about_me" >
                        <div className="about_me_img">
                            <img src={me_img} alt="About img" />
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-primary" id="talk_btn" >Ler's Talk</a>

                </div>
                <div className="about_content">
                    <p>
                        Intend to built a career in an organisation where I can prove myself as an asset with my skill. Seeking a position to utilize my skils and abilities in the Information Technology Industry that offers professional growth while being resourceful, innovative and flexible.
                    </p>
                    <div className="about_cards">
                        <article className="about_card">
                            <MdOutlineSchool className="about_icon" />
                            <h5>B-Tech</h5>
                            <h6>(9.3 cgpa)</h6>
                            <small>Sant Longowal Institute of Engineering and Technology, Punjab</small>
                        </article>

                        <article className="about_card">
                            <FaSchool className="about_icon" />
                            <h5>12th Board</h5>
                            <h6>(91 %)</h6>
                            <small>RamKrishna Vidya Mandir, Bhagalpur, Bihar</small>
                        </article>

                        <article className="about_card">
                            <MdSchool className="about_icon" />
                            <h5>10th Board</h5>
                            <h6>(93 %)</h6>
                            <small>Divine Happy School, Bhagalpur, Bihar</small>
                        </article>
                    </div>



                </div>
            </div>
        </section>
    );
}

export default About;