import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaEnvelope, FaGithub, FaKaggle, FaLinkedin, FaMapMarkerAlt, FaTwitter, FaUser } from 'react-icons/fa'
import { a } from 'react-router-dom'
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import './Contact.css'

const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hft2ny2', 'template_swju20l', e.target, 'user_FDUfxn0fXRCYLoZD0HODf')
          .then((result) => {
            swal({
                title: "Delivered",
                text: "I'll get back to you as soon as possible",
                icon: "success",
              });

          }, (error) => {
              console.log(error.text);
          });
        
          document.getElementById('contact-form').reset();
    }
    return (
        <section className='contact' id="contact">
            <div className='max-width'>
                <h2 className='title'>Contact</h2>
                <div className='contact-content'>
                    <div className='column left'>
                        <div className='text'>
                            Get In Touch 
                        </div>
                        <p>Feel free to contact me</p>
                        <div className='icons'>
                        <ScrollAnimation animateIn='bounceInLeft' >
                            <div className='row'>
                                <FaUser />
                                <div className='info'>
                                    <div className='head'>Name</div>
                                    <div className='sub-title'>Ogunme Oluwatimilehin</div>
                                </div>
                            </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={100} >
                            <div className='row'>
                                <FaMapMarkerAlt />
                                <div className='info'>
                                    <div className='head'>Location</div>
                                    <div className='sub-title'>Abeokuta, Ogun State, Nigeria</div>
                                </div>
                            </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={150} >
                            <div className='row'>
                                <FaEnvelope />
                                <div className='info'>
                                    <div className='head'>Email</div>
                                    <a href='https://ogunmetimilehin@gmail.com/'><div className='sub-title'>ogunmetimilehin@gmail.com</div></a>
                                </div>
                            </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={200} >
                            <div className='row'>
                                <FaLinkedin />
                                <div className='info'>
                                    <div className='head'>Linked In</div>
                                    <a href='https://www.linkedin.com/in/oluwatimilehin-ogunme-b0ba5b202'><div className='sub-title'>@oluwatimilehinogunme</div></a>
                                </div>
                            </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={250} >
                            <div className='row'>
                                <FaTwitter />
                                <div className='info'>
                                    <div className='head'>Twitter</div>
                                    <a href='https://twitter.com/simplytimilehin?s=08'><div className='sub-title'>@simplytimilehin</div></a>
                                </div>
                            </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={300} >
                            <div className='row'>
                                <FaGithub />
                                <div className='info'>
                                    <div className='head'>Github</div>
                                    <a href='https://github.com/Timmyy3000'><div className='sub-title'>@Timmyy3000</div></a>
                                </div>
                            </div>
                            </ScrollAnimation >
                            <ScrollAnimation animateIn='bounceInLeft' delay={350} >
                            <div className='row'>
                                <FaKaggle />
                                <div className='info'>
                                    <div className='head'>Kaggle</div>
                                    <a href='https://www.kaggle.com/timilehinogunme'><div className='sub-title'>@timilehinogunme</div></a>
                                </div>
                            </div>
                            </ScrollAnimation >
                        </div>
                    </div>
                    <div className='column right'>
                    <ScrollAnimation animateIn='flipInY'>
                        <div className='text'>Send a Message</div>
                        <form id='contact-form' onSubmit={sendEmail}>
                            <div className='fields'>
                                <div className='field name'>
                                    <input type='text' placeholder='Name' name='name' required></input>
                                </div>
                                <div className='field email'>
                                    <input type='email' placeholder='Email' name='email' required></input>
                                </div>
                            </div>
                             
                            <div className='field subject'>
                                <input type='text' placeholder='Subject' name='subject' required></input>
                            </div>
                            <div className='field textarea'>
                                <textarea cols='40'rows='15' placeholder='Message...' name='message' required></textarea>
                            </div>
                            <div className='button'>
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                        </ScrollAnimation>
                    </div>

                  
                </div>
            </div>
        </section>
    )
}

export default Contact
