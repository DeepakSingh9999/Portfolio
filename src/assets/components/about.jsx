import image from '../images/man.png'

export default function About(){
    function handleClick(key){
        if (key === 1){
            window.open("https://www.linkedin.com/in/deepaksingh91/", "_blank");
        } else if (key === 2){
            window.open("mailto:Deepak108singh9@gmail.com", "_blank");
        } else if (key === 3){
            window.open("https://github.com/DeepakSingh9999", "_blank");
        }
    }
    return (
        <div className="about-container">
            <div className="title-container">
                <h1 className="title">Hi! I'm </h1>
                <h1 className="sub-title">Deepak Singh</h1>
                <h2 className="sub-title">Frontend Developer</h2>
                <div className="links-container">
                    <button className="link-button icon-color-1" onClick={() => handleClick(1)}><i className="fa-brands fa-square-linkedin i-link"></i></button>
                    <button className="link-button icon-color-2" onClick={() => handleClick(2)}><i className="fa-solid fa-envelope i-link"></i></button>
                    <button className="link-button icon-color-3" onClick={() => handleClick(3)}><i className="fa-brands fa-square-github i-link"></i></button>
                </div>
            </div>
            <div className="image-container">
                <img src={image} alt="Image"></img>
            </div>
        </div>
    )
}