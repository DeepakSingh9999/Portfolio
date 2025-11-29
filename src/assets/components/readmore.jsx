import {useState} from 'react';

export default function ReadMore(){

    const [isExpanded, setIsExpanded] = useState(false);

    const text = `I’m Deepak Singh, an aspiring Frontend Developer with hands-on experience in Python, JavaScript and React. I’ve worked on real projects through internships and industry simulations, building responsive interfaces, fixing bugs, and delivering clean, reliable code.
I love learning new technologies, solving problems, and creating products that are simple and meaningful to use. Outside of tech, I enjoy digital art and jogging.`;
    const maxLength = 120;

    function toggleReadMore() {
        setIsExpanded(!isExpanded);
    }

    const displayText = isExpanded ? text : (text.substring(0, maxLength));

    return(
        <>
        <div className="section-heading">
            <h1 id="about">About me</h1>
        </div>
        <div className="readmore-container center">
            <p className="readmore-description">
                {displayText}

                {text.length > maxLength && (
                <span onClick={toggleReadMore} className="readmore-button">
                    {isExpanded ? ' read less' : ' ...read more'}
                </span>
            )}

            </p>
            
        </div>
        </>
    )
}
