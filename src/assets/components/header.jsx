import { IconMenu2, IconX } from '@tabler/icons-react';

import {useState} from 'react';
import icon from '../images/flower.webp';

export default function Header(){
    const resumLink = "https://drive.google.com/uc?export=download&id=1jtDQURtXaKfPs5A7LUWQlzKzjG8rOLvE";
    //https://drive.google.com/file/d/1jtDQURtXaKfPs5A7LUWQlzKzjG8rOLvE/view?usp=sharing

    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="header-container">
            <img src={icon} alt="Logo" className="logo rotating-animation" loading="lazy" width="39" height="40"></img>
            
            <div className='top-right-corner'>
            <button onClick={() => window.open(resumLink, "_blank")} className="download-button" aria-label="Download Resume in a new tab">Resume ⤓</button>
        
            <nav className="navdiv" aria-label="Main Navigation">
                <button onClick={() => setIsOpen((!isOpen))} className="navOpenButton" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="navigation-overlay">
                    <IconMenu2 stroke={2} color="#ffffff" />
                </button>
                {isOpen && (
                    <div className="watermark  cover-right">
                        <div className="overlay cover-right" role="dialog" aria-modal="true" aria-label="Navigation Menu">
                            <button onClick={() => setIsOpen((!isOpen))} className="navlinks" aria-label="Close navigation menu">
                                <IconX />
                            </button>
                        
                            <a href="#about" onClick={() => setIsOpen((!isOpen))} className="navlinks">About</a>
                        
                            <button onClick={() => window.open(resumLink, "_blank")} className="navlinks" rel="noreferrer" aria-label="Download Resume in a new tab">Resume ⤓</button>
                        
                            <a href="#skills" onClick={() => setIsOpen((!isOpen))} className="navlinks">Skills</a>
                        
                            <a href="#projects" onClick={() => setIsOpen((!isOpen))} className="navlinks">Projects</a>
                        
                            <a href="#experience" onClick={() => setIsOpen((!isOpen))} className="navlinks">Experience</a>
                            <a href="#certificates" onClick={() => setIsOpen((!isOpen))} className="navlinks">Certificates</a>
                            <a href="#contact" onClick={() => setIsOpen((!isOpen))} className="navlinks">Contact</a>
                        </div>
                    </div>
                )}
            </nav>
            </div>
        </header>
    )
}
