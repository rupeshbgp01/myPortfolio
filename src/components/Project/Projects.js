import './Projects.css'

import p1 from '../images/project1.png'
import p2 from '../images/project1.png'

function Portfolio(){
    return <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className='container project_container'>
            <div className='project_box'>
                <div className='project_img'>
                    <img src={p1} alt="img"></img>
                </div>
                <div className='project_info'>
                    This is my first project of Frontend.Worked on advance use of HTML and CSS. This website is on an institute website
                </div>
                <div className='project_btn'>
                    <a href='https://github.com/Rupeshbgp01/Innovation_Classes' className='btn'>Github Link</a>
                    <a href=' https://rupeshbgp01.github.io/Innovation_Classes/'className='btn btn-primary'>Live Demo</a>
                </div>

            </div>
            <div className='project_box'>
                <div className='project_img'>
                    <img src={p2} alt="img"></img>
                </div>
                <div className='project_info'>
                    My portfolio 
                    Through this I learn about ReactJs, HTML, CSS and Javascript 
                </div>
                <div className='project_btn'>
                    <a href='www.facebook.com' className='btn'>Github Link</a>
                    <a href='www.youtube.co' className='btn btn-primary'>Live Demo</a>
                </div>

            </div>

        </div>
       
        </section>
};

export default Portfolio;