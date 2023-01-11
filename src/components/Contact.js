import'./Contact.css'

import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_90i1mmr', 'template_8r0575r', form.current, 'eBurU9y3M2jXlD6WH')
        .then((result) => {
            console.log(result.text); 
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <div className="contact_option">
                        <AiOutlineMail className='icon'/>
                        <h4>Email</h4>
                        <h5>rkchourasia2001@gmail.com</h5>
                        <a href='mailto:rkchourasia2001@gmail.com' target="_blank">Send a message</a>
                    </div>

                    <div className="contact_option">
                        <AiOutlineMessage className='icon'/>
                        <h4>Messanger</h4>
                        <h5>Rupesh Chourasia</h5>
                        <a href='https://m.me/rupesh.chourasia.18' target="_blank">Send a message</a>
                    </div>

                    <div className="contact_option">
                        <AiOutlineWhatsApp className='icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+91-9162840955</h5>
                        <a href='https://api.whatsapp.com/send?phone=+919162840955' target="_blank">Send a message</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required></input>
                    <input type="email" name="email" placeholder="Your Email" required></input>
                    <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
                    <buttton type="submit" value="Send" className="btn btn-primary">Send Message</buttton>
                </form>
            </div>
        </section>
    );
}

export default Contact;