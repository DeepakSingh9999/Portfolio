import {useState} from 'react';

export default function ReadMore(){

    const [isExpanded, setIsExpanded] = useState(false);

    const text = `Hi, I’m [Your Name], a passionate [Your Job/Profession/Field]. I’m always curious and driven by a desire to learn, grow, and create meaningful things. Whether it’s through coding, design, writing, or simply connecting with people, I strive to make an impact in everything I do. With a background in [your field or major], I’ve spent the last [X years] honing my skills in [specific area or industry]. I specialize in [key skills or technologies you work with], and I’m always looking for new ways to innovate and challenge myself. I’m fortunate to have worked on projects that have helped [mention the type of work or impact, e.g., businesses improve their processes, communities connect, etc.].`;
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
