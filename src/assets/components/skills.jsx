export default function Skills(){

    const skills = [

        {id: 1,
            title: 'Python',
            classes : 'fa-brands fa-python skill',
        },
        
        {id: 2,
            title: 'JavaScript',
            classes : 'fa-brands fa-js skill',
        },
        
        {id: 3,
            title: 'React',
            classes : 'fa-brands fa-react skill',
        },
        
        {id: 4,
            title: 'Git',
            classes : 'fa-brands fa-git-alt skill',
        },
        
        {id: 5,
            title: 'Github',
            classes : 'fa-brands fa-github skill',
        },
        
        {id: 6,
            title: 'HTML',
            classes : 'fa-brands fa-html5 skill',
        },
        
        {id: 7,
            title: 'CSS',
            classes : 'fa-brands fa-css3-alt skill',
        },
        
        {id: 8,
            title: 'Bootstrap',
            classes : 'fa-brands fa-bootstrap skill',
        },
        
        {id: 9,
            title: 'Data Structures',
            classes : 'fa-brands fa-buffer skill',
        },
        
        {id: 10,
            title: 'Algorithms',
            classes : 'fa-solid fa-chart-simple skill',
        },
        
        {id: 11,
            title: 'GenAI',
            classes : 'fa-brands fa-bilibili skill',
        },
        
        {id: 12,
            title: 'Problem Solving',
            classes : 'fa-solid fa-lightbulb skill',
        },
        
        {id: 13,
            title: 'Google Workspace',
            classes : 'fa-solid fa-briefcase skill',
        },
        
        {id: 14,
            title: 'Communication',
            classes : 'fa-solid fa-phone skill',
        },
        
        {id: 15,
            title: 'Software Testing',
            classes : 'fa-brands fa-sistrix skill',
        },
        
        {id: 16,
            title: 'Debugging',
            classes : 'fa-solid fa-virus-slash skill',
        },
        
        {id: 17,
            title: 'Project Management',
            classes : 'fa-solid fa-list skill',
        },
        
        
    ];

    return(
        <>
        <div className="section-heading">
            <h1 id="skills">Skills</h1>
        </div>
        <div className="skills-container center">
            {skills.map((skill) => {
                return (    
                <div key={skill.id} className="tablet bottom-animation">
                    <i className={skill.classes}></i>
                    <p className="skill-text">{skill.title}</p>
                </div>
                )
            })}

        </div>
        
        </>
    )
}