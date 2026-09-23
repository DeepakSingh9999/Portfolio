import { IconBrandLinkedin, IconMail, IconBrandGithub } from '@tabler/icons-react';
import image from '../images/man.webp'

export default function About(){
    function handleClick(key){
        if (key === 1){
            window.open("https://www.linkedin.com/in/deepaksingh91/", "_blank", "noopener,noreferrer");
        } else if (key === 2){
            window.open("mailto:Deepak108singh9@gmail.com", "_blank");
        } else if (key === 3){
            window.open("https://github.com/DeepakSingh9999", "_blank", "noopener,noreferrer");
        }
    }
    return (
        <main className="about-container">
            <header className="title-container">
                <h1 className="title">Hi! I'm<br/>Deepak Singh</h1>
                <h2 className="sub-title">Software Engineer</h2>
                <nav className="links-container" aria-label="Social media and contact links">
                    <button className="link-button icon-color-1" onClick={() => handleClick(1)}
                        type="button" aria-label="Visit Deepak Singh's LinkedIn profile">
                        <IconBrandLinkedin stroke={2} color="#ff8000" size={40}/>
                    </button>
                    <button className="link-button icon-color-2" onClick={() => handleClick(2)}
                        type="button" aria-label="Send an email to Deepak Singh">
                        <IconMail stroke={2} color="#00ff00" size={40}/>
                    </button>
                    <button className="link-button icon-color-3" onClick={() => handleClick(3)}
                        type="button" aria-label="Visti Deepak Singh's GitHub profile">
                        <IconBrandGithub stroke={2} color="#ffff00" size={40}/>
                    </button>
                </nav>
            </header>
            
            <div className="image-container">
                <img src={image} alt="Hero Image" fetchPriority="high"></img>
            </div>
        </main>
    )
}
