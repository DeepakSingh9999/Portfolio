import thumbnail1 from  "../certificates/thumbnail1.png"
import thumbnail2 from  "../certificates/thumbnail2.png"
import thumbnail3 from  "../certificates/thumbnail3.png"
import thumbnail4 from  "../certificates/thumbnail4.png"

export default function Certificates(){

    const items = [
        {id: 1, 
            title: 'McKinsey Forward Program, July 2025', 
            description: 'Completed a 10 week program covering adaptability, critical thinking, problem solving skills, communication and digital workplace skills.', 
            certificatelink: 'https://drive.google.com/uc?export=download&id=1Bfx9KnxNIzQiVOa0Lcdm0RpYxuaJLumi',
            thumbnail: `${thumbnail1}`
        },
        {id: 2, 
            title: 'Skyscanner Front-End Software Engineering Virtual Experience, Jul 2025',
            description: 'Completed a job simulation as a front-end engineer at Skyscanner, building a web application with React, developing a travel date picker using the Backpack React library, and customizing the app while running automated tests to ensure proper rendering.', 
            certificatelink: 'https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_Xnus9ZBvpP3dZwci2_1753001820524_completion_certificate.pdf',
            thumbnail: `${thumbnail2}`
        },
        {id: 3, 
            title: 'Datacom Software Development Job Simulation, Jul 2025',
            description: `Completed a simulation on Datacom's software development approach, reviewed a web application for future improvements, and identified and fixed bugs to enhance the application.`, 
            certificatelink: 'https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_Xnus9ZBvpP3dZwci2_1753086049913_completion_certificate.pdf',
            thumbnail: `${thumbnail3}`
        },
        {id: 4, 
            title: 'Accenture UK Developer and Technology Virtual Experience, April 2025', 
            description: 'Completed the Developer and Technology Job Simulation, gaining an end-to-end understanding of the Software Development Lifecycle, designed an algorithm with flow diagrams and debugged Python code by fixing syntax and logic errors.', 
            certificatelink: 'https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_Xnus9ZBvpP3dZwci2_1744189751228_completion_certificate.pdf',
            thumbnail: `${thumbnail4}`
        },
    ];

    return(
        <>
        <div className="section-heading">
            <h1 id="certificates">Certificates</h1>
        </div>
        <div className="certificate-container center">
            {items.map((item) => {
                return (
                    <div key={item.id} className="certificate edges opacity-animation">
                        <img src={item.thumbnail}  className="certificate-image" alt="IMG"></img>
                        <div className="text-area-certificate">
                            <h3 className="certificate-title">{item.title}</h3>
                            <p className="certificate-description">{item.description}</p>
                            <button onClick={() => window.open(`${item.certificatelink}`, "_blank")}>View Certificate</button>
                        </div>
                    </div>
                )
            })}
            
        </div>

        </>
    )
}
