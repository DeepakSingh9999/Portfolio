import image from '../images/man.png'

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
        <div className="about-container">
            <div className="title-container">
                <h1 className="title">Hi! I'm </h1>
                <h1 className="sub-title">Deepak Singh</h1>
                <h2 className="sub-title">Frontend Developer</h2>
                <div className="links-container" aria-label="Social media and contact links">
                    <button className="link-button icon-color-1" onClick={() => handleClick(1)}
                        type="button" aria-label="Deepak Singh's LinkedIn profile (opens in a new tab)">
                        <i className="fa-brands fa-square-linkedin i-link" aria-hidden="true"></i>
                    </button>
                    <button className="link-button icon-color-2" onClick={() => handleClick(2)}
                        type="button" aria-label="Send an email to Deepak Singh">
                        <i className="fa-solid fa-envelope i-link" aria-hidden="true"></i>
                    </button>
                    <button className="link-button icon-color-3" onClick={() => handleClick(3)}
                        type="button" aria-label="Deepak Singh's GitHub profile (opens in a new tab)">
                        <i className="fa-brands fa-square-github i-link" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="image-container">
                <img src={image} alt="Image" loading="lazy"></img>
            </div>
        </div>
    )
}
