import thumbnail1 from  "../certificates/thumbnail01.png"
import thumbnail2 from  "../certificates/thumbnail02.png"
import thumbnail3 from  "../certificates/thumbnail03.png"
import thumbnail4 from  "../certificates/thumbnail04.png"

export default function Certificates(){

    const items = [
        {id: 1, 
            title: 'Software Engineer Intern, May 2026', 
            description: 'Successfully passed the HackerRank Role Certification test, validating technical skills in Problem Solving, SQL, and REST API development through a standardized coding assessment.', 
            certificatelink: 'https://www.hackerrank.com/certificates/5ee714704686',
            thumbnail: `${thumbnail1}`
        },
        {id: 2, 
            title: 'Advanced React by Scrimba, April 2026', 
            description: 'Completed a comprehensive course on advanced React concepts, gaining hands-on experience with React Router (including nested routes and Outlet), Context API, protected routes, and performance optimization techniques such as lazy loading, Suspense, useMemo, useCallback and React.memo.', 
            certificatelink: 'https://scrimba.com/learn-react-c0e;cert24zAwPPowNUfV2kHFhk5fzfVD39HyHBRbL47S',
            thumbnail: `${thumbnail2}`
        },
        {id: 3, 
            title: 'Skyscanner Front-End Software Engineering Virtual Experience, Jul 2025',
            description: 'Completed a job simulation as a front-end engineer at Skyscanner, building a web application with React, developing a travel date picker using the Backpack React library, and customizing the app while running automated tests to ensure proper rendering.', 
            certificatelink: 'https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_Xnus9ZBvpP3dZwci2_1753001820524_completion_certificate.pdf',
            thumbnail: `${thumbnail3}`
        },
        {id: 4, 
            title: 'Datacom Software Development Job Simulation, Jul 2025',
            description: `Completed a simulation on Datacom's software development approach, reviewed a web application for future improvements, and identified and fixed bugs to enhance the application.`, 
            certificatelink: 'https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_Xnus9ZBvpP3dZwci2_1753086049913_completion_certificate.pdf',
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
