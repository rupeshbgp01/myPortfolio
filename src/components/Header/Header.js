import React from 'react';
import './Header.css'
import BTN from './BTN'
import my_img from '../images/rupesh3.jpeg'
import SOIALMEDIA from './SOCIAlMEDIA';


function Header() {
    return (
        <header className='container header_container' id='home' >
            <div className='my_img'>
                <img src={my_img} alt="header_image" ></img>
            </div>
            <div className='header_info'>
                <h3>Hello I'm</h3>
                <h1>Rupesh Kumar</h1>
                <h4 className='text-light'>Frontend Developer</h4>
                < BTN />
                <SOIALMEDIA />
            </div>
            

        </header>
    );
}

export default Header;