import React from 'react'
import './Navbar.css'
import { useState, useEffect } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [pos, setPos] = useState("top")

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
               setPos("moved")
            } else {
               setPos("top")
            }
        })
    },[])

    const [click , setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };



    useEffect(() => {
        showButton();
      }, []);
    


    window.addEventListener('resize', showButton);


    

    return (

        <nav className={`navbar ${pos === 'moved' ? 'sticky' : '' }`} >
            
            <div className='max-width' >
                <div className='logo'>
                    <a href="#"><span>Wel</span>come.</a>
                </div>
                <ul className={click? 'menu active' : 'menu'}>
                   
                    <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                    <li><a href="assets/Oluwatimilehin_Ogunme_Resume_redacted.pdf" download>Resume/CV</a></li>
                    <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
                    <li><a href="#blog" onClick={closeMobileMenu}>Blog</a></li>
                    <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                </ul>
                <div className='menu-btn' onClick={handleClick}>
                    {click? <FaTimes /> : <FaBars />}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
