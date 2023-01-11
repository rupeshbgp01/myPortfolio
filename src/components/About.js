import React from "react";
import './About.css';
import me_img from "./images/rupesh2.jpeg";
import { MdSchool } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function About() {
    return (
        <section id="about" >
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me" >
                    <div className="about_me_img">
                        <img src={me_img} alt="About img" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <MdOutlineSchool className="about_icon" />
                            <h5>B-Tech</h5>
                            <small>Sant Longowal Institute of Engineering and Technology, Punjab</small>
                        </article>

                        <article className="about_card">
                            <FaSchool className="about_icon" />
                            <h5>12th Board</h5>
                            <small>RamKrishna Vidya Mandir, Bhagalpur, Bihar</small>
                        </article>

                        <article className="about_card">
                            <MdSchool className="about_icon" />
                            <h5>10th Board</h5>
                            <small>Divine Happy School, Bhagalpur, Bihar</small>
                        </article>
                    </div>
                    <p>
                        Intend to built a career in an organisation where I can prove myself as an asset with my skill. Seeking a position to utilize my skils and abilities in the Information Technology Industry that offers professional growth while being resourceful, innovative and flexible.
                    </p>

                    <a href="#contact" className="btn btn-primary" >Ler's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;