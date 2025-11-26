import {useState} from 'react';
import icon from '../images/flower.png'

export default function Header(){
    const resumLink = "https://drive.google.com/uc?export=download&id=11CWhVqZIobABKowpyTHiXNKzSqrIIzJD";

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="header-container">
            <img src={icon} alt="Logo" className="logo rotating-animation"></img>
            
            <div className='top-right-corner'>
            <button onClick={() => window.open(resumLink, "_blank")} className="download-button">Resume ⤓</button>
        
            <nav className="navdiv">
                <button onClick={() => setIsOpen((!isOpen))} className="navOpenButton"><i className="fa-solid fa-grip-lines"></i></button>
                {isOpen && (
                    <div className="watermark  cover-right">
                    <div className="overlay cover-right">
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><i className="fa-solid fa-xmark"></i></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#about">About</a></button>
                        <button onClick={() => window.open(resumLink, "_blank")} className="navlinks">Resume ⤓</button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#skills">Skills</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#projects">Projects</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#experience">Experience</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#certificates">Certificates</a></button>
                        <button onClick={() => setIsOpen((!isOpen))} className="navlinks"><a href="#contact">Contact</a></button>
                    </div>
                    </div>
                )}
            </nav>
            </div>
        </div>
    )
}