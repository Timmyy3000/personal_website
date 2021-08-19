import React from 'react'
import './Hero.css'
import './AboutSection.css'
import ScrollAnimation from 'react-animate-on-scroll'



const AboutSection = () => {
    return (
        <section className='about' id='about'>
            <div className='max-width'>
           
                <h2 className='title'>
                    About Me
                </h2>
                
                <div className='about-content'>
                
                    <div className='column left'>
                   < ScrollAnimation animateIn='fadeIn'>
                        <img src='assets/images/profile_me.jpg' alt='portrait'/>
                        </ScrollAnimation>
                    </div>
                 
                    
                    <div className='column right'>
                    <ScrollAnimation animateIn='bounceInRight' >
                        <div className='text'>
                            My name is <span>Oluwatimilehin Ogunme</span>
                        </div>
                        <p>I am currrently enrolled in my third year as a student of Computer science at <a className='bu' href=''>Babcock University, Ilishan-Remo.</a> I graduated from Mercyland Internaional College, Ogun State with record-breaking results and 8 Distinctions in my O' Levels. Aside from my immense passion for programming, I possess a profound affinity and intrigue for solving real life problems through Software Development, Machine Learning and Artificial Intelligence. As a self-taught programmer, my prefered programming language is Python and I have built several personal projects in this particular language. I enjoy working with teams and people of different backgrounds. I will not pass on an opportunity to learn from others and possibly teach a few things in the process. Other than coding, I enjoy a tad of creativity. Hence, I actively design logos and posters commercially, as well as 3D modelling and animations in my spare time. I am an active public speaker and debater, who likes to share his views and opinions on concurrent topics through group dicourse and a personal blog named DotTxt.
                        </p>
                        <a className='btn' href="assets/Oluwatimilehin_Ogunme_Resume_redacted.pdf" download>Download CV</a>
                        </ScrollAnimation>
                    </div>
                   
                </div>
                
            </div>
        </section>
    )
}

export default AboutSection
