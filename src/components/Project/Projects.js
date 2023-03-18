import './Projects.css'

import p1 from '../images/project1.png'
import p2 from '../images/project2.png'
import p3 from '../images/project3.png'
import p4 from '../images/project4.png'

function Portfolio() {
    return <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className='container project_container'>

            <div className='project_box'>
            <h5>Password Generator</h5>
                <div className='project_img'>
                    <img src={p2} alt="img"></img>
                </div>
                <div className='project_info'>
                    HTML, CSS, Javascript
                </div>
                <div className='project_btn'>
                    <a href='https://github.com/rupeshbgp01/PasswordGenerator' className='btn'>Github Link</a>
                    <a href=' https://rupeshbgp01.github.io/PasswordGenerator/ 'className='btn btn-primary'>Live Demo
                    </a>
                </div>
            </div>

            <div className='project_box'>
                <h5>Resume Builder</h5>
                <div className='project_img'>
                    <img src={p3} alt="img"></img>
                </div>
                <div className='project_info'>
                    ReactJs, CSS
                </div>
                <div className='project_btn'>
                    <a href='https://github.com/rupeshbgp01/Resume-Builder' className='btn'>Github Link</a>
                    <a href=' https://rupeshbgp01.github.io/PasswordGenerator/ 'className='btn btn-primary'>Live Demo
                    </a>
                </div>
            </div>

            <div className='project_box'>
            <h5>Discord Frontend Clone</h5>
                <div className='project_img'>
                    <img src={p4} alt="img"></img>
                </div>
                <div className='project_info'>
                    HTML, CSS, Animation
                </div>
                <div className='project_btn'>
                    <a href='https://github.com/rupeshbgp01/Discord_Clone' className='btn'>Github Link</a>
                    <a href=' https://rupeshbgp01.github.io/Discord_Clone/ 'className='btn btn-primary'>Live Demo
                    </a>
                </div>
            </div>



            <div className='project_box'>
            <h5>Institute Website</h5>
                <div className='project_img'>
                    <img src={p1} alt="img"></img>
                </div>
                <div className='project_info'>
                    HTML, CSS
                </div>
                <div className='project_btn'>
                    <a href='https://github.com/rupeshbgp01/Innovation_Classes' className='btn'>Github Link</a>
                    <a href=' https://rupeshbgp01.github.io/Innovation_Classes/' className='btn btn-primary'>Live Demo</a>
                </div>
            </div>


        </div>

    </section>
};

export default Portfolio;
