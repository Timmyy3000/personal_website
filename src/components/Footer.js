import React from 'react'
import { FaCopyright } from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <span>Created by <span className='footer-name'>Oluwatimilehin Ogunme</span> | <FaCopyright/> 2021 All Rights Reserved</span>
        </footer>
    )
}

export default Footer
