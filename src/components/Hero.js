import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'
import ScrollAnimation from 'react-animate-on-scroll'



const Hero = () => {

    

    return (
        // Hero'ssection
        <>
       
        <section className='home' id='home'>
        <div className="video-container">
        <video src="assets/videos/video-1.mp4" autoPlay loop muted id="video-bg" >
        </video>
      </div>
            <div className='max-width'>
            
                <div className='home-content'>
               
                <ScrollAnimation animateIn='bounceInLeft' >


                    <div className='text-1'>Hi, You can call me </div>
                    <div className='text-2'>Timilehin</div>
                    <div className='text-3'>And I'm a<span> <Typed
                    strings={['Student', 'Pythoneer', 'Data Scientist', 'ML and AI Engineer', 'Web Developer', 'Graphics Designer', '3D Artist', 'Freelancer', 'Blogger', 'Firm Otaku', 'Mobile Developer']}
                    typeSpeed={100}
                    backspeed={80}
                    loop={true}
                /></span></div>
                    <a href='#contact' >Contact Me</a>
                    </ScrollAnimation>
                </div>
            
            </div>
        </section>

        </>
    )
}

export default Hero
