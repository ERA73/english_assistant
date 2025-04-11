import '../styles/footer.css';
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';


export function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-data'>
                <div className='footer-description'>
                    <h5>Esteban Ramirez</h5>
                    <p>
                        Backend developer specializing in web development, creating software solutions to meet your business requirements.
                    </p>
                </div>
                <div className='footer-contact'>
                    <h5>Social</h5>
                    <div className='footer-links'>
                        <a href="https://www.linkedin.com/in/esteban-ramirez-0522bab8/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                        <a href="https://github.com/ERA73" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                        <a href="mailto:codedevest@outlook" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>© Copyright 2023. Made by <a href='https://codedevest.com'>Esteban Ramirez</a></p>
            </div>
        </div>
    );
}