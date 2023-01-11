import React from "react";
import './Nav.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";
import { BiPhoneCall } from "react-icons/bi";
import { useState } from "react";

function Nav() {
    const [activeNav, setActiveNav] = useState('#home');
    return (
        <div className="navbar">
            <nav >
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : " "}><AiOutlineHome /></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : " "}><AiOutlineUser /></a>
                <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : " "}><GiSkills /></a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : " "}><VscProject /></a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : " "}><BiPhoneCall /></a >

            </nav >
        </div>
    );
}

export default Nav;