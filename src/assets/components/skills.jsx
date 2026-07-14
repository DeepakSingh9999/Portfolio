export default function Skills(){

    const skills = [

        {id: 1,
            title: 'JavaScript',
            classes : 'fa-brands fa-js skill',
        },
              
        {id: 2,
            title: 'React.js',
            classes : 'fa-brands fa-react skill',
        },

        {id: 3,
            title: 'Node.js',
            classes : 'fa-brands fa-node-js skill',
        },

        {id: 4,
            title: 'SQL',
            classes : 'fa-solid fa-database skill',
        },

        {id: 5,
            title: 'Git',
            classes : 'fa-brands fa-git-alt skill',
        },
               
        {id: 6,
            title: 'Gitlab',
            classes : 'fa-brands fa-gitlab skill',
        },
        
        {id: 7,
            title: 'Python',
            classes : 'fa-brands fa-python skill',
        },
        
        {id: 8,
            title: 'HTML',
            classes : 'fa-brands fa-html5 skill',
        },
        
        {id: 9,
            title: 'CSS',
            classes : 'fa-brands fa-css3-alt skill',
        },
        
        {id: 10,
            title: 'Bootstrap',
            classes : 'fa-brands fa-bootstrap skill',
        },
        
        {id: 11,
            title: 'Data Structures',
            classes : 'fa-brands fa-buffer skill',
        },
        
        {id: 12,
            title: 'Algorithms',
            classes : 'fa-solid fa-chart-simple skill',
        },
        
        {id: 13,
            title: 'Software Testing',
            classes : 'fa-brands fa-sistrix skill',
        },
        
        {id: 14,
            title: 'Debugging',
            classes : 'fa-solid fa-virus-slash skill',
        },
        
        {id: 15,
            title: 'Problem Solving',
            classes : 'fa-solid fa-lightbulb skill',
        },
        
        {id: 16,
            title: 'GenAI',
            classes : 'fa-solid fa-robot skill',
        },      
        
        {id: 17,
            title: 'Google Workspace',
            classes : 'fa-brands fa-google skill',
        },
        
        {id: 18,
            title: 'Communication',
            classes : 'fa-solid fa-phone skill',
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
