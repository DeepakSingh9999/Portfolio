import projectLink1 from '../images/project-journal.png'
import projectLink3 from '../images/project-facts.png'
import projectLink2 from '../images/project-clone.png'
import projectLink4 from '../images/project-chef.png'
export default function Projects(){

    const projects = [
        {id: 1,
            title: 'My Travel Journal',
            image: `${projectLink1}`,
            description: 'This React application uses arrays to store and manage a list of data items, and props to pass this data to child components for display. It showcases how to use these React features for efficient rendering of multiple elements, making it easy to dynamically manage data and structure.',
            techStack: 'HTML, CSS, JSX, REACT',
            liveLink: 'https://react-travel-journal-two.vercel.app/',
            viewCode: 'https://github.com/DeepakSingh9999/React-Travel-Journal'
        },
        
        {id: 2,
            title: 'Google Frontend Clone',
            image: `${projectLink2}`,
            description: 'This project is a frontend-only clone of Google’s search interfaces. It replicates the design and functionality of Google Search, Google Image Search, Google Advanced Search.',
            techStack: 'HTML, CSS, JAVASCRIPT',
            liveLink: 'https://search-clone-drab.vercel.app/',
            viewCode: 'https://github.com/DeepakSingh9999/Search-Clone'
        },
        
        {id: 3,
            title: 'React Facts - A Static Website',
            image: `${projectLink3}`,
            description: `This is a simple, static website built with React.js that highlights some of the most fascinating and useful facts about React. Whether you're a beginner or an experienced developer, you'll find something new to learn about this powerful JavaScript library.`,
            techStack: 'HTML, CSS, JSX, REACT',
            liveLink: 'https://react-static-page-one.vercel.app/',
            viewCode: 'https://github.com/DeepakSingh9999/React-Static-Page'
        },
        
        {id: 4,
            title: 'Chef Claude (Upcoming)',
            image: `${projectLink4}`,
            description: 'This project sends a user provided set of ingredients to the Chef Claude API, which processes the input and responds with a creative recipe suggestion. which then is displayed on frontend.',
            techStack: 'HTML, CSS, JSX, REACT',
            liveLink: '',
            viewCode: 'https://github.com/DeepakSingh9999'
        },
    ];

    return(
        <>
        <div className="section-heading">
            <h1 id="projects">Projects</h1>
        </div>
        <div className="project-container center">

            {projects.map((project) => {
                return(
                    <div key={project.id} className={`project edges ${project.id % 2 === 0 ? "left-animation" : "right-animation"}`}>
                        <img src={project.image}  className="project-image" alt="IMG"></img>
                        <div className="text-area">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="tech-stack"><b>Tech-stack:</b>{project.techStack}</p>
                            <div className="project-buttons">
                            <button onClick={() => window.open(`${project.liveLink}`, "_blank")}>Live link</button>
                            <button onClick={() => window.open(`${project.viewCode}`, "_blank")}>View Code</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
        </>
    )
}
