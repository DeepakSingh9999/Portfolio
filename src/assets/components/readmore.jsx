import {useState} from 'react';

export default function ReadMore(){

    const [isExpanded, setIsExpanded] = useState(false);

    const text = `I’m Deepak Singh, a Junior Software Developer with hands on experience in JavaScript, C and Python, with currently learning Node.js. I’ve worked with React.js through internships and industry simulations. I love building responsive interfaces, fixing bugs, and delivering clean, reliable code.
I'm curious to learn new technologies while solving complex problems, and creating products that are simple and meaningful to use. Currently I'm doing my Masters in AI & ML, and also open to full time opportunities. Outside of tech, I enjoy digital art and jogging.`;
    const maxLength = 120;

    function toggleReadMore() {
        setIsExpanded(!isExpanded);
    }

    const displayText = isExpanded ? text : (text.substring(0, maxLength));

    return(
        <>
        <div className="section-heading">
            <h2 id="about">About me</h2>
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
