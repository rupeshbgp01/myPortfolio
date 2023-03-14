import { CiFacebook } from "react-icons/ci"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import './Footer.css'

function Footer() {
    return (
        <footer>
            <a href="#home"><h2 className="footer__heading">Rupesh Kumar</h2></a>
            <div className="nav_link" >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skill">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div >

            <div className="footer_social">
                <a href="https://facebook.com"><CiFacebook/></a>
                <a href="https://instagram.com"><AiFillInstagram/></a>
                <a href="https://twitter.com"><AiFillTwitterCircle/></a>
            </div>
            <div className="copyright"><h5>Rupesh Kumar Portfolio. All right reserved.</h5></div>
        </footer >
    );
}

export default Footer;